import { motion } from "framer-motion";

// Updated list: 1-12 in .png format
const galleryImages = [
  "/gallery/1.png", "/gallery/2.png", "/gallery/3.png", "/gallery/4.png", 
  "/gallery/5.png", "/gallery/6.png", "/gallery/7.png", "/gallery/8.png", 
  "/gallery/9.png", "/gallery/10.png", "/gallery/11.png", "/gallery/12.png"
];

const GallerySection = () => {
  // Duplicating the array ensures there is always content following the last image
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* RICH UI Glow */}
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
        {/* Apple-style gradient fades for seamless transitions */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          /* FIX: Changed to "-50%" to match the duplicated array. 
             This ensures the animation resets at the exact point the 
             second set of images replaces the first set, preventing blank gaps.
          */
          style={{ willChange: "transform" }}
          animate={{ x: [0, "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 group/item"
            >
              <div className="absolute inset-px rounded-[2.4rem] border border-white/60 z-20 pointer-events-none" />
              
              <img
                src={src}
                alt={`Gallery image ${index}`}
                width={720}
                height={450}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.3] group-hover/item:grayscale-0 transition-all duration-1000 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/gallery/placeholder.png';
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;