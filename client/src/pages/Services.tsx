import { Scissors, Sparkles, Droplet, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Coupe Homme',
      description: 'Coupes classiques, modernes ou tendance adaptées à votre morphologie',
      price: 'À partir de 15€',
      duration: '30-45 min',
      features: ['Consultation gratuite', 'Produits premium', 'Finition impeccable']
    },
    {
      icon: Users,
      title: 'Coupe Enfant',
      description: 'Ambiance ludique et bienveillante pour les plus jeunes',
      price: 'À partir de 12€',
      duration: '20-30 min',
      features: ['Accueil chaleureux', 'Coupe rapide', 'Atmosphère amusante']
    },
    {
      icon: Sparkles,
      title: 'Soins Barbe',
      description: 'Soins complets de la barbe avec produits haut de gamme',
      price: 'À partir de 10€',
      duration: '15-20 min',
      features: ['Nettoyage', 'Hydratation', 'Modelage']
    },
    {
      icon: Droplet,
      title: 'Coloration',
      description: 'Coloration professionnelle pour un look unique et personnel',
      price: 'À partir de 35€',
      duration: '45-60 min',
      features: ['Conseil couleur', 'Produits professionnels', 'Soin après-couleur']
    },
    {
      icon: Sparkles,
      title: 'Lissage',
      description: 'Soins spécialisés pour la santé et l\'éclat de vos cheveux',
      price: 'À partir de 30€',
      duration: '30-40 min',
      features: ['Diagnostic', 'Traitement adapté', 'Conseils d\'entretien']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900">
            Nos Services
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Une gamme complète de services de coiffure et soins premium
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Prix</p>
                      <p className="font-semibold text-primary text-lg">
                        {service.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Durée</p>
                      <p className="font-semibold text-gray-900">
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8 text-center">
              Informations Pratiques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Réservation
                </h3>
                <p className="text-gray-600 mb-4">
                  Nous recommandons de réserver votre rendez-vous à l'avance pour garantir la disponibilité de votre coiffeur préféré.
                </p>
                <p className="text-sm text-gray-500">
                  Les réservations peuvent être effectuées en ligne ou par téléphone.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Annulation
                </h3>
                <p className="text-gray-600 mb-4">
                  Les annulations doivent être effectuées au moins 24h avant votre rendez-vous.
                </p>
                <p className="text-sm text-gray-500">
                  Contactez-nous pour modifier ou annuler votre réservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
