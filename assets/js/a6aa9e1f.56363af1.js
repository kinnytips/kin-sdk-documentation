"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89],{4118:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(102),l=a(7294),n=a(6010),i=a(8277),s=a(9960),o=a(5999);const m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var v=a(3102);function b(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return l.createElement(v.Zo,{component:b,props:e})}var f=a(7524);function N(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(h,{sidebar:t}):null}var Z=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,Z),m=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(N,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(7294),l=a(2263),n=a(4118),i=a(8765),s=a(5999),o=a(1750);function m(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(o.Z,{permalink:a,title:r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(o.Z,{permalink:l,title:r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var c=a(1944),u=a(5281),d=a(4739),g=a(6010);function p(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,n=t.blogDescription,i=t.blogTitle,s="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(c.d,{title:s,description:n}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function h(e){var t=e.metadata,a=e.items,l=e.sidebar;return r.createElement(n.Z,{sidebar:l},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}function v(e){return r.createElement(c.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogListPage)},r.createElement(p,e),r.createElement(h,e))}},8765:(e,t,a)=>{a.d(t,{Z:()=>I});var r=a(7294),l=a(6010),n=a(5999),i=a(9960),s=a(4996),o=a(2263),m=["zero","one","two","few","many","other"];function c(e){return m.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function d(){var e=(0,o.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:c(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),u}var t,a}),[e])}function g(){var e=d();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}var p=a(8780),h=a(6810),v=a(6753);const b="blogPostTitle_rzP5",E="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j";var N=a(8727);function Z(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function _(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,o=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(Z,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(Z,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const k="authorCol_FlmR",P="imageOnlyAuthorRow_trpF",w="imageOnlyAuthorCol_S2np";function T(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?P:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?w:k),key:t},r.createElement(_,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function I(e){var t,a,o=(a=g().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),m=(0,s.C)().withBaseUrl,c=e.children,u=e.frontMatter,d=e.assets,Z=e.metadata,_=e.truncated,k=e.isBlogPostPage,P=void 0!==k&&k,w=Z.date,I=Z.formattedDate,F=Z.permalink,y=Z.tags,L=Z.readingTime,M=Z.title,R=Z.editUrl,x=Z.authors,A=null!=(t=d.image)?t:u.image,C=!P&&_,U=y.length>0,B=P?"h1":"h2";return r.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:b,itemProp:"headline"},P?M:r.createElement(i.Z,{itemProp:"url",to:F},M)),r.createElement("div",{className:(0,l.Z)(E,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",o(L))),r.createElement(T,{authors:x,assets:d})),A&&r.createElement("meta",{itemProp:"image",content:m(A,{absolute:!0})}),r.createElement("div",{id:P?p.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(h.Z,null,c)),(U||_)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",P&&f)},U&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},r.createElement(N.Z,{tags:y})),P&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(v.Z,{editUrl:R})),C&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);