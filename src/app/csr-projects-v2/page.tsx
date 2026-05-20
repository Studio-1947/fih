import { Metadata } from "next";
import Image from "next/image";
import CSRImpactFlow from "@/components/csr-projects/CSRImpactFlow";
import CSRGalleryStrip from "@/components/csr-projects/CSRGalleryStrip";
import CSRHeroV2 from "@/components/csr-projects/CSRHeroV2";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "CSR Projects V2 | Foundation for Innovations in Health",
  description:
    "FIH's CSR partnerships build a skilled health workforce and expand access to primary care, creating self-sustaining ecosystems of health and livelihood across rural India.",
};

// ── Present Projects ──────────────────────────────────────────────────────────
const presentProjects = [
  {
    logo: "/csr/present/mahanagar_gas.png",
    partner: "Mahanagar Gas Limited (MGL)",
    title: "MGL Hunar Project",
    description:
      "Awarded a CSR mandate to FIH on 12th December 2022 for training of 180 women as General Duty Assistants over a period of 3 years. This involves training women at Raigad district as 'Allied Health Professionals' and creating livelihood for them in the health sector.",
  },
  {
    logo: "/csr/present/indian_oil.png",
    partner: "FIH – SFS Academy, Bansberia",
    title: "State-of-Art Allied Health Education Centre",
    description:
      "Through this CSR award, FIH has established a state-of-the-art diagnostic laboratory, patient care learning centre, simulation centre and distance learning centre at SFS Academy, Bansberia for the allied health professional education program for rural and semi-urban youth.",
  },
  {
    logo: "/csr/present/aditya_birla.png",
    partner: "Essel Mining Industries Limited",
    title: "Dental Van Programme",
    description:
      "Essel Mining Industries Limited has handed a fully equipped custom designed dental van to FIH through their CSR program. Quality dental services are being provided to the rural population of West Bengal.",
  },
  {
    logo: "/csr/present/Ambuja_neotia.png",
    partner: "Ambuja Neotia Group",
    title: "Floating Clinic – Sundarbans",
    description:
      "Ambuja Neotia group has supported the 'CSR Project' (purpose-modified fully equipped launch) at Sundarbans to deliver accessible and affordable primary care to the last mile population of Sundarbans.",
  },
  {
    logo: "/csr/present/aditya_birla.png",
    partner:
      "Aditya Birla Jan Seva Trust (Jayashree Textiles, Grasim Industries Ltd.)",
    title: "Project TRANSFORM",
    description:
      "Technology innovations driven precancer and cancer Risk Assessment, Novel Screening among Females, Onset detection, earlier Remedy and Management. Consists of i) a data-driven approach, ii) innovation of frugal health-tech, iii) training local female community health workers and iv) task-shifting from doctors to health workers. Screening of Cancer: Cervix, Breast and Oral Cavity. Location: Rishra, West Bengal.",
  },
  {
    logo: "/csr/present/Balmer Lawrie.png",
    partner: "Balmer Lawrie & Co. Ltd.",
    title: "Project SEHAAT",
    description:
      "Social Endeavour for Health Education, Awareness & Accessible Health through Trained Community Health Workers — for health awareness creation and screening in specific areas (hypertension, diabetes, heart problem, anaemia etc.) at the community level in Silvassa, Dadra & Nagar Haveli.",
  },
  {
    logo: "/csr/present/Brahmaputra.png",
    partner: "Brahmaputra Cracker and Polymer Ltd. (BCPL)",
    title: "School for Skills – Dibrugarh",
    description:
      "Awarded a mandate to establish 'School for Skills: Allied Health Sciences, Dibrugarh' and train 90 unemployed youth across the district of Dibrugarh, Assam. The trained and certified General Duty Assistants will receive formal sector (health sector) employment opportunities.",
  },
  {
    logo: "/csr/present/Indraprastha gas.png",
    partner: "Indraprastha Gas Ltd. (IGL)",
    title: "School for Skills – Uttar Pradesh",
    description:
      "Awarded a mandate to train 180 rural and semi-urban youth as allied health professionals across the districts of Banda and Fatehpur in Uttar Pradesh through establishment of two 'School for Skills: Allied Health Sciences'. The trained and certified General Duty Assistants will receive in-wage employment at hospitals and allied health facilities.",
  },
];

