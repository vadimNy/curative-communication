export default function Join() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      {/* Professional Application Form */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Career Inquiry Intake</h2>

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
                  <option value="speech_therapy">Speech Therapy</option>
                  <option value="occupational_therapy">Occupational Therapy</option>
                  <option value="physical_therapy">Physical Therapy</option>
                  <option value="aba">ABA</option>
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
  );
}
