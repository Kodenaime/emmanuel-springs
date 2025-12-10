"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-navy">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-6 bg-slate-50 p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green outline-none"
          />

          <input type="hidden" name="_subject" value="New Emmanuel Springs Contact Message" />

          <button
            type="submit"
            className="bg-brand-red text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
