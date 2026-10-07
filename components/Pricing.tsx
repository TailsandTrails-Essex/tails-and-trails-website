export default function Pricing() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-navy mb-16">Pricing & Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dog Walking */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-sage-700 mb-6">Dog Walking</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-bold text-navy">1 × Dog</p>
                <p className="text-sm text-navy/60 mb-2">30 minute walk</p>
                <p className="text-2xl font-bold text-rose-600">£10</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-navy/60 mb-2">1 Hour walk</p>
                <p className="text-2xl font-bold text-rose-600">£15</p>
              </div>
            </div>
            <div className="border-t pt-8 space-y-4">
              <div>
                <p className="font-bold text-navy">2+ Dogs</p>
                <p className="text-sm text-navy/60 mb-2">30 minute walk</p>
                <p className="text-2xl font-bold text-rose-600">£15</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-navy/60 mb-2">1 Hour walk</p>
                <p className="text-2xl font-bold text-rose-600">£20</p>
              </div>
            </div>
          </div>

          {/* Pet Sitting */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-sage-700 mb-6">Pet Sitting</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-bold text-navy">Standard Visits</p>
                <p className="text-sm text-navy/60 mb-2">1 × visit a day</p>
                <p className="text-2xl font-bold text-rose-600">£10</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-navy/60 mb-2">2 × visits a day</p>
                <p className="text-2xl font-bold text-rose-600">£15</p>
              </div>
            </div>
            <div className="border-t pt-8 space-y-4">
              <div>
                <p className="font-bold text-navy">Extended Visits</p>
                <p className="text-sm text-navy/60 mb-2">1 Hour +</p>
                <p className="text-2xl font-bold text-rose-600">£20</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-navy/60 mb-2">Full Day</p>
                <p className="text-2xl font-bold text-rose-600">£25</p>
              </div>
            </div>
          </div>

          {/* Exotic Pets */}
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-sage-700 mb-6">Exotic Pets</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-navy/60 mb-2">Reptiles</p>
                <p className="text-xl font-bold text-rose-600">+£10</p>
              </div>
              <div>
                <p className="text-sm text-navy/60 mb-2">Amphibians</p>
                <p className="text-xl font-bold text-rose-600">+£10</p>
              </div>
              <div>
                <p className="text-sm text-navy/60 mb-2">Birds</p>
                <p className="text-xl font-bold text-rose-600">+£10</p>
              </div>
              <div>
                <p className="text-sm text-navy/60 mb-2">Small Mammals</p>
                <p className="text-xl font-bold text-rose-600">+£10</p>
              </div>
              <div>
                <p className="text-sm text-navy/60 mb-2">Fish</p>
                <p className="text-xl font-bold text-rose-600">+£5</p>
              </div>
            </div>
            <div className="border-t pt-8">
              <p className="text-sm font-bold text-navy mb-3">Additional Services</p>
              <ul className="text-sm text-navy/70 space-y-2">
                <li>Nail Trim: +£5</li>
                <li>Medication Admin: +£10</li>
                <li>Bath: +£10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
