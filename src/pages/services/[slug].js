import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect, useState } from "react";

// Service data with detailed content
const servicesData = {
  "tax-advisory": {
    title: "Tax Advisory",
    description:
      "In today’s complex regulatory environment, effective tax planning and compliance are essential for every business and individual level.",
    heroImage: "/service/tax-advisory.webp",
    intro:
      "Proper tax management reduces liabilities, maximizes savings, and protects your business from legal risks.",
    content: `In today’s complex regulatory environment, effective tax planning and compliance are essential for every business and individual level. Proper tax management not only helps you stay compliant with the National Board of Revenue (NBR) but also allows you to reduce liabilities, maximize savings, and protect your business from legal risks. Furthermore, if you have TIN (tax identification number) certificate then you must submit tax return otherwise you will face fine and Legal Complication.

Taxsense Limited Tax Advisory is one of many areas of professional services where our Company is well ahead of the competition. Our Tax Consultancy team provides comprehensive taxation solutions for both individual and corporate clients.

Our services include:
• Tax Planning & Strategic Advisory
• Individual & Corporate Tax Return Preparation
• Expert Tax Advisory
• Tax Assessment & Appeal Support
• Withholding Tax (AIT) Management

ট্যাক্স পরামর্শ সেবা (Tax Advisory)
বর্তমানের জটিল ব্যবসায়িক ও আইনি পরিমণ্ডলে সঠিক ট্যাক্স পরিকল্পনা ও কমপ্লায়েন্স অত্যন্ত গুরুত্বপূর্ণ।
সঠিকভাবে ট্যাক্স ব্যবস্থাপনা আপনাকে জাতীয় রাজস্ব বোর্ড (NBR)-এর সাথে সামঞ্জস্য বজায় রাখতে সাহায্য করে, ট্যাক্স লায়াবিলিটি কমায়, সেভিংস বাড়ায় এবং আইনি ঝুঁকি থেকে ব্যবসাকে রক্ষা করে।
আপনার যদি TIN (Tax Identification Number) সনদ থাকে তাহলে ট্যাক্স রিটার্ন দাখিল করা বাধ্যতামূলক, নইলে জরিমানা ও আইনি জটিলতার সম্মুখীন হতে পারেন।
`,
    content_bn: `বর্তমানের জটিল ব্যবসায়িক ও আইনি পরিমণ্ডলে সঠিক ট্যাক্স পরিকল্পনা ও কমপ্লায়েন্স অত্যন্ত গুরুত্বপূর্ণ। সঠিকভাবে ট্যাক্স ব্যবস্থাপনা আপনাকে জাতীয় রাজস্ব বোর্ড (NBR)-এর সাথে সামঞ্জস্য বজায় রাখতে সাহায্য করে, ট্যাক্স লায়াবিলিটি কমায়, সেভিংস বাড়ায় এবং আইনি ঝুঁকি থেকে ব্যবসাকে রক্ষা করে।

আপনার যদি TIN (Tax Identification Number) সনদ থাকে তাহলে ট্যাক্স রিটার্ন দাখিল করা বাধ্যতামূলক, নইলে জরিমানা ও আইনি জটিলতার সম্মুখীন হতে পারেন।

ট্যাক্সসেন্স লিমিটেড ট্যাক্স পরামর্শ পেশাদার সেবার একটি ক্ষেত্র যেখানে আমাদের কোম্পানি প্রতিযোগিতায় অগ্রগামী। আমাদের ট্যাক্স কনসালট্যান্সি টিম ব্যক্তি এবং কর্পোরেট উভয় ক্লায়েন্টদের জন্য ব্যাপক কর সমাধান প্রদান করে।

আমাদের সেবাসমূহ:
• ট্যাক্স পরিকল্পনা ও কৌশলগত পরামর্শ
• ব্যক্তিগত ও কর্পোরেট ট্যাক্স রিটার্ন প্রস্তুতি
• বিশেষজ্ঞ ট্যাক্স পরামর্শ
• ট্যাক্স মূল্যায়ন ও আপিল সহায়তা
• উইথহোল্ডিং ট্যাক্স (AIT) ব্যবস্থাপনা`,
    services: [
      "Tax Planning & Strategic Advisory",
      "Individual & Corporate Tax Return Preparation",
      "Expert Tax Advisory",
      "Tax Assessment & Appeal Support",
      "Withholding Tax (AIT) Management",
    ],
    services_bn: [
      "ট্যাক্স পরিকল্পনা ও কৌশলগত পরামর্শ",
      "ব্যক্তিগত ও কর্পোরেট ট্যাক্স রিটার্ন প্রস্তুতি",
      "বিশেষজ্ঞ ট্যাক্স পরামর্শ",
      "ট্যাক্স মূল্যায়ন ও আপিল সহায়তা",
      "উইথহোল্ডিং ট্যাক্স (AIT) ব্যবস্থাপনা",
    ],
    icon: "💰",
  },
  "vat-consultancy": {
    title: "VAT Consultancy",
    description:
      "VAT (Value Added Tax) is a type of indirect tax charged on the value added at each stage of production and distribution.",
    heroImage: "/service/vat-consultancy.webp",
    intro:
      "Proper VAT management helps you avoid penalties, maintain transparency, and build credibility with regulatory authorities such as the NBR.",
    intro_bn:
      "সঠিক ভ্যাট ব্যবস্থাপনা আপনাকে জরিমানা এড়াতে, স্বচ্ছতা বজায় রাখতে এবং NBR-এর মতো নিয়ন্ত্রক কর্তৃপক্ষের সাথে বিশ্বাসযোগ্যতা তৈরি করতে সহায়তা করে।",
    content: `VAT (Value Added Tax) is a type of indirect tax charged on the value added at each stage of production and distribution of goods and services. In Bangladesh, Value Added Tax (VAT) compliance is a crucial part of running any legitimate business. Proper VAT management helps you avoid penalties, maintain transparency, and build credibility with regulatory authorities such as the National Board of Revenue (NBR).

At Taxsense Limited, we have experienced VAT Specialists who can provide precise information and advice regarding the procedure of registration, amount of VAT that needs to be paid and ensure all paper works relating to VAT and other taxes are up to date, thereby, minimizing the chance of any error.

We provide the following VAT-related services:
• VAT (BIN) Registration
• Monthly VAT Return Preparation & Submission
• VAT Advisory & Compliance Support
`,
    content_bn: `ভ্যাট (মূল্য সংযোজন কর) হল একটি পরোক্ষ কর যা পণ্য এবং সেবার উৎপাদন ও বিতরণের প্রতিটি পর্যায়ে সংযোজিত মূল্যের উপর আরোপিত হয়। বাংলাদেশে, ভ্যাট সম্মতি যেকোনো বৈধ ব্যবসা পরিচালনার একটি গুরুত্বপূর্ণ অংশ। সঠিক ভ্যাট ব্যবস্থাপনা আপনাকে জরিমানা এড়াতে, স্বচ্ছতা বজায় রাখতে এবং জাতীয় রাজস্ব বোর্ড (NBR)-এর মতো নিয়ন্ত্রক কর্তৃপক্ষের সাথে বিশ্বাসযোগ্যতা তৈরি করতে সহায়তা করে।

ট্যাক্সসেন্স লিমিটেডে, আমাদের অভিজ্ঞ ভ্যাট বিশেষজ্ঞ রয়েছেন যারা নিবন্ধনের পদ্ধতি, প্রদেয় ভ্যাটের পরিমাণ সম্পর্কে সুনির্দিষ্ট তথ্য এবং পরামর্শ প্রদান করতে পারেন এবং ভ্যাট এবং অন্যান্য করের সাথে সম্পর্কিত সমস্ত কাগজপত্র আপ টু ডেট রয়েছে তা নিশ্চিত করতে পারেন, যার ফলে কোনো ত্রুটির সম্ভাবনা হ্রাস পায়।

আমরা নিম্নলিখিত ভ্যাট-সম্পর্কিত সেবা প্রদান করি:
• ভ্যাট (BIN) নিবন্ধন
• মাসিক ভ্যাট রিটার্ন প্রস্তুতি ও জমা
• ভ্যাট পরামর্শ ও সম্মতি সহায়তা`,
    services: [
      "VAT (BIN) Registration",
      "Monthly VAT Return Preparation & Submission",
      "VAT Advisory & Compliance Support",
      "VAT Audit Support",
      "VAT Planning & Strategy",
    ],
    services_bn: [
      "ভ্যাট (BIN) নিবন্ধন",
      "মাসিক ভ্যাট রিটার্ন প্রস্তুতি ও জমা",
      "ভ্যাট পরামর্শ ও সম্মতি সহায়তা",
      "ভ্যাট অডিট সহায়তা",
      "ভ্যাট পরিকল্পনা ও কৌশল",
    ],
    icon: "📊",
  },
  "company-registration": {
    title: "Company Registration",
    description:
      "Company registration means legally creating and recognizing your business as a company under government law.",
    heroImage: "/service/company-registration.jpg",
    intro:
      "Taxsense makes the process of starting your business as easy as possible by removing unnecessary fees, taking care of lengthy paperwork, and handling legal complexities.",
    intro_bn:
      "ট্যাক্সসেন্স অপ্রয়োজনীয় ফি দূর করে, দীর্ঘ কাগজপত্রের যত্ন নিয়ে এবং আইনি জটিলতা পরিচালনা করে আপনার ব্যবসা শুরু করার প্রক্রিয়াটি যতটা সম্ভব সহজ করে তোলে।",
    content: `Company registration means legally creating and recognizing your business as a company under government law. If you want to increase your business size then company can give you many benefits. It can own assets, sign contracts, and sue/be sued in its own name. Registered companies often get tax incentives, rebates, and benefits compared to unregistered businesses. Also it is Easier to raise funds for a company.

Taxsense makes the process of starting your business as easy as possible by removing unnecessary fees, taking care of lengthy paperwork, handling legal complexities as well as granting you access to one of the greatest startup ecosystems in the world.

Our services include:
• Private Limited Company Registration
• One Person Company (OPC) Registration
• Partnership Firm Registration
• Foundation / Society Registration
• Joint Venture Formation
• Trade License, TIN & BIN Support
• RJSC Annual Return & Compliance Filing
• MOA & AOA Drafting
• Post-Incorporation Advisory & Secretarial Services
• Professional guidance for company legal issues.`,
    content_bn: `কোম্পানি নিবন্ধন মানে সরকারি আইনের অধীনে আইনগতভাবে আপনার ব্যবসা তৈরি এবং স্বীকৃতি দেওয়া। আপনি যদি আপনার ব্যবসার আকার বৃদ্ধি করতে চান তবে কোম্পানি আপনাকে অনেক সুবিধা দিতে পারে। এটি সম্পদের মালিক হতে পারে, চুক্তিতে স্বাক্ষর করতে পারে এবং নিজের নামে মামলা করতে/করা যেতে পারে। নিবন্ধিত কোম্পানিগুলি প্রায়শই অনিবন্ধিত ব্যবসার তুলনায় কর প্রণোদনা, ছাড় এবং সুবিধা পায়। এছাড়াও একটি কোম্পানির জন্য তহবিল সংগ্রহ করা সহজ।

ট্যাক্সসেন্স অপ্রয়োজনীয় ফি দূর করে, দীর্ঘ কাগজপত্রের যত্ন নিয়ে, আইনি জটিলতা পরিচালনা করে এবং বিশ্বের সেরা স্টার্টআপ ইকোসিস্টেমগুলির মধ্যে একটিতে আপনাকে অ্যাক্সেস প্রদান করে আপনার ব্যবসা শুরু করার প্রক্রিয়াটি যতটা সম্ভব সহজ করে তোলে।

আমাদের সেবাসমূহ:
• প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন
• ওয়ান পার্সন কোম্পানি (OPC) নিবন্ধন
• পার্টনারশিপ ফার্ম নিবন্ধন
• ফাউন্ডেশন / সোসাইটি নিবন্ধন
• জয়েন্ট ভেঞ্চার গঠন
• ট্রেড লাইসেন্স, TIN ও BIN সহায়তা
• RJSC বার্ষিক রিটার্ন ও সম্মতি ফাইলিং
• MOA ও AOA খসড়া তৈরি
• নিবন্ধন-পরবর্তী পরামর্শ ও সচিবালয় সেবা
• কোম্পানি আইনি সমস্যার জন্য পেশাদার নির্দেশনা`,
    services: [
      "Private Limited Company Registration",
      "One Person Company (OPC) Registration",
      "Partnership Firm Registration",
      "Foundation / Society Registration",
      "Joint Venture Formation",
      "Trade License, TIN & BIN Support",
      "RJSC Annual Return & Compliance Filing",
      "MOA & AOA Drafting",
      "Post-Incorporation Advisory & Secretarial Services",
    ],
    services_bn: [
      "প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন",
      "ওয়ান পার্সন কোম্পানি (OPC) নিবন্ধন",
      "পার্টনারশিপ ফার্ম নিবন্ধন",
      "ফাউন্ডেশন / সোসাইটি নিবন্ধন",
      "জয়েন্ট ভেঞ্চার গঠন",
      "ট্রেড লাইসেন্স, TIN ও BIN সহায়তা",
      "RJSC বার্ষিক রিটার্ন ও সম্মতি ফাইলিং",
      "MOA ও AOA খসড়া তৈরি",
      "নিবন্ধন-পরবর্তী পরামর্শ ও সচিবালয় সেবা",
    ],
    icon: "🏢",
  },
  "trade-license-trademark-registration": {
    title: "Trade License & Trademark Registration",
    description:
      "Obtaining a Trade License is the first and most essential step to legally operate any business in Bangladesh. Protect your brand with registered trademarks.",
    heroImage: "/service/trademark-registration.jfif",
    intro:
      "We make the process simple, fast, and fully compliant with local regulations for both trade licenses and trademark registrations.",
    content: `Obtaining a Trade License is the first and most essential step to legally operate any business in Bangladesh. At Taxsense Limited, we make this process simple, fast, and fully compliant with local regulations.

Whether you’re starting a new company, partnership firm, or small enterprise, our expert team handles the entire process from document preparation and application submission to approval from the respective City Corporation or Municipality.

We ensure your license is issued correctly, renewed on time, and aligned with your business nature — saving you from delays, penalties, or rejection.

Trademark Registration: Your brand is your identity — protect it with a registered Trademark. We provide complete support for Trademark Registration, Renewal, and Legal Protection under the Department of Patents, Designs & Trademarks (DPDT).`,
    services: [
      "New Trade License Application",
      "Renewal of Trade License",
      "Ownership/Address Change Updates",
      "Correction of Trade License Information",
      "Guidance for City Corporation/Municipal Compliance",
      "Trademark Search & Availability Check",
      "Trademark Application Filing & DPDT Submission",
      "Trademark Renewal & Legal Follow-up",
    ],
    icon: "📄",
  },
  "tin-bin": {
    title: "TIN & BIN Services",
    description:
      "Tax Identification Number and Business Identification Number services",
    heroImage: "/service/tin-bin.jpg",
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
    title:
      "Import Registration Certificate (IRC) & Export Registration Certificate (ERC)",
    description:
      "To import or export legally in Bangladesh, businesses must obtain IRC or ERC from CCI&E.",
    heroImage: "/service/irc-erc.png",
    intro:
      "We provide complete assistance for new IRC/ERC registration, renewal, and modification — ensuring your business can legally import and export goods without interruption.",
    content: `To import or export legally in Bangladesh, every business must obtain an IRC (Import Registration Certificate) or ERC (Export Registration Certificate) from Office of the Chief Controller of Imports and Exports (CCI&E).

At Taxsense Limited, we provide complete assistance for new IRC/ERC registration, renewal, and modification — ensuring your business can legally import and export goods without interruption.

Our experienced team manages the entire process — from document preparation, bank endorsement, and CCI&E submission to final certificate collection — saving you valuable time and ensuring full compliance with the latest government regulations.`,
    services: [
      "New IRC & ERC License Application",
      "Renewal and Amendment of Existing Licenses",
      "Documentation & Bank Endorsement Support",
      "Trade-related Advisory & Compliance Support",
    ],
    icon: "🌐",
  },
  "accounting-service": {
    title: "Accounting Service & Accounts Setup (Software Implementation)",
    description:
      "Every business needs a strong accounting system to track income, expenses, cash flow, and profitability.",
    heroImage: "/service/accounting-software.jpg",
    intro:
      "Digital accounting software such as Tally, ZohoBooks, QuickBooks, or Xero can automate routine work and give real-time financial insights.",
    content: `Every business, regardless of size, needs a strong accounting system to track income, expenses, cash flow, and profitability. Proper accounting not only helps you understand your financial health but also ensures regulatory compliance, tax accuracy, and informed business decisions.

That’s where Taxsense Limited comes in. We provide comprehensive Accounting Services and Accounts Setup (Software Implementation) tailored to your business type, size, and compliance needs. Our team of Chartered Accountants, Financial Experts ensures your books are perfectly structured and always up-to-date.`,
    services: [
      "Full Accounting & Bookkeeping Support",
      "Monthly & Annual Financial Statement Preparation",
      "Accounting Software Setup (Tally, QuickBooks, ZohoBooks, Xero, etc.)",
      "Payroll & Expense Management System",
      "Data Entry, Reconciliation & Audit Support",
      "NBR Compliance Advisory",
    ],
    icon: "💻",
  },
  "business-audit": {
    title: "Business Audit Services",
    description:
      "A proper business audit is more than just a compliance requirement — it’s a powerful tool to understand your company’s true financial position.",
    heroImage: "/service/business-audit.jpg",
    intro:
      "We go beyond traditional compliance audits to deliver actionable insights that help you identify risks and improve financial accuracy.",
    content: `A proper business audit is more than just a compliance requirement — it’s a powerful tool to understand your company’s true financial position and ensure accountability at every level.

In today’s fast-changing business environment, a transparent and well-structured audit process gives you the confidence to make informed decisions and sustain long-term growth.

At Taxsense Limited, we go beyond traditional compliance audits to deliver actionable insights. Our approach helps you identify risks, improve financial accuracy, and ensure accountability throughout your organization — empowering better business decisions.`,
    services: [
      "Statutory Audit for Companies",
      "Internal & Management Audit",
      "Compliance Audit (Tax, VAT & Regulatory)",
      "Special Purpose Audit & Investigative Review",
      "Risk Assessment & Internal Control Evaluation",
      "Financial Reporting & Advisory Support",
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

We conduct comprehensive audits of financial statements, accounting records, and internal controls to ensure accuracy and compliance. Our audit opinions provide stakeholders with confidence in the reliability of financial information.`,
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
    heroImage: "/service/return-services.jpg",
    intro:
      "Comprehensive return filing services for RJSC, VAT, and withholding tax ensuring regulatory compliance.",
    content: `Regular filing of various returns is mandatory for businesses in Bangladesh. Our comprehensive return filing services ensure timely submission of all required returns including RJSC annual returns, VAT returns, and withholding tax returns.

We handle the preparation and filing of all statutory returns, ensuring compliance with regulatory deadlines and requirements. Our team maintains updated knowledge of changing regulations and filing procedures to ensure accurate and timely submissions.`,
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
  "other-services": {
    title: "Other Services",
    title_bn: "অন্যান্য সেবা",
    description:
      "Additional tailored professional services to meet unique business needs.",
    description_bn:
      "বিশেষ প্রয়োজন মেটাতে কাস্টমাইজড পেশাদার সেবা প্রদান করা হয়।",
    heroImage: "/service/other-services.jpg",
    intro:
      "We offer bespoke solutions covering a variety of compliance and business needs.",
    intro_bn:
      "আমরা নিয়ম-কানুন এবং ব্যবসায়িক প্রয়োজন মেটাতে কাস্টম সমাধান প্রদান করি।",
    content: `We provide a range of additional services that may not be listed individually on the site. These include but are not limited to:

- Specialized compliance support
- Customized advisory and retainers
- Document drafting and legal assistance
- Ad-hoc project-based financial consultancy

If you don't see a service listed, contact us and we'll create a tailored solution for your needs.

`,
    content_bn: `আমরা আরও কিছু অতিরিক্ত সেবা প্রদান করি যা সাইটে পৃথকভাবে তালিকাভুক্ত নাও থাকতে পারে। এর মধ্যে রয়েছে:

- বিশেষায়িত কমপ্লায়েন্স সহায়তা
- কাস্টমাইজড পরামর্শ ও রিটেইনার
- ডকুমেন্ট ড্রাফটিং ও আইনি সহায়তা
- প্রজেক্ট ভিত্তিক আর্থিক পরামর্শ

আপনি যদি কাঙ্ক্ষিত সেবা তালিকায় না পান, আমাদের সাথে যোগাযোগ করুন — আমরা আপনার প্রয়োজন অনুযায়ী একটি সমাধান তৈরি করব।
`,
    services: [
      "Customized Compliance Support",
      "Project-based Advisory",
      "Document Drafting & Legal Support",
      "Temporary Finance & Tax Teams",
      "Other Bespoke Solutions",
    ],
    services_bn: [
      "কাস্টমাইজড কমপ্লায়েন্স সহায়তা",
      "প্রজেক্ট ভিত্তিক পরামর্শ",
      "ডকুমেন্ট ড্রাফটিং ও আইনি সহায়তা",
      "অস্থায়ী আর্থিক ও ট্যাক্স টিম",
      "অন্যান্য কাস্টম সমাধান",
    ],
    icon: "🔧",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Force re-render on client side when language changes
  useEffect(() => {
    setMounted(true);
  }, [language]);

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const service = servicesData[slug];

  // Map slugs to t.services.items array indices
  const slugToIndexMap = {
    "tax-advisory": 0,
    "vat-consultancy": 1,
    "company-registration": 2,
    "trade-license-trademark-registration": 3,
    "tin-bin": 4,
    "irc-erc": 5,
    "accounting-service": 6,
    "business-audit": 7,
    audit: 8,
    "rjsc-return-vat-withholding": 9,
    "other-services": 10,
  };

  // Helper to pick language-specific fields when available
  const getField = (field) => {
    if (!service) return undefined;

    // Preferred: explicit *_bn or *_en fields on the service object
    if (language === "bn") {
      if (service[`${field}_bn`]) return service[`${field}_bn`];
    } else {
      if (service[`${field}_en`]) return service[`${field}_en`];
    }

    // Fallback: try to use translations from `t.services.items` for title/description
    if (
      (field === "title" || field === "description") &&
      t &&
      t.services &&
      Array.isArray(t.services.items)
    ) {
      const itemIndex = slugToIndexMap[slug];
      if (itemIndex !== undefined && t.services.items[itemIndex]) {
        const item = t.services.items[itemIndex];
        if (field === "title" && item.title) return item.title;
        if (field === "description" && item.description)
          return item.description;
      }
    }

    // Final fallback to default field
    if (service[field]) return service[field];

    return undefined;
  };

  const title = getField("title");
  const description = getField("description");
  const intro = getField("intro");
  const content = getField("content");
  const servicesList = getField("services") || service.services || [];

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
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
            >
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    "Hello, I want a quotation for " + title
  )}`;

  return (
    <>
      <NextSeo
        title={`${title} - TaxSense Ltd`}
        description={description}
        openGraph={{
          title: `${title} - TaxSense Ltd`,
          description: description,
          images: [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
      />

      <Layout key={language}>
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
                {title}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {intro}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <div className="text-gray-700 leading-relaxed mb-12">
                {(content || "").split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Services List */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our {title} Services Include:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {servicesList.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-[#700000] mt-1 mr-3 flex-shrink-0"
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
                  Contact our experts for professional {title} services tailored
                  to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#700000] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#8b1f1f] transition-colors transform hover:scale-105 inline-flex items-center justify-center cursor-pointer"
                  >
                    Get Quotation
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
                  </a>
                  <Link
                    href="/services"
                    className="border-2 border-[#700000] text-[#700000] px-8 py-3 rounded-xl font-semibold hover:bg-[#700000] hover:text-white transition-colors inline-flex items-center justify-center cursor-pointer overflow-hidden transform-gpu"
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
