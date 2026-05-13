import { Metadata } from "next";
import Image from "next/image";
import CSRImpactFlow from "@/components/csr-projects/CSRImpactFlow";
import CSRGalleryStrip from "@/components/csr-projects/CSRGalleryStrip";
import CSRHero from "@/components/csr-projects/CSRHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "CSR Projects | Foundation for Innovations in Health",
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
      <div className="flex flex-1 flex-col px-6 py-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary [font-family:var(--font-heading)] mb-1">
          {project.partner}
        </p>
        <h3
          className="text-xl sm:text-lg font-bold [font-family:var(--font-heading)] text-black leading-tight mb-3"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {project.title}
        </h3>
        <p className="mx-auto max-w-[20rem] text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
import BlurText from "@/components/ui/BlurText";

export default function CSRProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero / Intro ─────────────────────────────────────────────────── */}
      <CSRHero />

      {/* ── Aligned with CSR Priorities (full-bleed primary) ─────────────── */}
      <FadeIn>
        <section
          className="relative py-16 sm:py-20 bg-white overflow-hidden"
          style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
        >
          {/* Decorative large quote mark */}
          <div className="pointer-events-none absolute top-0 right-0 text-[18rem] font-black text-black/5 leading-none translate-x-1/4 -translate-y-1/4 select-none">
            "
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black [font-family:var(--font-heading)] text-black mb-6">
              Aligned with CSR Priorities
            </h2>
            <p className="text-base sm:text-lg text-black/75 [font-family:var(--font-body)] leading-relaxed mb-6">
              This model closely aligns with the core CSR objectives of various
              organisations, delivering measurable social impact, sustainable
              livelihood generation, and improved community well-being. As a
              result, several leading companies have partnered with FIH to design
              and implement scalable, high-value CSR initiatives.
            </p>
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
        <section className="relative py-14 sm:py-18 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-10 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
                CSR Strategy Impact
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
              <div className="rounded-4xl border border-black/8 bg-linear-to-br from-white to-black/2 p-6 sm:p-8 shadow-sm">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black [font-family:var(--font-heading)]">
                  Two-pronged strategy
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 rounded-2xl border border-black/8 bg-white p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-black [font-family:var(--font-heading)]">
                      I
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black [font-family:var(--font-heading)] text-black mb-2">
                        Educating rural youth
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-black/65 [font-family:var(--font-body)]">
                        Build health human resources from rural communities and
                        generate stable employment for them.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-black/8 bg-white p-4 sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-white [font-family:var(--font-heading)]">
                      II
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black [font-family:var(--font-heading)] text-black mb-2">
                        Expanding access to care
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-black/65 [font-family:var(--font-body)]">
                        Improve primary care reach and health education so
                        families can avoid preventable expenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-4xl border border-black/8 bg-black p-6 sm:p-8 text-white shadow-sm">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55 [font-family:var(--font-heading)] mb-3">
                    Resulting impact
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black [font-family:var(--font-heading)] leading-tight mb-4">
                    Higher household income, lower health expenditure, and reduced
                    multi-dimensional poverty.
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white/70 [font-family:var(--font-body)]">
                    The combined effect also improves health outcomes and overall
                    societal productivity.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <p className="text-sm sm:text-base leading-relaxed text-white/85 [font-family:var(--font-body)]">
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
          className="relative py-6 sm:py-10 lg:py-0 bg-black overflow-hidden"
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
