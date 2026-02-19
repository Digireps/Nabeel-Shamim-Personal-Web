import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const galleryImages = [
  "/gallery/1.png", "/gallery/2.png", "/gallery/3.png", "/gallery/4.png", 
  "/gallery/5.png", "/gallery/6.png", "/gallery/7.png", "/gallery/8.png", 
  "/gallery/9.png", "/gallery/10.png", "/gallery/11.png", "/gallery/12.png"
];

const GallerySection = () => {
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scroll when image is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-zinc-200" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">Visual Narrative</p>
            <div className="h-[1px] w-8 bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f]">
            Moments & <span className="text-primary italic font-light">Milestones.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex items-center group">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth w-full cursor-pointer"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-33.333%"] }} 
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedImages.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(src)}
                className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group/item"
              >
                <div className="absolute inset-px rounded-[2.4rem] border border-white/60 z-20 pointer-events-none" />
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover/item:grayscale-0 transition-all duration-1000 ease-out"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex justify-center gap-6">
        <button onClick={() => handleManualScroll('left')} className="w-14 h-14 rounded-full border border-zinc-200 bg-white flex items-center justify-center shadow-sm hover:border-primary transition-all active:scale-95">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => handleManualScroll('right')} className="w-14 h-14 rounded-full border border-zinc-200 bg-white flex items-center justify-center shadow-sm hover:border-primary transition-all active:scale-95">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[1010]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1.5} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative aspect-[1920/1200] max-w-full max-h-full overflow-hidden rounded-3xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected Milestone" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;