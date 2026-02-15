import React, { useEffect, useRef } from 'react';

const About = () => {
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    fadeInRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  return (
    <div className="bg-stone-50 overflow-x-hidden" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 py-12 max-w-5xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            متجرك المحلي <span className="text-orange-500">في الجزائر</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            حيث يلتقي التقليد بالحداثة، ونخدم عائلات الجزائر بحب وإخلاص
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 md:py-32 bg-white">
        {/* Vertical Line Decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div 
            ref={addToRefs}
            className="text-center mb-16 md:mb-20 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="text-sm md:text-base tracking-widest uppercase text-orange-500 font-semibold mb-4">
              رحلتنا
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              من حلم عائلي إلى واقع جميل
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              بدأنا كمحل صغير في حي شعبي، بحلم بسيط: خدمة جيراننا بأفضل المنتجات وأسعار معقولة. 
              اليوم، نفخر بكوننا جزءاً من حياة المئات من العائلات الجزائرية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
            {/* Story Card 1 */}
            <div 
              ref={addToRefs}
              className="group opacity-0 translate-y-8 transition-all duration-1000 delay-100"
            >
              <div className="bg-stone-50 p-8 md:p-10 border-r-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 opacity-90">
                  2021
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  البداية المتواضعة
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  افتتحنا متجرنا الصغير في الجزائر العاصمة بمنتجات محلية منتقاة بعناية. 
                  كان هدفنا بسيطاً: خدمة الحي وتوفير الجودة بأسعار عادلة.
                </p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div 
              ref={addToRefs}
              className="group opacity-0 translate-y-8 transition-all duration-1000 delay-200"
            >
              <div className="bg-stone-50 p-8 md:p-10 border-r-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 opacity-90">
                  2023
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ثقة الزبائن
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  بفضل ثقتكم، توسعنا وأصبحنا نقدم مجموعة أكبر من المنتجات اليومية 
                  والحرفية المحلية. عائلاتنا يثقون بنا، وهذا أغلى ما نملك.
                </p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div 
              ref={addToRefs}
              className="group opacity-0 translate-y-8 transition-all duration-1000 delay-300"
            >
              <div className="bg-stone-50 p-8 md:p-10 border-r-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 opacity-90">
                  2025
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  التطور الرقمي
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  أطلقنا متجرنا الإلكتروني لنصل إلى المزيد من العائلات في الجزائر، 
                  مع الحفاظ على نفس الجودة والخدمة التي تعرفوننا بها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div 
            ref={addToRefs}
            className="text-center mb-16 md:mb-20 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="text-sm md:text-base tracking-widest uppercase text-orange-500 font-semibold mb-4">
              ما يميزنا
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              قيمنا الأساسية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12">
            {/* Value Card 1 */}
            <div 
              ref={addToRefs}
              className="text-center p-10 md:p-12 border-2 border-orange-500/30 hover:border-orange-500 
                         transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden
                         opacity-0 translate-y-8 delay-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-6xl mb-6 animate-float">
                🤝
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                الأمانة والثقة
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                نتعامل مع كل زبون كأنه من العائلة. الأمانة في التعامل والصدق في البيع 
                هما أساس نجاحنا وسر ثقتكم بنا.
              </p>
            </div>

            {/* Value Card 2 */}
            <div 
              ref={addToRefs}
              className="text-center p-10 md:p-12 border-2 border-orange-500/30 hover:border-orange-500 
                         transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden
                         opacity-0 translate-y-8 delay-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-6xl mb-6 animate-float animation-delay-500">
                🇩🇿
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                دعم المنتج المحلي
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                نفخر بتقديم منتجات جزائرية أصيلة من حرفيين ومنتجين محليين. 
                ندعم الاقتصاد الوطني ونحافظ على تراثنا.
              </p>
            </div>

            {/* Value Card 3 */}
            <div 
              ref={addToRefs}
              className="text-center p-10 md:p-12 border-2 border-orange-500/30 hover:border-orange-500 
                         transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden
                         opacity-0 translate-y-8 delay-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="text-6xl mb-6 animate-float animation-delay-1000">
                💚
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                خدمة من القلب
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                كل زبون عندنا غالي. نسعى دائماً لتقديم أحسن خدمة وأفضل تجربة تسوق 
                لكل عائلة تثق بنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div 
            ref={addToRefs}
            className="text-center mb-16 md:mb-20 opacity-0 translate-y-8 transition-all duration-1000"
          >
            <div className="text-sm md:text-base tracking-widest uppercase text-orange-500 font-semibold mb-4">
              عائلة المحل
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              نحن في خدمتكم دائماً
            </h2>
          </div>

          <div 
            ref={addToRefs}
            className="text-center max-w-4xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-1000 delay-100"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              نحن عائلة جزائرية بسيطة، نعمل بجد لنقدم لكم أفضل المنتجات بأسعار في متناول الجميع. 
              من صاحب المحل إلى البائعين، كل واحد فينا يعتبركم عائلته ويسعى لخدمتكم بكل إخلاص ومحبة.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            <div 
              ref={addToRefs}
              className="text-center opacity-0 translate-y-8 transition-all duration-1000 delay-100"
            >
              <div className="text-5xl md:text-7xl font-bold text-orange-500 mb-3">
                5
              </div>
              <div className="text-base md:text-lg uppercase tracking-wider text-gray-600">
                أفراد الفريق
              </div>
            </div>

            <div 
              ref={addToRefs}
              className="text-center opacity-0 translate-y-8 transition-all duration-1000 delay-200"
            >
              <div className="text-5xl md:text-7xl font-bold text-orange-500 mb-3">
                +800
              </div>
              <div className="text-base md:text-lg uppercase tracking-wider text-gray-600">
                عميل راضي
              </div>
            </div>

            <div 
              ref={addToRefs}
              className="text-center opacity-0 translate-y-8 transition-all duration-1000 delay-300"
            >
              <div className="text-5xl md:text-7xl font-bold text-orange-500 mb-3">
                +3K
              </div>
              <div className="text-base md:text-lg uppercase tracking-wider text-gray-600">
                منتج مسلّم
              </div>
            </div>

            <div 
              ref={addToRefs}
              className="text-center opacity-0 translate-y-8 transition-all duration-1000 delay-[400ms]"
            >
              <div className="text-5xl md:text-7xl font-bold text-orange-500 mb-3">
                4
              </div>
              <div className="text-base md:text-lg uppercase tracking-wider text-gray-600">
                سنوات من الثقة
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-grid-move" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            تفضل بزيارتنا اليوم
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95">
            انضم لعائلة زبائننا واكتشف الفرق في الجودة والخدمة. نحن في انتظاركم!
          </p>
          <a 
            href="/" 
            className="inline-block px-10 md:px-12 py-4 md:py-5 bg-white text-orange-500 
                       font-bold text-lg md:text-xl uppercase tracking-wide border-3 border-white
                       hover:bg-transparent hover:text-white transition-all duration-300
                       hover:-translate-y-1 hover:shadow-2xl"
          >
            تسوق الآن
          </a>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap');
        
        * {
          font-family: 'Cairo', 'Tajawal', sans-serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default About;