// ── Past Projects ─────────────────────────────────────────────────────────────
const pastProjects = [
  {
    logo: "/csr/past/jsw.png",
    partner: "JSW Bengal Steel Ltd. / JSW Cement Ltd. / JSW Utkal Steel Ltd.",
    title: "JSW Healthcare CSR Programme",
    description:
      "Between 2013 and 2020, FIH participated in multitude of healthcare linked CSR programs in West Bengal (Midnapore) and Odisha (Paradip). Over 200 youth were trained and employed across various hospitals. Thousands of people in deep rural areas received primary care and public health through clinics.",
  },
  {
    logo: "/csr/past/coal_india.png",
    partner: "Western Coalfields Ltd. (WCL), Nagpur",
    title: "WCL Allied Health Training",
    description:
      "Through the CSR mandate of Western Coalfields Ltd., 56 disadvantaged youth were certified as General Duty Assistants. Over 80% of the certified students received employment opportunities in the health sector.",
  },
];

// ── Reusable Project Card ─────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof presentProjects)[0] }) {
  return (
    <div className="flex w-full h-full max-w-[24rem] flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Logo header */}
      <div className="flex min-h-32 items-center justify-center px-6 py-6 border-b border-black/6">
        <div className="relative h-24 w-full max-w-56 sm:h-28 sm:max-w-64 shrink-0">
          <Image
            src={project.logo}
            alt={project.partner}
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 208px, 240px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-6">
        {/* Partner name — full legibility, not truncated */}
        <p className="text-xs font-bold text-primary/90 [font-family:var(--font-heading)] leading-snug mb-3">
          {project.partner}
        </p>

        {/* Divider */}
        <div className="h-px w-8 bg-black/10 mb-3" />

        {/* Project title */}
        <h3 className="text-lg font-black [font-family:var(--font-heading)] text-black leading-tight tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-black/55 [font-family:var(--font-body)]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
import BlurText from "@/components/ui/BlurText";

export default function CSRProjectsPageV2() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Slanted Split Hero ────────────────────────────────────────────── */}
      <CSRHeroV2 />

      {/* ── Intro Text (Typography & Collage Layout) ────────────────────────── */}
      <section className="relative bg-[#FAFAFA] py-20 sm:py-32 overflow-hidden border-b border-black/5" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Paragraph 1 */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
              
              {/* Text Side */}
              <div className="w-full lg:w-[60%] lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#141416]/50 [font-family:var(--font-heading)]">Integrated Approach</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-[40px] text-[#141416] font-black [font-family:var(--font-heading)] leading-[1.15] tracking-tighter mb-6">
                  Our integrated approach focuses on two key outcomes: building a skilled health workforce and expanding access to primary care and public health.
                </h3>
                <p className="text-lg sm:text-xl text-[#141416]/60 font-medium leading-relaxed [font-family:var(--font-body)]">
                  Together, these create a self-sustaining ecosystem of health and livelihood.
                </p>
              </div>

              {/* Image Collage Side */}
              <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative h-[300px] sm:h-[350px]">
                {/* Back image */}
                <div className="absolute right-[40%] sm:right-[35%] lg:right-[45%] top-12 w-40 h-48 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-[6px] border-white -rotate-6 z-10 group">
                  <Image src="/csr/gallery/04.jpeg" alt="CSR" fill className="object-cover saturate-50 group-hover:saturate-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                {/* Front image */}
                <div className="absolute right-4 sm:right-12 lg:right-0 top-0 w-44 h-56 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white rotate-3 z-20 group hover:rotate-1 transition-transform duration-500">
                  <Image src="/csr/gallery/01.jpeg" alt="CSR" fill className="object-cover saturate-[0.75] group-hover:saturate-100 transition-all duration-700" />
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Paragraph 2 */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-12">
              
              {/* Text Side */}
              <div className="w-full lg:w-[60%] lg:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#141416]/50 [font-family:var(--font-heading)]">Measurable Impact</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-[40px] text-[#141416] font-black [font-family:var(--font-heading)] leading-[1.15] tracking-tighter mb-6">
                  By enabling rural youth to access stable employment and bringing affordable healthcare closer to communities, we help increase household incomes while significantly reducing long-term medical expenses.
                </h3>
                <p className="text-lg sm:text-xl text-[#141416]/60 font-medium leading-relaxed [font-family:var(--font-body)]">
                  The result is a meaningful reduction in multi-dimensional poverty.
                </p>
              </div>

              {/* Image Collage Side */}
              <div className="w-full lg:w-[40%] flex justify-center lg:justify-start relative h-[300px] sm:h-[350px]">
                {/* Back image */}
                <div className="absolute left-[40%] sm:left-[35%] lg:left-[45%] top-12 w-40 h-48 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-[6px] border-white rotate-6 z-10 group">
                  <Image src="/csr/gallery/03.jpeg" alt="CSR" fill className="object-cover saturate-50 group-hover:saturate-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                {/* Front image */}
                <div className="absolute left-4 sm:left-12 lg:left-0 top-0 w-44 h-56 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white -rotate-3 z-20 group hover:-rotate-1 transition-transform duration-500">
                  <Image src="/csr/gallery/08.jpeg" alt="CSR" fill className="object-cover saturate-[0.75] group-hover:saturate-100 transition-all duration-700" />
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Aligned with CSR Priorities (Full-Bleed Split Screen) ─────────────── */}
      <FadeIn>
        <section
          className="relative bg-[#141416] overflow-hidden flex flex-col lg:flex-row border-y border-black/10"
          style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          {/* Image Side (Left 50%) */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 relative overflow-hidden">
            <Image 
              src="/csr/gallery/07.jpeg" 
              alt="CSR Priorities" 
              fill 
              className="object-cover transition-transform duration-[10000ms] hover:scale-110 saturate-[0.85]" 
            />
            {/* Subtle gradient overlay to blend into the black text side */}
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#141416] to-transparent hidden lg:block z-10" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#141416] to-transparent lg:hidden z-10" />
          </div>

          {/* Text Side (Right 50%) */}
          <div className="w-full lg:w-1/2 flex items-center p-8 sm:p-16 lg:p-24 relative z-20">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
            
            <div className="max-w-xl relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 [font-family:var(--font-heading)]">
                  Strategic Alignment
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black [font-family:var(--font-heading)] text-white mb-8 leading-[1.05] tracking-tighter">
                Aligned with <span className="text-primary drop-shadow-[0_0_15px_rgba(255,184,0,0.3)]">core CSR</span> objectives.
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-white/80 [font-family:var(--font-body)] leading-relaxed font-medium">
                  This model closely aligns with the core CSR priorities of various
                  organisations, delivering measurable social impact, sustainable
                  livelihood generation, and improved community well-being.
                </p>
                
                <p className="text-lg sm:text-xl text-white/80 [font-family:var(--font-body)] leading-relaxed font-medium">
                  As a result, several leading companies have partnered with FIH to design
                  and implement scalable, high-value CSR initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Value Statement (Primary BG with hero text effect) ─────────── */}
      <FadeIn>
        <section
          className="relative py-16 sm:py-24 bg-primary overflow-hidden"
          style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <BlurText 
              text="CREATING LASTING VALUE AT THE INTERSECTION OF HEALTH, LIVELIHOODS, AND RESILIENCE."
              animateBy="words"
              direction="bottom"
              delay={80}
              className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight [font-family:var(--font-heading)] leading-[1.1] text-black justify-center text-center"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── CSR Strategy Impact Statement ──────────────────────────────── */}
      <FadeIn>
        <section className="relative py-14 sm:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-center gap-4">
              <div className="h-1 w-12 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/50 [font-family:var(--font-heading)]">
                CSR Strategy Impact
              </span>
              <div className="h-1 w-12 rounded-full bg-primary" />
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
              
              {/* Strategy 1: Education */}
              <div className="rounded-[2.5rem] border border-black/5 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                  <Image 
                    src="/csr/gallery/04.jpeg" 
                    alt="Educating rural youth" 
                    fill 
                    className="object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Strategy I
                  </div>
                </div>
                <div className="px-4 pb-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-black [font-family:var(--font-heading)] text-black mb-3 leading-tight tracking-tight">
                    Educating rural youth
                  </h3>
                  <p className="text-black/60 [font-family:var(--font-body)] leading-relaxed font-medium">
                    Build health human resources from rural communities and
                    generate stable employment for them.
                  </p>
                </div>
              </div>

              {/* Strategy 2: Healthcare */}
              <div className="rounded-[2.5rem] border border-black/5 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                  <Image 
                    src="/csr/gallery/06.jpeg" 
                    alt="Expanding access to care" 
                    fill 
                    className="object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    Strategy II
                  </div>
                </div>
                <div className="px-4 pb-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-black [font-family:var(--font-heading)] text-black mb-3 leading-tight tracking-tight">
                    Expanding access to care
                  </h3>
                  <p className="text-black/60 [font-family:var(--font-body)] leading-relaxed font-medium">
                    Improve primary care reach and health education so
                    families can avoid preventable medical expenses.
                  </p>
                </div>
              </div>

              {/* Box 3: Resulting Impact */}
              <div className="relative flex flex-col justify-between rounded-[2.5rem] border border-black/5 p-8 text-white shadow-sm overflow-hidden group">
                {/* Background Image */}
                <Image 
                  src="/csr/gallery/08.jpeg" 
                  alt="Impact" 
                  fill 
                  className="object-cover transition-transform duration-[15000ms] group-hover:scale-110 saturate-50" 
                />
                <div className="absolute inset-0 bg-black/80 transition-colors duration-700 group-hover:bg-black/70" />
                
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4 drop-shadow-md">
                    Resulting impact
                  </p>
                  <h3 className="text-3xl font-black [font-family:var(--font-heading)] leading-[1.1] mb-5 tracking-tighter">
                    Higher household income, lower health expenditure, and reduced
                    multi-dimensional poverty.
                  </h3>
                  <p className="text-white/70 [font-family:var(--font-body)] leading-relaxed font-medium">
                    The combined effect also improves health outcomes and overall
                    societal productivity.
                  </p>
                </div>

                <div className="relative z-10 mt-8 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">
                  <p className="text-sm leading-relaxed text-white/90 [font-family:var(--font-body)] font-medium">
                    This aligns closely with CSR priorities, which is why
                    companies continue to engage FIH for scalable and measurable
                    social impact.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── CSR Impact Flow ─────────────────────────────────────────────── */}
      <FadeIn>
        <section
          className="relative bg-black overflow-hidden"
          style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          <div className="w-full max-w-none px-0">
            <CSRImpactFlow />
          </div>
        </section>
      </FadeIn>

      {/* ── Present Projects ─────────────────────────────────────────────── */}
      <FadeIn>
        <section id="present-projects" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-black [font-family:var(--font-heading)] text-black">
                Present Projects
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto">
              {presentProjects.map((project, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Past Projects (light gray bg, full-bleed) ────────────────────── */}
      <FadeIn>
        <section
          className="relative py-16 sm:py-20 bg-gray-50"
          style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-black [font-family:var(--font-heading)] text-black">
                Past Projects
              </h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-black/20" />
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-7xl mx-auto">
              {pastProjects.map((project, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Sustainable Development Goals ───────────────────────────────── */}
      <FadeIn>
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10 sm:mb-14 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-black/20" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
                  Global Alignment
                </span>
                <div className="h-px w-10 bg-black/20" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black [font-family:var(--font-heading)] text-black mb-3">
                Sustainable Development Goals
              </h2>
              <div className="h-1 w-12 rounded-full bg-primary mx-auto mb-4" />
              <p className="text-base sm:text-lg text-black/55 [font-family:var(--font-body)] max-w-xl mx-auto">
                FIH impacts multiple SDGs
              </p>
            </div>

            {/* SDG Icons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  file: "E_SDG_Icons-01.jpg",
                  goal: "Goal 1",
                  label: "No Poverty",
                },
                {
                  file: "E_SDG_Icons-03.jpg",
                  goal: "Goal 3",
                  label: "Good Health & Well-Being",
                },
                {
                  file: "E_SDG_Icons-04.jpg",
                  goal: "Goal 4",
                  label: "Quality Education",
                },
                {
                  file: "E_SDG_Icons-05.jpg",
                  goal: "Goal 5",
                  label: "Gender Equality",
                },
                {
                  file: "E_SDG_Icons-08.jpg",
                  goal: "Goal 8",
                  label: "Decent Work & Economic Growth",
                },
              ].map(({ file, goal, label }) => (
                <div
                  key={file}
                  className="group flex flex-col items-center gap-3"
                >
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Image
                      src={`/csr/sdg/${file}`}
                      alt={`SDG ${goal} – ${label}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/35 [font-family:var(--font-heading)]">
                      {goal}
                    </p>
                    <p className="text-xs font-semibold text-black/70 [font-family:var(--font-heading)] max-w-32 leading-tight">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── CSR Gallery ─────────────────────────────────────────────── */}
      <FadeIn>
        <CSRGalleryStrip />
      </FadeIn>
    </main>
  );
}
