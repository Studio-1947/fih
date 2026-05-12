import Image from "next/image";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const { testimonials } = storiesOfChangeContent;

  return (
    <section id="testimonials" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Voice of the People</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Testimonials of Impact</h3>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
              
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-500">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-dark transition-colors">{item.name}</h4>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-[10px] font-bold uppercase tracking-wider rounded-full mt-2">
                    Beneficiary
                  </span>
                </div>
              </div>
              
              <div className="relative flex-grow z-10">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-all duration-700 -z-10 rotate-12" strokeWidth={1} />
                <p className="text-gray-600 leading-relaxed text-[0.95rem] md:text-base relative">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between group-hover:border-primary/20 transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-primary-dark transition-colors">Foundation for Innovations in Health</span>
                <div className="w-12 h-1 bg-gray-100 group-hover:bg-primary/30 rounded-full transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
