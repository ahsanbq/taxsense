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
        "Comprehensive tax advisory, VAT consultancy, and business solutions tailored to meet your specific needs. Trust our experienced professionals to handle your financial requirements.",
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
          title: "VAT Consultancy",
          description:
            "Experienced VAT specialists providing precise information, registration procedures, and ensuring all VAT paperwork is up to date.",
        },
        {
          title: "Tax Advisory",
          description:
            "Comprehensive taxation solutions for both individuals and corporate clients with professional expertise ahead of competition.",
        },
        {
          title: "Business Audit",
          description:
            "Financial audit services identifying potential risks and areas for improvement in internal accounting control processes.",
        },
        {
          title: "Business Advisory",
          description:
            "Business strategy and planning, operational reviews, board effectiveness, benchmarking and comprehensive advisory services.",
        },
        {
          title: "Company Registration",
          description:
            "Making business startup easy by removing unnecessary fees, handling paperwork, legal complexities and providing access to startup ecosystems.",
        },
        {
          title: "Trade License",
          description:
            "Complete assistance in obtaining trade licenses for your business operations with all necessary documentation and legal requirements.",
        },
        {
          title: "IRC & ERC Services",
          description:
            "Import Registration Certificate and Export Registration Certificate processing with complete documentation support.",
        },
        {
          title: "Licensing Services",
          description:
            "Comprehensive licensing solutions for various business permits, regulatory approvals, and compliance requirements.",
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
        "আপনার নির্দিষ্ট প্রয়োজনের জন্য তৈরি করা ব্যাপক ট্যাক্স পরামর্শ, ভ্যাট পরামর্শ এবং ব্যবসায়িক সমাধান। আপনার আর্থিক প্রয়োজনীয়তা পরিচালনার জন্য আমাদের অভিজ্ঞ পেশাদারদের উপর আস্থা রাখুন।",
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
          title: "ভ্যাট পরামর্শ",
          description:
            "অভিজ্ঞ ভ্যাট বিশেষজ্ঞরা সুনির্দিষ্ট তথ্য, নিবন্ধন পদ্ধতি প্রদান করেন এবং সমস্ত ভ্যাট কাগজপত্র আপডেট রাখার নিশ্চয়তা দেন।",
        },
        {
          title: "ট্যাক্স পরামর্শ",
          description:
            "প্রতিযোগিতার চেয়ে এগিয়ে থাকা পেশাদার দক্ষতার সাথে ব্যক্তি এবং কর্পোরেট ক্লায়েন্ট উভয়ের জন্য ব্যাপক কর সমাধান।",
        },
        {
          title: "ব্যবসায়িক নিরীক্ষা",
          description:
            "অভ্যন্তরীণ অ্যাকাউন্টিং নিয়ন্ত্রণ প্রক্রিয়ায় সম্ভাব্য ঝুঁকি এবং উন্নতির ক্ষেত্র চিহ্নিত করার আর্থিক নিরীক্ষা সেবা।",
        },
        {
          title: "ব্যবসায়িক পরামর্শ",
          description:
            "ব্যবসায়িক কৌশল ও পরিকল্পনা, অপারেশনাল পর্যালোচনা, বোর্ডের কার্যকারিতা, বেঞ্চমার্কিং এবং ব্যাপক পরামর্শ সেবা।",
        },
        {
          title: "কোম্পানি নিবন্ধন",
          description:
            "অপ্রয়োজনীয় ফি বাদ দিয়ে, কাগজপত্র সামলিয়ে, আইনি জটিলতা এবং স্টার্টআপ ইকোসিস্টেমে অ্যাক্সেস প্রদান করে ব্যবসা শুরুকে সহজ করা।",
        },
        {
          title: "ট্রেড লাইসেন্স",
          description:
            "সমস্ত প্রয়োজনীয় ডকুমেন্টেশন এবং আইনি প্রয়োজনীয়তা সহ আপনার ব্যবসায়িক কার্যক্রমের জন্য ট্রেড লাইসেন্স পেতে সম্পূর্ণ সহায়তা।",
        },
        {
          title: "IRC ও ERC সেবা",
          description:
            "সম্পূর্ণ ডকুমেন্টেশন সাপোর্ট সহ আমদানি নিবন্ধন সার্টিফিকেট এবং রপ্তানি নিবন্ধন সার্টিফিকেট প্রক্রিয়াকরণ।",
        },
        {
          title: "লাইসেন্সিং সেবা",
          description:
            "বিভিন্ন ব্যবসায়িক পারমিট, নিয়ন্ত্রক অনুমোদন এবং সম্মতির প্রয়োজনীয়তার জন্য ব্যাপক লাইসেন্সিং সমাধান।",
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
          price: "৳১৫,০০০",
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
          price: "৳২৫,০০০",
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
          price: "৳২০,০০০",
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
