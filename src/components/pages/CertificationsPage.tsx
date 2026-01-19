import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { TechnicalCertifications } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Ruler, Users, Heart } from 'lucide-react';

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<TechnicalCertifications[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<TechnicalCertifications>('certifications');
      
      // Sort certifications: GreenGuard Gold first, Fire Rating second, SE+® third, rest after
      const sorted = result.items.sort((a, b) => {
        const nameA = a.certificationName?.toLowerCase() || '';
        const nameB = b.certificationName?.toLowerCase() || '';
        
        if (nameA.includes('greenguard gold')) return -1;
        if (nameB.includes('greenguard gold')) return 1;
        if (nameA.includes('fire rating')) return -1;
        if (nameB.includes('fire rating')) return 1;
        if (nameA.includes('se+') || nameA.includes('anti-microbial')) return -1;
        if (nameB.includes('se+') || nameB.includes('anti-microbial')) return 1;
        return 0;
      });
      
      setCertifications(sorted);
    } catch (error) {
      console.error('Error loading certifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const relevanceCategories = [
    {
      title: 'Për Hotele',
      icon: Building2,
      description: 'Certifikimet që garantojnë performancë dhe sigurinë në ambiente hoteliere'
    },
    {
      title: 'Për Arkitektë',
      icon: Ruler,
      description: 'Specifika teknike dhe certifikime për specifikimin e projekteve'
    },
    {
      title: 'Për Projekte Publike',
      icon: Users,
      description: 'Kërkesat dhe standardet për ambiente me përdorim publik'
    },
    {
      title: 'Për Shëndetin e Brendshëm',
      icon: Heart,
      description: 'Certifikime që garantojnë cilësinë e ajrit dhe sigurinë shëndetësore'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4 md:mb-6">
              Certifikime
            </h1>
            <p className="font-paragraph text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              Standarde ndërkombëtare për cilësi, sigurinë dhe performancë të qëndrueshme
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
              Pse Janë të Rëndësishme Certifikimet
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-secondary max-w-3xl mx-auto">
              Certifikimet garantojnë që produktet tona plotësojnë standardet më të larta ndërkombëtare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relevanceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-beige rounded-sm mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <category.icon className="w-7 h-7 md:w-8 md:h-8 text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                  {category.title}
                </h3>
                <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="w-full py-16 md:py-24 bg-white min-h-[600px]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          {isLoading ? null : certifications.length > 0 ? (
            <div className="space-y-12 md:space-y-16">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-background p-6 md:p-8 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                    {/* Icon/Image */}
                    <div className="lg:col-span-3">
                      <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-sm flex items-center justify-center mx-auto lg:mx-0">
                        {cert.icon ? (
                          <Image
                            src={cert.icon}
                            alt={cert.certificationName || 'Certification'}
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            width={200}
                          />
                        ) : (
                          <span className="font-heading text-3xl md:text-4xl text-charcoal">
                            {cert.certificationName?.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9">
                      <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal mb-3 md:mb-4">
                        {cert.certificationName}
                      </h3>
                      
                      {cert.shortDescription && (
                        <p className="font-paragraph text-base sm:text-lg text-secondary leading-relaxed mb-6 md:mb-8">
                          {cert.shortDescription}
                        </p>
                      )}

                      {/* Relevance Sections */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {cert.relevanceForHotels && (
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Building2 className="w-5 h-5 text-accent-gold" strokeWidth={1.5} />
                              <h4 className="font-paragraph text-base font-semibold text-charcoal">
                                Për Hotele
                              </h4>
                            </div>
                            <p className="font-paragraph text-sm text-secondary leading-relaxed">
                              {cert.relevanceForHotels}
                            </p>
                          </div>
                        )}

                        {cert.relevanceForArchitects && (
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Ruler className="w-5 h-5 text-accent-gold" strokeWidth={1.5} />
                              <h4 className="font-paragraph text-base font-semibold text-charcoal">
                                Për Arkitektë
                              </h4>
                            </div>
                            <p className="font-paragraph text-sm text-secondary leading-relaxed">
                              {cert.relevanceForArchitects}
                            </p>
                          </div>
                        )}

                        {cert.relevanceForPublicProjects && (
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Users className="w-5 h-5 text-accent-gold" strokeWidth={1.5} />
                              <h4 className="font-paragraph text-base font-semibold text-charcoal">
                                Për Projekte Publike
                              </h4>
                            </div>
                            <p className="font-paragraph text-sm text-secondary leading-relaxed">
                              {cert.relevanceForPublicProjects}
                            </p>
                          </div>
                        )}

                        {cert.relevanceForIndoorHealth && (
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <Heart className="w-5 h-5 text-accent-gold" strokeWidth={1.5} />
                              <h4 className="font-paragraph text-base font-semibold text-charcoal">
                                Për Shëndetin e Brendshëm
                              </h4>
                            </div>
                            <p className="font-paragraph text-sm text-secondary leading-relaxed">
                              {cert.relevanceForIndoorHealth}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-secondary">
                Informacioni për certifikimet do të shtohet së shpejti.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Key Certifications Overview */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
              Certifikimet Kryesore
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Greenguard Gold
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                Indoor Air Quality Certification
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Certifikim që garanton emetimet e ulëta të VOC dhe cilësinë e lartë të ajrit të brendshëm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Fire Rating Bfl-s1
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                European Fire Classification
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Klasifikim europian i rezistencës ndaj zjarrit, i përshtatshëm për ambiente publike dhe komerciale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                SE+® Anti-Microbial
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                Anti-Microbial Protection
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Veshja anti-mikrobiale që mbron sipërfaqen e dyshemesë në mënyrë të vazhdueshme kundër mikrobeve të dëmshme.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                HPD & EPD
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                Health & Environmental Product Declarations
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Deklarata që dokumentojnë përbërësit e produktit, ndikimin në shëndetin e njeriut dhe ndikimin mjedisor gjatë ciklit të jetës.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Teste Akustike
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                Sound Reduction Testing
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Teste që vërtetojnë performancën akustike dhe reduktimin e zhurmave deri në 21 dB.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 md:p-8"
            >
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Class 33
              </h3>
              <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2 md:mb-3 font-semibold">
                Heavy Commercial Use
              </p>
              <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed">
                Klasifikimi më i lartë për përdorim komercial intensiv, i përshtatshëm për hotele dhe ambiente me trafik të lartë.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
