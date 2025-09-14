import { Send, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/favicon.png"
                alt="ProjectsPlatform Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">ProjectsPlatform</span>
            </Link>
            <p className="text-gray-400">Raqamli asrda yengilliklar va qulayliklar yaratamiz.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Foydali Havola</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-base text-gray-400 hover:text-white">Bosh sahifa</Link></li>
              <li><Link href="/about" className="text-base text-gray-400 hover:text-white">Biz haqimizda</Link></li>
              <li><Link href="/maintenance" className="text-base text-gray-400 hover:text-white">Bog&apos;lanish</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Biz bilan bog&apos;laning</h3>
             <ul className="mt-4 space-y-2">
              <li><a href="mailto:info@projectsplatform.uz" className="text-base text-gray-400 hover:text-white">info@projectsplatform.uz</a></li>
              <li><a href="tel:+998912106339" className="text-base text-gray-400 hover:text-white">+998 (91) 210-63-39</a></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Ijtimoiy Tarmoqlar</h3>
             <div className="flex mt-4 space-x-4">
                <a href="https://t.me/PyPrime" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Send />
                </a>
                <a href="https://www.youtube.com/@PythonPrime" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Youtube />
                </a>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} ProjectsPlatform.uz. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

