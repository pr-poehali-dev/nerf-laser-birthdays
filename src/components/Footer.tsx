import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-game-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-nerf-orange rounded-full flex items-center justify-center mr-3">
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-montserrat font-black text-2xl text-white">
                NERF BIRTHDAY
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Организуем незабываемые дни рождения с нерф-битвами и лазертагом.
              Твой праздник станет легендарным!
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 hover:bg-nerf-orange rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Icon name="Instagram" className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-neon-blue rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Icon name="MessageCircle" className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 hover:bg-laser-green rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Icon name="Youtube" className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-lg mb-4">
              БЫСТРЫЕ ССЫЛКИ
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#packages"
                  className="text-gray-300 hover:text-nerf-orange transition-colors"
                >
                  Пакеты услуг
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-nerf-orange transition-colors"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-nerf-orange transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  className="text-gray-300 hover:text-nerf-orange transition-colors"
                >
                  Правила игры
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-lg mb-4">
              КОНТАКТЫ
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Icon name="MapPin" className="w-5 h-5 text-nerf-orange mr-3" />
                <span>ул. Игровая, 42, Москва</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Icon name="Phone" className="w-5 h-5 text-neon-blue mr-3" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Icon name="Clock" className="w-5 h-5 text-laser-green mr-3" />
                <span>10:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Nerf Birthday. Все права защищены. Сделано с 🔥 для
            незабываемых праздников
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
