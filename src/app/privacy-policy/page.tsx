import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Foundation for Innovations in Health",
  description: "Privacy policy for the Foundation for Innovations in Health (FIH) website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-8 [font-family:var(--font-heading)]">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none space-y-6 [font-family:var(--font-body)]">
          <p>
            Privacy is an important consideration for us and we are committed to protecting the privacy of all visitors to this site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 [font-family:var(--font-heading)]">No Personal Information Required</h2>
          <p>
            To access the base content on our site, you will not be required to provide any personal information. 
            However, we use Google Analytics to measure website traffic and improve our website design, and Google 
            does use a cookie to collect anonymous traffic tracking data. 
          </p>
          <p>
            We do not collect personally identifiable data from users based on visits to our web pages. 
            However, if a visitor registers with us or sends us an email, we will have access to additional information 
            and discuss such cases in more detail below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 [font-family:var(--font-heading)]">General Information for Casual Visitors</h2>
          <p>
            When you request information from our website, the web server uses your IP address to communicate with you, 
            and this minimal information is always retained for a period of time on our server. 
            Your computer can be identified from the IP address while you are connected to the Internet.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 [font-family:var(--font-heading)]">Cookies</h2>
          <p>
            Our website uses "cookies" to help you personalize your online experience. A cookie is a text file that 
            is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver 
            viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server 
            in the domain that issued the cookie to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 [font-family:var(--font-heading)]">Data Security</h2>
          <p>
            We maintain appropriate technical and organizational security measures to protect your data from 
            unauthorized access, use, or disclosure.
          </p>
        </div>
      </div>
    </div>
  );
}
