import { Star, Play } from "lucide-react";

const testimonials = [
  {
    name: "Moacir Ronaldo",
    age: "58 anos",
    videoUrl: "https://www.youtube.com/embed/ssD6jZJ74n0",
    rating: 5
  },
  {
    name: "Fernando Henrique",
    age: "30 anos",
    videoUrl: "https://www.youtube.com/embed/HokOR8cj678",
    rating: 5
  },
  {
    name: "Marcelo Duarte",
    age: "47 anos",
    videoUrl: "https://www.youtube.com/embed/CX2BJ-mIlgU",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Quem já <span className="text-gradient-gold">realizou o sonho</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Histórias reais de pessoas como você
            </p>
          </div>

          {/* Testimonial video cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elegant relative hover:border-primary/30 transition-all duration-300"
              >
                {/* Video frame vertical 9:16 */}
                <div
                  className="video-frame relative w-full mb-4 overflow-hidden"
                  style={{ aspectRatio: '9/16' }}
                >
                  {testimonial.videoUrl ? (
                    <iframe
                      src={testimonial.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-dark flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-colors cursor-pointer">
                        <Play className="w-8 h-8 text-primary fill-primary/30" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: 'hsl(42 85% 55%)', color: 'hsl(42 85% 55%)' }} />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-background" />
              </div>
              <span className="text-muted-foreground">
                <span className="text-foreground font-semibold">+50.000</span> músicas criadas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
