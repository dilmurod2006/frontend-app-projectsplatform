import { ArrowRight } from "lucide-react";
import Link from 'next/link';

// Foydalanuvchini harakatga undovchi yakuniy bo'lim
const CTASection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                <div
                    data-aos="fade-up"
                    className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 text-center"
                >
                    {/* Orqa fon uchun dekorativ element */}
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-40 h-40 bg-white/10 rounded-full"></div>
                    
                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Maktabingiz reytingini bugunoq oshirishni boshlang!
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-100">
                            Vaqtni boy bermang. Xizmatimizni bepul sinab ko&apos;ring yoki savollaringiz bo&apos;lsa, biz bilan bog&apos;laning. Biz yordam berishdan doim mamnunmiz.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link
                                href="/maintenance"
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold shadow-md transform hover:scale-105 transition-transform duration-300"
                            >
                                Bepul sinab ko&apos;rish
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/maintenance"
                                className="inline-flex items-center justify-center w-full sm:w-auto bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white/50 hover:bg-white/10 transition-colors duration-300"
                            >
                                Bog&apos;lanish
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTASection;

