import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PackagesSection = () => {
  const packages = [
    {
      name: "БАЗОВЫЙ ШТУРМ",
      price: "2500₽",
      duration: "1 час",
      participants: "до 8 человек",
      features: [
        "Нерф-бластеры и защита",
        "Игровая зона с укрытиями",
        "Аниматор-инструктор",
        "Фотосессия",
        "Почетная грамота",
      ],
      icon: "Shield",
      color: "bg-gradient-to-br from-nerf-orange to-orange-600",
      popular: false,
    },
    {
      name: "ЭЛИТНЫЙ ОТРЯД",
      price: "4500₽",
      duration: "2 часа",
      participants: "до 12 человек",
      features: [
        "Нерф + Лазертаг",
        "Расширенная арена",
        "Профессиональное оборудование",
        "Видеосъемка битв",
        "Торт и напитки",
        "Медали для всех",
      ],
      icon: "Star",
      color: "bg-gradient-to-br from-neon-blue to-blue-600",
      popular: true,
    },
    {
      name: "ЛЕГЕНДАРНЫЙ ТУРНИР",
      price: "7000₽",
      duration: "3 часа",
      participants: "до 16 человек",
      features: [
        "Полный пакет развлечений",
        "Две игровые зоны",
        "Профессиональная видеосъемка",
        "Банкет в игровой зоне",
        "Именной торт",
        "Кубок чемпиона",
        "Подарки всем участникам",
      ],
      icon: "Crown",
      color: "bg-gradient-to-br from-laser-green to-green-600",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-game-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-6">
            ВЫБЕРИ СВОЙ
            <span className="block laser-text">БОЕВОЙ ПАКЕТ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Каждый пакет создан для максимального веселья и незабываемых
            впечатлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 border-gray-700 bg-black/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                pkg.popular
                  ? "border-nerf-orange shadow-2xl shadow-nerf-orange/20"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-nerf-orange text-white text-center py-2 font-montserrat font-bold text-sm">
                  🔥 САМЫЙ ПОПУЛЯРНЫЙ
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4 mt-${pkg.popular ? "8" : "4"}`}
                >
                  <Icon name={pkg.icon as any} className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-montserrat font-black text-2xl text-white">
                  {pkg.name}
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-montserrat font-black text-nerf-orange">
                    {pkg.price}
                  </span>
                  <CardDescription className="text-gray-300 mt-2">
                    {pkg.duration} • {pkg.participants}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-laser-green mr-3 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full font-montserrat font-bold text-lg py-6 ${
                    pkg.popular
                      ? "bg-nerf-orange hover:bg-orange-600 animate-pulse-neon"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }`}
                >
                  <Icon name="Zap" className="mr-2" />
                  ЗАБРОНИРОВАТЬ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
