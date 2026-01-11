
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ToolDetailPageProps {
  tool: {
    id: string;
    name: string;
    desc: string;
    icon: string;
    category: string;
  };
}

const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cleanText = (text: string) => {
    return text.replace(/###/g, '').trim();
  };

  const callWithRetry = async (fn: () => Promise<any>, retries = 3, baseDelay = 4000): Promise<any> => {
    try {
      return await fn();
    } catch (err: any) {
      const isRateLimit = err.message?.includes('429') || err.status === 429 || err.message?.includes('exhausted');
      if (retries > 0 && isRateLimit) {
        const jitter = Math.random() * 2000;
        const delay = baseDelay * (4 - retries) + jitter;
        await new Promise(resolve => setTimeout(resolve, delay));
        return callWithRetry(fn, retries - 1, baseDelay);
      }
      throw err;
    }
  };

  const runAnalysis = async () => {
    if (Object.keys(formData).length === 0) return;
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Automotive Systems Audit: ${tool.name}
        Parameters: ${JSON.stringify(formData)}
        
        Provide:
        1. CRITICAL READOUT: Immediate assessment.
        2. LOGIC ANALYSIS: Engineering breakdown.
        3. OPERATIONAL ADVICE: Next steps.
        Format in professional Markdown without subheadings.
      `;

      const response = await callWithRetry(() => ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are an industrial automotive diagnostic engine. Provide precise, brief, technical feedback."
        }
      }));

      setAnalysis(cleanText(response.text || "Payload Delivered."));
    } catch (err: any) {
      if (err.message?.includes('429') || err.message?.includes('exhausted')) {
        setError("System Overload: Gemini Quota Exhausted. Try again in 60s.");
      } else {
        setError("Diagnostic Uplink Error. Check network integrity.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white animate-fade-in pb-24 relative overflow-hidden">
      {/* HUD HEADER */}
      <section className="pt-24 pb-16 border-b border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center text-5xl shadow-2xl border border-white/10">
              {tool.icon}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black font-oswald uppercase tracking-tighter mb-4">{tool.name}</h1>
              <p className="text-slate-400 text-lg font-medium">{tool.desc}. 2025 Calibration Protocol Active.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CONTROL DECK */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl sticky top-32">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Parameter Console</h3>
              <div className="space-y-6">
                <div>
                   <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Input Value A</label>
                   <input 
                    type="text" 
                    onChange={(e) => handleInputChange('input_a', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-accent outline-none" 
                    placeholder="Enter Data..."
                   />
                </div>
                <div>
                   <label className="block text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Technical Context</label>
                   <select 
                    onChange={(e) => handleInputChange('context', e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-accent outline-none"
                   >
                     <option value="standard">Standard Operation</option>
                     <option value="high-performance">High Performance</option>
                     <option value="heavy-duty">Heavy Duty</option>
                   </select>
                </div>
              </div>
              
              <button 
                onClick={runAnalysis}
                disabled={loading}
                className="w-full mt-12 bg-brand-accent text-brand-dark py-6 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-[1.02] transition active:scale-95 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Generate Analysis"}
              </button>
              {error && <p className="mt-6 text-[9px] font-black text-brand-racing uppercase tracking-widest text-center animate-pulse">{error}</p>}
            </div>
          </div>

          {/* OUTPUT HUD */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 min-h-[500px] flex flex-col">
              {!analysis && !loading ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center opacity-30">
                   <div className="text-6xl mb-6">📊</div>
                   <h4 className="text-xl font-black uppercase tracking-widest">Waiting for Payload</h4>
                </div>
              ) : loading ? (
                <div className="flex-grow flex flex-col items-center justify-center">
                   <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin mb-6"></div>
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Cross-Referencing Database</p>
                </div>
              ) : (
                <div className="animate-fade-in prose prose-invert max-w-none prose-p:text-slate-300 prose-strong:text-white">
                   <h3 className="text-3xl font-black font-oswald uppercase text-brand-accent mb-8 border-b border-white/5 pb-4">Audit Result</h3>
                   <div className="whitespace-pre-wrap leading-relaxed text-lg">{analysis}</div>
                   <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-600">Verification: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()}</p>
                      <button className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white border border-white/10 px-4 py-2 rounded-lg">Export Result</button>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
