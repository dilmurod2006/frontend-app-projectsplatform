import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Github, Linkedin, Send, GraduationCap, ArrowUpRight, Clock, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Asoschilarning rasmlarini import qilish
import dilmurodImg from './dilmurod.jpg';
import bexruzImg from './bexruz.jpg';

// Loyiha logotiplarini import qilish
import testmaxLogo from './testmax.png';
import mandatLogo from './mandatbot.png';
import kundalikLogo from './kundalikcom.png';
import onlineTestBotLogo from './onlinetestbot.jpg'; // YANGI LOGO IMPORTI

// --- Asoschilar ma'lumotlari ---
const founders = [
  {
    name: "Amonov Dilmurod",
    role: "Full-stack Developer & Co-founder",
    imageUrl: dilmurodImg,
    socials: {
      github: "https://github.com/dilmurod2006",
      linkedin: null,
      telegram: "https://t.me/Software_engineer006",
    },
  },
  {
    name: "Boynazarov Bexruz",
    role: "Python Full-stack Developer & Co-founder",
    imageUrl: bexruzImg,
    socials: {
      github: "https://github.com/bexruzpy",
      linkedin: "https://linkedin.com/in/bexruzdeveloper",
      telegram: "https://t.me/bexruzdeveloper",
    },
  },
];

// --- Loyihalar ma'lumotlari ---
const projects = [
  {
    name: "TestMax",
    description:
      "O‘quv markazlari uchun yaratilgan innovatsion platforma bo‘lib, blok testlarini haqiqiy imtihon muhitiga yaqin tarzda o‘tkazish imkonini beradi. Natijalar tezkor va aniq e’lon qilinadi, har bir ishtirokchining natijasi esa chuqur tahlil qilinadi.",
    imageUrl: testmaxLogo,
    href: "https://testmax.uz",
    status: "active",
  },
  {
    name: "Online Test Bot",
    description:
      "Telegram guruhlarda onlayn test o‘tkazish, natijalarni e’lon qilish, TOP-10 ro‘yxatini chiqarish va g‘oliblarga sertifikat taqdim etuvchi avtomatlashtirilgan bot.",
    imageUrl: onlineTestBotLogo,
    href: "/pdf/online-test-bot.pdf",
    status: "active",
  },
  {
    name: "KundalikCom AutoLogin",
    description:
      "Maktablar uchun Kundalik tizimiga kirishni avtomatlashtirib, vaqtni tejash va samaradorlikni oshirishga yordam beruvchi yechim.",
    imageUrl: kundalikLogo,
    href: "/",
    status: "active",
  },
  {
    name: "Mandat Bot",
    description: "Abituriyentlar uchun imtihon natijalarini bir zumda yetkazib beruvchi ishonchli yordamchi.",
    imageUrl: mandatLogo,
    href: null,
    status: "soon",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      <Navbar />

      {/* --- Biz haqimizda --- */}
      <section id="about-us" className="bg-white pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-base font-semibold text-emerald-600 tracking-wider uppercase">
              Bizning Jamoa
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Innovatsiyalar Orqali Qiymat Yaratamiz
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Biz — O&apos;zbekistonda ta&apos;lim va xizmatlarda raqamli yechimlar ishlab chiqishga bel bog‘lagan, yosh va
              g‘ayratli dasturchilar jamoasimiz.
            </p>
          </div>

          {/* Founders */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-slate-50/70 rounded-2xl p-8 border border-slate-100 flex flex-col h-full text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-grow">
                  <Image
                    src={founder.imageUrl}
                    alt={`${founder.name} surati`}
                    width={120}
                    height={120}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
                    placeholder="blur"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">{founder.name}</h3>
                  <p className="mt-1 text-emerald-600 font-semibold">{founder.role}</p>
                </div>

                {/* Socials */}
                <div className="mt-6 flex justify-center items-center gap-4">
                  <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-200 rounded-full text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {founder.socials.linkedin && (
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-200 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={founder.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-200 rounded-full text-slate-600 hover:bg-sky-500 hover:text-white transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bizning maqsadimiz --- */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <Compass className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">Bizning Maqsadimiz</h3>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Bizning maqsadimiz — O‘zbekistondagi insonlarning kundalik muammolariga texnologiyalar orqali sodda va
              samarali yechimlar taqdim etish. Biz innovatsiyalar yordamida hayotni yengillashtirish, imkoniyatlarni
              kengaytirish va jamiyat taraqqiyotiga hissa qo‘shishni maqsad qilganmiz.
            </p>
          </div>
        </div>
      </section>

      {/* --- Portfolio --- */}
      <section id="projects" className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Portfolio</h2>
            <p className="mt-4 text-lg text-slate-600">
              Quyida biz ustida ishlab, jamiyat uchun foyda keltirayotgan innovatsion loyihalarimiz bilan tanishing.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => {
              const cardContent = (
                <div
                  className={`group relative bg-white rounded-2xl p-6 border border-slate-200 transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden ${
                    project.href ? "hover:shadow-xl hover:-translate-y-1" : "opacity-80"
                  }`}
                >
                  <div
                    className={`absolute -bottom-24 -right-16 w-48 h-48 ${
                      project.status === "soon" ? "bg-slate-100" : "bg-emerald-50"
                    } rounded-full transition-transform duration-500 group-hover:scale-[10]`}
                  ></div>
                  <div className="relative z-10 flex flex-col h-full items-center">
                    {project.href && (
                      <ArrowUpRight className="absolute top-0 right-0 w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    )}
                    {project.status === "soon" && (
                      <div className="absolute top-0 left-0 flex items-center gap-1.5 bg-slate-200 text-slate-600 text-xs font-semibold px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> Tez kunda
                      </div>
                    )}
                    <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center my-4 border-4 border-white shadow-sm">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.name} logo`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                    <p className="mt-2 text-slate-600 flex-grow">{project.description}</p>
                  </div>
                </div>
              );

              return project.href ? (
                <Link
                  key={project.name}
                  href={project.href}
                  className="block"
                  target={project.href.startsWith("http") || project.href.endsWith(".pdf") ? "_blank" : "_self"}
                >
                  {cardContent}
                </Link>
              ) : (
                <div key={project.name} className="cursor-not-allowed">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

