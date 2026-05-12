import React from "react";

export default function MapSection() {
  return (
    <section className="h-[450px] w-full grayscale transition-all duration-700 hover:grayscale-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.250552718!2d88.34444!3d22.53111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773c3c3c3c3c%3A0x3c3c3c3c3c3c3c3c!2s44A%2C%20S.P.%20Mukherjee%20Road%2C%20Kolkata%20-%20700026!5e0!3m2!1sen!2sin!4v1715510000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="FIH Office Location"
      ></iframe>
    </section>
  );
}
