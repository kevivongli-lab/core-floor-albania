import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Projects>('projects');
      const sortedProjects = result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      setProjects(sortedProjects);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/b9443e_ce9d258dbd76423ab4cea925eada4986~mv2.png?originWidth=1920&originHeight=640"
            alt="Projektet Tona"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6">
              Projektet Tona
            </h1>
            <p className="font-paragraph text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Realizime reale me dysheme SPC në Shqipëri — apartamente, vila, hotele dhe ambiente biznesi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="min-h-[400px]">
            {isLoading ? null : projects.length > 0 ? (
              <div className="space-y-16 md:space-y-24">
                {projects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                        {project.mainImage && (
                          <Image
                            src={project.mainImage}
                            alt={project.projectName || 'Project'}
                            className="w-full h-full object-cover"
                            width={800}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-4 md:space-y-6">
                        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal">
                          {project.projectName}
                        </h2>
                        
                        <div className="space-y-2 md:space-y-3">
                          {project.projectType && (
                            <div className="flex items-start gap-2 md:gap-3">
                              <span className="font-paragraph text-xs sm:text-sm font-semibold text-accent-gold uppercase tracking-wider min-w-[100px] sm:min-w-[120px]">
                                Lloji:
                              </span>
                              <span className="font-paragraph text-sm md:text-base text-secondary">
                                {project.projectType}
                              </span>
                            </div>
                          )}
                          
                          {project.location && (
                            <div className="flex items-start gap-2 md:gap-3">
                              <span className="font-paragraph text-xs sm:text-sm font-semibold text-accent-gold uppercase tracking-wider min-w-[100px] sm:min-w-[120px]">
                                Vendndodhja:
                              </span>
                              <span className="font-paragraph text-sm md:text-base text-secondary">
                                {project.location}
                              </span>
                            </div>
                          )}
                          
                          {project.productUsed && (
                            <div className="flex items-start gap-2 md:gap-3">
                              <span className="font-paragraph text-xs sm:text-sm font-semibold text-accent-gold uppercase tracking-wider min-w-[100px] sm:min-w-[120px]">
                                Produkti:
                              </span>
                              <span className="font-paragraph text-sm md:text-base text-secondary">
                                {project.productUsed}
                              </span>
                            </div>
                          )}

                          {project.completionYear && (
                            <div className="flex items-start gap-2 md:gap-3">
                              <span className="font-paragraph text-xs sm:text-sm font-semibold text-accent-gold uppercase tracking-wider min-w-[100px] sm:min-w-[120px]">
                                Viti:
                              </span>
                              <span className="font-paragraph text-sm md:text-base text-secondary">
                                {project.completionYear}
                              </span>
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
                  Nuk ka projekte të disponueshme aktualisht.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
