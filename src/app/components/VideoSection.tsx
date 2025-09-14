// import VideoPlayer from "./VideoPlayer"; // Yordamchi video komponentini import qilish

// // Dastur haqidagi videolarni namoyish etuvchi bo'lim
// const VideoSection = () => {
    
//     // Videolar ro'yxati (URL manzillarini o'zingizniki bilan almashtiring)
//     const videos = [
//         {
//             title: "Dastur haqida umumiy tanishtiruv",
//             url: "https://www.youtube.com/watch?v=ysz5S6PUM-U" // Namuna uchun URL
//         },
//         {
//             title: "Desktop (Windows) ilovasi bilan ishlash",
//             url: "https://www.youtube.com/watch?v=ysz5S6PUM-U" // Namuna uchun URL
//         },
//         {
//             title: "Android mobil ilovasidan foydalanish",
//             url: "https://www.youtube.com/watch?v=ysz5S6PUM-U" // Namuna uchun URL
//         }
//     ];

//     return (
//         <section id="videos" className="bg-slate-50 py-20 sm:py-24">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//                         Xizmatimiz qanday ishlashini videoda ko'ring
//                     </h2>
//                     <p data-aos="fade-up" data-aos-delay="100" className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
//                         Quyidagi qisqa videolar orqali dasturimizning ishlash tamoyili va afzalliklari bilan tanishing.
//                     </p>
//                 </div>

//                 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {videos.map((video, index) => (
//                         <div 
//                             key={index}
//                             data-aos="fade-up"
//                             data-aos-delay={150 * (index + 1)}
//                             className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//                         >
//                             <VideoPlayer url={video.url} />
//                             <h3 className="mt-4 text-lg font-bold text-slate-900">{video.title}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default VideoSection;

