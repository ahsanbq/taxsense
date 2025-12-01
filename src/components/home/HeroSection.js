import { useLanguage } from "../../contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative h-screen bg-gradient-to-br from-gray-100 via-red-300 to-[#A21B21] overflow-hidden"
      role="banner"
    >
      {/* ---------------------------------------------------------------- */}
      {/* Decorative Line/Shape Elements (Modern, No Blobs) */}
      {/* ---------------------------------------------------------------- */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Top-left corner lines */}
        <svg
          className="absolute top-6 left-6 w-32 h-32 opacity-30 text-white"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0 20 L20 20 L20 0" />
          <path d="M0 40 L40 40 L40 0" opacity="0.3" />
        </svg>

        {/* Bottom-right angled lines */}
        <svg
          className="absolute bottom-10 right-10 w-40 h-40 opacity-20 text-white"
          viewBox="0 0 150 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M0 150 L150 0" />
          <path d="M30 150 L150 30" opacity="0.4" />
        </svg>

        {/* Faint grid on right side */}
        <svg
          className="absolute top-0 right-0 w-[300px] h-full opacity-[0.07]"
          viewBox="0 0 300 600"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 15} y1="0" x2={i * 15} y2="600" />
          ))}
        </svg>

        {/* Floating thin line */}
        <div className="absolute top-1/3 left-1/2 w-24 h-0.5 bg-white/30 rotate-12"></div>

        {/* Bottom-left corner accent */}
        <svg
          className="absolute bottom-20 left-12 w-20 h-20 opacity-30 text-white"
          viewBox="0 0 80 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="0,40 40,40 40,0" />
        </svg>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Main Content */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative z-20 h-full flex items-center pt-20 pb-6 sm:pt-24 sm:pb-8 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white order-2 lg:order-1 relative z-30">
              <div className="max-w-xl">
                <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fadeInUp leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed animate-fadeInUp animation-delay-200">
                  {t.hero.description}
                </p>

                {/* Mobile View images */}
                <div className="flex justify-center mb-3 lg:hidden">
                  <div className="w-full max-w-[280px] rounded-lg overflow-hidden">
                    <Image
                      src="/Hero/hero2-removebg.png"
                      alt="TaxSense Business Solutions - Modern office environment for professional tax consultancy"
                      className="w-full h-auto object-cover"
                      width={280}
                      height={180}
                      priority
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 animate-fadeInUp animation-delay-400">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-[#700000] text-white px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-[#8b1f1f] cursor-pointer"
                    aria-label="Contact TaxSense for professional tax consultation"
                  >
                    {t.hero.cta}
                    <svg
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/about"
                    className="group inline-flex items-center justify-center bg-white text-[#700000] border border-[#700000] px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#fdecec] cursor-pointer"
                    aria-label="Learn more about TaxSense services"
                  >
                    {t.hero.learnMore}
                    <svg
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop View: floating/overlapping images */}
            <div className="order-1 lg:order-2 hidden lg:block relative h-[450px] xl:h-[400px] w-full">
              <div className="absolute top-2/4 right-30 w-72 xl:w-80 h-[320px] xl:h-[380px] group z-20 animate-float">
                <div className="relative h-full w-full rounded-full overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500 bg-[#700000]">
                  <Image
                    src="/Hero/hero.png"
                    alt="TaxSense Professional Tax Consultancy Services"
                    className="w-full h-full object-cover"
                    width={400}
                    height={380}
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-10 left-0 w-72 xl:w-80 h-[320px] xl:h-[380px] group z-20 animate-float animation-delay-2000">
                <div className="relative h-full w-full rounded-full overflow-hidden transform -rotate-0 transition-all duration-500 bg-[#700000] pb-8 pl-8">
                  <Image
                    src="/Hero/hero2-removebg.png"
                    alt="TaxSense Business Solutions Image"
                    className="w-full scale-110 h-full object-cover"
                    width={400}
                    height={380}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
