"use client";

import { useEffect } from 'react';
import AOS from 'aos';

// Bu komponent faqat bir marta, sayt yuklanganda AOS animatsiyalarini ishga tushiradi.
// U hech qanday vizual elementni render qilmaydi.
export default function AOSInitializer() {
  useEffect(() => {
    // AOS kutubxonasini sozlamalar bilan ishga tushirish
    AOS.init({
      duration: 800,      // animatsiya davomiyligi (millisekundda)
      once: false,        // 'true' bo'lsa animatsiya faqat bir marta ishlaydi
      mirror: true,       // pastga va yuqoriga scroll qilganda ham animatsiya ishlaydi
      easing: 'ease-in-out', // animatsiyaning silliqlik darajasi
    });
  }, []); // Bo'sh massiv [] - bu effekt faqat birinchi renderda ishlashini ta'minlaydi

  return null;
}

