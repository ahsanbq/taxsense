import { useLanguage } from "../../contexts/LanguageContext";

export default function ClientsSection() {
  const { t } = useLanguage();
  // Sample client logos - you can replace these with actual client logo URLs
  const clients = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=TechCorp",
    },
    {
      name: "BusinessPro",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=BusinessPro",
    },
    {
      name: "StartupHub",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=StartupHub",
    },
    {
      name: "GlobalTrade",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=GlobalTrade",
    },
    {
      name: "InnovateInc",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=InnovateInc",
    },
    {
      name: "FutureTech",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=FutureTech",
    },
    {
      name: "EliteGroup",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=EliteGroup",
    },
    {
      name: "ProSolutions",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=ProSolutions",
    },
    {
      name: "NextGen",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=NextGen",
    },
    {
      name: "MarketLeaders",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=MarketLeaders",
    },
    {
      name: "SuccessPartners",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=SuccessPartners",
    },
    {
      name: "VisionCorp",
      logo: "https://via.placeholder.com/150x80/e5e7eb/374151?text=VisionCorp",
    },
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t.clients.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.clients.title}
          </h2>
        </div>

        {/* Auto-sliding Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Sliding container */}
          <div className="flex space-x-12 animate-slide">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.clients.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
