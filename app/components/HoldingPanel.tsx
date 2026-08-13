export default function HoldingPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-lg w-full mx-auto">
      {/* Header */}
      <div className="px-5 sm:px-8 py-6" style={{ background: 'linear-gradient(to right, #0a5558, #0d7377)' }}>
        <h2 className="text-white text-xl font-semibold leading-snug">
          Find a livestock insurance specialist
        </h2>
        <p className="text-teal-100 text-sm mt-2 leading-relaxed">
          Livestock cover is a specialist area with a small number of providers. Use the options below to find the right adviser or insurer for your situation.
        </p>
      </div>

      {/* Action cards */}
      <div className="px-5 sm:px-8 py-6 space-y-3">

        <a
          href="https://www.ibanz.co.nz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
            <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">Use a licensed broker</p>
            <p className="text-slate-500 text-xs mt-0.5">Search IBANZ, the NZ brokers association, to find an adviser who specialises in rural and livestock cover.</p>
          </div>
          <svg className="w-4 h-4 text-slate-300 group-hover:text-teal-500 flex-shrink-0 mt-1 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a
          href="https://fsp-register.companiesoffice.govt.nz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
            <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">Check the FSP register</p>
            <p className="text-slate-500 text-xs mt-0.5">Verify that any adviser you use holds a current Financial Service Provider registration before engaging them.</p>
          </div>
          <svg className="w-4 h-4 text-slate-300 group-hover:text-teal-500 flex-shrink-0 mt-1 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">Go direct to an insurer</p>
            <p className="text-slate-500 text-xs mt-0.5">Some livestock insurers deal directly with farmers. Visit their websites to enquire or get a quote from their team.</p>
          </div>
        </div>
      </div>

      {/* Specialist recruitment */}
      <div className="px-5 sm:px-8 py-5 bg-slate-50 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-700 mb-1">Are you a livestock insurance specialist?</p>
        <p className="text-xs text-slate-500 leading-relaxed">
          If you work in rural insurance and cover livestock, we would like to hear from you.{' '}
          <a href="mailto:hello@cover4you.co.nz" className="font-medium text-teal-600 hover:underline">hello@cover4you.co.nz</a>
        </p>
      </div>
    </div>
  );
}
