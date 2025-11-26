import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Scissors, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',      // <-- nouveau champ pour le coiffeur
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Coupe Homme',
    'Coupe Enfant',
    'Soins Barbe',
    'Coloration',
    'Dégradé Technique',
    'Soin Cuir Chevelu'
  ];

  const barbers = ['Oussama', 'Said']; // <-- tableau des coiffeurs

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('barber', formData.barber); // <-- ajout du coiffeur
    formDataToSend.append('date', formData.date);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('message', formData.message);

    fetch('https://formspree.io/f/movbwazp', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', service: '', barber: '', date: '', time: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', barber: '', date: '', time: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900">
            Réserver un Rendez-vous
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Choisissez votre service, coiffeur, date et heure préférée
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h2 className="font-poppins text-2xl font-bold text-green-900 mb-2">
                  Réservation Confirmée !
                </h2>
                <p className="text-green-800 mb-4">
                  Votre rendez-vous a été enregistré avec succès. Un email de confirmation vous a été envoyé.
                </p>
                <p className="text-green-700 text-sm">
                  Nous vous attendons à la date et l'heure convenues. Merci de votre confiance !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Informations Personnelles
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="jean@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="+32 4 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Scissors className="w-5 h-5 text-primary" />
                    Service
                  </h3>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Barber Selection */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Choisir un Coiffeur
                  </h3>
                  <select
                    name="barber"
                    value={formData.barber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Sélectionnez un coiffeur</option>
                    {barbers.map((barber) => (
                      <option key={barber} value={barber}>
                        {barber}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Date et Heure
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={today}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-2">
                        Heure *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">Sélectionnez une heure</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Message (Optionnel)
                  </h3>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Avez-vous des demandes spéciales ou des informations à nous communiquer ?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  Confirmer la Réservation
                </button>

                <p className="text-center text-sm text-gray-500">
                  * Champs obligatoires
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                Horaires
              </h4>
              <p className="text-sm text-gray-600">
                Lun-Ven: 9h-19h<br />
                Sam: 10h-18h
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                Téléphone
              </h4>
              <p className="text-sm text-gray-600">
                <a href="tel:+33123456789" className="hover:text-primary">
                  +32 493934525
                </a>
              </p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                Email
              </h4>
              <p className="text-sm text-gray-600">
                <a href="mailto:rugaltes12@gmail.com" className="hover:text-primary">
                  rugaltes12@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
