import { LogIn, TrendingUp, Zap, ShieldCheck } from "lucide-react";

// Xizmatning asosiy afzalliklari va xususiyatlari bo'limi
const Features = () => {
    
    // Afzalliklar ro'yxati
    const featuresList = [
        {
            icon: <LogIn className="w-10 h-10 text-emerald-500" />,
            title: "To'liq Avtomatlashtirish",
            description: "Dastur barcha foydalanuvchilarni (o'quvchi, ota-ona, o'qituvchi) tizimga har kuni avtomatik ravishda kiritadi."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-emerald-500" />,
            title: "Reytingni Oshirish",
            description: "Foydalanuvchilarning doimiy faolligi maktabingiz reytingini kafolatli tarzda yuqori pog'onalarga olib chiqadi."
        },
        {
            icon: <Zap className="w-10 h-10 text-emerald-500" />,
            title: "Vaqtni Tejash",
            description: "O'qituvchilar endi har kuni tizimga majburan kirishga vaqt sarflamaydilar, bu esa ularning asosiy ishiga e'tibor qaratishiga imkon beradi."
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
            title: "Xavfsizlik va Ishonchlilik",
            description: "Barcha ma'lumotlar shifrlangan holda saqlanadi. Dasturimiz faqat login qilish vazifasini bajaradi va ortiqcha ma'lumotlarga ega bo'lmaydi."
        }
    ];

    return (
        <section id="features" className="bg-slate-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Nima uchun aynan bizning xizmat?
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Biz shunchaki vaqtinchalik yechim emas, balki maktabingiz muvaffaqiyati uchun ishonchli hamkormiz.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresList.map((feature, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={150 * (index + 1)}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center h-16 w-16 bg-emerald-100 rounded-full mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                            <p className="mt-2 text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;

