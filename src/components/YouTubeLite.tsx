import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeLiteProps {
  videoId: string;
  title: string;
}

const YouTubeLite = ({ videoId, title }: YouTubeLiteProps) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full absolute inset-0"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="w-full h-full relative group/play cursor-pointer bg-black"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover opacity-80 group-hover/play:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform">
          <Play size={28} className="text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
};

export default YouTubeLite;
