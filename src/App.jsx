import React, { useState } from 'react';

// ==========================================
// 🧩 НАДЕЖНЫЕ SVG ИКОНКИ
// ==========================================
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconBriefcase = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>;
const IconCode = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconGithub = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const IconGraduation = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;

// ==========================================
// 📝 ДАННЫЕ РЕЗЮМЕ
// ==========================================
const RESUME_DATA = {
  personal: {
    name: "Мария Рэй",
    role: "Инженер-разработчик / Специалист по управлению в тех. системах",
    location: "Алматы, Казахстан",
    email: "mariarty.25@mail.ru",
    phone: "+77075479868",
    githubMain: "https://github.com/cucumber8ray-dot",
    avatarUrl: "https://github.com/user-attachments/assets/d9e9abeb-e692-4d15-879c-954ccf18dc93", 
    about: "Специалист с образованием в области управления в технических системах. Имею практический опыт проектирования двухуровневых систем мониторинга и работы с микроконтроллерами. В настоящее время активно расширяю компетенции в программировании. Успешно разработала и запустила веб-сайт для кофейни с NFC-интеграцией.",
  },
  education: {
    university: "Севастопольский государственный университет (СевГУ)",
    degree: "Бакалавр: Управление в технических системах",
    period: "2020 — 2024",
    details: "Институт информационных технологий"
  },
  skills: [
    "Python", "C++ (Arduino)", "Raspberry Pi", "IoT", 
    "Git", "MATLAB", "Simulink", "1C:Предприятие", "HTML/CSS", "React"
  ],
  experience: [
    {
      id: 2,
      role: "Менеджер маркетплейсов / Технический специалист",
      company: "Autostyle",
      period: "Сентябрь 2024 — Апрель 2025",
      achievements: [
        "Внедрена система адресного хранения, сократившая время сборки заказов.",
        "Обеспечен точный учет остатков в 1С: Склад.",
        "Оптимизирована маркировка продукции с использованием плоттера."
      ]
    },
    {
      id: 1,
      role: "Специалист приемной комиссии",
      company: "СевГУ",
      period: "Май 2022 — Август 2022",
      achievements: [
        "Освоила работу в системе 1С с нуля в кратчайшие сроки.",
        "Оптимизировала процесс приема документов абитуриентов."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "АСМ «Умного дома»",
      description: "Система мониторинга на базе Raspberry Pi и ESP8266. Обмен данными по протоколу UDP.",
      techStack: ["C++", "Python", "UDP", "IoT"],
      githubUrl: "https://github.com/cucumber8ray-dot/smart-home-monitoring"
    },
    {
      id: 2,
      title: "NFC-меню для кофейни",
      description: "Веб-интерфейс для мгновенного доступа к меню через NFC-метки. Mobile-First дизайн.",
      techStack: ["HTML5", "CSS3", "JavaScript", "NFC"],
      githubUrl: "https://cucumber8ray-dot.github.io/html/" 
    }
  ]
};

// ==========================================
// 🧩 КОМПОНЕНТЫ
// ==========================================

const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
      <Icon />
    </div>
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

const App = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Шапка */}
      <header className="bg-slate-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative">
            <div className="w-48 h-60 md:w-56 md:h-72 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800">
              {!imgError ? (
                <img 
                  src={RESUME_DATA.personal.avatarUrl} 
                  alt={RESUME_DATA.personal.name} 
                  className="w-full h-full object-cover origin-top scale-110"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-600 text-5xl font-bold">
                  {RESUME_DATA.personal.name[0]}
                </div>
              )}
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              {RESUME_DATA.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium mb-8">
              {RESUME_DATA.personal.role}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-slate-300">
              <div className="flex items-center gap-2">
                <IconMapPin />
                <span>{RESUME_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMail />
                <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-white transition-colors">
                  {RESUME_DATA.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone />
                <span>{RESUME_DATA.personal.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconGithub size={18} />
                <a href={RESUME_DATA.personal.githubMain} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  github.com/cucumber8ray-dot
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Контент */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Левая колонка */}
        <div className="lg:col-span-3 space-y-16">
          <section>
            <SectionTitle title="Обо мне" icon={IconUser} />
            <p className="text-lg text-slate-600 leading-relaxed">
              {RESUME_DATA.personal.about}
            </p>
          </section>

          <section>
            <SectionTitle title="Опыт работы" icon={IconBriefcase} />
            <div className="space-y-10">
              {RESUME_DATA.experience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-500 font-bold mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="text-slate-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5">•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Проекты" icon={IconCode} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESUME_DATA.projects.map((project) => (
                <div key={project.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.githubUrl && (
                      <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 p-1.5 px-3 group/link rounded-full transition-all duration-300 -mr-2 -mt-1 hover:bg-blue-50"
                      title="Посмотреть код на GitHub"
                    >
                      {/* 📝 НАДПИСЬ-ПРИЗЫВ (CTA) */}
                      <span className="text-[11px] font-semibold text-slate-400 opacity-100 sm:opacity-0 group-hover:opacity-100 group-hover/link:text-blue-600 transition-all duration-300">
                        Посмотреть код
                     </span>
                      {/* 🧩 ИКОНКА (Её я сделал чуть больше) */}
                      <IconGithub 
                        size={22} 
                        className="text-slate-300 group-hover:text-blue-600 group-hover/link:text-blue-600 group-hover/link:scale-110 transition-all duration-300" 
                      />
                    </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Правая колонка */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 space-y-10">
            {/* Раздел: Образование */}
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Образование
              </h2>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <IconGraduation />
                  <span className="text-xs font-bold uppercase tracking-wider">{RESUME_DATA.education.period}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{RESUME_DATA.education.university}</h4>
                <p className="text-slate-600 text-sm mb-2">{RESUME_DATA.education.degree}</p>
                <p className="text-slate-400 text-xs italic">{RESUME_DATA.education.details}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Навыки
              </h2>
              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-100">
              <h3 className="text-lg font-bold mb-4">Связаться со мной</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Открыта для интересных предложений в области автоматизации и разработки.
              </p>
              <a 
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="block w-full text-center py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Написать письмо
              </a>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} {RESUME_DATA.personal.name}. Код — это искусство инженерии.</p>
      </footer>
    </div>
  );
};

export default App;