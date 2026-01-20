import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { SPCFlooringProducts } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplets, Shield, Volume2, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<SPCFlooringProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<SPCFlooringProducts>('products');
      setProducts(result.items);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getProductImages = (product: SPCFlooringProducts) => {
    const images = [];
    if (product.productImage) images.push(product.productImage);
    if (product.secondaryImage) images.push(product.secondaryImage);
    if (images.length === 0) {
      images.push('https://static.wixstatic.com/media/b9443e_0f7a55d87c2d4b4e81d7c31a806ac2e7~mv2.png?originWidth=576&originHeight=448');
    }
    return images;
  };

  const handlePrevImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const handleNextImage = (productId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

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
              Produktet Tona
            </h1>
            <p className="font-paragraph text-base sm:text-lg md:text-xl text-secondary leading-relaxed">
              Dysheme SPC profesionale me performancë të lartë për projekte komerciale dhe rezidenciale
            </p>
          </motion.div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="w-full bg-background py-8 md:py-12 border-b border-light-grey/30">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-paragraph text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-secondary hover:bg-beige'
                }`}
              >
                {category === 'all' ? 'Të Gjitha' : category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="w-full py-16 md:py-24 min-h-[600px]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          {isLoading ? null : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const images = getProductImages(product);
                const currentIndex = currentImageIndex[product._id] || 0;
                const hasMultipleImages = images.length > 1;

                return (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white overflow-hidden group"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={images[currentIndex]}
                        alt={product.productName || 'SPC Product'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={600}
                      />
                      
                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={() => handlePrevImage(product._id, images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          
                          <button
                            onClick={() => handleNextImage(product._id, images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-2 rounded-full shadow-lg transition-all"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [product._id]: idx }))}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-6 md:p-8">
                      {product.category && (
                        <span className="inline-block font-paragraph text-xs text-secondary uppercase tracking-wider mb-2 md:mb-3">
                          {product.category}
                        </span>
                      )}
                      
                      <h3 className="font-heading text-xl md:text-2xl text-charcoal mb-3 md:mb-4">
                        {product.productName}
                      </h3>
                      
                      <p className="font-paragraph text-sm text-secondary leading-relaxed mb-4 md:mb-6">
                        {product.description}
                      </p>

                      {/* Technical Specs */}
                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-light-grey/30">
                        {product.totalThickness && (
                          <div className="flex items-center gap-3">
                            <Layers className="w-4 h-4 text-secondary" />
                            <span className="font-paragraph text-sm text-secondary">
                              Trashësia: <span className="text-charcoal font-semibold">{product.totalThickness} mm</span>
                            </span>
                          </div>
                        )}
                        
                        {product.wearLayer && (
                          <div className="flex items-center gap-3">
                            <Shield className="w-4 h-4 text-secondary" />
                            <span className="font-paragraph text-sm text-secondary">
                              Wear Layer: <span className="text-charcoal font-semibold">{product.wearLayer} mm</span>
                            </span>
                          </div>
                        )}
                        
                        {product.usageClass && (
                          <div className="flex items-center gap-3">
                            <Shield className="w-4 h-4 text-secondary" />
                            <span className="font-paragraph text-sm text-secondary">
                              Class: <span className="text-charcoal font-semibold">{product.usageClass}</span>
                            </span>
                          </div>
                        )}
                        
                        {product.acousticRating && (
                          <div className="flex items-center gap-3">
                            <Volume2 className="w-4 h-4 text-secondary" />
                            <span className="font-paragraph text-sm text-secondary">
                              Akustikë: <span className="text-charcoal font-semibold">{product.acousticRating} dB</span>
                            </span>
                          </div>
                        )}
                        
                        {product.clickSystem && (
                          <div className="flex items-center gap-3">
                            <Droplets className="w-4 h-4 text-secondary" />
                            <span className="font-paragraph text-sm text-secondary">
                              Sistem: <span className="text-charcoal font-semibold">{product.clickSystem}</span>
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-3">
                        <Button
                          variant="outline"
                          className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                          onClick={() => window.location.href = '/kontakt'}
                        >
                          Kërko Skedë Teknike
                        </Button>
                        <Button
                          className="w-full hover:bg-accent-gold/90 text-white bg-[#b8864fff]"
                          onClick={() => window.location.href = '/kontakt'}
                        >
                          Kërko Mostra
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-secondary">
                Nuk ka produkte në këtë kategori.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-charcoal mb-4 md:mb-6">
              Keni Nevojë për Konsulencë Teknike?
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
              Ekipi ynë është gati të ju ndihmojë me zgjedhjen e produktit të duhur për projektin tuaj
            </p>
            <Button 
              size="lg" 
              className="bg-accent-gold hover:bg-accent-gold/90 text-white font-paragraph font-semibold px-8 md:px-10 py-5 md:py-6 w-full sm:w-auto"
              onClick={() => window.location.href = '/kontakt'}
            >
              Kontakto Ekspertët
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
