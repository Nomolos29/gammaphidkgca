import heroImage from "@/public/hero-educators.jpg";
import roseImage from "@/public/rose-watercolor.png";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  showRose?: boolean;
  backgroundImage?: boolean;
}

const Hero = ({ title, subtitle, showRose = true, backgroundImage = true }: HeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Women educators collaborating"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 text-center py-32">
        {showRose && (
          <Image
            src={roseImage}
            alt="Rose emblem"
            width={20}
            height={20}
            className="w-20 h-20 mx-auto mb-8 opacity-90 fade-in"
          />
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight tracking-tight text-foreground mb-6 fade-in stagger-1">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto fade-in stagger-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
