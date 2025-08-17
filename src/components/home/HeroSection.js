import { useLanguage } from "../../contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-red-200 to-[#A21B21] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-secondary blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white order-2 lg:order-1 relative z-30">
              <div className="max-w-xl">
                <h1 className="text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed animate-fadeInUp animation-delay-200 text-gray-200">
                  {t.hero.description}
                </p>

                {/* Mobile View: images side by side without shadow */}
                <div className="flex gap-4 mb-8 lg:hidden">
                  <div className="w-1/2 rounded-xl overflow-hidden">
                    <img
                      src="/Hero/hero.png"
                      alt="Taxsense Professional Services"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="w-1/2 rounded-xl overflow-hidden">
                    <img
                      src="/Hero/hero2.png"
                      alt="Taxsense Business Solutions"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
                  <button className="group btn btn-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center">
                    {t.hero.cta}
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="group bg-black text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
                    {t.hero.learnMore}
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View: floating/overlapping images with shadow */}
            <div className="order-1 lg:order-2 hidden lg:block relative h-[600px] w-full">
              <div className="absolute top-1/3 right-0 w-96 h-[500px] group z-20 animate-float">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <img
                    src="/Hero/hero.png"
                    alt="Taxsense Professional Services"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 w-96 h-[500px] group z-20 animate-float animation-delay-2000">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                  <img
                    src="/Hero/hero2.png"
                    alt="Taxsense Business Solutions"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
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
