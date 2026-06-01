import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <img src="logo.png" className="h-12 w-12 object-contain" alt="Curative Communication Logo" />
            <div>
              <span className="text-md font-bold tracking-tight text-slate-900">Curative <span className="text-teal-600">Communication</span> LLC</span>
              <span className="block text-[11px] text-slate-400 mt-0.5">Providing remote, evidence-based speech-language therapies across NY State.</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            <span>NYS Licensed, Nationally Accredited & Fully HIPAA Compliant</span>
          </div>
        </div>
        
        <div className="border-t border-slate-50 mt-8 pt-8 flex flex-col sm:flex-row justify-between text-xs text-slate-400 gap-4">
          <span>&copy; {new Date().getFullYear()} Curative Communication LLC. All rights reserved.</span>
          <span className="flex items-center">
            Designed with clinical excellence &nbsp; <Heart className="h-3 w-3 text-teal-600 fill-teal-600" /> &nbsp; in New York.
          </span>
        </div>
      </div>
    </footer>
  );
}
