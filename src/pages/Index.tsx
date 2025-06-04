import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Search, Heart, BookOpen, RotateCcw, Globe, Award } from 'lucide-react';
import KazakhPattern from '@/components/KazakhPattern';
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: t("features.search.title"),
      description: t("features.search.description")
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: t("features.rotateCcw.title"),
      description: t("features.rotateCcw.description")
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("features.globe.title"),
      description: t("features.globe.description")
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("features.heart.title"),
      description: t("features.heart.description")
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t("features.bookOpen.title"),
      description: t("features.bookOpen.description")
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("features.award.title"),
      description: t("features.award.description")
    }
  ];

  const screenshots = [
  { image: '/images/screen1.jpg' },
  { image: '/images/screen2.jpg' },
  { image: '/images/screen3.jpg' },
  
];
const swiperRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden">
      <Navbar />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <KazakhPattern />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src="/images/icon.png"
                alt="Logo"
                className="w-60 h-60 object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Körkem<span style={{ color: '#1976D2' }}>App</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("title")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://expo.dev/accounts/bigmac00/projects/KorkemApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  style={{ background: 'linear-gradient(to right, #1976D2, #1976D2)' }}
                  className="text-white px-8 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                <ExternalLink className="w-5 h-5 mr-2" />
                  {t("expo")}
                </Button>
              </a>

              <a
                href="https://github.com/bigmac0056/korkem-app-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  style={{ borderColor: '#1976D2', color: '#1976D2' }}
                  className="hover:bg-blue-50 px-8 py-4 text-lg rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("features")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`p-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-0 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: 'linear-gradient(to bottom right, #E3F2FD, #BBDEFB)',
                      color: '#1976D2',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 40 },
            1280: { slidesPerView: 3.5, spaceBetween: 48 },
          }}
        >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-3xl p-2 transition-shadow duration-300 cursor-pointer"
              onClick={() => swiperRef.current?.slideTo(index)}
            >
              <img
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-2xl shadow-none"
              />
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t("about")}
            </h2>
            
            <Card className="p-12 border-0 shadow-2xl bg-gradient-to-br from-white via-indigo-50 to-blue-50 rounded-3xl">
              <CardContent className="p-0">
                <div className="mb-8">
                  <Badge
                    className="text-white px-6 py-2 text-lg rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #1976D2, #1976D2)',
                    }}
                  >
                    {t("about.title")}
                  </Badge>
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t("about.description")}
                </p>
                
                <div className="text-lg text-gray-600">
                  <p className="mb-4">
                    🎯 <strong>{t("about.mission")}:</strong> {t("about.mission1")}
                  </p>
                  <p className="mb-4">
                    💡 <strong>{t("about.vision")}:</strong> {t("about.vision1")}
                  </p>
                  <p>
                    🌟 <strong>{t("about.purpose")}:</strong> {t("about.purpose1")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-indigo-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t("start")}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="https://expo.dev/accounts/bigmac00/projects/KorkemApp"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Expo Store
              </Button>
              </a>
              
              <a
                href="https://github.com/bigmac0056/korkem-app-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </a>
              
              <Button 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Google Play
              </Button>
              <Button 
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                App Store
              </Button>
            </div>
            
            <p className="text-lg text-gray-300">
              {t("join")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
