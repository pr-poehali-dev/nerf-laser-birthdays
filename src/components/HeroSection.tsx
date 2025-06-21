import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-game-dark via-slate-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nerf-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-neon-blue rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-laser-green rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            ДЕНЬ РОЖДЕНИЯ
            <span className="block laser-text font-black animate-glow mt-2">
              НОВОГО УРОВНЯ
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Нерф-битвы, лазертаг и адреналин! Сделай свой праздник незабываемым
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-nerf-orange hover:bg-orange-600 text-white font-montserrat font-bold text-lg px-8 py-6 neon-border animate-pulse-neon"
            >
              <Icon name="Zap" className="mr-2" />
              ЗАБРОНИРОВАТЬ БИТВУ
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-game-dark font-montserrat font-semibold text-lg px-8 py-6"
            >
              <Icon name="Play" className="mr-2" />
              ПОСМОТРЕТЬ ВИДЕО
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 neon-border">
              <Icon
                name="Target"
                className="w-12 h-12 text-nerf-orange mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                НЕРФ-БИТВЫ
              </h3>
              <p className="text-gray-300">Эпические сражения с бластерами</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 neon-border">
              <Icon
                name="Crosshair"
                className="w-12 h-12 text-neon-blue mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                ЛАЗЕРТАГ
              </h3>
              <p className="text-gray-300">Футуристические лазерные дуэли</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 neon-border">
              <Icon
                name="Trophy"
                className="w-12 h-12 text-laser-green mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">
                ТУРНИРЫ
              </h3>
              <p className="text-gray-300">Командные соревнования</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
