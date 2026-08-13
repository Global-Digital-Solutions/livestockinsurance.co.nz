export default function HoldingPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mx-auto border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-3">Getting cover</h2>
      <p className="text-slate-600 mb-5">We&apos;re currently updating this site and aren&apos;t taking enquiries.</p>
      <p className="font-medium text-slate-700 mb-4">To arrange cover now:</p>
      <div className="space-y-4">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="font-semibold text-slate-800 mb-1">Go direct.</p>
          <p className="text-slate-600 text-sm">Some insurers deal only with customers directly and cannot be reached through a broker. Contact them via their own website.</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="font-semibold text-slate-800 mb-1">Use a licensed adviser.</p>
          <p className="text-slate-600 text-sm">Check anyone offering you advice on the{' '}
            <a href="https://fsp-register.companiesoffice.govt.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">Financial Service Providers Register</a>.
            {' '}Find a broker through{' '}
            <a href="https://www.ibanz.co.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">IBANZ</a>.
          </p>
        </div>
      </div>
      <p className="mt-5 text-xs text-slate-500 border-t border-slate-200 pt-4">
        This site is operated by Cover4You. We are not an insurer and do not provide financial advice.
      </p>
    </div>
  );
}
