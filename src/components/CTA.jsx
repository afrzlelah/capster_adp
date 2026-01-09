const CTA = () => {
  return (
    <>
      <section className="container mx-auto px-6 mb-40">
        <div className="bg-slate-950 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
          {/* HD Gradient Glows */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-red-600/10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-[80px] font-black mb-10 leading-[0.9] tracking-tighter">
              Waktunya Tampil Tajam.
            </h3>
            <p className="text-slate-400 mb-14 text-xl md:text-2xl font-medium">
              Jadilah bagian dari pria modern yang menghargai kualitas detail.
            </p>
            <button className="bg-white text-slate-950 px-16 py-7 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase tracking-tighter">
              Book Your Chair Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
