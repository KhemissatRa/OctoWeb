import React from 'react';
import { Truck, Package, Shield } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'التوصيل لباب الدار في 24-48 ساعة لوهران والولايات القريبة.',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    shadowColor: 'hover:shadow-blue-200'
  },
  {
    icon: Package,
    title: 'تغليف آمن',
    description: 'نستعمل تغليف محترف وآمن. كل طلب يوصل في حالة ممتازة مضمونة.',
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    shadowColor: 'hover:shadow-green-200'
  },
  {
    icon: Shield,
    title: 'دعم دائم',
    description: 'خدمة الزبائن متوفرة من السبت للخميس، 8 صباحاً - 7 مساءً.',
    gradient: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    shadowColor: 'hover:shadow-red-200'
  }
];

const ServiceCard = ({ icon: Icon , title, description, gradient, bgColor, shadowColor }) => (
  <div className={`group relative p-8 bg-white rounded-3xl shadow-lg ${shadowColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}>
    {/* Decorative background gradient */}
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
    
    {/* Icon container */}
    <div className={`relative mb-6 inline-flex p-4 ${bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-8 h-8 bg-gradient-to-br ${gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
    </div>
    
    {/* Content */}
    <div className="relative">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>

    {/* Bottom accent line */}
    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-500`}></div>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            خدماتنا
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            نقدم لكم أفضل الخدمات لضمان تجربة تسوق مميزة
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              bgColor={service.bgColor}
              shadowColor={service.shadowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;