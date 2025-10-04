import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ServicesSection() {
  const { t } = useLanguage();

  // Service navigation mapping - matches navbar servicesData exactly
  const serviceNavigationMap = {
    "Tax Advisory": "tax-advisory",
    "VAT Consultancy": "vat-consultancy",
    "Company Registration": "company-registration",
    "Trade License & Trademark Registration":
      "trade-license-trademark-registration",
    "TIN & BIN Services": "tin-bin",
    "IRC & ERC Services": "irc-erc",
    "Accounting Service & Software Implementation": "accounting-service",
    "Business Audit": "business-audit",
    "Financial Audit": "audit",
    "RJSC, VAT & Tax Return Services": "rjsc-return-vat-withholding",
    // Bengali mappings
    "ট্যাক্স পরামর্শ": "tax-advisory",
    "ভ্যাট পরামর্শ": "vat-consultancy",
    "কোম্পানি নিবন্ধন": "company-registration",
    "ট্রেড লাইসেন্স ও ট্রেডমার্ক নিবন্ধন":
      "trade-license-trademark-registration",
    "টিআইএন ও বিআইএন সেবা": "tin-bin",
    "আইআরসি ও ইআরসি সেবা": "irc-erc",
    "অ্যাকাউন্টিং সেবা ও সফটওয়্যার বাস্তবায়ন": "accounting-service",
    "ব্যবসায়িক নিরীক্ষা": "business-audit",
    "আর্থিক নিরীক্ষা": "audit",
    "আরজেএসসি, ভ্যাট ও ট্যাক্স রিটার্ন সেবা": "rjsc-return-vat-withholding",
  };

  // Service data with updated image URLs for new services
  const serviceImages = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop", // Tax Advisory
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", // VAT Consultancy
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop", // Company Registration
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop", // Trade License & Trademark
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=300&fit=crop", // TIN & BIN Services
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", // IRC & ERC Services
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop", // Accounting & Software
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", // Business Audit
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop", // Financial Audit
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", // RJSC, VAT & Tax Returns
  ];

  // Function to get the correct navigation slug for a service
  const getServiceSlug = (serviceTitle) => {
    // First try exact match from navigation map
    if (serviceNavigationMap[serviceTitle]) {
      return serviceNavigationMap[serviceTitle];
    }

    // Fallback to generated slug if no exact match found
    return serviceTitle
      .toLowerCase()
      .replace(/[&,]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Local fallback images in case external images fail
  const fallbackImages = [
    "/services/tax-advisory.jpg",
    "/services/vat-consultancy.jpg",
    "/services/company-registration.jpg",
    "/services/trade-license.jpg",
    "/services/tin-bin.jpg",
    "/services/irc-erc.jpg",
    "/services/accounting.jpg",
    "/services/business-audit.jpg",
    "/services/financial-audit.jpg",
    "/services/returns.jpg",
  ];

  // Split services into groups for layout: 4 + 4 + 2 (centered)
  const firstRowServices = t.services.items.slice(0, 4);
  const secondRowServices = t.services.items.slice(4, 8);
  const lastRowServices = t.services.items.slice(8, 10);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-black inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t.services.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t.services.title}
          </h2>
          <p className="text-l text-black max-w-3xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid - 4/4/2 Layout */}

        {/* First Row - 4 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {firstRowServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              imageUrl={serviceImages[index] || serviceImages[0]}
              getServiceSlug={getServiceSlug}
            />
          ))}
        </div>

        {/* Second Row - 4 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {secondRowServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index + 4}
              imageUrl={serviceImages[index + 4] || serviceImages[0]}
              getServiceSlug={getServiceSlug}
            />
          ))}
        </div>

        {/* Third Row - 2 Services (Centered) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {lastRowServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 8}
                imageUrl={serviceImages[index + 8] || serviceImages[0]}
                getServiceSlug={getServiceSlug}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl border border-black">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Let's create innovative solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="btn btn-primary text-white group border-2 border-primary/20 hover:border-primary/40 bg-transparent hover:bg-primary/5 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                  <span className="bg-clip-text  bg-gradient-to-r from-primary to-primary/70">
                    Explore All Services
                  </span>
                  <svg
                    className="ml-2 h-4 w-4 text-primary group-hover:translate-x-1 transition-transform"
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
                <button className="group bg-slate-900 text-stone-100 from-primary to-primary/70 hover:from-primary/80 hover:to-primary/90 shadow-lg hover:shadow-primary/30 text- px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                  Get Free Consultation
                  <svg
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service, index, imageUrl, getServiceSlug }) => {
  const router = useRouter();

  // Function to handle navigation
  const handleReadMore = () => {
    // Use the exact slug from navbar mapping
    const slug = getServiceSlug(service.title);
    router.push(`/services/${slug}`);
  };

  // Function to get service icon based on title
  const getServiceIcon = (title) => {
    const iconProps = {
      className: "w-6 h-6 text-white",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    };

    if (title.includes("Tax") || title.includes("ট্যাক্স")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      );
    }
    if (title.includes("VAT") || title.includes("ভ্যাট")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }
    if (title.includes("Company") || title.includes("কোম্পানি")) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    }
    if (
      title.includes("Trade") ||
      title.includes("Trademark") ||
      title.includes("ট্রেড")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    }
    if (
      title.includes("TIN") ||
      title.includes("BIN") ||
      title.includes("টিআইএন") ||
      title.includes("বিআইএন")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707L16.414 6.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2zM10 8v2m4-2v2m-4 4h4"
          />
        </svg>
      );
    }
    if (
      title.includes("IRC") ||
      title.includes("ERC") ||
      title.includes("আইআরসি") ||
      title.includes("ইআরসি")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
          />
        </svg>
      );
    }
    if (
      title.includes("Account") ||
      title.includes("Software") ||
      title.includes("অ্যাকাউন্ট") ||
      title.includes("সফটওয়্যার")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }
    if (
      title.includes("Business Audit") ||
      title.includes("ব্যবসায়িক নিরীক্ষা")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      );
    }
    if (
      title.includes("Financial Audit") ||
      title.includes("আর্থিক নিরীক্ষা")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    }
    if (
      title.includes("RJSC") ||
      title.includes("Return") ||
      title.includes("আরজেএসসি") ||
      title.includes("রিটার্ন")
    ) {
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
    }

    // Default icon for any unmatched services
    return (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    );
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${service.title} - TaxSense Ltd Professional Services`}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          {getServiceIcon(service.title)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Action Section */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleReadMore}
            className="text-gray-950 hover:cursor-pointer inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200 group/btn"
          >
            Learn More
            <svg
              className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200"
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

          {/* Consultation link */}
          <button
            onClick={() => router.push("/contact")}
            className="text-gray-400 hover:text-primary transition-colors duration-200"
            title="Get Consultation"
          >
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </div>
  );
};
