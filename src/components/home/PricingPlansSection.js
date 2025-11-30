import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

export default function PricingPlansSection() {
  const { t } = useLanguage();
  const packages = [
    {
      title: "Trade License",
      price: "৳5K",
      priceNote: "(Starting Price)",
      description:
        "Complete trade license solutions for various business types",
      features: [
        "Accessories",
        "E-Commerce",
        "Electric & Electronics",
        "Pharmacy & Store",
        "And More",
      ],
      popular: false,
    },
    {
      title: "Company Registration",
      price: "৳15K",
      priceNote: "(Starting Price)",
      description:
        "Full company registration services for different business structures",
      features: [
        "Limited Company",
        "One Person Company",
        "Proprietorship",
        "Joint Venture",
        "Foundation / Society / Trust",
      ],
      popular: true,
    },
    {
      title: "IRC & ERC",
      price: "৳15K",
      priceNote: "(Starting Price)",
      description:
        "Complete IRC & ERC services with comprehensive documentation",
      features: [
        "Chamber of Commerce Membership",
        "Trade License",
        "TIN",
        "Memorandum of Article",
        "Company Registration",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t.pricing.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.pricing.plans.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-[#700000] rounded-2xl shadow-lg hover:bg-[#a61e2a] hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                index === 1
                  ? "ring-2 ring-white border-white/20"
                  : "border border-primary/20"
              }`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8 min-h-[120px] flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {pkg.title}
                  </h3>
                  {/* Pricing Display */}
                  {index === 0 ? (
                    <div>
                      <span className="text-4xl font-bold text-white">
                        Negotiable
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="mb-3">
                        <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                          Starting From
                        </span>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-white">
                          {pkg.price}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-white mt-0.5 mr-3 flex-shrink-0"
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
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 px-6 rounded-xl font-semibold cursor-pointer transition-all duration-300 bg-[#700000] hover:bg-[#8b1f1f] text-white shadow-lg hover:shadow-xl">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-black max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Can't find the perfect package? We offer customized solutions
              tailored to your specific business requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="group bg-[#700000] hover:bg-[#8b1f1f] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-lg cursor-pointer">
                  Explore All Packages
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
                <button className="group border border-[#700000] hover:bg-[#8b1f1f] hover:text-white bg-transparent text-[#700000] px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer overflow-hidden transform-gpu">
                  Request Custom Quote
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-3.582 9 8z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
