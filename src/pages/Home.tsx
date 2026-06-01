import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Video, Award, Landmark } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* High-Tech Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-4xl mx-auto animate-fadeIn">
          
          {/* Hero Logo Graphic - relatively referenced and enlarged */}
          <div className="flex justify-center -mt-6 -mb-10 sm:-mb-16 overflow-hidden">
            <img 
              src="logo.png" 
              className="h-[28rem] w-[28rem] sm:h-[36rem] sm:w-[36rem] object-contain scale-125 sm:scale-135 hover:scale-140 transition-transform duration-300" 
              alt="Curative Communication Logo" 
            />
          </div>

          {/* NY License & DOE Approved Vendor Tag */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 text-teal-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-teal-500/20">
              <ShieldCheck className="h-4 w-4" />
              <span>Fully Licensed & Based in NY State</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-sky-500/20">
              <Landmark className="h-4 w-4" />
              <span>A NYC Department of Education Approved Vendor</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight relative z-10">
            Expert Care, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">Wherever You Are</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed relative z-10">
            Our teletherapy services are evidence-based and clinically validated.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all duration-300 shadow-md shadow-teal-500/5 text-center"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all duration-300 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Remote Advantage Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">The Telepractice Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Video className="h-6 w-6 text-teal-600" />,
              title: "HIPAA-Compliant Systems",
              desc: "Secure, stable, high-definition digital clinic designed for interactive whiteboard play and seamless document share."
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-teal-600" />,
              title: "Interactive Engagement",
              desc: "Dynamic pediatric gamification and structured adult materials keep sessions highly focused and productive."
            },
            {
              icon: <Award className="h-6 w-6 text-teal-600" />,
              title: "State-Licensed, Nationally Certified Clinicians",
              desc: "Our clinicians are licensed in New York and nationally certified, ensuring the highest standards of care."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-teal-500/20">
              <div className="p-3 bg-teal-50 rounded-xl w-fit mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Standards & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100/50 rounded-3xl mb-20 border border-slate-200/50 animate-fadeIn">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-3xl rotate-3 scale-102 opacity-10" />
              <div className="relative bg-teal-600/5 border border-teal-500/10 p-6 sm:p-8 rounded-3xl w-72 h-80 sm:w-80 sm:h-96 flex flex-col justify-center items-center text-center">
                <div>
                  <Landmark className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <span className="block text-xl sm:text-2xl font-bold text-slate-900 leading-tight">NYC Department of Education Approved</span>
                  <span className="block text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">Authorized by the New York City Department of Education to provide services for eligible students and families.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Vision...</h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              At Curative Communication, our vision extends beyond traditional therapy. We strive to create a nurturing environment where individuals receive comprehensive support tailored to their unique needs. Furthermore, we're dedicated to unlocking the full potential of every child, particularly those with neurological differences. We at Curative Communication envision a future where every school-aged child, regardless of their neurological profile, excels both academically and socially.
            </p>
            <div className="mt-8 space-y-4 border-t border-slate-200/60 pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm font-medium">Approved Vendor for the New York City Department of Education (NYC DOE)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm font-medium">Multidisciplinary speech, occupational, physical, and behavioral therapies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
