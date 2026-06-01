import { Check, ShieldCheck, ClipboardCheck, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-teal-500/10 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-teal-500/20">
          <Sparkles className="h-3 w-3" />
          <span>Curative Care</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Our Services</h1>
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          Curative Communication LLC provides a broad spectrum of multidisciplinary therapeutic and diagnostic services, backed by years of clinical expertise.
        </p>
      </div>

      {/* Services Main Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Section 1: Individualized Therapeutic Intervention */}
        <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div className="p-4 bg-teal-500/10 rounded-2xl w-fit mb-6 text-teal-600">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Individualized Therapeutic Intervention
            </h2>
            <div className="space-y-6 text-slate-600">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                <p className="leading-relaxed text-sm sm:text-base">
                  Our interventions are administered by providers licensed and certified in New York State.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                <p className="leading-relaxed text-sm sm:text-base">
                  Our services encompass a broad spectrum, including monolingual and bilingual speech and language therapy, physical therapy, occupational therapy, applied behavior analysis therapy, sensory integrative feeding/swallowing therapy, and training in the use of assistive technology.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-slate-50 text-xs font-mono tracking-wider uppercase text-slate-400">
            NYS Certified Intervention
          </div>
        </div>

        {/* Section 2: Clinically Competent Assessment */}
        <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <div className="p-4 bg-teal-500/10 rounded-2xl w-fit mb-6 text-teal-600">
              <ClipboardCheck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Clinically Competent Assessment
            </h2>
            <div className="space-y-6 text-slate-600">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                <p className="leading-relaxed text-sm sm:text-base">
                  Our evaluations are conducted by New York State licensed and certified providers with years of clinical expertise backing their diagnostic work.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                <p className="leading-relaxed text-sm sm:text-base">
                  Our services encompass a broad spectrum of diagnostic work, including monolingual and bilingual speech and language evaluation, as well as physical and occupational therapy evaluations.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-teal-600 shrink-0 mt-1" />
                <p className="leading-relaxed text-sm sm:text-base">
                  We also offer specialty evaluations such as Assistive Technology evaluations, sensory feeding/swallowing evaluations, Skills Assessments, Functional Behavior Assessments, and formulation of Behavior Intervention Plans.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-slate-50 text-xs font-mono tracking-wider uppercase text-slate-400">
            Expert Diagnostic Evaluations
          </div>
        </div>

      </div>

      {/* Trust Tagline Banner */}
      <section className="mt-20 p-8 sm:p-12 bg-slate-900 text-white rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-teal-500/20 via-slate-900 to-slate-900" />
        <div className="relative max-w-3xl">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-3">Multidisciplinary Quality Care</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Comprehensive Assessment & Rehabilitation</h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Our clinical team is fully equipped to analyze developmental, cognitive-linguistic, behavioral, motor, and speech barriers, tailoring individualized paths to rehabilitation under New York State guidelines.
          </p>
        </div>
      </section>
    </div>
  );
}
