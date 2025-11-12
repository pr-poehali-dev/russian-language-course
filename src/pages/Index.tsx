import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const lessons = [
    {
      week: 1,
      title: "Орфография. Секреты безударной гласной",
      topics: [
        "Проверяемые и непроверяемые безударные гласные в корне",
        "Чередования гласных в корне слова",
        "Практика: подбор проверочных слов"
      ],
      tools: ["LearningApps", "Miro"],
      icon: "PenTool",
      color: "bg-purple-100"
    },
    {
      week: 2,
      title: "Знаки препинания: точка, запятая и не только",
      topics: [
        "Простое предложение. Однородные члены",
        "Сложное предложение: запятая, тире, двоеточие",
        "Синтаксический разбор предложений"
      ],
      tools: ["Edpuzzle", "Wordwall", "Google Forms"],
      icon: "FileText",
      color: "bg-green-100"
    },
    {
      week: 3,
      title: "Части речи: узнаем «в лицо»",
      topics: [
        "Морфологические признаки самостоятельных частей речи",
        "Служебные части речи",
        "Морфологический разбор"
      ],
      tools: ["Kahoot!", "LearningApps", "Jamboard"],
      icon: "BookOpen",
      color: "bg-yellow-100"
    },
    {
      week: 4,
      title: "Строим текст: от абзаца к сочинению",
      topics: [
        "Тема и основная мысль текста",
        "Структура абзаца. Связь между предложениями",
        "Виды текстов. Составление плана сочинения"
      ],
      tools: ["Miro", "Google Документы", "Padlet"],
      icon: "Layout",
      color: "bg-orange-100"
    },
    {
      week: 5,
      title: "Культура речи. Говорим красиво и правильно",
      topics: [
        "Нормы ударения. Орфоэпический словарь",
        "Паронимы. Плеоназмы и тавтология",
        "Подготовка к устному ответу"
      ],
      tools: ["Quizizz", "Подкаст-платформы"],
      icon: "Mic",
      color: "bg-pink-100"
    }
  ];

  const tools = [
    { name: "LearningApps", description: "Интерактивные задания и игры", icon: "Gamepad2" },
    { name: "Miro", description: "Онлайн-доски для коллективной работы", icon: "Grid3x3" },
    { name: "Kahoot!", description: "Викторины и опросы", icon: "Trophy" },
    { name: "Edpuzzle", description: "Видео с встроенными вопросами", icon: "Video" },
    { name: "Google Forms", description: "Создание тестов и опросов", icon: "ClipboardList" },
    { name: "Quizizz", description: "Тесты в игровой форме", icon: "Target" }
  ];

  const results = [
    { category: "Будет знать", items: [
      "Ключевые орфографические и пунктуационные правила за 5-7 классы",
      "Основы морфологии и синтаксиса",
      "Структуру и виды текстов"
    ]},
    { category: "Будет уметь", items: [
      "Применять изученные правила при написании текстов",
      "Грамотно строить устные и письменные высказывания",
      "Находить и исправлять грамматические и речевые ошибки"
    ]},
    { category: "Разовьет", items: [
      "Навык самопроверки и работы над ошибками",
      "Уверенность в устной речи",
      "Интерес к русскому языку через интерактивные форматы"
    ]}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              5 недель • 5 занятий • Онлайн
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Русский язык для 5-7 классов
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
            Пишем и говорим уверенно! 🚀
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Систематизируем знания, ликвидируем пробелы и развиваем практические навыки грамотного письма через интерактивные форматы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-transform">
              <Icon name="Rocket" className="mr-2" size={24} />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-transform">
              <Icon name="Info" className="mr-2" size={24} />
              Узнать подробнее
            </Button>
          </div>
        </header>

        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              🎯 Цель и результаты курса
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Для учащихся 5-7 классов, желающих улучшить оценки и повысить мотивацию к изучению русского языка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {results.map((result, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-600 flex items-center gap-2">
                    {result.category === "Будет знать" && <Icon name="Brain" size={28} />}
                    {result.category === "Будет уметь" && <Icon name="Star" size={28} />}
                    {result.category === "Разовьет" && <Icon name="TrendingUp" size={28} />}
                    {result.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {result.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              📚 Программа курса
            </h2>
            <p className="text-lg text-gray-600">
              5 увлекательных занятий с интерактивными заданиями
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {lessons.map((lesson, index) => (
              <AccordionItem 
                key={index} 
                value={`lesson-${index}`}
                className="border-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline bg-white hover:bg-gray-50">
                  <div className="flex items-center gap-4 w-full text-left">
                    <div className={`${lesson.color} rounded-full p-4 flex-shrink-0`}>
                      <Icon name={lesson.icon as any} size={28} className="text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          Неделя {lesson.week}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-5 bg-gradient-to-br from-gray-50 to-white">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Icon name="BookOpen" size={20} />
                        Основные темы:
                      </h4>
                      <ul className="space-y-2 ml-7">
                        {lesson.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="ChevronRight" className="text-purple-500 flex-shrink-0 mt-1" size={18} />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Icon name="Wrench" size={20} />
                        Цифровые инструменты:
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-7">
                        {lesson.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="px-3 py-1 text-sm border-purple-300 text-purple-700">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              🛠️ Цифровые инструменты
            </h2>
            <p className="text-lg text-gray-600">
              Современные платформы для повышения вовлечённости
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 hover:-translate-y-1 cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-3">
                      <Icon name={tool.icon as any} size={28} className="text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl text-white shadow-2xl animate-fade-in">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать путь к уверенному владению русским языком? 🎓
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Присоединяйтесь к курсу и откройте для себя увлекательный мир грамотной речи!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-transform">
                <Icon name="Mail" className="mr-2" size={24} />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform">
                <Icon name="Download" className="mr-2" size={24} />
                Скачать программу
              </Button>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-600">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm">
            © 2024 Онлайн-курс русского языка для 5-7 классов
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
