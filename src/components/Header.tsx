import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'SQ' | 'EN'>('SQ');
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'Produktet', path: '/produktet', hash: '' },
    { name: 'Pse SPC', path: '/pse-spc', hash: '' },
    { name: 'Certifikime', path: '/certifikime', hash: '' },
    { name: 'Arkitektë & Partnerë', path: '/arkitekte-partnere', hash: '' },
    { name: 'Rreth Nesh', path: '/rreth-nesh', hash: '' },
    { name: 'Kontakt', path: '/kontakt', hash: '' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-light-grey/20">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/b9443e_c2e6e99147a74d8295deebef979d764e~mv2.png"
              width={560}
              className="h-40 w-auto object-contain border-black border border-none"
              originWidth={500}
              originHeight={400} />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-paragraph text-sm px-4 py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-charcoal font-semibold'
                    : 'text-secondary hover:text-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'SQ' ? 'EN' : 'SQ')}
              className="flex items-center gap-2 font-paragraph text-sm text-secondary hover:text-charcoal transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{language}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-charcoal"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-light-grey/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-base px-4 py-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-charcoal font-semibold'
                      : 'text-secondary hover:text-charcoal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
