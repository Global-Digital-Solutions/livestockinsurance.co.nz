export default function OfficialProviders() {
  const providers = [
    {
      name: 'FMG',
      description: 'Specialist rural insurer covering dairy cows, cattle, bulls, stags, sheep, poultry, alpacas, deer, goats, llamas and pigs. Specified or blanket herd cover.',
      url: 'https://www.fmg.co.nz/what-we-cover/fmg-policy-wordings/animals/livestock',
      directOnly: true,
    },
    {
      name: 'NZI (via Ag Guard)',
      description: 'Rural stock deterioration and rural material damage cover. Division of IAG NZ, available through licensed brokers.',
      url: 'https://www.nzi.co.nz/business-cover/rural-insurance',
      directOnly: false,
      brokerNote: 'Via broker only',
    },
    {
      name: 'Gallagher',
      description: 'Agriculture specialist broker offering livestock and bloodstock cover, farm assets, and permanent loss cover. Backed by international markets.',
      url: 'https://www.ajg.co.nz/industries/agriculture/',
      directOnly: false,
    },
    {
      name: 'Aon NZ',
      description: 'Global insurance broker with agribusiness and rural expertise. Access to specialist markets including Lloyd\'s for high-value or unusual livestock.',
      url: 'https://www.aon.co.nz',
      directOnly: false,
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Official provider websites</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The following insurers and brokers offer cover in this area. Links go directly to their official websites.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{p.name}</h3>

              {p.directOnly && (
                <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 mb-3">
                  Direct insurer — contact FMG directly, no broker access
                </p>
              )}
              {p.brokerNote && (
                <p className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded-md px-2 py-1 mb-3">
                  {p.brokerNote}
                </p>
              )}

              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer external"
                className="mt-auto inline-block text-center text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: '#0d7377' }}
              >
                Visit website ↗
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          Cover4You is not affiliated with, endorsed by, or acting as agent for any insurer listed. Some insurers deal with customers directly only.
        </p>
      </div>
    </section>
  );
}
