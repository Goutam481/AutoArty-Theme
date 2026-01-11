
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-8">Get In Touch</h1>
          <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
            Have a question about a product review? Interested in partnership opportunities? Or just want to talk shop? We're here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email Support</h4>
                <p className="text-slate-600">hello@autoarty.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Office Location</h4>
                <p className="text-slate-600">123 Gearhead Lane<br />Motor City, MI 48201</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
              <p className="text-slate-500">We'll get back to you within 24-48 business hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-slate-900 font-bold underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-100 rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-900 outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-slate-50 border border-slate-100 rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-900 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-900 outline-none">
                  <option>General Inquiry</option>
                  <option>Editorial Tip</option>
                  <option>Affiliate Partnership</option>
                  <option>Technical Issue</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea required rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-lg p-4 text-sm focus:ring-2 focus:ring-slate-900 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-lg font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-800 transition shadow-lg">
                Send Transmission
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
