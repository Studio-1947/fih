import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const awards = [
  {
    year: "2025",
    title: "Top 40 Global Changemakers",
    body: "Stanford Graduate School of Business & Stanford Doerr School of Sustainability, Stanford University",
    description:
      "FIH's work recognised among the top 40 global changemakers by two world-leading schools at Stanford University — one of the highest global honours in impact-driven innovation.",
    logo: "/press-media/awards/stanford business.png",
    logoAlt: "Stanford University logo",
    featured: true,
  },
  {
    year: "2021",
    title: "COVID Severity Score Recognition",
    body: "Department of Science & Technology, Govt. of India",
    description:
      "The 'COVID Severity Score' software, developed by FIH through collaboration, has been recognised by DST, Govt. of India.",
    logo: "/press-media/awards/department of science and tech.png",
    logoAlt: "Department of Science & Technology logo",
  },
  {
    year: "2021",
    title: "Millennium Alliance Round 6 Grant",
    body: "USAID Program",
    description:
      "Received grant from Millennium Alliance Round 6 (a USAID program) for a comprehensive livelihood and digital clinic programme at Sundarbans.",
    logo: "/press-media/awards/FICCI.png",
    logoAlt: "FICCI logo",
  },
  {
    year: "2019 – 2020",
    title: "Shanti Devi Khaitan Award",
    body: "Ladies Study Group Charitable Trust",
    description:
      "Awarded for outstanding efforts in uplifting underprivileged sections of society.",
    logo: "/press-media/awards/lsg-logo.png",
    logoAlt: "Ladies Study Group Charitable Trust logo",
  },
  {
    year: "2017",
    title: "IMPRINT Grant",
    body: "Dept. of Science & Technology, Govt. of India",
    description:
      "Received the 'IMPRINT' grant in collaboration with IIT Kharagpur, IIT Guwahati, IIT Hyderabad, and IIEST Shibpur from the Dept. of Science & Technology, Govt. of India.",
    logo: "/press-media/awards/imprint-logo.png",
    logoAlt: "IMPRINT logo",
  },
  {
    year: "2016",
    title: "First Runner-Up",
    body: "Harvard US-India Initiative",
    description:
      "Recognised as First Runner-Up at the Harvard US-India Initiative 2016.",
    logo: "/press-media/awards/huii-logo.png",
    logoAlt: "Harvard US-India Initiative logo",
  },
  {
    year: "2015",
    title: "Best Outreach Model on Healthcare",
    body: "Information Technology Research Academy, Govt. of India",
    description:
      "Awarded 'Best Outreach Model On Healthcare' by the Information Technology Research Academy (ITRA), Govt. of India.",
    logo: "/press-media/awards/itra-logo.png",
    logoAlt: "ITRA logo",
  },
];

const featuredAward = awards[0];
const regularAwards = awards.slice(1);

export function AwardsHero() {
  return (
    <section
      className="relative -mt-24 min-h-[60vh] sm:h-[80vh] lg:h-[90vh] py-20 sm:py-0 flex flex-col items-center justify-center bg-white overflow-hidden"
      id="awards-hero"
    >
      {/* Subtle Grid of Gallery Images in Background */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-[0.12] filter grayscale pointer-events-none select-none">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-01.jpg" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-02.jpeg" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-03.png" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-04.jpg" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-05.png" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-06.png" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-11.jpg" alt="" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image src="/press-media/gallery/photos/photo-gallery-13.jpg" alt="" fill className="object-cover" sizes="25vw" />
        </div>
      </div>

      {/* Premium Blending Overlays */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.2px] pointer-events-none" />
      {/* White radial glow in the center to completely mask the collage behind the text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_15%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:w-[85%] md:w-[80%] mx-auto text-center z-10">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs [font-family:var(--font-heading)]">
          Recognitions
        </span>
        <h2 className="mt-4 text-3xl min-[360px]:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight [font-family:var(--font-heading)] text-black leading-tight">
          Awards & Recognition
        </h2>
        <div className="mt-6 h-1 w-20 bg-primary rounded-full mx-auto" />
        <p className="mt-6 text-sm min-[360px]:text-base sm:text-xl lg:text-2xl leading-relaxed text-black/80 [font-family:var(--font-body)] max-w-3xl mx-auto">
          Celebrating the honours received from prestigious institutions and
          global organisations that recognise FIH&apos;s transformative impact
          in healthcare innovation.
        </p>
      </div>
    </section>
  );
}

export function FeaturedRecognition() {
  return (
    <section className="py-10 sm:py-16 bg-gray-50" id="featured-recognition">
      <div className="w-full px-4 sm:w-[85%] md:w-[80%] mx-auto">
        <div className="group rounded-3xl border border-black/5 bg-white shadow-2xl shadow-black/5 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-6 sm:p-10 lg:p-12 lg:w-[60%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="rounded-full bg-primary/10 text-primary px-4 py-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase [font-family:var(--font-heading)]">
                  {featuredAward.year}
                </span>
                <span className="h-px w-8 bg-black/10" />
              </div>
              <h3 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-bold [font-family:var(--font-heading)] text-black leading-tight">
                {featuredAward.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary [font-family:var(--font-heading)]">
                {featuredAward.body}
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-black/70 [font-family:var(--font-body)]">
                {featuredAward.description}
              </p>
            </div>
            <div className="lg:w-[40%] bg-gray-50/50 flex items-center justify-center p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-black/5 relative">
              <div className="relative w-full max-w-[200px] sm:max-w-[240px] h-32 sm:h-40">
                <Image
                  src={featuredAward.logo}
                  alt={featuredAward.logoAlt}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RegularAwardsSection() {
  return (
    <section className="py-10 sm:py-16 bg-gray-50" id="regular-awards">
      <div className="w-full px-4 sm:w-[85%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularAwards.map((award, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group h-full flex flex-col items-center text-center bg-white rounded-2xl border border-black/5 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <span className="inline-block mb-4 sm:mb-5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                  {award.year}
                </span>
                <div className="relative w-full h-20 sm:h-24 mb-5 sm:mb-6">
                  <Image
                    src={award.logo}
                    alt={award.logoAlt}
                    fill
                    className="object-contain object-center filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="w-10 h-[2px] bg-primary/20 rounded-full mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                  {award.title}
                </h3>
                <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase text-primary">
                  {award.body}
                </p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-black/60 flex-grow leading-relaxed">
                  {award.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
