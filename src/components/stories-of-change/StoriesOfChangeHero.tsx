import Image from "next/image";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";

export default function StoriesOfChangeHero() {
  const { hero } = storiesOfChangeContent;

  return (
    <>
      <section className="relative w-full h-[85vh] lg:h-screen flex flex-col overflow-hidden bg-[#0A0A0B]"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.bgImagePath}
            alt={hero.title}
            fill
            className="object-cover object-bottom animate-subtle-zoom opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-[#0A0A0B]/40 z-10" />
        </div>

        <div className="relative z-20 flex-1 flex flex-col justify-center py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-12">

            <div className="lg:col-span-12 flex justify-end items-start border-b border-white/20 pb-6 lg:pb-8 mb-6 lg:mb-12">
              <div className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms] text-left sm:text-right">
                <span className="text-white/60 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">Location</span>
                <span className="text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest">Sundarbans, India</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h1 className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms] text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-black text-white leading-[0.9] tracking-tighter [font-family:var(--font-heading)] uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                Floating<br/>
                <span className="text-primary">Digital</span> Clinic
              </h1>
            </div>

            <div className="lg:col-span-4 lg:self-end lg:pl-12">
              <div className="opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:400ms] relative">
                <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-1 bg-primary" />
                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-medium [font-family:var(--font-body)] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                  {hero.description}
                </p>
              </div>
            </div>


            <div className="lg:col-span-12 mt-8 lg:mt-20 flex items-center gap-6 lg:gap-8 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:600ms]">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === 1 ? "w-8 sm:w-12 bg-primary" : "w-3 sm:w-4 bg-white/20"}`} />
                ))}
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Documenting Change</span>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
