import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Foundation for Innovations in Health",
  description: "Refund policy for donations made to the Foundation for Innovations in Health (FIH).",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-black/40 [font-family:var(--font-heading)]">
              Financial Policies
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black [font-family:var(--font-heading)] leading-[1.1]">
            Refund <span className="text-primary">Policy</span>
          </h1>
          <p className="mt-6 text-lg text-black/60 [font-family:var(--font-body)] font-medium">
            Guidelines for donor refund requests and processing.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12 text-black/70 [font-family:var(--font-body)] leading-relaxed">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-heading)]">Donor Refund Request</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <span className="font-bold text-black/80">Timeline:</span> Donors who wish to claim a refund must do so within 24 hours of making the donation.
              </li>
              <li>
                <span className="font-bold text-black/80">Validation:</span> A valid reason for the refund request must be provided, along with supporting documents or evidence.
              </li>
              <li>
                <span className="font-bold text-black/80">Submission:</span> Donors can submit their refund request by contacting Foundation for Innovations in Health through our official communication channels (as mentioned on our website or official correspondence).
              </li>
            </ul>
          </section>

          <section className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-heading)]">Refund Processing</h2>
            <div className="space-y-4">
              <p>
                Upon receiving a valid refund request, Foundation for Innovations in Health will review the request and supporting documents provided.
              </p>
              <p>
                If the refund request is approved, the donation amount will be refunded to the original payment source.
              </p>
              <p className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-black font-semibold">
                Note: A processing fee of 3% of the total donation received will be deducted from the refunded amount to cover administrative and transaction costs.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-heading)]">Timelines for Refund</h2>
            <div className="space-y-4">
              <p>
                Foundation for Innovations in Health aims to process refund requests promptly and efficiently.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Foundation for Innovations in Health will process refund within 3 working days from the approval of Refund.</li>
                <li>The actual time taken for the refund to reflect in the donor’s account may vary depending on the payment gateway or financial institution involved.</li>
                <li>Foundation for Innovations in Health will provide reasonable updates and support during the refund process.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-heading)]">Non-Refundable Donations</h2>
            <p>
              Certain types of donations may be non-refundable. This includes donations made towards specific projects, campaigns, or events where it is explicitly stated that the donation is non-refundable.
            </p>
            <p>
              In such cases, Foundation for Innovations in Health will clearly communicate the non-refundable nature of the donation at the time of solicitation.
            </p>
          </section>

          <section className="space-y-4 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <h2 className="text-xl font-bold text-black [font-family:var(--font-heading)]">Changes to the Refund Policy</h2>
            <p>
              Foundation for Innovations in Health reserves the right to modify or amend this refund policy at any time. Any changes to the policy will be effective immediately upon posting the updated policy on our official website.
            </p>
          </section>

          <section className="mt-8">
            <p className="italic text-sm text-black/50">
              Please note that Foundation for Innovations in Health is committed to utilizing donations efficiently and effectively for the betterment of society. We encourage donors to carefully consider their donation before making a contribution and to reach out to us with any questions or concerns they may have.
            </p>
          </section>

        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-black/40">
          <p>© {new Date().getFullYear()} Foundation for Innovations in Health. All rights reserved.</p>
        </div>

      </div>
    </main>
  );
}
