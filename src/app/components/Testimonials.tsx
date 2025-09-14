import { Star, Quote } from "lucide-react";
import Image from "next/image"; // Image komponenti import qilindi
import DefaultAvatar from "./default-avatar.png"; // Public papkasidagi rasm to'g'ridan-to'g'ri import qilindi

// Mijozlarning ijobiy izohlari bo'limi
const Testimonials = () => {
    
    // Izohlar ma'lumotlari
    const testimonialData = [
        {
            name: "Beknazarov Asror",
            role: "44-maktab Informatika o'qituvchisi, Qashqadaryo",
            avatar: DefaultAvatar,
            comment: "Bu dastur bizni katta bir muammodan xalos qildi. O'qituvchilarning vaqtini tejab, maktab reytingini barqaror ushlab turibmiz. Tavsiya qilaman!"
        },
        {
            name: "Xurramov Jamshid",
            role: "4-maktab Jismoniy tarbiya o'qituvchisi, Qashqadaryo",
            avatar: DefaultAvatar,
            comment: "Dastlab ishiga shubha bilan qaragandik, lekin bir hafta ichida natijalar ko'zga ko'rindi. Endi o'qituvchilarni vaqti tejaladi va hech qanday ovoragarchiliklar qolmaydi. Rahmat!"
        },
        {
            name: "Abbos Jurayev",
            role: "30-maktab, Informatika o'qituvchisi, Qashqadaryo",
            avatar: DefaultAvatar,
            comment: "Texnik tomondan juda sodda va ishonchli. Bir marta sozlab qo'ydik va shundan beri muammosiz ishlab kelyapti. Bu haqiqiy yengillik."
        }
    ];

    return (
        <section id="testimonials" className="bg-white py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Mijozlarimiz biz haqimizda nima deydi?
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        40 dan ortiq maktab rahbarlari va o&apos;qituvchilari bizning xizmatimizga ishonch bildirishmoqda.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={150 * (index + 1)}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100" />
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <Image 
                                        src={item.avatar} 
                                        alt={`${item.name} avatari`}
                                        width={56}
                                        height={56}
                                        className="w-14 h-14 rounded-full border-2 border-emerald-200"
                                    />
                                    <div className="ml-4 text-left">
                                        <p className="font-bold text-slate-900">{item.name}</p>
                                        <p className="text-sm text-slate-500">{item.role}</p>
                                    </div>
                                </div>
                                <blockquote className="text-slate-600 italic text-left">
                                    &quot;{item.comment}&quot;
                                </blockquote>
                                <div className="flex items-center mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;