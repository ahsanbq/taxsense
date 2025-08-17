import { useLanguage } from "../../contexts/LanguageContext";

export default function ClientsSection() {
  const { t } = useLanguage();
  // Real client logos from public/clients folder
  const clients = [
    {
      name: "Bank Asia Limited",
      logo: "/clients/Bank-Asia-Limited-Logo-Vector.svg-.png",
    },
    {
      name: "Uni Logo",
      logo: "/clients/cropped-Uni1logo_for_web.jpg",
    },
    {
      name: "Green Logo Company",
      logo: "/clients/logo_green-1.png",
    },
    {
      name: "Client 1",
      logo: "/clients/327439728_1662014604217252_3882132783104307807_n.jpg",
    },
    {
      name: "Client 2",
      logo: "/clients/346476980_3462942090647371_7842320966996879783_n.jpg",
    },
    {
      name: "Client 3",
      logo: "/clients/405467726_122094280034150701_7439153767348733036_n.jpg",
    },
    {
      name: "Standard Size Logo",
      logo: "/clients/250x60.png",
    },
    {
      name: "R Company",
      logo: "/clients/R.jpg",
    },
    {
      name: "AAA Corporation",
      logo: "/clients/aaa.jpeg",
    },
    {
      name: "Download Company",
      logo: "/clients/download.png",
    },
    {
      name: "Images Corp",
      logo: "/clients/images.jpeg",
    },
    {
      name: "WW Enterprise",
      logo: "/clients/ww.jpg",
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
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300 group p-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain scale-150 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  style={{
                    maxWidth: "120px",
                    maxHeight: "60px",
                  }}
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
