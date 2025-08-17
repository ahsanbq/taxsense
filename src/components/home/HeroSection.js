import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  // Hero slides data with different content for each image
  const heroSlides = [
    {
      image: "Hero/hero.png",
      title: "Transform Your Business",
      subtitle:
        "Innovative solutions that drive growth and success in today's competitive market.",
      cta: "Get Started Today",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
      title: "Expert Consulting Services",
      subtitle:
        "Professional guidance and strategic planning to elevate your business to the next level.",
      cta: "Learn More",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
      title: "Digital Innovation",
      subtitle:
        "Cutting-edge technology solutions designed to streamline operations and boost productivity.",
      cta: "Explore Solutions",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Debug: Check if slides are working
  useEffect(() => {
    console.log("Current slide:", currentSlide, heroSlides[currentSlide]);
  }, [currentSlide]);

  // Preload images
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section className="relative h-[95vh] min-h-[550px] overflow-hidden group bg-gray-900">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out hero-slide ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#1f2937", // fallback color
          }}
        />
      ))}

      {/* Content Container */}

      <div className="relative z-30 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Animated Content */}
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
                <button className="btn btn-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  {t.hero.cta}
                </button>
                <button className="btn btn-outline border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base">
                  {t.hero.learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
