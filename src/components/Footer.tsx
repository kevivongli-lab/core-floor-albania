import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produktet', path: '/produktet' },
    { name: 'Pse SPC', path: '/pse-spc' },
    { name: 'Certifikime', path: '/certifikime' },
  ];

  const professionalLinks = [
    { name: 'Arkitektë & Partnerë', path: '/arkitekte-partnere' },
    { name: 'Rreth Nesh', path: '/rreth-nesh' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <footer className="w-full bg-charcoal text-white">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl mb-4 md:mb-6">CoreFloor Albania</h3>
            <p className="font-paragraph text-sm text-white/70 leading-relaxed mb-4 md:mb-6">
              Distributor ekskluziv i dyshemeve SPC profesionale për projekte në Shqipëri.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:info@corefloor.al" 
                className="flex items-center gap-3 font-paragraph text-sm text-white/70 hover:text-accent-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@corefloor.al</span>
              </a>
              <a 
                href="tel:+355123456789" 
                className="flex items-center gap-3 font-paragraph text-sm text-white/70 hover:text-accent-gold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{"+355 69 65 80 444"}</span>
              </a>
              <div className="flex items-start gap-3 font-paragraph text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{"Vlorë, Shqipëri"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg md:text-xl mb-4 md:mb-6">Lidhje të Shpejta</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-white/70 hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h4 className="font-heading text-lg md:text-xl mb-4 md:mb-6">Për Profesionistë</h4>
            <ul className="space-y-3">
              {professionalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-sm text-white/70 hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-heading text-lg md:text-xl mb-4 md:mb-6">Brand-et Tona</h4>
            <div className="space-y-4">
              <div>
                <p className="font-heading text-xl md:text-2xl text-white mb-1">FirmFit</p>
                <p className="font-paragraph text-xs text-white/60">SPC Project Grade</p>
              </div>
              <div>
                <p className="font-heading text-xl md:text-2xl text-white mb-1">Novocore</p>
                <p className="font-paragraph text-xs text-white/60">Premium SPC Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} CoreFloor Albania. Të gjitha të drejtat e rezervuara.
            </p>
            <div className="flex gap-6">
              <Link
                to="/kontakt"
                className="font-paragraph text-sm text-white/60 hover:text-accent-gold transition-colors"
              >
                Politika e Privatësisë
              </Link>
              <Link
                to="/kontakt"
                className="font-paragraph text-sm text-white/60 hover:text-accent-gold transition-colors"
              >
                Kushtet e Përdorimit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
