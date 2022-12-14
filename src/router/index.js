import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  RouteURL,
  RouteNames,
  AppLayout,
} from '../common/appConstant';

Vue.use(VueRouter);

export const routes = [
  {
    path: RouteURL.HOME,
    name: RouteNames.HOME,
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Home Page',
      layout: AppLayout.EMPTY,
      metaTags: [
        {
          name: 'description',
          content: 'Content',
        },
      ],
    },
  },
  {
    path: RouteURL.ABOUT_US,
    name: 'About Us',
    component: () => import('../views/AboutUs.vue'),
    meta: {
      title: 'About Us - Aarna HR',
      layout: AppLayout.EMPTY,
    },
  },
  {
    path: RouteURL.TRAINING,
    name: 'Training',
    component: () => import('../views/Training.vue'),
    meta: {
      title: 'Training - Aarna HR',
      layout: AppLayout.EMPTY,
    },
  },
  {
    path: RouteURL.SOLUTIONS,
    name: 'Solutions',
    component: () => import('../views/Solutions.vue'),
    meta: {
      title: 'Solutions - Aarna HR',
      layout: AppLayout.EMPTY,
    },
  },
  {
    path: RouteURL.CLIENTELE,
    name: 'Clientele',
    component: () => import('../views/Clientele.vue'),
    meta: {
      title: 'Clientele - Aarna HR',
      layout: AppLayout.EMPTY,
    },
  },
  {
    path: RouteURL.CONTACT_US,
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue'),
    meta: {
      title: 'Contact - Aarna HR',
      layout: AppLayout.EMPTY,
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/PageNotFound.vue'),
    meta: { layout: AppLayout.EMPTY, title: 'Page Not Found | Aarna HR' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: RouteURL.HOME,
  fallback: true,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  let redirectToNotFound = false;

  // This goes through the matched routes from last to first, finding the closest route with a title.

  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosenF.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  redirectToNotFound ? next({ path: 'NotFound' }) : next();
});
