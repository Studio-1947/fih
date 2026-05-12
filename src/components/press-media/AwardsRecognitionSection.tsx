import Image from "next/image";

const awards = [
  {
    year: "2025",
    title: "Top 40 Global Changemakers",
    body: "Stanford Graduate School of Business & Stanford Doerr School of Sustainability, Stanford University",
    description:
      "FIH's work recognised among the top 40 global changemakers by two world-leading schools at Stanford University — one of the highest global honours in impact-driven innovation.",
    logo: "/Press&media/awards/stanford business.png",
    logoAlt: "Stanford University logo",
    featured: true,
  },
  {
    year: "2021",
    title: "COVID Severity Score Recognition",
    body: "Department of Science & Technology, Govt. of India",
    description:
      "The 'COVID Severity Score' software, developed by FIH through collaboration, has been recognised by DST, Govt. of India.",
    logo: "/Press&media/awards/department of science and tech.png",
    logoAlt: "Department of Science & Technology logo",
  },
  {
    year: "2021",
    title: "Millennium Alliance Round 6 Grant",
    body: "USAID Program",
    description:
      "Received grant from Millennium Alliance Round 6 (a USAID program) for a comprehensive livelihood and digital clinic programme at Sundarbans.",
    logo: "/Press&media/awards/FICCI.png",
    logoAlt: "FICCI logo",
  },
  {
    year: "2019 – 2020",
    title: "Shanti Devi Khaitan Award",
    body: "Ladies Study Group Charitable Trust",
    description:
      "Awarded for outstanding efforts in uplifting underprivileged sections of society.",
    logo: "/Press&media/awards/lsg-logo.png",
    logoAlt: "Ladies Study Group Charitable Trust logo",
  },
  {
    year: "2017",
    title: "IMPRINT Grant",
    body: "Dept. of Science & Technology, Govt. of India",
    description:
      "Received the 'IMPRINT' grant in collaboration with IIT Kharagpur, IIT Guwahati, IIT Hyderabad, and IIEST Shibpur from the Dept. of Science & Technology, Govt. of India.",
    logo: "/Press&media/awards/imprint-logo.png",
    logoAlt: "IMPRINT logo",
  },
  {
    year: "2016",
    title: "First Runner-Up",
    body: "Harvard US-India Initiative",
    description:
      "Recognised as First Runner-Up at the Harvard US-India Initiative 2016.",
    logo: "/Press&media/awards/huii-logo.png",
    logoAlt: "Harvard US-India Initiative logo",
  },
  {
    year: "2015",
    title: "Best Outreach Model on Healthcare",
    body: "Information Technology Research Academy, Govt. of India",
    description:
      "Awarded 'Best Outreach Model On Healthcare' by the Information Technology Research Academy (ITRA), Govt. of India.",
    logo: "/Press&media/awards/itra-logo.png",
    logoAlt: "ITRA logo",
  },
];

const featuredAward = awards[0];
const regularAwards = awards.slice(1);

export default function AwardsRecognitionSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="awards-recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight [font-family:var(--font-heading)] text-black">
            Awards &amp; Recognition
          </h2>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-black/55 [font-family:var(--font-body)]">
            Honours received from prestigious institutions, government bodies,
            and global organisations recognising FIH&apos;s impact in healthcare
            innovation.
          </p>
        </div>

        {/* Featured Award — Stanford 2025 */}
        <div className="group mb-6 lg:mb-8 flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-black/8 bg-gray-950 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          {/* Left — branding accent */}
          <div className="relative flex flex-col justify-between p-7 sm:p-10 sm:w-[55%]">
            {/* Subtle grid pattern */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,217,102,0.08) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10">
              {/* Year badge */}
              <span className="inline-block mb-6 rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-wider uppercase [font-family:var(--font-heading)]">
                {featuredAward.year}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold [font-family:var(--font-heading)] text-white leading-tight">
                {featuredAward.title}
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary [font-family:var(--font-heading)]">
                {featuredAward.body}
              </p>

              <div className="mt-5 w-10 h-[2px] bg-primary/40 rounded-full" />

              <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-white/60 [font-family:var(--font-body)]">
                {featuredAward.description}
              </p>
            </div>
          </div>

          {/* Right — logo panel */}
          <div className="flex items-center justify-center border-t border-white/10 sm:border-t-0 sm:border-l p-8 sm:p-12 sm:w-[45%] bg-white/[0.03]">
            <div className="relative w-full max-w-[220px] h-24 sm:h-32">
              <Image
                src={featuredAward.logo}
                alt={featuredAward.logoAlt}
                fill
                className="object-contain opacity-85 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Regular Awards Grid — 3×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularAwards.map((award, index) => (
            <div
              key={index}
              className="group flex flex-col bg-gray-50 rounded-2xl border border-black/8 p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Year badge */}
              <span className="inline-block self-start mb-5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold tracking-wider uppercase [font-family:var(--font-heading)]">
                {award.year}
              </span>

              {/* Logo */}
              <div className="relative w-full h-14 mb-5">
                <Image
                  src={award.logo}
                  alt={award.logoAlt}
                  fill
                  className="object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-primary/40 rounded-full mb-4 group-hover:bg-primary transition-colors" />

              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold [font-family:var(--font-heading)] text-black leading-snug">
                {award.title}
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary [font-family:var(--font-heading)]">
                {award.body}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/60 [font-family:var(--font-body)] flex-grow">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
