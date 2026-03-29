"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Books",
          id: "books",
        },
        {
          name: "Courses",
          id: "courses",
        },
        {
          name: "About",
          id: "about",
        },
      ]}
      brandName="Maktaba DZ"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="طور نفسك بالمعرفة"
      description="أفضل منصة للكتب والتعلم والتطور الذاتي في الجزائر وشمال أفريقيا. اقرأ، تعلّم، واشتر من آلاف الموارد العربية بسهولة."
      buttons={[
        {
          text: "ابدأ القراءة الآن",
          href: "#books",
        },
        {
          text: "تصفح الدورات",
          href: "#courses",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcG9UU5VCKsGpPQiiAdWyylsqo/a-high-quality-modern-educational-platfo-1774780837323-0ceb2e64.png?_wi=1"
      imageAlt="Maktaba DZ Platform Hero"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="منصة معرفة شاملة"
      description="نحن نبني جسراً بين المبدعين والمتعلمين في الجزائر وشمال أفريقيا، موفرين بيئة رقمية آمنة ومحفزة للنمو المهني والشخصي."
      metrics={[
        {
          value: "10k+",
          title: "كتاب رقمي",
        },
        {
          value: "500+",
          title: "دورة تدريبية",
        },
        {
          value: "20k+",
          title: "متعلم نشط",
        },
      ]}
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcG9UU5VCKsGpPQiiAdWyylsqo/a-high-quality-modern-educational-platfo-1774780837323-0ceb2e64.png?_wi=2"
      imageAlt="منصة معرفة شاملة"
    />
  </div>

  <div id="books" data-section="books">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "b1",
          name: "أساسيات البرمجة",
          price: "1500 د.ج",
          variant: "كتاب",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcG9UU5VCKsGpPQiiAdWyylsqo/a-professional-digital-book-cover-for-a--1774780837288-ec2d08c6.png",
          imageAlt: "كتاب البرمجة",
        },
        {
          id: "b2",
          name: "مهارات القيادة",
          price: "2200 د.ج",
          variant: "كتاب",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcG9UU5VCKsGpPQiiAdWyylsqo/a-professional-digital-book-cover-for-pr-1774780837300-33eb77ab.png",
          imageAlt: "كتاب القيادة",
        },
        {
          id: "b3",
          name: "تعلم اللغات",
          price: "1800 د.ج",
          variant: "كتاب",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BcG9UU5VCKsGpPQiiAdWyylsqo/a-professional-digital-book-cover-for-la-1774780838574-ac09d08f.png",
          imageAlt: "كتاب اللغات",
        },
      ]}
      title="الكتب المميزة"
      description="استكشف أحدث إصدارات الكتب في البرمجة، الإدارة، وتطوير الذات."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="لقد غيرت مكتبة دي زاد نظرتي للتعلم الذاتي تماماً. الموارد متنوعة ومنظمة جداً بشكل يسهل الوصول إليه في الجزائر."
      rating={5}
      author="أمين بوعلام، مطور برمجيات"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg",
          alt: "Amin",
        },
        {
          src: "http://img.b2bpic.net/free-photo/workers-it-company-working-computer_1303-19431.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sitting-photographer-looking-picture_23-2148019174.jpg",
          alt: "Karim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-male-student-red-checkered-shirt-with-backpack-holding-files-copybooks-rejoicing-blue-wall_140725-42547.jpg",
          alt: "Nour",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg",
          alt: "Yassine",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      ctaTitle="هل لديك أسئلة؟"
      ctaDescription="نحن هنا لمساعدتك في أي استفسار حول منصتنا أو خدماتنا."
      ctaButton={{
        text: "تواصل معنا",
        href: "mailto:contact@maktabadz.com",
      }}
      ctaIcon={Mail}
      faqs={[
        {
          id: "f1",
          title: "كيف يمكنني شراء الكتب؟",
          content: "يمكنك تصفح متجر الكتب، اختيار الكتاب المفضل، وإتمام عملية الشراء عبر طرق الدفع المحلية المتاحة.",
        },
        {
          id: "f2",
          title: "هل الشهادات معتمدة؟",
          content: "نعم، نقدم شهادات إتمام معتمدة بعد الانتهاء من دوراتنا التدريبية الاحترافية.",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Maktaba DZ"
      copyrightText="© 2025 Maktaba DZ. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
