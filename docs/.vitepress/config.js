module.exports = {
  title: 'AicyUI',
  description: '一个好用的UI框架',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    repo: 'aicy-ui/aicy-ui',
    footer: {
      message: 'Released under the MIT License.',
      copyRight: 'Copyright ©️ 2024-present Tangmiao'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items:[
            {text: '安装', link: '/guide/installation'},
            {text: '快速上手', link: '/guide/quickStart'}
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            {text: 'Icon 图标', link: '/component/icon'},
            {text: 'Button 按钮', link: '/component/button'}
          ]
        }
      ]
    }
  }
}
