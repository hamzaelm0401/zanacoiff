import { Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Barbers() {
  const barbers = [
    { name: 'OUSSAMA', specialty: 'Coupes Homme & Dégradés Précis', experience: 'Expert', image: '/said_work.png', rating: 5 },
    { name: 'SAID', specialty: 'Barbe & Coupes Modernes', experience: 'Expert', image: '/said_oussama.jpg', rating: 5 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900">Rencontrez Nos Coiffeurs</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">Une équipe de professionnels passionnés et expérimentés</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {barbers.map((barber, index) => (
              <div key={index} className="group">
                <div className="relative h-72 md:h-80 mb-6 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <img src={barber.image} alt={barber.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900">{barber.name}</h3>
                  <p className="text-primary font-medium text-sm">{barber.specialty}</p>
                  <p className="text-gray-600 text-sm">{barber.experience}</p>
                  <div className="flex items-center gap-1 pt-2">
                    {[...Array(barber.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
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
