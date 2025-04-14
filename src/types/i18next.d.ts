import 'react-i18next';

declare module 'react-i18next' {
  // Extend the TFunction interface
  export interface TFunction {
    (key: string): string;
    (key: string, options: {}): string;
  }

  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: 'translation';
    resources: {
      translation: {
        header: {
          home: string;
          projects: string;
          contact: string;
          language: string;
        };
        hero: {
          greeting: string;
          name: string;
          title: string;
          description: string;
          viewProjects: string;
          contactMe: string;
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
  }
} 