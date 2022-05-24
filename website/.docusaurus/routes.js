import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '772'),
    exact: true
  },
  {
    path: '/blog/2016/03/11/blog-post',
    component: ComponentCreator('/blog/2016/03/11/blog-post', '35f'),
    exact: true
  },
  {
    path: '/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/blog/2017/04/10/blog-post-two', 'bf2'),
    exact: true
  },
  {
    path: '/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/blog/2017/09/25/testing-rss', '466'),
    exact: true
  },
  {
    path: '/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/blog/2017/09/26/adding-rss', '721'),
    exact: true
  },
  {
    path: '/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0', '57b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f18'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '329'),
    routes: [
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1', '7ad'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c88'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
