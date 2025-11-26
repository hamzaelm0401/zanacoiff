import { CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const strengths = [
    {
      title: 'Professionnalisme',
      description: 'Coiffeurs expérimentés et certifiés avec années de pratique'
    },
    {
      title: 'Ambiance Chaleureuse',
      description: 'Salon moderne et accueillant pour votre confort'
    },
    {
      title: 'Qualité Premium',
      description: 'Produits haut de gamme et techniques innovantes'
    },
    {
      title: 'Écoute Client',
      description: 'Nous prenons le temps de comprendre vos attentes'
    },
    {
      title: 'Spécialisation',
      description: 'Expertise reconnue en coupes homme et enfant'
    },
    {
      title: 'Hygiène Stricte',
      description: 'Normes sanitaires les plus élevées respectées'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900">
            À propos de ZANA COIFF
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Découvrez notre histoire et nos valeurs
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full min-h-96 lg:min-h-[500px] order-2 lg:order-1">
              <img
                src="/salon_coiffeur_1.webp"
                alt="Coiffeur ZANA COIFF en action"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Notre Salon
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  ZANA COIFF est un salon de coiffure moderne et premium, spécialisé dans les coupes homme et enfant. Depuis plus de 15 ans, nous nous engageons à offrir une expérience exceptionnelle à chaque client.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Notre équipe de coiffeurs passionnés combine expertise traditionnelle et techniques contemporaines pour créer des coupes qui reflètent votre personnalité et mettent en valeur votre style.
                </p>
              </div>

              <div>
                <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-4">
                  Notre Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Offrir des services de coiffure de qualité premium dans une ambiance chaleureuse et professionnelle, en écoutant les besoins de chaque client et en dépassant ses attentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Points Forts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous distingue dans le secteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos Valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Nous recherchons l'excellence dans chaque détail, de la coupe à l'accueil du client
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">02</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Respect
              </h3>
              <p className="text-gray-600">
                Nous respectons chaque client et ses préférences avec attention et bienveillance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">03</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Nous nous tenons à jour avec les dernières tendances et techniques du secteur
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
