export default function DonationSection() {
    return (
        <section id="donation" className="mt-20 bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">
            Support Our Mission
          </h2>

          <p className="text-slate-700 mb-6 max-w-2xl">
            Your generous donations help us feed the hungry, empower
            families, and spread hope. You can support our work using
            the bank details below.
          </p>

          <div className="space-y-2 text-slate-800 font-medium">
            <p>Bank Name: GTBank</p>
            <p>Account Name: Emmanuel Foundation</p>
            <p>Account Number: 0123456789</p>
          </div>
        </section>
    );
}