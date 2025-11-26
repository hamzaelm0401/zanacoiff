import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Scissors, Users, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const celebrities = [
    { id: 1, title: 'Dj Snack', image: '/celebrity1.jpg', barber: 'Oussama' },
    { id: 2, title: 'Paul Pogba', image: '/celebrity2.jpg', barber: 'Oussama' },
    { id: 3, title: 'Mo Vlogs', image: '/celebrity3.jpg', barber: 'Oussama' },
    { id: 4, title: 'Badou Jack', image: '/celebrity4.jpg', barber: 'Oussama' },
    { id: 5, title: 'Money Kicks', image: '/celebrity5.jpg', barber: 'Oussama' },
    { id: 6, title: 'Justzoey', image: '/celebrity.6.jpg', barber: 'Oussama' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Votre style,<br />
                  <span className="text-primary">Notre expertise</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Salon de coiffure moderne spécialisé dans les coupes homme et enfant. Découvrez une expérience premium dans une ambiance chaleureuse et professionnelle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/booking">
                  <a className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                    Réserver maintenant
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                    En savoir plus
                  </a>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-gray-600">Années d'expérience</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Clients satisfaits</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">5★</p>
                  <p className="text-sm text-gray-600">Note moyenne</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-96 lg:min-h-[500px]">
              <img
                src="/salon_interieur_1.webp"
                alt="Intérieur du salon ZANA COIFF"
                className="hero-animated w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de coiffure premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">Coupe Homme</h3>
              <p className="text-gray-600 mb-4">Coupes modernes et intemporelles adaptées à votre style personnel</p>
              <p className="font-semibold text-primary">À partir de 25€</p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">Coupe Enfant</h3>
              <p className="text-gray-600 mb-4">Ambiance ludique et bienveillante pour les plus jeunes</p>
              <p className="font-semibold text-primary">À partir de 15€</p>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">Soins Premium</h3>
              <p className="text-gray-600 mb-4">Soins du cuir chevelu et barbe avec produits haut de gamme</p>
              <p className="font-semibold text-primary">À partir de 30€</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Voir tous les services
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Celebrities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Clients Célèbres
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les personnalités qui font confiance à nous pour leur style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {celebrities.map((photo, index) => (
              <div
                key={photo.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg bg-gray-50">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center justify-end p-6 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="text-center text-white w-full">
                      <p className="font-poppins text-2xl font-bold mb-2">{photo.title}</p>
                      <p className="text-sm opacity-75 font-medium">Coiffure par {photo.barber}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    
     {/* Gallery Section */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Galerie de Coiffures
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Inspirez-vous de nos réalisations
      </p>
    </div>

    {/* Ligne 1 : Images horizontales (collages) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
      {[
        { id: 1, src: '/coiffures_exemples.webp', alt: 'Exemples de coiffures' },
        { id: 2, src: '/coiffures_detail.webp', alt: 'Détails de coiffures' },
        { id: 3, src: '/coiffures_couleur.webp', alt: 'Coiffures avec couleur' },
      ].map((photo) => (
        <div 
          key={photo.id} 
          className="relative aspect-[16/] overflow-hidden rounded-xl shadow-md group cursor-pointer"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </div>
      ))}
    </div>

    {/* Ligne 2 : Images portrait (photos individuelles) */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {[
        { id: 4, src: '/inspiration.jpg', alt: 'Coiffures avec accessoires' },
        { id: 5, src: '/inspiration2.jpg', alt: 'Taille des coiffures' },
        { id: 6, src: '/inspiration3.jpg', alt: 'Styles de coiffures' },
      ].map((photo) => (
        <div 
          key={photo.id} 
          className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md group cursor-pointer"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les avis de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'Jean Pierre Desaegher',
              duration: 'Client depuis 5 mois',
              text: "Fauteuil d'orchestre : je découvre pour la première fois, je prend place je ferme les yeux, j'écoute la douce musique des cliquetis des ciseaux, tout en finesse vous êtes de suite en confiance. J'aurais plaisir à reprendre place dans fauteuil... merci Maestro."
            }, {
              name: 'Nasski H',
              duration: 'Client depuis 1 an',
              text: "Un coiffeur d'un professionnel irréprochable, minutieux et perfectionniste, il fait en sorte de répondre au besoin du client, je le conseil vivement, je n'ai jamais été déçu ! Foncez !"
            }, {
              name: 'Kaiser Khalid',
              duration: 'Client depuis 1 an',
              text: "Super coiffeur !!! Très professionnel réponds à vos attentes et de très bons conseils. Utilises des produits de qualités."
            }].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-poppins font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
