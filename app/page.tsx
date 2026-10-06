import { BrandMark } from '@/components/BrandMark';
import { AvailabilityCalendar } from '@/components/AvailabilityCalendar';
import { EnquiryForm } from '@/components/EnquiryForm';
import { BookingForm } from '@/components/BookingForm';

const services = [
  {
    title: 'Dog Walking',
    description:
      'Regular walks tailored to your dog’s energy, routine, and safety needs.',
    price: 'From £18',
    accent: 'sage',
  },
  {
    title: 'Pet Sitting',
    description:
      'Home visits and in-home care so your animal feels safe, settled, and loved.',
    price: 'From £30',
    accent: 'beige',
  },
  {
    title: 'Doggy Daycare',
    description:
      'A social, enriching daycare experience with structure, play, and rest.',
    price: 'From £35',
    accent: 'dark',
  },
  {
    title: 'All-Animal Care',
    description:
      'For cats, rabbits, birds, and other companion animals needing attentive care.',
    price: 'Tailored',
    accent: 'sage',
  },
];

const portfolio = [
  { title: 'Morning Walks', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Puppy Care', image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80' },
  { title: 'Home Visits', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Daycare Fun', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80' },
];

const reviews = [
  {
    name: 'Sarah M.',
    quote:
      'Tails & Trails made my dog feel like part of the family. The updates were thoughtful and the walks were always well paced.',
  },
  {
    name: 'James L.',
    quote:
      'Reliable, kind and genuinely passionate about animals. Our cat settled instantly with the pet sitting visits.',
  },
  {
    name: 'Aisha R.',
    quote:
      'The daycare service has been fantastic for our energetic rescue dog. We’ve seen such a difference in his confidence.',
  },
];

const socials = [
  { platform: 'Instagram', handle: '@tailsandtrails.essex', accent: 'sage' },
  { platform: 'Facebook', handle: 'Tails & Trails Essex', accent: 'beige' },
];

export default function Home() {
  return (
    <main className="bg-[#f4efe8] text-ink">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-sage-700/20 bg-[#f9f5ef] px-5 py-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-sage-700/10 p-2">
              <BrandMark compact />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-ink">Tails &amp; Trails</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-sage-700">Essex</p>
            </div>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-ink/80 md:flex">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#reviews">Reviews</a>
            <a href="#booking">Book</a>
          </div>
          <a href="#booking" className="rounded-full bg-sage-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-sage-800">
            Book a Visit
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 flex justify-center lg:justify-start">
              <BrandMark />
            </div>
            <div className="space-y-5 text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-sage-700">Pet Sitting &amp; Dog Walking</p>
              <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Trusted care for every tail and trail.
              </h1>
              <p className="mx-auto max-w-xl text-lg text-ink/75 lg:mx-0">
                Friendly, professional support for all animals in Essex — from daily walks and pet sitting to enrichment-focused daycare.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a href="#booking" className="rounded-full bg-sage-700 px-6 py-3 font-bold text-white shadow-soft transition hover:bg-sage-800">
                Book Now
              </a>
              <a href="#enquiry" className="rounded-full border border-sage-700 bg-transparent px-6 py-3 font-bold text-sage-700 transition hover:bg-sage-700 hover:text-white">
                Enquire
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-ink/65">
              <span>✔ Worry-free care</span>
              <span>✔ All-animal expertise</span>
              <span>✔ Essex-based</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-sage-700/20 bg-[#f9f6f0] p-6 shadow-soft">
            <div className="rounded-[28px] bg-gradient-to-br from-sage-100 via-transparent to-beige-200 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-700">Available</p>
                  <p className="mt-3 text-3xl font-black text-ink">Mon-Sat</p>
                  <p className="text-sm text-ink/70">Flexible bookings</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-700">Coverage</p>
                  <p className="mt-3 text-3xl font-black text-ink">Essex</p>
                  <p className="text-sm text-ink/70">Local area service</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-sage-700">Best for</p>
                  <p className="mt-3 text-xl font-black text-ink">Dogs, cats, rabbits, birds &amp; more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sage-700">Services</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink">Tailored care for every animal.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className={`rounded-[28px] border border-ink/10 bg-${service.accent === 'dark' ? 'ink text-white' : 'white'} p-6 shadow-soft`}>
              <div className={`mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${service.accent === 'dark' ? 'bg-white/10 text-white' : 'bg-sage-100 text-sage-700'}`}>
                {service.title}
              </div>
              <p className={`text-lg font-semibold ${service.accent === 'dark' ? 'text-white' : 'text-ink'}`}>
                {service.description}
              </p>
              <div className={`mt-8 flex items-center justify-between border-t pt-4 text-sm font-bold ${service.accent === 'dark' ? 'border-white/20 text-beige-200' : 'border-ink/10 text-sage-700'}`}>
                <span>{service.price}</span>
                <a href="#booking" className="underline-offset-4 hover:underline">Book now</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#f9f5ef] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sage-700">Portfolio</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink">A glimpse into the adventures.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolio.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft">
                <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="p-5">
                  <h3 className="text-xl font-black text-ink">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sage-700">Reviews</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink">Clients trust us with their animals.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-[28px] border border-ink/10 bg-white p-7 shadow-soft">
              <div className="mb-5 text-xl text-beige-600">★★★★★</div>
              <p className="text-lg text-ink/80">“{review.quote}”</p>
              <footer className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-sage-700">{review.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f5ee] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-sage-700">Social</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink">Follow along for smiles, updates and adventures.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {socials.map((social) => (
              <div key={social.platform} className={`rounded-[28px] border border-ink/10 bg-${social.accent === 'sage' ? 'sage-100' : 'beige-100'} p-8 shadow-soft`}>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage-700">{social.platform}</p>
                <p className="mt-4 text-3xl font-black text-ink">{social.handle}</p>
                <a href="#" className="mt-6 inline-block font-bold text-sage-700 underline-offset-4 hover:underline">
                  View page
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-sage-700">Availability</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink">Book your care.</h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-ink/10 bg-white p-5 shadow-soft">
            <AvailabilityCalendar />
          </div>

          <div className="grid gap-8">
            <div id="enquiry" className="rounded-[28px] border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="mb-4 text-2xl font-black text-ink">Enquiry Form</h3>
              <EnquiryForm />
            </div>

            <div className="rounded-[28px] border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="mb-4 text-2xl font-black text-ink">Booking Details</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-[#f7f2eb]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-ink/70 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-ink">Tails &amp; Trails</p>
            <p>Essex-based care for pets and companion animals.</p>
          </div>
          <div className="space-y-1">
            <p>hello@essex-tailsandtrails.com</p>
            <p>+44 (0) 0000 000000</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
