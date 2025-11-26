import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">ZANA COIFF</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Salon de coiffure moderne spécialisé dans les coupes homme et enfant. Nous offrons des services de qualité premium dans une ambiance chaleureuse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/">
                  <a className="hover:text-primary transition-colors">Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors">À propos</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-primary transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="hover:text-primary transition-colors">Réserver</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>+32 493 93 45 25 </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a href="mailto:rugaltes12@gmail.com" className="hover:text-primary transition-colors">
                  rugaltes12@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span>Place du Perron 44<br />6030 Charleroi</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <p>Lun - Dimanche: 10h - 19h</p>
                  <p>Mercredi: Fermé</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 md:my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} ZANA COIFF. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
