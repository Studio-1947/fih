import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Foundation for Innovations in Health",
  description: "Terms and conditions for using the Foundation for Innovations in Health (FIH) website.",
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-8 [font-family:var(--font-heading)]">Terms & Conditions</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none space-y-6 [font-family:var(--font-body)]">
          <p className="font-semibold text-gray-900">
            Please read this page carefully before exploring our website.
          </p>
          
          <p>
            Foundation for Innovations in Health (FIH) maintains this website to provide information to the internet community. 
            Such information may be subject to amendment and updating without notice.
          </p>

          <p>
            The information contained in this website is for general information purposes only. The information is provided by 
            Foundation for Innovations in Health and while we endeavour to keep the information up to date and correct, we make 
            no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
            suitability or availability with respect to the website or the information, products, services, or related graphics 
            contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <p>
            Foundation for Innovations in Health (FIH) does not guarantee continuous, uninterrupted or secure access to our services, 
            and operation of our site may be interfered with by numerous factors outside of our control. 
          </p>

          <p>
            Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. 
            Our failure to act with respect to a breach by the user or others does not waive our right to act with respect to subsequent 
            or similar breaches. 
          </p>

          <p>
            This Agreement sets forth the entire understanding and agreement between us with respect to the subject matter hereof.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 [font-family:var(--font-heading)]">Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, 
            or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <p>
            Every effort is made to keep the website up and running smoothly. However, Foundation for Innovations in Health takes 
            no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
        </div>
      </div>
    </div>
  );
}
