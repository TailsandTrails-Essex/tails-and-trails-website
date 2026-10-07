'use client';

export default function Navigation({
  activeTab,
  setActiveTab,
  tabs,
}: {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: { id: string; label: string }[];
}) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-sage-700">Tails & Trails</h1>
            <p className="text-sm text-sage-600">Pet Sitting & Dog Walking - Essex</p>
          </div>
          <div className="text-right">
            <p className="text-sage-700 font-semibold">hello@essex-tailsandtrails.com</p>
            <p className="text-sm text-sage-600">+44 (0) 123 456 7890</p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-sage-700 text-white'
                  : 'bg-gray-100 text-navy hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
