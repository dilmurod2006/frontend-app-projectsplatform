import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cog, Wrench, Send } from "lucide-react";
import Link from "next/link";

// Profilaktika ishlari olib borilayotganini professional tarzda ko'rsatuvchi sahifa
const MaintenancePage = () => {
    return (
        <main className="bg-slate-50 flex flex-col min-h-screen">
            <Navbar />
            <section className="flex-grow flex items-center justify-center py-20">
                <div className="text-center max-w-2xl mx-auto px-4">
                    <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                        <Cog className="w-16 h-16 text-slate-400 animate-spin-slow" />
                        <Wrench className="w-12 h-12 text-emerald-600 absolute animate-pulse" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Tizimda Texnik Ishlar Olib Borilmoqda
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Biz siz uchun yanada yaxshiroq va qulayroq tajriba taqdim etish maqsadida platformamizni yangilayapmiz. Tushunganingiz uchun rahmat!
                    </p>
                    
                    <div className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <p className="text-slate-700 font-medium">Agar shoshilinch savollaringiz bo&apos;lsa, biz bilan Telegram orqali bog&apos;lanishingiz mumkin:</p>
                        <a
                            href="https://t.me/KundalikCom_avto_login2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300"
                        >
                            <Send className="w-5 h-5"/>
                            Telegramda bog&apos;lanish
                        </a>
                    </div>

                    <Link
                        href="/"
                        className="mt-12 inline-block font-semibold text-emerald-600 hover:underline"
                    >
                        &larr; Bosh sahifaga qaytish
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default MaintenancePage;

