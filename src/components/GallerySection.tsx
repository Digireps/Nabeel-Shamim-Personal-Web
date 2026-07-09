import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const galleryImages = [
  { src: "/gallery/1.webp", alt: "Nabeel Shamim presenting at a corporate event" },
  { src: "/gallery/2.webp", alt: "Nabeel Shamim on stage during a business keynote speech" },
  { src: "/gallery/3.webp", alt: "Nabeel Shamim interacting with attendees at a tech summit" },
  { src: "/gallery/4.webp", alt: "Nabeel Shamim speaking on leadership and entrepreneurship" },
  { src: "/gallery/5.webp", alt: "Nabeel Shamim panel discussion at a startup seminar" },
  { src: "/gallery/6.webp", alt: "Nabeel Shamim networking with industry leaders" },
  { src: "/gallery/7.webp", alt: "Nabeel Shamim attending a Forbes Business Council event" },
  { src: "/gallery/8.webp", alt: "Nabeel Shamim leading a DigiReps team office workshop" },
  { src: "/gallery/9.webp", alt: "Nabeel Shamim participating in an entrepreneurial forum" },
  { src: "/gallery/10.webp", alt: "Nabeel Shamim giving an interview on business growth and leadership" },
  { src: "/gallery/11.webp", alt: "Nabeel Shamim with team members at DigiReps" },
  { src: "/gallery/12.webp", alt: "Nabeel Shamim receiving a prestigious recognition award" },
  { src: "/gallery/13.png", alt: "Nabeel Shamim posing with corporate team and colleagues" },
  { src: "/gallery/14.png", alt: "Nabeel Shamim during a meeting with executive board members" },
  { src: "/gallery/15.png", alt: "Nabeel Shamim at a professional networking dinner event" },
  { src: "/gallery/16.png", alt: "Nabeel Shamim discussing business strategies at a roundtable conference" },
  { src: "/gallery/17.png", alt: "Nabeel Shamim speaking session as a featured entrepreneur" },
];

const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedImages = isMobile ? galleryImages : [...galleryImages, ...galleryImages];

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
            style={{ 
              willChange: 'transform', 
              contain: 'layout style paint',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
            animate={isMobile ? false : { x: ["0%", "-50%"] }} 
            transition={isMobile ? undefined : { ease: "linear", duration: 40, repeat: Infinity }}
            whileHover={isMobile ? undefined : { animationPlayState: "paused" }}
          >
            {displayedImages.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item.src)}
                className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group/item"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="absolute inset-px rounded-[2.4rem] border border-white/60 z-20 pointer-events-none" />
                <img
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover/item:grayscale-0 transition-all duration-1000 ease-out"
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
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
                alt={galleryImages.find(img => img.src === selectedImage)?.alt || "Muhammad Nabeel Shamim Milestone"} 
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