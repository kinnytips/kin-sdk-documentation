import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kin-sdk-documentation/__docusaurus/debug',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug', '2c9'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/config',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/config', '8d1'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/content',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/content', 'd67'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/globalData', 'aed'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/metadata', '7c5'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/registry', '750'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/kin-sdk-documentation/__docusaurus/debug/routes', 'a42'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog',
    component: ComponentCreator('/kin-sdk-documentation/blog', '84e'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/2016/03/11/blog-post',
    component: ComponentCreator('/kin-sdk-documentation/blog/2016/03/11/blog-post', '908'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/2017/04/10/blog-post-two',
    component: ComponentCreator('/kin-sdk-documentation/blog/2017/04/10/blog-post-two', '7ba'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/2017/09/25/testing-rss',
    component: ComponentCreator('/kin-sdk-documentation/blog/2017/09/25/testing-rss', '8e8'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/2017/09/26/adding-rss',
    component: ComponentCreator('/kin-sdk-documentation/blog/2017/09/26/adding-rss', '344'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/2017/10/24/new-version-1.0.0',
    component: ComponentCreator('/kin-sdk-documentation/blog/2017/10/24/new-version-1.0.0', 'f65'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/blog/archive',
    component: ComponentCreator('/kin-sdk-documentation/blog/archive', 'd56'),
    exact: true
  },
  {
    path: '/kin-sdk-documentation/docs',
    component: ComponentCreator('/kin-sdk-documentation/docs', 'a37'),
    routes: [
      {
        path: '/kin-sdk-documentation/docs/doc1',
        component: ComponentCreator('/kin-sdk-documentation/docs/doc1', 'b41'),
        exact: true,
        sidebar: "guides"
      },
      {
        path: '/kin-sdk-documentation/docs/doc2',
        component: ComponentCreator('/kin-sdk-documentation/docs/doc2', '044'),
        exact: true
      }
    ]
  },
  {
    path: '/kin-sdk-documentation/',
    component: ComponentCreator('/kin-sdk-documentation/', 'e72'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
