import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Coiffeurs', href: '/barbers' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="ZANA COIFF" className="h-10 md:h-12 w-auto" />
            </a>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-gray-700 font-medium hover:text-primary transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/booking">
              <a className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                Réserver
              </a>
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Link href="/booking">
                <a
                  className="block px-4 py-2 bg-primary text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Réserver
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
