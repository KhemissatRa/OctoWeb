import React from 'react';
import { Truck, Package, Shield } from 'lucide-react'; // Example icons

const services = [
  {
    icon: <Truck className="w-8 h-8 text-blue-500" />,
    title: 'Fast Delivery',
    description: 'We ensure your orders reach you quickly and safely.'
  },
  {
    icon: <Package className="w-8 h-8 text-green-500" />,
    title: 'Secure Packaging',
    description: 'All products are packaged securely for safe transportation.'
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: 'Reliable Service',
    description: 'Trustworthy service with 24/7 customer support.'
  }
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="py-16 italic">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
