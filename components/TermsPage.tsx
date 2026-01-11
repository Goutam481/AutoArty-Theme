
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        <p className="font-bold text-slate-900 italic">Last Updated: May 2025</p>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using autoarty.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on AutoArty's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">3. Disclaimer</h2>
          <p>The materials on AutoArty's website are provided on an 'as is' basis. AutoArty makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <p>Automotive advice is provided for informational purposes only. Consult with a certified mechanic before performing any repairs.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-oswald uppercase text-slate-900 mb-4">4. Limitations</h2>
          <p>In no event shall AutoArty or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AutoArty's website.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
