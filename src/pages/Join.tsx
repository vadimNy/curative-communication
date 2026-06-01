import { Briefcase, UserPlus, Sparkles } from 'lucide-react';

export default function Join() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Clinical Roles */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-teal-100">
              <Sparkles className="h-3 w-3" />
              <span>We are hiring</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Clinical Careers</h1>
            <p className="mt-4 text-slate-500 leading-relaxed text-sm">
              We look to work with licensed Speech-Language Pathologists (SLPs) and Clinical Fellows (CFYs) based or certified in New York State.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-teal-600" />
                <h4 className="font-bold text-slate-900">Remote Clinical SLP (Part-time / Full-time)</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Requires active NYS license and CCC-SLP certification. Deep focus on remote-delivery training and software-assisted evaluations.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <UserPlus className="h-5 w-5 text-teal-600" />
                <h4 className="font-bold text-slate-900">Clinical Fellowship Year (CFY) Mentorship</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Comprehensive telehealth mentorship pathways supervised by experienced clinicians. Full supervision hours tracking under ASHA criteria.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Application Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Career Inquiry Intake</h2>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="00000000-0000-0000-0000-000000000000" />
            <input type="hidden" name="subject" value="Career Inquiry Application - Curative Communication" />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Clinical License Status</label>
                <select name="license_status" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all">
                  <option value="ccc_slp">Licensed NYS CCC-SLP</option>
                  <option value="cfy">Clinical Fellow (CFY)</option>
                  <option value="student">Graduate SLP Student</option>
                  <option value="other">Other Therapist Certification</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">NYS Lic. Number (If active)</label>
                <input type="text" name="license_num" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" placeholder="e.g., 0948301" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <input required type="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resume / Profile Link</label>
              <input required type="url" name="resume_link" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" placeholder="e.g., Google Drive, LinkedIn, or Dropbox link to CV" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Brief Cover Statement</label>
              <textarea required name="cover_statement" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500 transition-all" placeholder="Tell us why you are passionate about high-tech telepractice mentorship..." />
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white rounded-xl py-4 font-bold hover:bg-teal-600 transition-all duration-300 shadow-md">
              Submit Application Info
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
