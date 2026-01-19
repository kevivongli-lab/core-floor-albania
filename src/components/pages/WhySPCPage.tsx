import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { SPCEducationAdvantages } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplets, Shield, Thermometer, Zap, CheckCircle2 } from 'lucide-react';

export default function WhySPCPage() {
  const [advantages, setAdvantages] = useState<SPCEducationAdvantages[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAdvantages();
  }, []);

  const loadAdvantages = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<SPCEducationAdvantages>('educationaltopics');
      const sorted = result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      setAdvantages(sorted);
    } catch (error) {
      console.error('Error loading advantages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const comparisonFeatures = [
    {
      feature: 'Rezistenca ndaj Ujit',
      spc: '100% Waterproof',
      laminate: 'Jo i rezistueshëm',
      icon: Droplets
    },
    {
      feature: 'Stabiliteti Dimensional',
      spc: 'Shumë i lartë',
      laminate: 'I kufizuar',
      icon: Shield
    },
    {
      feature: 'Rezistenca ndaj Temperaturës',
      spc: 'E shkëlqyer',
      laminate: 'E moderuar',
      icon: Thermometer
    },
    {
      feature: 'Instalimi',
      spc: 'I thjeshtë, pa aklimatizim',
      laminate: 'Kërkon aklimatizim',
      icon: Zap
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
              Pse SPC?
            </h1>
            <p className="font-paragraph text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              Teknologjia e re që po zëvendëson laminatin në projekte profesionale
            </p>
          </motion.div>
        </div>
      </section>
      {/* What is SPC */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
                Çfarë është SPC?
              </h2>
              <p className="font-paragraph text-sm sm:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                SPC (Stone Plastic Composite) është një teknologji e re dyshemeje që kombinon gur natyror me polimere të avancuar. Rezultati është një dysheme 100% waterproof, shumë e qëndrueshme dhe e përshtatshme për përdorim intensiv.
              </p>
              <p className="font-paragraph text-sm sm:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                Ndryshe nga laminati tradicional që përmban dru dhe është i ndjeshëm ndaj lagështirës, SPC është i ndërtuar nga një bërthamë e fortë guri që e bën atë plotësisht të papërshkueshëm nga uji.
              </p>
              <p className="font-paragraph text-sm sm:text-base text-secondary leading-relaxed">
                Kjo e bën SPC zgjedhjen ideale për hotele, ambiente me lagështirë të lartë, banja, kuzhina dhe çdo hapësirë ku laminati tradicional do të dështonte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]"
            >
              <Image
                src="https://static.wixstatic.com/media/b9443e_ef54391b1b8a4c4fb15fa68e634a95a6~mv2.jpg"
                className="w-full h-full object-cover"
                width={800}
                originWidth={960}
                originHeight={1280} />
            </motion.div>
          </div>
        </div>
      </section>
      {/* SPC vs Laminate Comparison */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
              SPC vs Laminat
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-secondary max-w-3xl mx-auto">
              Krahasimi i karakteristikave kryesore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {comparisonFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 md:p-8"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-beige rounded-sm flex items-center justify-center">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-charcoal">
                    {item.feature}
                  </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-paragraph text-sm text-charcoal font-semibold mb-1">SPC</p>
                      <p className="font-paragraph text-sm text-secondary">{item.spc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border border-light-grey rounded-full flex-shrink-0 mt-0.5"></div>
                    <div>
                      <p className="font-paragraph text-sm text-charcoal font-semibold mb-1">Laminat</p>
                      <p className="font-paragraph text-sm text-secondary">{item.laminate}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Educational Topics from CMS */}
      <section className="w-full py-16 md:py-24 bg-background min-h-[400px]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
              Avantazhet e SPC
            </h2>
          </motion.div>

          {isLoading ? null : advantages.length > 0 ? (
            <div className="space-y-16 md:space-y-24">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal mb-3 md:mb-4">
                      {advantage.topicTitle}
                    </h3>
                    <p className="font-paragraph text-base sm:text-lg text-secondary leading-relaxed mb-4 md:mb-6">
                      {advantage.shortDescription}
                    </p>
                    {advantage.detailedExplanation && (
                      <p className="font-paragraph text-sm sm:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                        {advantage.detailedExplanation}
                      </p>
                    )}
                    {advantage.comparisonHighlight && (
                      <div className="bg-white p-4 md:p-6 border-l-4 border-accent-gold">
                        <p className="font-paragraph text-xs sm:text-sm text-charcoal font-semibold">
                          {advantage.comparisonHighlight}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={advantage.illustrativeImage || 'https://static.wixstatic.com/media/b9443e_7416c480381c450aab6528565c35fccd~mv2.png?originWidth=768&originHeight=384'}
                      alt={advantage.topicTitle || 'SPC Advantage'}
                      className="w-full h-full object-cover"
                      width={800}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      {/* Why SPC for Hotels */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4 md:mb-6">
              Pse SPC është Ideal për Hotele dhe Qira
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-beige rounded-sm mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Droplets className="w-7 h-7 md:w-8 md:h-8 text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Zero Dëmtime nga Uji
              </h3>
              <p className="font-paragraph text-sm md:text-base text-secondary leading-relaxed">
                Në ambiente me përdorim intensiv si hotelet, aksidentet me ujë janë të pashmangshme. SPC nuk fryhet, nuk deformohet dhe nuk dëmtohet nga lagështira.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-beige rounded-sm mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Qëndrueshmëri Afatgjatë
              </h3>
              <p className="font-paragraph text-sm md:text-base text-secondary leading-relaxed">
                Me wear layer 0.55mm dhe Class 33, SPC reziston trafikun e lartë për vite të tëra pa humbur cilësinë estetike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-beige rounded-sm mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Zap className="w-7 h-7 md:w-8 md:h-8 text-charcoal" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                Mirëmbajtje e Lehtë
              </h3>
              <p className="font-paragraph text-sm md:text-base text-secondary leading-relaxed">
                Pastrimi është i thjeshtë dhe i shpejtë. Nuk kërkon produkte të veçanta ose mirëmbajtje periodike si laminati.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
