import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function WhoWeAreSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {t.whoWeAre.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {t.whoWeAre.subtitle}
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>{t.whoWeAre.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/about">
                <button className="btn btn-primary bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group">
                  {t.whoWeAre.cta}
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
              </Link>

              <Link href="/contact">
                <button className="border-2 border-primary/20 hover:border-primary/40 bg-transparent hover:bg-primary/5 text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group">
                  Get In Touch
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Features/Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.whoWeAre.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                {t.whoWeAre.stats.map((stat, index) => (
                  <>
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                    {index < t.whoWeAre.stats.length - 1 && (
                      <div className="w-px h-12 bg-gray-300"></div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
