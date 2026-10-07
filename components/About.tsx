export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-navy mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494842494f3ba55f96ad7264e2b66183d32c8867?auto=format&fit=crop&w=500&q=80"
              alt="About Tails & Trails"
              className="rounded-2xl shadow-soft w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-navy/80">
              Hi! I'm the founder of Tails & Trails, and I've dedicated my life to providing exceptional care for pets across Essex.
            </p>

            <p className="text-lg text-navy/80">
              With years of experience in animal care, I understand that every pet is unique. Whether your dog needs a energetic walk, your cat needs a gentle visit while you're away, or your exotic pet needs specialist attention, I'm here to help.
            </p>

            <p className="text-lg text-navy/80">
              My approach is simple: treat every animal like family. I take time to understand each pet's personality, routine, and special needs to ensure they're always happy, healthy, and well-cared-for.
            </p>

            <div className="bg-rose-50 rounded-xl p-6 mt-8">
              <h4 className="font-bold text-sage-700 mb-4">Why Choose Tails & Trails?</h4>
              <ul className="space-y-3 text-navy/70">
                <li>✓ Fully insured and certified in pet care</li>
                <li>✓ Personalized care plans for each pet</li>
                <li>✓ Regular photo/video updates</li>
                <li>✓ Experience with all animal types</li>
                <li>✓ Flexible scheduling to suit your needs</li>
                <li>✓ Local to Essex with reliable service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
