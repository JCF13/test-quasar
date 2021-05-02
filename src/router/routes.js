
const routes = [
  {
    path: '/inside',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/components/Home.vue') },
      { path: 'home', 
        component: () => import('src/components/Home.vue'),
        children: [
          { path: 'post', component: () => import('src/components/ModalPost.vue') }
        ] 
      },
      { path: 'profile', component: () => import('src/components/Profile.vue') },
      { path: 'settings',
        component: () => import('src/components/Settings.vue'),
        children: [
          { path: 'change-username', component: () => import('src/components/ChangeUsername.vue') },
          { path: 'change-password', component: () => import('src/components/ChangePassword.vue') },
          { path: 'change-profilepic', component: () => import('src/components/ChangeProfilePic.vue') },
          { path: 'account-information', component: () => import('src/components/AccountInformation.vue') }
        ]
      },
      { path: 'camera', component: () => import('src/components/Camera.vue') },
      { path: 'social', 
        component: () => import('src/components/Social.vue'),
        children: [
          { path: 'followers', component: () => import('src/components/Followers.vue') },
          { path: 'following', component: () => import('src/components/Following.vue') }
        ]
      },
      { path: 'new-post', component: () => import('src/components/NewPost.vue') }
    ]
  },
  
  {
    path: '/',
    component: () => import('layouts/AccessLayout.vue'),
    children: [
      { path: '', component: () => import('src/components/LogIn.vue') },
      { path: 'login', component: () => import('src/components/LogIn.vue') },
      { path: 'register', component: () => import('src/components/Register.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
