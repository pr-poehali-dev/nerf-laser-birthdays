import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BirthdayInfoSection = () => {
  const ageGroups = [
    {
      age: "6-9 лет",
      title: "ЮНЫЕ ВОИНЫ",
      description:
        "Первые шаги в мире приключений. Мягкие бластеры, простые правила и много веселья.",
      features: [
        "Безопасные бластеры",
        "Простые игры",
        "Много поддержки",
        "Яркие эмоции",
      ],
      icon: "Heart",
      color: "bg-pink-500",
    },
    {
      age: "10-13 лет",
      title: "СМЕЛЫЕ РАЗВЕДЧИКИ",
      description:
        "Тактические игры, командная работа и первые серьезные турниры.",
      features: [
        "Командные задания",
        "Тактика и стратегия",
        "Соревновательный дух",
        "Лидерские навыки",
      ],
      icon: "Users",
      color: "bg-blue-500",
    },
    {
      age: "14+ лет",
      title: "ЭЛИТНЫЕ БОЙЦЫ",
      description:
        "Полноценные боевые сценарии, сложные миссии и профессиональное оборудование.",
      features: [
        "Реалистичные сценарии",
        "Продвинутое оружие",
        "Сложные миссии",
        "Максимальный адреналин",
      ],
      icon: "Target",
      color: "bg-red-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "ПЛАНИРОВАНИЕ",
      description:
        "Обсуждаем ваши пожелания, выбираем формат игр и составляем индивидуальную программу",
      icon: "Calendar",
    },
    {
      step: "02",
      title: "ПОДГОТОВКА",
      description:
        "Готовим арену, настраиваем оборудование и создаем атмосферу праздника",
      icon: "Settings",
    },
    {
      step: "03",
      title: "БИТВА",
      description:
        "Проводим незабываемые игры с профессиональными инструкторами",
      icon: "Zap",
    },
    {
      step: "04",
      title: "ПРАЗДНОВАНИЕ",
      description:
        "Торжественное награждение, фотосессия и празднование победы",
      icon: "Trophy",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-game-dark to-black">
      <div className="container mx-auto px-4">
        {/* Main Info Block */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-8">
            ПОЧЕМУ ДЕТИ ОБОЖАЮТ
            <span className="block laser-text">НАШИ ДНИ РОЖДЕНИЯ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 neon-border">
              <Icon
                name="Gamepad2"
                className="w-12 h-12 text-nerf-orange mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                АКТИВНОЕ ВЕСЕЛЬЕ
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Забудьте о скучных посиделках! Ваш ребенок и его друзья окунутся
                в мир приключений, где каждая минута наполнена движением, смехом
                и незабываемыми эмоциями.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 neon-border">
              <Icon
                name="Users"
                className="w-12 h-12 text-neon-blue mx-auto mb-4"
              />
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                КОМАНДНЫЙ ДУХ
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Игры развивают навыки общения, учат работать в команде и
                поддерживать друг друга. Дети не просто играют — они строят
                дружбу и учатся быть лидерами.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-nerf-orange/20 to-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
            <p className="text-xl text-white leading-relaxed">
              <strong className="text-nerf-orange">Каждый день рождения</strong>{" "}
              становится эпическим приключением, которое ваш ребенок будет
              вспоминать годами. Мы создаем не просто праздник —
              <strong className="text-laser-green"> мы создаем легенды!</strong>
            </p>
          </div>
        </div>

        {/* Age Groups */}
        <div className="mb-20">
          <h3 className="font-montserrat font-black text-3xl md:text-5xl text-white text-center mb-12">
            ПРОГРАММЫ ДЛЯ <span className="laser-text">КАЖДОГО ВОЗРАСТА</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card
                key={index}
                className="bg-black/80 backdrop-blur-sm border-2 border-gray-700 hover:border-nerf-orange transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${group.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon
                      name={group.icon as any}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-2xl text-white">
                    {group.title}
                  </CardTitle>
                  <div className="text-nerf-orange font-bold text-lg">
                    {group.age}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Icon
                          name="Check"
                          className="w-4 h-4 text-laser-green mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="font-montserrat font-black text-3xl md:text-5xl text-white text-center mb-12">
            КАК ПРОХОДИТ <span className="laser-text">ВАШ ПРАЗДНИК</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-nerf-orange to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-montserrat font-black text-2xl text-white">
                    {step.step}
                  </span>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 neon-border h-full">
                  <Icon
                    name={step.icon as any}
                    className="w-8 h-8 text-nerf-orange mx-auto mb-4"
                  />
                  <h4 className="font-montserrat font-bold text-lg text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-r from-black/80 to-game-dark/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-700">
          <h3 className="font-montserrat font-black text-3xl md:text-4xl text-white text-center mb-8">
            ЧТО ВКЛЮЧЕНО В <span className="laser-text">КАЖДЫЙ ПРАЗДНИК</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Shield",
                title: "Безопасное оборудование",
                desc: "Сертифицированные бластеры и защитная экипировка",
              },
              {
                icon: "Users",
                title: "Профессиональные инструкторы",
                desc: "Опытные аниматоры и судьи игр",
              },
              {
                icon: "Camera",
                title: "Фото и видеосъёмка",
                desc: "Все яркие моменты будут сохранены",
              },
              {
                icon: "Gift",
                title: "Призы и награды",
                desc: "Медали, грамоты и памятные подарки",
              },
              {
                icon: "Music",
                title: "Музыкальное сопровождение",
                desc: "Энергичная музыка для поднятия духа",
              },
              {
                icon: "Cake",
                title: "Зона для торжества",
                desc: "Отдельное место для торта и поздравлений",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-black/30 rounded-xl"
              >
                <Icon
                  name={item.icon as any}
                  className="w-8 h-8 text-nerf-orange flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayInfoSection;
