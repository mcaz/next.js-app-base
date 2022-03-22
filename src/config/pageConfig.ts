export const pageConfig: TPages = {
  home: {
    path: '/',
    meta: {
      title: 'HOME',
      description: 'HOMEページです。',
    },
  },

  components: {
    path: '/components',
    meta: {
      title: 'COMPONENTS',
      description: 'COMPONENTSページです。',
    },
  },

  store: {
    path: '/store',
    meta: {
      title: 'STORE',
      description: 'STOREページです。',
    },
  },

  model: {
    path: '/model',
    meta: {
      title: 'MODEL',
      description: 'MODELページです。',
    },
  },

  role: {
    path: '/role',
    meta: {
      title: 'ROLE',
      description: 'ROLEページです。',
    },
  },

  worker: {
    path: '/worker',
    meta: {
      title: 'WORKER',
      description: 'WORKERページです。',
    },
  },

  error404: {
    path: '/404',
    meta: {
      title: 'ERROR_404',
      description: 'ERROR_404ページです',
    },
  },

  error500: {
    path: '/500',
    meta: {
      title: 'ERROR_500',
      description: 'ERROR_500ページです',
    },
  },
} as const;

export default pageConfig;
