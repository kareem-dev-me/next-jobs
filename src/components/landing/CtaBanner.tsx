import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="landing-container">
        <div className="relative overflow-hidden bg-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-primary [clip-path:polygon(0_12%,88%_0,100%_82%,0_100%)]"
          />
          <div className="relative grid items-end gap-8 px-6 pt-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,54%)] lg:px-20 lg:pt-16">
            <div className="max-w-[420px] pb-12 lg:pb-20">
              <h2 className="text-[32px] font-semibold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                Start posting jobs today
              </h2>
              <p className="mt-4 text-base font-medium text-white/80">
                Start posting jobs for only $10.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex rounded-[4px] bg-white px-6 py-3.5 text-base font-bold text-primary hover:bg-white/90"
              >
                Sign Up For Free
              </a>
            </div>
            <div className="relative min-h-[220px] sm:min-h-[320px] lg:min-h-[430px]">
              <Image
                src="/landing/dashboard.jpg"
                alt="Company dashboard showing job statistics"
                width={720}
                height={430}
                className="absolute inset-x-0 bottom-0 h-auto w-full object-cover object-top shadow-2xl lg:translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
