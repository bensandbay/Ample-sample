export default function Cta() {
  return (
    <section id="contact" className="bg-lpx-ink text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="lpx-eyebrow text-lpx-accent">Let&rsquo;s talk</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Capital, capability, or both &mdash; we&rsquo;d like to hear from you.
            </h2>
            <p className="mt-5 text-[16px] md:text-[17px] text-white/75 leading-relaxed max-w-2xl">
              Whether you&rsquo;re a founder raising your next round or an
              operator preparing for the next stage of growth, our team is
              ready to listen.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="mailto:hello@lpxpartners.example"
              className="lpx-btn-primary inline-flex h-12 items-center rounded-md px-7 text-[14px] font-semibold"
            >
              Start a conversation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="ml-2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
