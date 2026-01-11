
import React from 'react';

const DisclosurePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in text-center">
      <div className="bg-amber-50 border border-amber-100 p-4 rounded-full inline-block mb-8">
        <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      </div>
      <h1 className="text-4xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-8">Affiliate Disclosure</h1>
      
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed text-left">
        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm mb-12">
          <p className="text-lg font-bold text-slate-900 mb-4">
            AutoArty.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>
          <p>
            This means that when you click on certain links on our site and make a purchase, we may receive a small commission at no extra cost to you. This helps support our editorial team and allows us to continue providing high-quality, free content for the automotive community.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">Why we use affiliate links</h2>
          <p>Running a high-quality automotive resource like AutoArty requires significant investment in testing equipment, technical writers, and website maintenance. Affiliate commissions are a primary way we fund our independent research and journalism.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">Our editorial promise</h2>
          <p>We only recommend products that we genuinely believe in and that have performed well in our tests. Our reviews are based on technical specifications, user feedback, and real-world durability. The presence of an affiliate link does not influence our rating or verdict on a product.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">Google AdSense</h2>
          <p>In addition to affiliate links, we also display advertisements through Google AdSense. These ads are clearly marked as "Advertisements" or "Sponsored Content." We do not have direct control over the specific ads shown to you by Google.</p>
        </section>
      </div>
    </div>
  );
};

export default DisclosurePage;
