
import React from 'react';
import Logo from './Logo';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-fade-in">
      <div className="text-center mb-16">
        <Logo size="lg" className="justify-center mb-8" />
        <h1 className="text-5xl font-black font-oswald uppercase tracking-tight text-slate-900 mb-6">About AutoArty</h1>
        <p className="text-xl text-slate-600 font-medium leading-relaxed">
          Setting the standard for automotive intelligence and consumer advocacy.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-oswald uppercase text-slate-900 mb-4 border-b-2 border-slate-100 pb-2">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            At AutoArty, we believe that car ownership should be empowering, not overwhelming. Our mission is to provide every driver with the data, tools, and honest reviews they need to navigate the complex automotive landscape with confidence.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            From the latest EV technologies to timeless maintenance hacks, we bridge the gap between technical expertise and everyday practicality.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold font-oswald uppercase text-slate-900 mb-3">Expert Testing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don't just read spec sheets. Our team puts products through hundreds of miles of real-world use and rigorous lab testing to ensure they earn the "AutoArty Approved" badge.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold font-oswald uppercase text-slate-900 mb-3">Unbiased Reviews</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our editorial integrity is our most valuable asset. While we participate in affiliate programs, our reviews remain independent and focused solely on what is best for the consumer.
            </p>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-3xl mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-oswald uppercase mb-4">The Driving Authority</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Founded in 2024, AutoArty has quickly grown into a leading voice in the automotive niche. We serve millions of readers globally who trust us to help them save money, stay safe, and enjoy the drive.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
