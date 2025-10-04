import { createContext, useContext, useState, useEffect } from "react";

// Create Language Context
const LanguageContext = createContext();

// Language data
export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      title: "Professional Tax & Business Solutions",
      subtitle: "Expert guidance for your financial success",
      description:
        "Comprehensive tax advisory, VAT consultancy, Company Documentation and business solutions tailored to meet your specific needs. Trust our experienced professionals to handle your financial requirements.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    // Services Section
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Business Solutions",
      description:
        "We provide a wide range of professional services to help your business thrive and comply with all regulatory requirements.",
      items: [
        {
          title: "Tax Advisory",
          description:
            "Comprehensive taxation solutions for both individuals and corporate clients with professional expertise and strategic planning.",
        },
        {
          title: "VAT Consultancy",
          description:
            "Expert VAT specialists providing precise information, registration procedures, and ensuring all VAT compliance requirements are met.",
        },
        {
          title: "Company Registration",
          description:
            "Complete company registration services including Limited Company, Partnership Firm, Foundation, Society and other business structures.",
        },
        {
          title: "Trade License & Trademark Registration",
          description:
            "Comprehensive assistance in obtaining trade licenses and trademark registration for your business operations and brand protection.",
        },
        {
          title: "TIN & BIN Services",
          description:
            "Tax Identification Number and Business Identification Number registration and management services for individuals and businesses.",
        },
        {
          title: "IRC & ERC Services",
          description:
            "Import Registration Certificate and Export Registration Certificate processing with complete documentation and compliance support.",
        },
        {
          title: "Accounting Service & Software Implementation",
          description:
            "Professional accounting services and comprehensive accounts setup with modern software implementation for efficient business management.",
        },
        {
          title: "Business Audit",
          description:
            "Thorough business audit services identifying potential risks, compliance issues, and areas for operational and financial improvement.",
        },
        {
          title: "Financial Audit",
          description:
            "Independent financial audit services ensuring accuracy, compliance, and transparency in your financial reporting and statements.",
        },
        {
          title: "RJSC, VAT & Tax Return Services",
          description:
            "Complete RJSC return filing, VAT return preparation, and withholding tax return services ensuring timely compliance with regulations.",
        },
      ],
    },
    // Who We Are Section
    whoWeAre: {
      title: "Who We Are",
      subtitle: "Your Trusted Financial Partners",
      description:
        "At Taxsense Ltd., we are a team of dedicated professionals committed to providing exceptional tax and business advisory services. With years of experience in the industry, we understand the complexities of financial regulations and business requirements.",
      features: [
        "Expert Tax Professionals",
        "Comprehensive Business Solutions",
        "Regulatory Compliance",
        "Personalized Service",
      ],
      stats: [
        { number: "1,800", label: "Tax Clients" },
        { number: "100", label: "Company Registered" },
        { number: "600", label: "License Prepared" },
      ],
      cta: "Learn More About Us",
    },
    // Pricing Section
    pricing: {
      title: "Pricing Plans",
      subtitle: "Choose the Right Plan for Your Business",
      description:
        "Transparent pricing with no hidden fees. Get the professional services you need at competitive rates.",
      plans: [
        {
          title: "Trade License",
          price: "৳5000",
          features: [
            "Complete documentation",
            "Legal compliance",
            "Fast processing",
            "Expert consultation",
            "Follow-up support",
          ],
          cta: "Get Started",
        },
        {
          title: "Company Registration",
          price: "৳15,000",
          features: [
            "End-to-end registration",
            "Legal documentation",
            "Regulatory filing",
            "Professional guidance",
            "Post-registration support",
          ],
          cta: "Choose Plan",
        },
        {
          title: "IRC & ERC",
          price: "৳15,000",
          features: [
            "Import/Export certificates",
            "Documentation support",
            "Compliance assistance",
            "Expert processing",
            "Ongoing support",
          ],
          cta: "Get Started",
        },
      ],
    },
    // Clients Section
    clients: {
      subtitle: "Trusted by Industry Leaders",
      title: "Our Valued Clients",
      stats: [
        { number: "1,800", label: "Tax Clients" },
        { number: "2,100", label: "Happy Clients" },
        { number: "600", label: "License Prepared" },
      ],
    },
    // Footer
    footer: {
      about: {
        title: "About Us",
        description:
          "At Taxsense, we believe there is a better way to do tax preparation. It is a more valuable, less invasive way where clients are getting their desirable services regarding tax. Our experienced professionals will help you regarding these issues.",
      },
      services: {
        title: "Services",
        items: [
          "Tax Advisory",
          "VAT Consultancy",
          "Business Advisory",
          "Business Audit",
          "Licensing Service",
        ],
      },
      resources: {
        title: "Resources",
        items: [
          "All Services at a glance",
          "Income tax Paripatra",
          "Finance Act Gazette",
        ],
      },
      contact: {
        title: "Contact Us",
        address:
          "Level-8, House No: 5A, Road No: 2E, Block-J, Baridhara R/A, Dhaka-1206.",
        phone: "01958-089808",
        email: "taxsenselimited@gmail.com",
        website: "www.taxsenselimited.com",
      },
      copyright: "All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    // Services Page
    services_page_title: "Our Services",
    services_page_subtitle:
      "Comprehensive tax advisory, VAT consultancy, company registration, and business services in Bangladesh. Expert solutions for your business needs.",
    our_professional_services: "Our Professional Services",
    services_cta_title: "Ready to Get Started?",
    services_cta_subtitle:
      "Let's discuss your project requirements and find the perfect solution for your business needs.",
    get_quote: "Get Quote",
  },
  bn: {
    // Navbar
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবাসমূহ",
      contact: "যোগাযোগ",
    },
    // Hero Section
    hero: {
      title: "পেশাদার ট্যাক্স ও ব্যবসায়িক সমাধান",
      subtitle: "আপনার আর্থিক সাফল্যের জন্য বিশেষজ্ঞ পরামর্শ",
      description:
        "আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী তৈরি ব্যাপক ট্যাক্স পরামর্শ, ভ্যাট কনসালটেন্সি, কোম্পানি ডকুমেন্টেশন এবং ব্যবসায়িক সমাধান। আপনার আর্থিক প্রয়োজনীয়তা পরিচালনার জন্য আমাদের অভিজ্ঞ পেশাদারদের উপর আস্থা রাখুন।",
      cta: "শুরু করুন",
      learnMore: "আরও জানুন",
    },
    // Services Section
    services: {
      title: "আমাদের সেবাসমূহ",
      subtitle: "ব্যাপক ব্যবসায়িক সমাধান",
      description:
        "আপনার ব্যবসাকে উন্নত করতে এবং সমস্ত নিয়ন্ত্রক প্রয়োজনীয়তা মেনে চলতে সাহায্য করার জন্য আমরা বিস্তৃত পেশাদার সেবা প্রদান করি।",
      items: [
        {
          title: "ট্যাক্স পরামর্শ",
          description:
            "ব্যক্তি এবং কর্পোরেট ক্লায়েন্ট উভয়ের জন্য পেশাদার দক্ষতা এবং কৌশলগত পরিকল্পনা সহ ব্যাপক কর সমাধান।",
        },
        {
          title: "ভ্যাট কনসালটেন্সি",
          description:
            "বিশেষজ্ঞ ভ্যাট বিশেষজ্ঞরা সুনির্দিষ্ট তথ্য, নিবন্ধন পদ্ধতি প্রদান করেন এবং সমস্ত ভ্যাট সম্মতির প্রয়োজনীয়তা পূরণ করেন।",
        },
        {
          title: "কোম্পানি নিবন্ধন",
          description:
            "লিমিটেড কোম্পানি, পার্টনারশিপ ফার্ম, ফাউন্ডেশন, সোসাইটি এবং অন্যান্য ব্যবসায়িক কাঠামো সহ সম্পূর্ণ কোম্পানি নিবন্ধন সেবা।",
        },
        {
          title: "ট্রেড লাইসেন্স ও ট্রেডমার্ক নিবন্ধন",
          description:
            "আপনার ব্যবসায়িক কার্যক্রম এবং ব্র্যান্ড সুরক্ষার জন্য ট্রেড লাইসেন্স এবং ট্রেডমার্ক নিবন্ধন পেতে ব্যাপক সহায়তা।",
        },
        {
          title: "টিআইএন ও বিআইএন সেবা",
          description:
            "ব্যক্তি এবং ব্যবসার জন্য ট্যাক্স আইডেন্টিফিকেশন নম্বর এবং বিজনেস আইডেন্টিফিকেশন নম্বর নিবন্ধন ও পরিচালনা সেবা।",
        },
        {
          title: "আইআরসি ও ইআরসি সেবা",
          description:
            "সম্পূর্ণ ডকুমেন্টেশন এবং সম্মতি সহায়তা সহ আমদানি নিবন্ধন সার্টিফিকেট এবং রপ্তানি নিবন্ধন সার্টিফিকেট প্রক্রিয়াকরণ।",
        },
        {
          title: "অ্যাকাউন্টিং সেবা ও সফটওয়্যার বাস্তবায়ন",
          description:
            "দক্ষ ব্যবসা পরিচালনার জন্য আধুনিক সফটওয়্যার বাস্তবায়ন সহ পেশাদার অ্যাকাউন্টিং সেবা এবং ব্যাপক অ্যাকাউন্ট সেটআপ।",
        },
        {
          title: "ব্যবসায়িক নিরীক্ষা",
          description:
            "সম্ভাব্য ঝুঁকি, সম্মতির সমস্যা এবং অপারেশনাল ও আর্থিক উন্নতির ক্ষেত্রগুলি চিহ্নিত করে পুঙ্খানুপুঙ্খ ব্যবসায়িক নিরীক্ষা সেবা।",
        },
        {
          title: "আর্থিক নিরীক্ষা",
          description:
            "আপনার আর্থিক প্রতিবেদন এবং বিবৃতিতে নির্ভুলতা, সম্মতি এবং স্বচ্ছতা নিশ্চিত করে স্বাধীন আর্থিক নিরীক্ষা সেবা।",
        },
        {
          title: "আরজেএসসি, ভ্যাট ও ট্যাক্স রিটার্ন সেবা",
          description:
            "নিয়মের সাথে সময়মতো সম্মতি নিশ্চিত করে সম্পূর্ণ আরজেএসসি রিটার্ন ফাইলিং, ভ্যাট রিটার্ন প্রস্তুতি এবং উইথহোল্ডিং ট্যাক্স রিটার্ন সেবা।",
        },
      ],
    },
    // Who We Are Section
    whoWeAre: {
      title: "আমরা কারা",
      subtitle: "আপনার বিশ্বস্ত আর্থিক অংশীদার",
      description:
        "ট্যাক্সসেন্স লিমিটেডে, আমরা ব্যতিক্রমী ট্যাক্স এবং ব্যবসায়িক পরামর্শ সেবা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ নিবেদিত পেশাদারদের একটি দল। শিল্পে বছরের অভিজ্ঞতার সাথে, আমরা আর্থিক নিয়ম এবং ব্যবসায়িক প্রয়োজনীয়তার জটিলতা বুঝি।",
      features: [
        "বিশেষজ্ঞ ট্যাক্স পেশাদার",
        "ব্যাপক ব্যবসায়িক সমাধান",
        "নিয়ন্ত্রক সম্মতি",
        "ব্যক্তিগতকৃত সেবা",
      ],
      stats: [
        { number: "১,৮০০", label: "ট্যাক্স ক্লায়েন্ট" },
        { number: "১০০", label: "কোম্পানি নিবন্ধিত" },
        { number: "৬০০", label: "লাইসেন্স প্রস্তুত" },
      ],
      cta: "আমাদের সম্পর্কে আরও জানুন",
    },
    // Pricing Section
    pricing: {
      title: "মূল্য পরিকল্পনা",
      subtitle: "আপনার ব্যবসার জন্য সঠিক পরিকল্পনা বেছে নিন",
      description:
        "কোনো লুকানো ফি ছাড়াই স্বচ্ছ মূল্য। প্রতিযোগিতামূলক হারে আপনার প্রয়োজনীয় পেশাদার সেবা পান।",
      plans: [
        {
          title: "ট্রেড লাইসেন্স",
          price: "৳৫০০০",
          features: [
            "সম্পূর্ণ ডকুমেন্টেশন",
            "আইনি সম্মতি",
            "দ্রুত প্রক্রিয়াকরণ",
            "বিশেষজ্ঞ পরামর্শ",
            "ফলো-আপ সাপোর্ট",
          ],
          cta: "শুরু করুন",
        },
        {
          title: "কোম্পানি নিবন্ধন",
          price: "৳১৫,০০০",
          features: [
            "শুরু থেকে শেষ পর্যন্ত নিবন্ধন",
            "আইনি ডকুমেন্টেশন",
            "নিয়ন্ত্রক ফাইলিং",
            "পেশাদার নির্দেশনা",
            "নিবন্ধন-পরবর্তী সাপোর্ট",
          ],
          cta: "পরিকল্পনা বেছে নিন",
        },
        {
          title: "IRC ও ERC",
          price: "৳১৫,০০০",
          features: [
            "আমদানি/রপ্তানি সার্টিফিকেট",
            "ডকুমেন্টেশন সাপোর্ট",
            "সম্মতি সহায়তা",
            "বিশেষজ্ঞ প্রক্রিয়াকরণ",
            "চলমান সাপোর্ট",
          ],
          cta: "শুরু করুন",
        },
      ],
    },
    // Clients Section
    clients: {
      subtitle: "ইন্ডাস্ট্রি লিডারদের দ্বারা বিশ্বস্ত",
      title: "আমাদের মূল্যবান ক্লায়েন্টগণ",
      stats: [
        { number: "১,৮০০", label: "ট্যাক্স ক্লায়েন্ট" },
        { number: "২,১০০", label: "সন্তুষ্ট ক্লায়েন্ট" },
        { number: "৬০০", label: "লাইসেন্স প্রস্তুত" },
      ],
    },
    // Footer
    footer: {
      about: {
        title: "আমাদের সম্পর্কে",
        description:
          "ট্যাক্সসেন্সে, আমরা বিশ্বাস করি যে ট্যাক্স প্রস্তুতির একটি ভাল উপায় রয়েছে। এটি একটি আরও মূল্যবান, কম আক্রমণাত্মক উপায় যেখানে ক্লায়েন্টরা ট্যাক্স সংক্রান্ত তাদের কাঙ্ক্ষিত সেবা পাচ্ছেন। আমাদের অভিজ্ঞ পেশাদাররা এই বিষয়গুলি নিয়ে আপনাকে সাহায্য করবেন।",
      },
      services: {
        title: "সেবাসমূহ",
        items: [
          "ট্যাক্স পরামর্শ",
          "ভ্যাট পরামর্শ",
          "ব্যবসায়িক পরামর্শ",
          "ব্যবসায়িক নিরীক্ষা",
          "লাইসেন্সিং সেবা",
        ],
      },
      resources: {
        title: "রিসোর্স",
        items: ["এক নজরে সব সেবা", "আয়কর পরিপত্র", "অর্থ আইন গেজেট"],
      },
      contact: {
        title: "যোগাযোগ করুন",
        address:
          "লেভেল-৮, বাড়ি নং: ৫এ, রোড নং: ২ই, ব্লক-জে, বরিধারা আ/এ, ঢাকা-১২০৬।",
        phone: "০১৯৫৮-০৮৯৮০৮",
        email: "taxsenselimited@gmail.com",
        website: "www.taxsenselimited.com",
      },
      copyright: "সকল অধিকার সংরক্ষিত।",
      legal: {
        privacy: "গোপনীয়তা নীতি",
        terms: "সেবার শর্তাবলি",
      },
    },

    // Services Page
    services_page_title: "আমাদের সেবাসমূহ",
    services_page_subtitle:
      "বাংলাদেশে ব্যাপক ট্যাক্স পরামর্শ, ভ্যাট পরামর্শ, কোম্পানি নিবন্ধন এবং ব্যবসায়িক সেবা। আপনার ব্যবসায়িক প্রয়োজনের জন্য বিশেষজ্ঞ সমাধান।",
    our_professional_services: "আমাদের পেশাদার সেবাসমূহ",
    services_cta_title: "শুরু করতে প্রস্তুত?",
    services_cta_subtitle:
      "আসুন আপনার প্রকল্পের প্রয়োজনীয়তা নিয়ে আলোচনা করি এবং আপনার ব্যবসায়িক প্রয়োজনের জন্য নিখুঁত সমাধান খুঁজে পাই।",
    get_quote: "কোট পান",
  },
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
