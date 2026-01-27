import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { LiquidBackground } from '@/components/ui/LiquidBackground';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    title: 'Robotic Assembly Cell',
    category: 'Robotics',
    description: 'Multi-axis robotic cell for automotive component assembly',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
    title: 'Automotive Production Line',
    category: 'Automotive',
    description: 'Fully automated body-in-white assembly line',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    title: 'Electronics Manufacturing',
    category: 'Electronics',
    description: 'High-precision SMT assembly and inspection',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=600&fit=crop',
    title: 'Pharmaceutical Automation',
    category: 'Pharmaceutical',
    description: 'GMP-compliant packaging automation system',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    title: 'Food Processing Line',
    category: 'Food & Beverage',
    description: 'Hygienic bottling and packaging system',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop',
    title: 'Oil & Gas Facility',
    category: 'Oil & Gas',
    description: 'Distributed control system implementation',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop',
    title: 'Aerospace Manufacturing',
    category: 'Aerospace',
    description: 'Precision composite manufacturing cell',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    title: 'Control Room',
    category: 'SCADA',
    description: 'Modern SCADA control center',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
    title: 'Welding Automation',
    category: 'Robotics',
    description: 'Multi-robot welding cell for heavy fabrication',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=600&fit=crop',
    title: 'Conveyor Systems',
    category: 'Material Handling',
    description: 'Automated material handling and sorting',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop',
    title: 'Vision Inspection',
    category: 'Quality',
    description: 'AI-powered visual inspection system',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    title: 'Palletizing Cell',
    category: 'Robotics',
    description: 'High-speed palletizing and depalletizing',
  },
];

const categories = ['All', 'Robotics', 'Automotive', 'Pharmaceutical', 'Electronics', 'SCADA', 'Quality'];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <PageHeader
          badge="Image Gallery"
          title="Our Work in Pictures"
          subtitle="Explore our portfolio of completed automation projects across various industries."
        />

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-background sticky top-16 md:top-20 z-40">
          <div className="section-container">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all font-medium ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section ref={galleryRef} className="section-padding relative">
          <LiquidBackground variant="muted" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={galleryInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                        {image.category}
                      </span>
                      <h3 className="text-white font-bold">{image.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <button
                className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[80vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedImage.title}</h3>
                  <p className="text-white/70 mt-2">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
