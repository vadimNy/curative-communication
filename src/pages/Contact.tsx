import { Mail, Clock, ShieldAlert, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: General Clinic Info & FAQ */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Connect with Us</h1>
            <p className="mt-4 text-slate-500 leading-relaxed text-sm sm:text-base">
              Ready to schedule an evaluation or have a question about services? Feel free to complete our intake form, and we will get back to you promptly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</span>
                <span className="block text-slate-700 font-semibold">664 Bard Avenue, Staten Island, NY 10310</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Contact</span>
                <a href="tel:9177743519" className="block text-slate-700 font-semibold hover:text-teal-600 transition-colors">(917) 774-3519</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Correspondence</span>
                <a href="mailto:info@curativecommunication.com" className="block text-slate-700 font-semibold hover:text-teal-600 transition-colors">info@curativecommunication.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Hours of Intake</span>
                <span className="block text-slate-700 font-semibold">Monday — Friday: 9 AM — 6 PM EST</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex space-x-3">
              <ShieldAlert className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-950">Do you accept insurance?</h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  We are an out-of-network provider. We generate highly detailed clinical superbills packed with diagnostic and treatment codes that you may submit to your health provider for direct reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Web3Forms Integrated Intake */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Inquiry</h2>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="00000000-0000-0000-0000-000000000000" />
            <input type="hidden" name="subject" value="New Client Intake Inquiry - Curative Communication" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                <input required type="text" name="first_name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                <input required type="text" name="last_name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
              <input type="tel" name="phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" placeholder="e.g., (555) 000-0000" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <input required type="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Leave Us A Message</label>
              <textarea required name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" />
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold hover:bg-teal-600 transition-all duration-300 shadow-md">
              Send Safe Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
