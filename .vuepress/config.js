module.exports = {
  lang: 'es-419',
  title: '🥑 Un aguacate que programa 🥑',
  description: 'Javascript y algo más',
  plugins: [
    '@vuepress/blog',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    [ '@vuepress/google-analytics',
      { ga: 'UA-90456269-1' }
    ],
    ['@vuepress/search',
      { searchMaxSuggestions: 5 }
    ],
  ],
  themeConfig: {
    lastUpdated: 'Actualizado en:',
    nav: [
      { text: '🥑 LA PEPA', link: '/about/' },
      { text: '💻 LAS CHAMBAS', link: '/works/' },
      { text: '🙏🏼 UNA AYUDAÍTA', link: '/ayuda/' },
      { text: '🤔 PA\' PENSAR', link: '/think/' },
      { text: 'LO QUE ESCRIBO', link: '/blog/' }
    ],
  }
}
