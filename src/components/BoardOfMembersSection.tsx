"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutContent } from "@/lib/content/about";

export default function BoardOfMembersSection() {
  const { boardMembers } = aboutContent;
  const [selectedMember, setSelectedMember] = useState<typeof boardMembers[0] | null>(null);

  // Function to format multiline description
  const formatDescription = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0 text-gray-700 leading-relaxed text-sm md:text-base">
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Board of Members
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer group border border-gray-100"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{member.role}</p>
                <div className="mt-auto">
                  <span className="text-primary font-medium text-sm flex items-center group-hover:underline">
                    Read Bio
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-90 flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-gray-100 p-2 rounded-full text-gray-600 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto h-64 md:h-auto bg-gray-100 shrink-0">
              <Image
                src={selectedMember.imagePath}
                alt={selectedMember.name}
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Text Section */}
            <div className="p-6 sm:p-8 md:p-10 flex-1 overflow-y-auto bg-white ">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
              <p className="text-md md:text-lg font-medium text-primary mb-6">{selectedMember.role}</p>
              <div className="prose prose-sm md:prose-base text-gray-700 max-w-none">
                {formatDescription(selectedMember.description)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
