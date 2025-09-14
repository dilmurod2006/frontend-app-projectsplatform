import { Users, GraduationCap, Briefcase } from 'lucide-react';

const UserTypes = () => {
  const userCards = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: 'O‘quvchilar',
      description: 'Har bir o\'quvchi har kuni tizimga avtomatik tarzda kiradi, bu esa maktab faolligini oshiradi.',
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Ota-onalar',
      description: 'Ota-onalarning tizimga kirishi farzandlarining davomati va baholarini kuzatish uchun muhim.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
      title: 'O‘qituvchilar',
      description: 'O\'qituvchilar uchun tizimga muntazam kirish jurnallarni o\'z vaqtida to\'ldirishni ta\'minlaydi.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900">
            Foydalanuvchilarni Avtomatik Login Qilish
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Xizmatimiz barcha turdagi foydalanuvchilarni qamrab oladi.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {userCards.map((card, index) => (
            <div key={card.title} data-aos="fade-up" data-aos-delay={index * 150} className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center items-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;