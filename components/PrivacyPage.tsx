
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        <p className="font-bold text-slate-900 italic">Last Updated: May 2025</p>
        
        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">1. Introduction</h2>
          <p>AutoArty ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website, autoarty.com.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">2. Information We Collect</h2>
          <p>We collect information you provide directly to us (such as your name and email when subscribing to our newsletter) and information collected automatically through cookies and similar technologies (such as your IP address, browser type, and browsing behavior).</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">3. Use of Information</h2>
          <p>We use the information we collect to maintain and improve our services, send you updates and promotional materials, and personalize your experience on our site. We also use data for advertising purposes via Google AdSense.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">4. Advertising and Affiliates</h2>
          <p>We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases. This process involves the use of cookies to track referrals.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@autoarty.com.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
