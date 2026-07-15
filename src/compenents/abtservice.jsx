import React from "react";
import { Truck, Package, Shield } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "التوصيل إلى باب المنزل خلال 24–48 ساعة لوهران والولايات القريبة.",
  },
  {
    icon: Package,
    title: "تغليف آمن",
    description: "نستخدم تغليفاً احترافياً لضمان وصول طلبك بحالة ممتازة.",
  },
  {
    icon: Shield,
    title: "دعم العملاء",
    description: "فريق الدعم متوفر من السبت إلى الخميس، من 8:00 صباحاً إلى 7:00 مساءً.",
  },
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-900">
      <Icon
        className="h-6 w-6 text-slate-700 transition-colors group-hover:text-white"
        strokeWidth={2}
      />
    </div>

    <h3 className="mb-3 text-xl font-semibold text-slate-900">
      {title}
    </h3>

    <p className="leading-7 text-slate-600">
      {description}
    </p>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600">
            خدماتنا
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            خدمات مصممة لراحتك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            نهتم بسرعة التوصيل وجودة التغليف وخدمة العملاء لنضمن لك تجربة شراء
            بسيطة وموثوقة.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;