import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { NextSeo } from "next-seo";

const ServiceCard = ({
  service,
  index,
  imageUrl,
  getServiceIcon,
  getServiceSlug,
}) => {
  const handleViewService = () => {
    const slug = getServiceSlug(service.title);
    window.location.href = `/services/${slug}`;
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary/30 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${service.title} - TaxSense Ltd Professional Services`}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-300 shadow-lg">
          {getServiceIcon(service.title)}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              Professional Service
            </span>
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              Expert Consultation
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleViewService}
            className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200 group/btn inline-flex items-center"
          >
            View Details
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

          <Link href="/contact">
            <button
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const { t } = useLanguage();

  // Get actual services data from context
  const services = t("services");

  // Service navigation mapping
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

  // Function to get the correct navigation slug for a service
  const getServiceSlug = (serviceTitle) => {
    if (serviceNavigationMap[serviceTitle]) {
      return serviceNavigationMap[serviceTitle];
    }

    return serviceTitle
      .toLowerCase()
      .replace(/[&,]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Service data with updated image URLs
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

  // Function to get service icon based on title
  const getServiceIcon = (title) => {
    const titleKey = title.toLowerCase();

    if (titleKey.includes("tax") || titleKey.includes("ট্যাক্স")) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }

    if (titleKey.includes("vat") || titleKey.includes("ভ্যাট")) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    }

    if (titleKey.includes("company") || titleKey.includes("কোম্পানি")) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
      titleKey.includes("trade") ||
      titleKey.includes("trademark") ||
      titleKey.includes("ট্রেড")
    ) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
      titleKey.includes("tin") ||
      titleKey.includes("bin") ||
      titleKey.includes("টিআইএন") ||
      titleKey.includes("বিআইএন")
    ) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </svg>
      );
    }

    if (
      titleKey.includes("irc") ||
      titleKey.includes("erc") ||
      titleKey.includes("আইআরসি") ||
      titleKey.includes("ইআরসি")
    ) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      );
    }

    if (
      titleKey.includes("accounting") ||
      titleKey.includes("software") ||
      titleKey.includes("অ্যাকাউন্টিং")
    ) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    }

    if (titleKey.includes("audit") || titleKey.includes("নিরীক্ষা")) {
      return (
        <svg
          className="w-6 h-6 text-white"
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
      );
    }

    if (
      titleKey.includes("rjsc") ||
      titleKey.includes("return") ||
      titleKey.includes("আরজেএসসি")
    ) {
      return (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
      );
    }

    // Default icon
    return (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
        />
      </svg>
    );
  };

  return (
    <Layout>
      <NextSeo
        title={`Our Services - TaxSense Ltd`}
        description="Comprehensive tax advisory, VAT consultancy, company registration, and business services in Bangladesh. Expert solutions for your business needs."
        canonical="https://taxsense.com.bd/services"
        openGraph={{
          url: "https://taxsense.com.bd/services",
          title: "Our Services - TaxSense Ltd",
          description:
            "Comprehensive tax advisory, VAT consultancy, company registration, and business services in Bangladesh.",
          images: [
            {
              url: "https://taxsense.com.bd/og-services.jpg",
              width: 1200,
              height: 630,
              alt: "TaxSense Ltd Services",
            },
          ],
          site_name: "TaxSense Ltd",
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("services_page_title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("services_page_subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t("our_professional_services")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional services designed
              to meet all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                imageUrl={serviceImages[index] || serviceImages[0]}
                getServiceIcon={getServiceIcon}
                getServiceSlug={getServiceSlug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services_cta_title")}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t("services_cta_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                {t("get_quote") || "Get Quote"}
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
