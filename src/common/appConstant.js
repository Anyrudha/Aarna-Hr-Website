export const isGoogleAnaylticsEnabled =
  process.env.VUE_APP_ENABLE_GOOGLE_ANALYTICS === 'no';
export const BaseURL = 'http://localhost:8080/';
const dateVersion = new Date().getTime();
export const BaseAPI = process.env.VUE_APP_API;
export const AppInsightIdKey = process.env.VUE_APP_APPLICATION_INSIGHTS;

export const RouteURL = {
  HOME: '/',
  ABOUT_US: '/about-us',
  TRAINING: '/training',
  SOLUTIONS: '/solutions',
  CLIENTELE: '/clientele',
  CONTACT_US: '/contact-us',
};

export const RouteNames = {
  HOME: 'Home',
};

export const AppLayout = {
  HEADERLAYOUT: 'HeaderLayout',
  EMPTY: 'EmptyLayout',
  BANNER: 'BannerLayout',
};

