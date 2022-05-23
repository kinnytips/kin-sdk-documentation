module.exports={
  title: 'Kin SDK Dart',
  tagline: 'A website for testing',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'Kinny',
  projectName: 'Kin SDK',
  scripts: [
    'https://buttons.github.io/buttons.js'
  ],
  // deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // sidebarCollapsible: true,
          // editUrl: 'https://github.com/kinnytips/kin-sdk-documentation/edit/main/website',
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          // path: '..\\docs',
          // sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          path: 'blog'
        },
        theme: {
          customCss: '..\\src\\css\\customTheme.css'
        }
      }
    ]
  ],
  plugins: [],
  themeConfig: {
    forceDarkMode: true, 
    darkMode: true,
    // docs: {
    //   sidebar: {
    //     hideable: true,
    //     autoCollapseCategories: true,
    //   },
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      // switchConfig: {
      //   // Icon for the switch while in dark mode
      //   darkIcon: '  ',
      //   darkIconStyle: {
      //     marginTop: '1px',
      //   },
      //   lightIcon: '  ',
      //   lightIconStyle: {
      //     marginTop: '1px',
      //   },
      // },
    },
    navbar: {
      title: 'Test Site',
      // logo: {
      //   src: 'img/favicon.ico'
      // },
      items: [
        {
          to: '/docs/',
          label: 'Docs',
          position: 'left'
        },
        {
          to: '/blog/',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/help',
          label: 'Help',
          position: 'left'
        }
      ]
    },
    image: 'img/undraw_online.svg',
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Kinny Technologies Inc.`,
      logo: {
        src: 'img/favicon.ico'
      }
    }
  }
}