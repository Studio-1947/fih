import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Clock } from "lucide-react";
import CSRGalleryStrip from "@/components/csr-projects/CSRGalleryStrip";

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
    partner: "Aditya Birla Jan Seva Trust (Jayashree Textiles, Grasim Industries Ltd.)",
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
function ProjectCard({
  project,
  status,
}: {
  project: (typeof presentProjects)[0];
  status: "present" | "past";
}) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-black/8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Logo header */}
      <div className="flex items-center justify-between gap-4 px-6 pt-6 pb-4 border-b border-black/6">
        <div className="relative h-16 w-40 sm:h-20 sm:w-48 shrink-0">
          <Image
            src={project.logo}
            alt={project.partner}
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 160px, 192px"
          />
        </div>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider [font-family:var(--font-heading)] ${
            status === "present"
              ? "bg-primary text-black"
              : "bg-black/8 text-black/50"
          }`}
        >
          {status === "present" ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <Clock className="h-3 w-3" />
          )}
          {status === "present" ? "Active" : "Completed"}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary [font-family:var(--font-heading)] mb-1">
          {project.partner}
        </p>
        <h3 className="text-lg font-bold [font-family:var(--font-heading)] text-black mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CSRProjectsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero / Intro ─────────────────────────────────────────────────── */}
      <section className="pt-16 pb-0 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
              Corporate Social Responsibility
            </span>
          </div>

          {/* Heading + intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black [font-family:var(--font-heading)] text-black leading-[1.05] mb-6">
                Creating<br />Sustainable<br />
                <span className="text-primary">Change</span>
              </h1>
              <p className="text-lg sm:text-xl text-black/65 [font-family:var(--font-body)] leading-relaxed mb-6">
                Our integrated approach focuses on two key outcomes: building a skilled health workforce and expanding
                access to primary care and public health. Together, these create a self-sustaining ecosystem of health
                and livelihood.
              </p>
              <p className="text-base text-black/55 [font-family:var(--font-body)] leading-relaxed">
                By enabling rural youth to access stable employment and bringing affordable healthcare closer to
                communities, we help increase household incomes while significantly reducing long-term medical expenses.
                The result is a meaningful reduction in multi-dimensional poverty, alongside stronger, healthier, and
                more productive communities.
              </p>
            </div>

            {/* CSR Projects illustration */}
            <div className="flex items-center justify-center lg:justify-end">
              <Image
                src="/csr/csr-projects.svg"
                alt="CSR Projects – Foundation for Innovations in Health"
                width={700}
                height={500}
                className="w-full max-w-xl lg:max-w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Aligned with CSR Priorities (full-bleed primary) ─────────────── */}
      <section
        className="relative mt-16 py-16 sm:py-20 bg-primary overflow-hidden"
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
            This model closely aligns with the core CSR objectives of various organisations, delivering measurable
            social impact, sustainable livelihood generation, and improved community well-being. As a result, several
            leading companies have partnered with FIH to design and implement scalable, high-value CSR initiatives.
          </p>
          <p className="text-base text-black/65 [font-family:var(--font-body)] leading-relaxed mb-8">
            The collective impact of the two-pronged strategy — i) Educating health human resources from among rural
            youth and generating stable employment for them, and ii) Enhancing access to primary care and health
            education — results in an increase in rural household income and long-term reduction of health expenditure,
            resulting in reduction of multi-dimensional poverty, apart from improving health and societal productivity.
            This resonates well with the CSR objectives of companies, many of whom have come forward to engage FIH to
            design and implement their CSR engagements.
          </p>
          <p className="text-sm font-bold italic text-black/60 [font-family:var(--font-body)]">
            Creating lasting value at the intersection of health, livelihoods, and resilience.
          </p>
        </div>
      </section>

      {/* ── Present Projects ─────────────────────────────────────────────── */}
      <section id="present-projects" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
                Ongoing Engagements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black [font-family:var(--font-heading)] text-black">
              Present Projects
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {presentProjects.map((project, i) => (
              <ProjectCard key={i} project={project} status="present" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Projects (light gray bg, full-bleed) ────────────────────── */}
      <section
        className="relative py-16 sm:py-20 bg-gray-50"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-black/40" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
                Completed Engagements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black [font-family:var(--font-heading)] text-black">
              Past Projects
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-black/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl">
            {pastProjects.map((project, i) => (
              <ProjectCard key={i} project={project} status="past" />
            ))}
          </div>
        </div>
      </section>
      {/* ── Sustainable Development Goals ───────────────────────────────── */}
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
              { file: "E_SDG_Icons-01.jpg", goal: "Goal 1", label: "No Poverty" },
              { file: "E_SDG_Icons-03.jpg", goal: "Goal 3", label: "Good Health & Well-Being" },
              { file: "E_SDG_Icons-04.jpg", goal: "Goal 4", label: "Quality Education" },
              { file: "E_SDG_Icons-05.jpg", goal: "Goal 5", label: "Gender Equality" },
              { file: "E_SDG_Icons-08.jpg", goal: "Goal 8", label: "Decent Work & Economic Growth" },
            ].map(({ file, goal, label }) => (
              <div key={file} className="group flex flex-col items-center gap-3">
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
                  <p className="text-xs font-semibold text-black/70 [font-family:var(--font-heading)] max-w-[8rem] leading-tight">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CSR Gallery ─────────────────────────────────────────────── */}
      <CSRGalleryStrip />

    </main>
  );
}
