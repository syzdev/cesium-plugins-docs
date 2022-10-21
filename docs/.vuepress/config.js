module.exports = {
  base: '/cesium-plugins-docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'cesium-plugins',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'cesium-plugins',
    },
  },
  themeConfig: {
    logo: '/assets/logo-mini.png',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/introduction' },
          { text: 'About', link: '/about/' },
          { text: 'GitHub', link: 'https://github.com/syzdev/cesium-plugins' },
        ],
        sidebar: {
          '/docs/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: ['introduction', 'quick-start'],
            },
            {
              title: 'Plugins',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                'PositionPicker',
                'Cesium3DTilesLoader',
                'Tooltip',
                'exportSceneAsImage',
                'FloodAnalysis',
                'RotateAroundPoint',
                'WaterMask',
                'HTMLOverlay',
              ],
            },
          ],
        },
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/introduction' },
          { text: '关于', link: '/zh/about/' },
          { text: 'GitHub', link: 'https://github.com/syzdev/cesium-plugins' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              title: '快速开始',
              collapsable: false,
              children: ['introduction', 'quick-start'],
            },
            {
              title: 'API',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                'PositionPicker',
                'Cesium3DTilesLoader',
                'Tooltip',
                'exportSceneAsImage',
                'FloodAnalysis',
                'RotateAroundPoint',
                'WaterMask',
                'HTMLOverlay',
              ],
            },
          ],
        },
      },
    },
  },
}
