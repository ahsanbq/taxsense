import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

// Service data with detailed content
const servicesData = {
  "tax-advisory": {
    title: "Tax Advisory",
    description: "Expert tax advisory services for individuals and businesses",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
    intro:
      "Professional tax advisory services to help you navigate complex tax regulations and optimize your tax strategy.",
    content: `If you have TIN (tax identification number) certificate then you must submit tax return, otherwise you will face fines and legal complications. Our expert tax advisors provide comprehensive guidance to ensure compliance with all tax regulations while maximizing your tax efficiency.

Our experienced team understands the complexities of Bangladesh tax laws and provides strategic planning to help individuals and businesses minimize their tax liability legally. We offer personalized advice tailored to your specific financial situation and business needs.

Whether you're a small business owner, individual taxpayer, or large corporation, our tax advisory services are designed to provide you with peace of mind and ensure full compliance with tax regulations.`,
    services: [
      "Expert Tax Advisory",
      "Registration for Taxes (TIN)",
      "Tax Planning & Strategy",
      "Tax Return Preparation and Filing",
      "Maintaining your tax records",
      "Tax Compliance Monitoring",
      "Tax Dispute Resolution",
      "International Tax Advisory",
    ],
    icon: "💰",
  },
  "vat-consultancy": {
    title: "VAT Consultancy",
    description:
      "Professional VAT registration, compliance and consultancy services",
    heroImage:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    intro:
      "Comprehensive VAT consultancy services to ensure your business meets all VAT compliance requirements.",
    content: `Value Added Tax (VAT) is a crucial aspect of business operations in Bangladesh. Our VAT specialists provide expert guidance on VAT registration, compliance, and optimization strategies.

We help businesses understand their VAT obligations, implement proper VAT accounting systems, and ensure timely filing of VAT returns. Our team stays updated with the latest VAT regulations and provides strategic advice to minimize VAT liability while maintaining full compliance.

From VAT registration to ongoing compliance management, we provide end-to-end VAT consultancy services for businesses of all sizes.`,
    services: [
      "VAT Registration & Renewal",
      "VAT Return Preparation & Filing",
      "VAT Compliance Assessment",
      "VAT Audit Support",
      "VAT Planning & Strategy",
      "VAT Dispute Resolution",
      "Supply Chain VAT Analysis",
      "Cross-border VAT Advisory",
    ],
    icon: "📊",
  },
  "company-registration": {
    title: "Company Registration",
    description:
      "Complete company registration services for all business structures",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Professional company registration services for Limited Companies, Partnerships, and other business structures.",
    content: `Starting a business in Bangladesh requires proper legal registration and compliance with regulatory requirements. Our company registration services provide comprehensive support for establishing your business entity with all necessary documentation and approvals.

We handle the entire registration process from name reservation to final incorporation, ensuring all legal requirements are met. Our team assists with drafting Memorandum and Articles of Association, obtaining digital certificates, and completing all RJSC formalities.

Whether you're starting a Limited Company, Partnership Firm, or other business structure, we provide expert guidance throughout the registration process.`,
    services: [
      "Limited Company Registration",
      "One Person Company (OPC)",
      "Partnership Firm Registration",
      "Proprietorship Registration",
      "Joint Venture Formation",
      "Foundation/Society/Trust Registration",
      "Name Reservation & Approval",
      "MOA & AOA Drafting",
      "Digital Certificate Issuance",
      "Post-incorporation Compliance",
    ],
    icon: "🏢",
  },
  "trade-license-trademark-registration": {
    title: "Trade License & Trademark Registration",
    description: "Complete trade license and trademark registration services",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Professional assistance in obtaining trade licenses and protecting your brand with trademark registration.",
    content: `Trade licenses are mandatory for conducting business in Bangladesh, and trademark registration provides legal protection for your brand identity. Our comprehensive services ensure your business operates legally and your intellectual property is protected.

We assist in obtaining trade licenses for various business categories including retail, manufacturing, service, and e-commerce businesses. Our trademark registration services help protect your brand name, logo, and other intellectual property assets.

Our experienced team handles all documentation, application processes, and regulatory compliance to ensure smooth approval of your trade license and trademark applications.`,
    services: [
      "Trade License Application & Renewal",
      "Business Category Assessment",
      "Trademark Search & Analysis",
      "Trademark Application Filing",
      "Brand Protection Strategy",
      "License Compliance Monitoring",
      "Intellectual Property Advisory",
      "License Transfer & Amendment",
    ],
    icon: "📄",
  },
  "tin-bin": {
    title: "TIN & BIN Services",
    description:
      "Tax Identification Number and Business Identification Number services",
    heroImage:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    intro:
      "Professional TIN and BIN registration services for individuals and businesses.",
    content: `TIN (Tax Identification Number) and BIN (Business Identification Number) are essential requirements for tax compliance and business operations in Bangladesh. Our services ensure proper registration and management of these important identification numbers.

We provide comprehensive support for TIN registration for individuals and businesses, helping you comply with tax obligations. BIN registration is essential for businesses engaged in import-export activities and VAT-registered businesses.

Our team handles all application processes, documentation requirements, and ensures timely processing of your TIN and BIN applications with the relevant authorities.`,
    services: [
      "TIN Registration for Individuals",
      "TIN Registration for Businesses",
      "BIN Registration & Renewal",
      "TIN Certificate Issuance",
      "TIN/BIN Amendment Services",
      "Return Filing Support",
      "Compliance Monitoring",
      "Advisory Services",
    ],
    icon: "🆔",
  },
  "irc-erc": {
    title: "IRC & ERC Services",
    description:
      "Import Registration Certificate and Export Registration Certificate services",
    heroImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Complete IRC and ERC services for import-export businesses with comprehensive documentation support.",
    content: `Import Registration Certificate (IRC) and Export Registration Certificate (ERC) are mandatory for businesses involved in international trade. Our comprehensive services ensure smooth processing and compliance with all regulatory requirements.

We provide end-to-end support for IRC and ERC applications, including all prerequisite documentation such as trade license, company registration, and other regulatory approvals. Our team ensures proper categorization and classification for your import-export activities.

Whether you're starting international trade or renewing existing certificates, our experienced professionals guide you through the entire process with complete documentation support.`,
    services: [
      "IRC Application & Processing",
      "ERC Application & Processing",
      "Certificate Renewal Services",
      "Documentation Preparation",
      "Regulatory Compliance",
      "Import-Export Advisory",
      "Product Classification",
      "Certificate Amendment",
    ],
    icon: "🌐",
  },
  "accounting-service": {
    title: "Accounting Service & Software Implementation",
    description:
      "Professional accounting services and modern software implementation",
    heroImage:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Comprehensive accounting services and software implementation for efficient business management.",
    content: `Professional accounting services are essential for maintaining accurate financial records and making informed business decisions. Our comprehensive accounting solutions include manual bookkeeping as well as modern software implementation.

We provide complete accounts setup for new businesses and accounting system optimization for existing businesses. Our team implements industry-standard accounting software and provides training to ensure your team can effectively manage financial operations.

From basic bookkeeping to advanced financial reporting, our accounting services are designed to meet the diverse needs of businesses across various industries.`,
    services: [
      "Complete Accounts Setup",
      "Bookkeeping & Record Maintenance",
      "Accounting Software Implementation",
      "Financial Statement Preparation",
      "Management Reporting",
      "Payroll Processing",
      "Tax Accounting",
      "Software Training & Support",
    ],
    icon: "💻",
  },
  "business-audit": {
    title: "Business Audit",
    description:
      "Comprehensive business audit services for operational and financial improvement",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Thorough business audit services to identify risks, compliance issues, and improvement opportunities.",
    content: `Business audits are essential for identifying operational inefficiencies, compliance gaps, and areas for improvement. Our comprehensive business audit services provide detailed analysis of your business operations, financial systems, and regulatory compliance.

We conduct thorough reviews of business processes, internal controls, and operational procedures to identify potential risks and recommend improvements. Our audit reports provide actionable insights to enhance business performance and ensure regulatory compliance.

Whether you need a compliance audit, operational audit, or comprehensive business review, our experienced auditors provide professional and objective assessment of your business operations.`,
    services: [
      "Operational Audit",
      "Compliance Audit",
      "Internal Control Review",
      "Risk Assessment",
      "Process Improvement Analysis",
      "Performance Evaluation",
      "Regulatory Compliance Review",
      "Management Advisory",
    ],
    icon: "🔍",
  },
  audit: {
    title: "Financial Audit",
    description:
      "Independent financial audit services for accuracy and compliance",
    heroImage:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Independent financial audit services ensuring accuracy, compliance, and transparency in financial reporting.",
    content: `Financial audits provide independent verification of your financial statements and ensure compliance with accounting standards and regulatory requirements. Our professional audit services enhance credibility and transparency in financial reporting.

We conduct comprehensive audits of financial statements, accounting records, and internal controls to ensure accuracy and compliance. Our audit opinions provide stakeholders with confidence in the reliability of financial information.

Whether required for regulatory compliance, stakeholder requirements, or internal governance, our independent audit services maintain the highest professional standards and provide valuable insights for business improvement.`,
    services: [
      "Statutory Financial Audit",
      "Independent Audit Opinion",
      "Financial Statement Review",
      "Internal Control Testing",
      "Compliance Verification",
      "Management Letter",
      "Audit Documentation",
      "Stakeholder Reporting",
    ],
    icon: "📋",
  },
  "rjsc-return-vat-withholding": {
    title: "RJSC, VAT & Tax Return Services",
    description: "Complete return filing services ensuring timely compliance",
    heroImage:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Comprehensive return filing services for RJSC, VAT, and withholding tax ensuring regulatory compliance.",
    content: `Regular filing of various returns is mandatory for businesses in Bangladesh. Our comprehensive return filing services ensure timely submission of all required returns including RJSC annual returns, VAT returns, and withholding tax returns.

We handle the preparation and filing of all statutory returns, ensuring compliance with regulatory deadlines and requirements. Our team maintains updated knowledge of changing regulations and filing procedures to ensure accurate and timely submissions.

From annual company returns to monthly VAT returns, our systematic approach ensures your business maintains good standing with all regulatory authorities.`,
    services: [
      "RJSC Annual Return Filing",
      "VAT Return Preparation & Filing",
      "Withholding Tax Returns",
      "Monthly Return Processing",
      "Compliance Calendar Management",
      "Penalty Avoidance Strategy",
      "Return Amendment Services",
      "Regulatory Update Advisory",
    ],
    icon: "📝",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const service = servicesData[slug];

  // Handle service not found
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <NextSeo
        title={`${service.title} - TaxSense Ltd`}
        description={service.description}
        openGraph={{
          title: `${service.title} - TaxSense Ltd`,
          description: service.description,
          images: [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ],
        }}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.heroImage})`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">{service.icon}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {service.intro}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <div className="text-gray-700 leading-relaxed mb-12">
                {service.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Services List */}
              <div className="bg-gray-50 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our {service.title} Services Include:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0"
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
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Contact our experts for professional{" "}
                  {service.title.toLowerCase()} services tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Get Consultation
                    <svg
                      className="ml-2 h-5 w-5"
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
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(servicesData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  if (!servicesData[slug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
}
