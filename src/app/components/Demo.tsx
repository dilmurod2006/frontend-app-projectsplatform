"use client"; // Interaktivlik va animatsiya uchun "use client" direktivasi

import { useState, useEffect } from 'react';
import { CheckCircle, Zap, UserCircle, LoaderCircle, Monitor, Smartphone } from "lucide-react";

// Konfetti uchun alohida komponent
const Confetti = () => (
    <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="absolute bg-emerald-400 w-2 h-2 rounded-full animate-confetti"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${-20 - Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 360}deg)`
                }}
            ></div>
        ))}
    </div>
);

// Namuna uchun foydalanuvchilar ro'yxati
const initialUsers = [
    { name: "Ali Valiyev", role: "O'quvchi", status: 'pending' },
    { name: "Nodira Aliyeva", role: "Ota-ona", status: 'pending' },
    { name: "Salima Karimova", role: "O'quvchi", status: 'pending' },
    { name: "Javlon Rustamov", role: "O'qituvchi", status: 'pending' },
    { name: "Madina Ibrohimova", role: "Ota-ona", status: 'pending' },
];

// Dastur interfeysini interaktiv va professional maketlarda namoyish etuvchi bo'lim
const Demo = () => {
    const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
    
    // Desktop uchun state'lar
    const [desktopStatus, setDesktopStatus] = useState<'idle' | 'boosting' | 'success'>('idle');
    const [showConfetti, setShowConfetti] = useState(false);
    const [graphIndex, setGraphIndex] = useState(0);

    // Mobil ilova uchun state'lar
    const [mobileStatus, setMobileStatus] = useState<'idle' | 'boosting' | 'success'>('idle');
    const [users, setUsers] = useState(initialUsers);
    const [mobileUserIndex, setMobileUserIndex] = useState(0);

    // Desktop animatsiyasi uchun funksiya
    const handleDesktopBoost = () => {
        if (desktopStatus !== 'idle') return;

        setDesktopStatus('boosting');
        setShowConfetti(false);
        setGraphIndex(0);

        const interval = setInterval(() => {
            setGraphIndex(prev => {
                if (prev >= 5) {
                    clearInterval(interval);
                    setDesktopStatus('success');
                    setShowConfetti(true);
                    setTimeout(() => {
                        setDesktopStatus('idle');
                        setShowConfetti(false);
                        setGraphIndex(0);
                    }, 4000);
                    return 5;
                }
                return prev + 1;
            });
        }, 600);
    };
    
    // Mobil ilova animatsiyasini BOSHLASH uchun funksiya
    const handleMobileBoost = () => {
        if (mobileStatus !== 'idle') return;

        setUsers(initialUsers.map(u => ({ ...u, status: 'pending' })));
        setMobileUserIndex(0);
        setMobileStatus('boosting'); // Bu useEffect'ni ishga tushiradi
    };

    // Mobil ilova animatsiyasini BOSHQARISH uchun useEffect
    useEffect(() => {
        if (mobileStatus !== 'boosting') return;

        if (mobileUserIndex >= initialUsers.length) {
            setMobileStatus('success');
            const successTimeout = setTimeout(() => {
                setMobileStatus('idle');
                setUsers(initialUsers);
            }, 4000);
            return () => clearTimeout(successTimeout);
        }

        const processingTimeout = setTimeout(() => {
            setUsers(prev => prev.map((user, i) => i === mobileUserIndex ? { ...user, status: 'checked' } : user));
            setMobileUserIndex(prev => prev + 1);
        }, 600);

        return () => clearTimeout(processingTimeout);

    }, [mobileStatus, mobileUserIndex]);

    const graphPath = `M 0 70 Q 50 ${70 - (graphIndex * 12)}, 100 ${70 - (graphIndex * 10)} T 200 ${70 - (graphIndex * 14)}`;

    return (
        <section id="demo" className="bg-slate-50 py-20 sm:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Xizmatimiz Har Bir Platformada Ishlaydi
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Qaysi platforma siz uchun qulay ekanligini tanlang va uning interaktiv demosini sinab ko&apos;ring.
                    </p>
                </div>

                {/* Tablar (platforma tanlash tugmalari) */}
                <div data-aos="fade-up" data-aos-delay="200" className="mt-12 flex justify-center items-center gap-4 bg-slate-200 p-2 rounded-xl max-w-sm mx-auto">
                    <button onClick={() => setActiveTab('desktop')} className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'desktop' ? 'bg-white text-emerald-600 shadow' : 'bg-transparent text-slate-600'}`}>
                        <Monitor className="w-5 h-5"/> Desktop Ilova
                    </button>
                    <button onClick={() => setActiveTab('mobile')} className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'mobile' ? 'bg-white text-emerald-600 shadow' : 'bg-transparent text-slate-600'}`}>
                        <Smartphone className="w-5 h-5"/> Mobil Ilova
                    </button>
                </div>
                
                {/* Demo kontenti */}
                <div className="mt-12 relative min-h-[600px]">
                    {/* Desktop Demo */}
                    <div className={`transition-opacity duration-500 ${activeTab === 'desktop' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                        <div data-aos="zoom-in" data-aos-delay="300">
                            <div className="relative w-full max-w-4xl mx-auto">
                                <div className="relative aspect-[16/10] bg-slate-800 rounded-t-2xl border-x-8 border-t-8 border-slate-800 shadow-2xl">
                                    {showConfetti && <Confetti />}
                                    <div className="relative w-full h-full bg-slate-900 p-4 sm:p-6 flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-semibold text-emerald-400">Dashboard - Maktab Reytingi</p>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm"><UserCircle className="w-5 h-5"/><span>Mudir Paneli</span></div>
                                        </div>
                                        <div className="mt-4 flex-grow bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex flex-col justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-500 ${desktopStatus === 'success' ? 'bg-emerald-500/20' : 'bg-slate-700/50'}`}><CheckCircle className={`w-6 h-6 transition-colors duration-500 ${desktopStatus === 'success' ? 'text-emerald-400' : 'text-slate-500'}`}/></div>
                                                <div>
                                                    <p className="font-medium text-white">Avtomatik Login Statusi</p>
                                                    <p className={`text-sm transition-colors duration-500 ${desktopStatus === 'success' ? 'text-emerald-400' : 'text-slate-400'}`}>
                                                        {desktopStatus === 'idle' && 'Boshlashga tayyor'}
                                                        {desktopStatus === 'boosting' && `Jarayon...`}
                                                        {desktopStatus === 'success' && 'Reyting muvaffaqiyatli ko\'tarildi!'}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-4 h-32 w-full bg-slate-900/70 rounded-md flex items-end p-2">
                                                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none"><path d={graphPath} stroke="#34d399" fill="none" strokeWidth="3" strokeLinecap="round" className="transition-all duration-500 ease-out"/></svg>
                                            </div>
                                            <button onClick={handleDesktopBoost} disabled={desktopStatus !== 'idle'} className={`mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${desktopStatus === 'idle' && 'animate-pulse'}`}>
                                                <Zap className="w-5 h-5"/>
                                                <span>{desktopStatus === 'idle' ? 'Reytingni Ko\'tarish' : 'Bajarilmoqda...'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90%] h-4 mx-auto bg-slate-700 rounded-b-lg"></div>
                                <div className="w-1/3 h-2 mx-auto bg-slate-600 rounded-b-md"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobil Demo */}
                    <div className={`transition-opacity duration-500 ${activeTab === 'mobile' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                        <div data-aos="zoom-in" data-aos-delay="300" className="flex justify-center">
                            <div className="relative bg-slate-800 p-2 rounded-[2rem] shadow-2xl border-4 border-slate-700 w-64">
                                <div className="w-16 h-1.5 bg-slate-700 rounded-full mx-auto"></div>
                                <div className="mt-2 aspect-[9/19] w-full bg-slate-900 rounded-[1.5rem] p-4 flex flex-col">
                                    <p className="text-center font-bold text-emerald-400 mb-2">Foydalanuvchilar Ro&apos;yxati</p>
                                    <div className="flex-grow space-y-2 overflow-y-auto">
                                        {users.map((user, index) => (
                                            <div key={index} className="flex items-center gap-2 bg-slate-800 p-2 rounded-md">
                                                {user.status === 'pending' && <LoaderCircle className="w-5 h-5 text-slate-500"/>}
                                                {user.status === 'checked' && <CheckCircle className="w-5 h-5 text-emerald-500"/>}
                                                <div>
                                                    <p className="text-sm font-medium text-white">{user.name}</p>
                                                    <p className="text-xs text-slate-400">{user.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className={`mt-4 text-center text-sm font-semibold transition-colors duration-500 ${mobileStatus === 'success' ? 'text-emerald-400' : 'text-slate-400'}`}>
                                        {mobileStatus === 'idle' && 'Boshlashga tayyor'}
                                        {mobileStatus === 'boosting' && 'Jarayon bajarilmoqda...'}
                                        {mobileStatus === 'success' && 'Barchasi muvaffaqiyatli!'}
                                    </p>
                                    <button onClick={handleMobileBoost} disabled={mobileStatus !== 'idle'} className={`mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${mobileStatus === 'idle' && 'animate-pulse'}`}>
                                        <Zap className="w-5 h-5"/>
                                        <span>Barchasini Kiritish</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demo;

