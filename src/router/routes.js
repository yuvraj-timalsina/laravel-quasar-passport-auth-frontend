const routes = [{
  path: '/admin/',
  component: () => import('layouts/AuthLayout.vue'),
  children: [{
    path: 'register',
    name: 'RegisterPage',
    component: () => import('pages/Auth/RegisterPage.vue')
  }, {
    path: 'login',
    name: 'LoginPage',
    component: () => import('pages/Auth/LoginPage.vue')
  }, {
    path: 'dashboard',
    name: 'DashboardPage',
    component: () => import('pages/Auth/DashboardPage.vue'),
    meta: {
      requiresAuth: true
    }
  }]
}, {
  path: '/',
  name: 'MainLayout',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    name: 'IndexPage',
    component: () => import('pages/IndexPage.vue')
  }]
},

// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue')
}]

export default routes
