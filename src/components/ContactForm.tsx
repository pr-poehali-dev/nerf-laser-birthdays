import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    participants: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-game-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white mb-6">
              ГОТОВ К<span className="block laser-text">БИТВЕ?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Забронируй свой день рождения прямо сейчас и получи скидку 10%
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-black/80 backdrop-blur-sm border-2 border-gray-700 neon-border">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-white text-2xl flex items-center">
                    <Icon
                      name="MapPin"
                      className="w-6 h-6 text-nerf-orange mr-3"
                    />
                    НАША БАЗА
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">ул. Игровая, 42, Москва</p>
                  <p className="mb-2">🕒 Работаем: 10:00 - 22:00</p>
                  <p>🎯 Парковка бесплатная</p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border-2 border-gray-700 neon-border">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-white text-2xl flex items-center">
                    <Icon
                      name="Phone"
                      className="w-6 h-6 text-neon-blue mr-3"
                    />
                    СВЯЗЬ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      className="w-5 h-5 text-nerf-orange mr-3"
                    />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="w-5 h-5 text-neon-blue mr-3" />
                    <span>info@nerfbirthday.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      className="w-5 h-5 text-laser-green mr-3"
                    />
                    <span>Telegram: @nerfparty</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <Card className="bg-black/80 backdrop-blur-sm border-2 border-nerf-orange neon-border">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-white text-2xl text-center">
                  БРОНИРОВАНИЕ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium">
                      Имя именинника
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-nerf-orange"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-white font-medium">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-nerf-orange"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-nerf-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-white font-medium">
                        Дата праздника
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white focus:border-nerf-orange"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="participants"
                        className="text-white font-medium"
                      >
                        Количество гостей
                      </Label>
                      <Input
                        id="participants"
                        name="participants"
                        type="number"
                        placeholder="8"
                        min="1"
                        max="20"
                        value={formData.participants}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-nerf-orange"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="package" className="text-white font-medium">
                      Выберите пакет
                    </Label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-nerf-orange focus:outline-none"
                      required
                    >
                      <option value="">Выберите пакет</option>
                      <option value="basic">Базовый штурм - 2500₽</option>
                      <option value="elite">Элитный отряд - 4500₽</option>
                      <option value="legendary">
                        Легендарный турнир - 7000₽
                      </option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium">
                      Дополнительные пожелания
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Расскажите о своих пожеланиях..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[100px] rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-400 focus:border-nerf-orange focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-nerf-orange hover:bg-orange-600 text-white font-montserrat font-bold text-lg py-6 animate-pulse-neon"
                  >
                    <Icon name="Calendar" className="mr-2" />
                    ЗАБРОНИРОВАТЬ СЕЙЧАС
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
