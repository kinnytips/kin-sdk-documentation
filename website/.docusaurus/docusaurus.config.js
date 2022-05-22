export default {
  "title": "Kin SDK Dart",
  "tagline": "A website for testing",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "organizationName": "Kinny",
  "projectName": "Kin SDK",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {},
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "..\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "forceDarkMode": true,
    "darkMode": true,
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "  ",
        "darkIconStyle": {
          "marginTop": "1px"
        },
        "lightIcon": "  ",
        "lightIconStyle": {
          "marginTop": "1px"
        }
      }
    },
    "navbar": {
      "title": "Test Site",
      "items": [
        {
          "to": "/docs/",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "/blog/",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Kinny Technologies Inc.",
      "logo": {
        "src": "img/favicon.ico"
      },
      "style": "light"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};