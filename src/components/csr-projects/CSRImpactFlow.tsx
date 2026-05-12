import {
  ArrowDown,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  IndianRupee,
  ShieldAlert,
  Stethoscope,
  TreePine,
} from "lucide-react";

type OrbProps = {
  title: string;
  Icon: typeof GraduationCap;
  tone: string;
};

function Orb({ title, Icon, tone }: OrbProps) {
  return (
    <div
      className={`flex h-56 w-56 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full border shadow-sm ${tone}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
        <Icon className="h-7 w-7 text-black" />
      </div>
      <span className="mt-4 max-w-36 px-3 text-center text-[15px] font-bold leading-tight text-black drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] [font-family:var(--font-heading)]">
        {title}
      </span>
    </div>
  );
}

function MergedPair({ first, second }: { first: OrbProps; second: OrbProps }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col items-center lg:flex-row lg:items-center">
        <div className="relative z-10">
          <Orb {...first} />
        </div>
        <div className="relative -mt-12 sm:-mt-14 lg:mt-0 lg:-ml-10 sm:lg:-ml-14">
          <Orb {...second} />
        </div>
      </div>
    </div>
  );
}

function Connector({ symbol = "arrow" }: { symbol?: "arrow" | "equals" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-0 lg:flex-row lg:py-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm lg:hidden">
        {symbol === "equals" ? (
          <span className="text-xl font-black leading-none text-black">=</span>
        ) : (
          <ArrowDown className="h-5 w-5 text-black" />
        )}
      </div>
      <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm lg:flex">
        {symbol === "equals" ? (
          <span className="text-xl font-black leading-none text-black">=</span>
        ) : (
          <ArrowRight className="h-5 w-5 text-black" />
        )}
      </div>
    </div>
  );
}

function OutcomeOrb({ title, Icon, tone }: OrbProps) {
  return (
    <div
      className={`flex h-56 w-56 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full border shadow-sm ${tone}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
        <Icon className="h-7 w-7 text-black" />
      </div>
      <span className="mt-4 max-w-40 px-3 text-center text-[15px] font-bold leading-tight text-black drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] [font-family:var(--font-heading)]">
        {title}
      </span>
    </div>
  );
}

export default function CSRImpactFlow() {
  return (
    <div className="relative overflow-hidden bg-black p-5 text-white sm:p-8 lg:px-12 lg:py-10 xl:px-16">
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-10 lg:gap-14 xl:gap-16">
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-center lg:gap-5 xl:gap-6">
          <MergedPair
            first={{
              title: "Education",
              Icon: GraduationCap,
              tone: "border-[#f6efba] bg-[#fff7de] text-black",
            }}
            second={{
              title: "Health",
              Icon: HeartPulse,
              tone: "border-[#efe3a0] bg-[#faefc1] text-black",
            }}
          />

          <Connector symbol="equals" />

          <MergedPair
            first={{
              title: "Income",
              Icon: IndianRupee,
              tone: "border-[#e2c87f] bg-[#f6e8b4] text-black",
            }}
            second={{
              title: "Disease burden",
              Icon: Stethoscope,
              tone: "border-[#dcc067] bg-[#f1dc99] text-black",
            }}
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-center lg:gap-5 xl:gap-6">
          <Connector />

          <OutcomeOrb
            title="Reduction in multidimensional poverty"
            Icon={ShieldAlert}
            tone="border-[#cfb04d] bg-[#e9d37f] text-black"
          />

          <Connector />

          <OutcomeOrb
            title="Rural resilience"
            Icon={TreePine}
            tone="border-primary bg-primary text-black"
          />
        </div>

      </div>
    </div>
  );
}
