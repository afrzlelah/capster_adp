import { ChevronRight } from "lucide-react";

const Services = () => {
  const list = [
    {
      title: "Precision Cut",
      desc: "Detail fade & pangkas presisi tinggi.",
      price: "20K",
      color: "blue",
    },
    {
      title: "Grooming Pro",
      desc: "Haircut + Vitamin + Scalp Massage.",
      price: "25K",
      color: "red",
    },
    {
      title: "Signature Shave",
      desc: "Cukur jenggot dengan pisau bedah steril.",
      price: "30K",
      color: "blue",
    },
    {
      title: "Color Treatment",
      desc: "Pewarnaan HD sesuai karakter wajah.",
      price: "50K+",
      color: "red",
    },
  ];

  return (
    <section
      id="services"
      className="py-40 bg-slate-50/50 relative overflow-hidden"
    >
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-6">
              Wes expert pokok e
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tight">
              Potongan Tajam, <br />
              Gaya Berkelas anjayyyy.
            </h3>
          </div>
          <p className="text-slate-500 max-w-xs font-medium leading-relaxed">
            Setiap helai rambut Anda adalah prioritas kami. Menggunakan
            peralatan premium yang selalu steril.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((item, idx) => (
            <a
              href="https://instagram.com/capster_adp"
              key={idx}
              className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-4 transition-all duration-500 group relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-600/5 rounded-bl-full group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-700`}
              ></div>

              <div
                className={`w-16 h-1 bg-${item.color}-600 mb-10 group-hover:w-full transition-all duration-500 relative z-10`}
              ></div>
              <h4 className="text-3xl font-black mb-4 text-slate-950 relative z-10">
                {item.title}
              </h4>
              <p className="text-slate-500 mb-10 leading-relaxed font-medium relative z-10">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto relative z-10">
                <span className="text-3xl font-black text-slate-900 tracking-tighter">
                  {item.price}
                </span>
                <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-500">
                  <ChevronRight size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
