export default function HoldingPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-lg w-full mx-auto">
      {/* Header band */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 px-5 sm:px-8 py-6">
        <div className="flex items-center gap-3 mb-3">
          <svg className="w-6 h-6 text-emerald-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-emerald-200 text-sm font-medium tracking-wide uppercase">Coming Soon</span>
        </div>
        <h2 className="text-white text-2xl font-semibold leading-snug">
          Connecting you with specialist advisers
        </h2>
        <p className="text-emerald-100 text-sm mt-2 leading-relaxed">
          We&apos;re setting up access to brokers who genuinely specialise in this type of cover. Check back soon — or use the options below to arrange cover now.
        </p>
      </div>

      {/* Action cards */}
      <div className="px-5 sm:px-8 py-6 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Arrange cover now</p>

        <a
          href="https://www.ibanz.co.nz/find-a-broker/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
            <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">Find a licensed broker</p>
            <p className="text-slate-500 text-xs mt-0.5">Search IBANZ — the brokers association — to find an adviser who specialises in this cover.</p>
          </div>
          <svg className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 flex-shrink-0 mt-1 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>

        <a
          href="https://fsp-register.companiesoffice.govt.nz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
            <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">Verify any adviser&apos;s licence</p>
            <p className="text-slate-500 text-xs mt-0.5">Check the Financial Service Providers Register before engaging any adviser.</p>
          </div>
          <svg className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 flex-shrink-0 mt-1 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
            <p className="font-semibold text-slate-800 text-sm">Go direct to the insurer</p>
            <p className="text-slate-500 text-xs mt-0.5">Some insurers only deal directly with customers and cannot be reached through a broker. Visit their website directly.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 sm:px-8 py-4 bg-slate-50 border-t border-slate-100">
        <p className="text-xs text-slate-400 leading-relaxed">
          This site is operated by Cover4You. We are not an insurer and do not provide financial advice.
        </p>
      </div>
    </div>
  );
}
