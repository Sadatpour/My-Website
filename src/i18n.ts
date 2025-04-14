import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translation resources type
export type TranslationResources = {
  translation: {
    header: {
      home: string;
      projects: string;
      skills: string;
      contact: string;
      language: string;
    };
    hero: {
      greeting: string;
      name: string;
      title: string;
      description: string;
      education: string;
      languages: string;
      viewProjects: string;
      contactMe: string;
    };
    skills: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
      seeMore: string;
    };
    contact: {
      title: string;
      getInTouch: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      successMessage: string;
      errorMessage: string;
      contactInfo: string;
      emailAddress: string;
      phoneNumber: string;
      location: string;
      followMe: string;
    };
    footer: {
      rights: string;
      madeWith: string;
    };
  };
};

// Define resources with proper types
const resources: {
  [key: string]: TranslationResources;
} = {
  en: {
    translation: {
      header: {
        home: 'Home',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        language: 'Language',
      },
      hero: {
        greeting: 'Hello, I am',
        name: 'Mojtaba Sadatpour',
        title: 'Front-End Developer',
        description: 'I create responsive and engaging web interfaces with clean and efficient code.',
        education: 'Computer Science Bachelor\'s Degree',
        languages: 'Languages: English, German, Persian (Native)',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies I work with',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Check out my latest work',
        seeMore: 'See More',
      },
      contact: {
        title: 'Contact',
        getInTouch: 'Get in touch',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        successMessage: 'Message sent successfully!',
        errorMessage: 'Error sending message. Please try again.',
        contactInfo: 'Contact Information',
        emailAddress: 'Email Address',
        phoneNumber: 'Phone Number',
        location: 'Location',
        followMe: 'Follow Me',
      },
      footer: {
        rights: 'All rights reserved',
        madeWith: 'Made with',
      },
    },
  },
  fa: {
    translation: {
      header: {
        home: 'خانه',
        projects: 'پروژه‌ها',
        skills: 'مهارت‌ها',
        contact: 'تماس',
        language: 'زبان',
      },
      hero: {
        greeting: 'سلام، من هستم',
        name: 'مجتبی سادات‌پور',
        title: 'توسعه‌دهنده فرانت-اند',
        description: 'من رابط‌های کاربری واکنش‌گرا و جذاب با کدی تمیز و کارآمد ایجاد می‌کنم.',
        education: 'کارشناسی علوم کامپیوتر',
        languages: 'زبان‌ها: انگلیسی، آلمانی، فارسی (زبان مادری)',
        viewProjects: 'مشاهده پروژه‌ها',
        contactMe: 'تماس با من',
      },
      skills: {
        title: 'مهارت‌ها',
        subtitle: 'فناوری‌هایی که با آن‌ها کار می‌کنم',
      },
      projects: {
        title: 'پروژه‌ها',
        subtitle: 'آخرین کارهای من را ببینید',
        seeMore: 'بیشتر',
      },
      contact: {
        title: 'تماس',
        getInTouch: 'در تماس باشید',
        name: 'نام',
        email: 'ایمیل',
        subject: 'موضوع',
        message: 'پیام',
        send: 'ارسال',
        successMessage: 'پیام با موفقیت ارسال شد!',
        errorMessage: 'خطا در ارسال پیام. لطفا دوباره تلاش کنید.',
        contactInfo: 'اطلاعات تماس',
        emailAddress: 'آدرس ایمیل',
        phoneNumber: 'شماره تلفن',
        location: 'موقعیت',
        followMe: 'من را دنبال کنید',
      },
      footer: {
        rights: 'تمامی حقوق محفوظ است',
        madeWith: 'ساخته شده با',
      },
    },
  },
  ar: {
    translation: {
      header: {
        home: 'الرئيسية',
        projects: 'المشاريع',
        skills: 'المهارات',
        contact: 'اتصل',
        language: 'اللغة',
      },
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'مجتبى سادات بور',
        title: 'مطور واجهة أمامية',
        description: 'أنشئ واجهات ويب تفاعلية وجذابة بكود نظيف وفعال.',
        education: 'بكالوريوس في علوم الحاسوب',
        languages: 'اللغات: الإنجليزية، الألمانية، الفارسية (اللغة الأم)',
        viewProjects: 'عرض المشاريع',
        contactMe: 'اتصل بي',
      },
      skills: {
        title: 'المهارات',
        subtitle: 'التقنيات التي أعمل بها',
      },
      projects: {
        title: 'المشاريع',
        subtitle: 'تحقق من أحدث أعمالي',
        seeMore: 'المزيد',
      },
      contact: {
        title: 'اتصل',
        getInTouch: 'ابق على تواصل',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال',
        successMessage: 'تم إرسال الرسالة بنجاح!',
        errorMessage: 'خطأ في إرسال الرسالة. حاول مرة أخرى.',
        contactInfo: 'معلومات الاتصال',
        emailAddress: 'عنوان البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        location: 'الموقع',
        followMe: 'تابعني',
      },
      footer: {
        rights: 'جميع الحقوق محفوظة',
        madeWith: 'صنع بـ',
      },
    },
  },
  tr: {
    translation: {
      header: {
        home: 'Ana Sayfa',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim',
        language: 'Dil',
      },
      hero: {
        greeting: 'Merhaba, ben',
        name: 'Mojtaba Sadatpour',
        title: 'Front-End Geliştirici',
        description: 'Temiz ve verimli kodla duyarlı ve etkileyici web arayüzleri oluşturuyorum.',
        education: 'Bilgisayar Bilimi Lisans Derecesi',
        languages: 'Diller: İngilizce, Almanca, Farsça (Ana dil)',
        viewProjects: 'Projeleri Görüntüle',
        contactMe: 'İletişime Geç',
      },
      skills: {
        title: 'Yetenekler',
        subtitle: 'Çalıştığım teknolojiler',
      },
      projects: {
        title: 'Projeler',
        subtitle: 'En son çalışmalarıma göz atın',
        seeMore: 'Daha Fazla',
      },
      contact: {
        title: 'İletişim',
        getInTouch: 'İletişimde kalın',
        name: 'İsim',
        email: 'E-posta',
        subject: 'Konu',
        message: 'Mesaj',
        send: 'Gönder',
        successMessage: 'Mesaj başarıyla gönderildi!',
        errorMessage: 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.',
        contactInfo: 'İletişim Bilgileri',
        emailAddress: 'E-posta Adresi',
        phoneNumber: 'Telefon Numarası',
        location: 'Konum',
        followMe: 'Beni Takip Et',
      },
      footer: {
        rights: 'Tüm hakları saklıdır',
        madeWith: 'Tarafından yapılmıştır',
      },
    },
  },
  de: {
    translation: {
      header: {
        home: 'Startseite',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
        language: 'Sprache',
      },
      hero: {
        greeting: 'Hallo, ich bin',
        name: 'Mojtaba Sadatpour',
        title: 'Front-End Entwickler',
        description: 'Ich erstelle responsive und ansprechende Web-Oberflächen mit sauberem und effizientem Code.',
        education: 'Bachelor-Abschluss in Informatik',
        languages: 'Sprachen: Englisch, Deutsch, Persisch (Muttersprache)',
        viewProjects: 'Projekte ansehen',
        contactMe: 'Kontaktiere mich',
      },
      skills: {
        title: 'Fähigkeiten',
        subtitle: 'Technologien, mit denen ich arbeite',
      },
      projects: {
        title: 'Projekte',
        subtitle: 'Sehen Sie sich meine neuesten Arbeiten an',
        seeMore: 'Mehr sehen',
      },
      contact: {
        title: 'Kontakt',
        getInTouch: 'Kontaktieren Sie mich',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Senden',
        successMessage: 'Nachricht erfolgreich gesendet!',
        errorMessage: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
        contactInfo: 'Kontaktinformationen',
        emailAddress: 'E-Mail-Adresse',
        phoneNumber: 'Telefonnummer',
        location: 'Standort',
        followMe: 'Folgen Sie mir',
      },
      footer: {
        rights: 'Alle Rechte vorbehalten',
        madeWith: 'Gemacht mit',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 