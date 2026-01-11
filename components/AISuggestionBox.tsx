
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface AISuggestionBoxProps {
  context: string;
  type: 'product-insight' | 'blog-ideas';
  className?: string;
}

const AISuggestionBox: React.FC<AISuggestionBoxProps> = ({ context, type, className = '' }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [quotaHit, setQuotaHit] = useState(false);

  const cleanText = (text: string) => {
    return text.replace(/###/g, '').replace(/```json/g, '').replace(/```/g, '').trim();
  };

  const callWithRetry = async (fn: () => Promise<any>, retries = 4, baseDelay = 3000): Promise<any> => {
    try {
      const res = await fn();
      return res;
    } catch (err: any) {
      const isRateLimit = err.message?.includes('429') || err.status === 429 || err.message?.includes('exhausted');
      if (retries > 0 && isRateLimit) {
        setQuotaHit(true);
        const jitter = Math.random() * 1000;
        const delay = baseDelay * Math.pow(2, 4 - retries) + jitter;
        await new Promise(resolve => setTimeout(resolve, delay));
        return callWithRetry(fn, retries - 1, baseDelay);
      }
      throw err;
    }
  };

  const generateAIContent = useCallback(async () => {
    if (!context || loading || result) return;
    setLoading(true);
    setError(null);
    setQuotaHit(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = "You are a world-class automotive SEO analyst. Provide technical, professional insights. Avoid fluff.";
      
      if (type === 'blog-ideas') {
        const prompt = `Return a JSON array of 3 specific technical blog titles for "${context}". Schema: [{title: string, hook: string}]`;
        const response = await callWithRetry(() => ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  hook: { type: Type.STRING }
                },
                required: ["title", "hook"]
              }
            }
          }
        }));
        const text = response.text;
        if (text) setResult(JSON.parse(cleanText(text)));
      } else {
        const prompt = `Short professional technical insight for gear related to "${context}". Max 2 sentences.`;
        const response = await callWithRetry(() => ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: { systemInstruction }
        }));
        setResult(cleanText(response.text || "No insight available."));
      }
    } catch (err: any) {
      setError(err.message?.includes('429') ? "API Quota Reached." : "Sync Interrupted.");
    } finally {
      setLoading(false);
    }
  }, [context, type, loading, result]);

  useEffect(() => {
    const timeout = setTimeout(generateAIContent, Math.random() * 2000); 
    return () => clearTimeout(timeout);
  }, [generateAIContent]);

  const handleRetry = () => {
    setResult(null);
    setError(null);
    generateAIContent();
  };

  if (type === 'blog-ideas') {
    return (
      <div className={`bg-slate-50 p-8 rounded-[2rem] border border-slate-200 relative overflow-hidden ${className}`}>
         <div className="flex items-center justify-between mb-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Editorial Logic</h4>
            {quotaHit && <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest">Limited</span>}
         </div>
         {loading && !result ? (
           <div className="space-y-6">
              {[1,2,3].map(i => <div key={i} className="h-4 bg-slate-200 rounded animate-pulse"></div>)}
           </div>
         ) : error ? (
           <div className="text-center py-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{error}</p>
              <button onClick={handleRetry} className="text-[9px] font-black text-slate-900 border-b border-slate-300 uppercase tracking-widest">Retry Scan</button>
           </div>
         ) : (
           <ul className="space-y-6 animate-fade-in">
              {result?.map((item: any, idx: number) => (
                <li key={idx} className="flex gap-4">
                   <span className="text-slate-900 font-black text-[10px]">0{idx+1}</span>
                   <div>
                      <h5 className="font-bold text-slate-900 text-sm leading-snug mb-1">{item.title}</h5>
                      <p className="text-slate-500 text-xs">{item.hook}</p>
                   </div>
                </li>
              ))}
           </ul>
         )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 border border-white/5 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
           <span className={`w-1.5 h-1.5 rounded-full ${quotaHit ? 'bg-amber-500 animate-pulse' : 'bg-brand-accent'}`}></span>
           <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">Diagnostic Insight</h4>
        </div>
        {loading && <span className="text-[8px] font-bold text-slate-600 animate-pulse uppercase tracking-widest">Scanning...</span>}
      </div>
      {loading && !result ? (
        <div className="space-y-3">
          <div className="h-3 w-full bg-white/5 rounded animate-pulse"></div>
          <div className="h-3 w-4/5 bg-white/5 rounded animate-pulse"></div>
        </div>
      ) : error ? (
        <div className="py-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{error}</p>
          <button onClick={handleRetry} className="text-[9px] font-black text-brand-accent uppercase tracking-widest border-b border-brand-accent/20">Manual Sync</button>
        </div>
      ) : (
        <p className="text-slate-300 text-sm leading-relaxed italic animate-fade-in">"{result}"</p>
      )}
    </div>
  );
};

export default AISuggestionBox;
