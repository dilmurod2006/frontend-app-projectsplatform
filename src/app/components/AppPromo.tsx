import { Monitor, Smartphone } from 'lucide-react';

const AppPromo = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right" className="relative flex justify-center items-center">
                    <Monitor className="w-64 h-auto text-gray-300 animate-float" />
                    <Smartphone className="w-24 h-auto text-gray-400 absolute bottom-0 right-1/4 animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <div data-aos="fade-left">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                        Desktop va Mobil Ilovalar
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Xizmatimiz Windows desktop va mobil ilova ko‘rinishida mavjud. Istalgan vaqtda, istalgan joyda foydalaning va maktabingiz reytingini nazorat qiling.
                    </p>
                    <a href="#" className="inline-block cta-gradient px-8 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
                        Bepul foydalanish
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AppPromo