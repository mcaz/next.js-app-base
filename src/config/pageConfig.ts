export const pageConfig: TPages = {
  home: {
    path: '/',
    public: false,
    meta: {
      title: 'HOME',
      description: 'HOMEページです。',
    },
  },

  login: {
    path: '/login',
    public: true,
    meta: {
      title: 'LOGIN',
      description: 'LOGINページです。',
    },
  },

  components: {
    path: '/components',
    public: false,
    meta: {
      title: 'COMPONENTS',
      description: 'COMPONENTSページです。',
    },
  },

  store: {
    path: '/store',
    public: false,
    meta: {
      title: 'STORE',
      description: 'STOREページです。',
    },
  },

  article: {
    path: '/article',
    public: false,
    meta: {
      title: 'Article',
      description: 'ARTICLEページです。',
    },
  },

  role: {
    path: '/role',
    public: false,
    meta: {
      title: 'ROLE',
      description: 'ROLEページです。',
    },
  },

  worker: {
    path: '/worker',
    public: false,
    meta: {
      title: 'WORKER',
      description: 'WORKERページです。',
    },
  },

  error404: {
    path: '/404',
    public: true,
    meta: {
      title: 'ERROR_404',
      description: 'ERROR_404ページです',
    },
  },

  error500: {
    path: '/500',
    public: true,
    meta: {
      title: 'ERROR_500',
      description: 'ERROR_500ページです',
    },
  },
} as const;
