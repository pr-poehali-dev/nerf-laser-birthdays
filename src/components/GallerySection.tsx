import Icon from "@/components/ui/icon";

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
      alt: "Нерф битва в действии",
      title: "Эпические битвы",
    },
    {
      src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=400&fit=crop",
      alt: "Лазертag арена",
      title: "Футуристические дуэли",
    },
    {
      src: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=500&h=400&fit=crop",
      alt: "Дети играют в команде",
      title: "Командная работа",
    },
    {
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop",
      alt: "Празднование победы",
      title: "Моменты триумфа",
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
      alt: "Игровая арена",
      title: "Игровые зоны",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      alt: "Счастливые дети",
      title: "Незабываемые эмоции",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-game-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-6">
            МОМЕНТЫ
            <span className="block laser-text">СЛАВЫ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Посмотри, как проходят наши незабываемые битвы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm neon-border hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-nerf-orange">
                    <Icon name="Play" className="w-5 h-5 mr-2" />
                    <span className="font-medium">Смотреть</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-nerf-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="Expand" className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 neon-border">
            <Icon name="Camera" className="w-5 h-5 text-nerf-orange mr-3" />
            <span className="text-white font-medium">
              Профессиональная фото и видеосъемка включена
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
