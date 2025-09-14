import { TrendingUp } from 'lucide-react';

const RatingBoost = () => {
  return (
    <section id="rating" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Reytingni qanday ko&apos;taramiz?
            </h2>
            <p className="text-lg text-gray-600">
              Maktab reytingini yuqori o&apos;rinlarda ushlab turish uchun KundalikCOM tizimi talablaridan biri — bu barcha foydalanuvchilarning tizimga har kuni faol kirishidir.
            </p>
            <p className="mt-4 text-lg text-gray-600 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <span className="font-semibold">Barcha foydalanuvchilar kuniga kamida 1 marta tizimga kirishi talab etiladi.</span> Bizning xizmatimiz orqali bu jarayon to&apos;liq avtomatlashtiriladi va birorta ham faol kun o&apos;tkazib yuborilmaydi.
            </p>
          </div>
          <div data-aos="zoom-in" className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-lg">
              <TrendingUp className="w-48 h-48 text-green-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingBoost;