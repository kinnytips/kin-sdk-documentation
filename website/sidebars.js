/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 const KinnyClient = require('./sidebar_spec_supabase')
 const KinnyCli = require('./sidebar_spec_cli')
 const dart = require('./sidebar_spec_dart')
 
 module.exports = {
   KinnyClient: [
     {
       type: 'category',
       label: 'Javascript',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
     {
       type: 'category',
       label: 'Dart',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
     {
       type: 'category',
       label: 'CLI',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
   ],
   docs: [
     {
       type: 'category',
       label: 'Overview',
       items: [
        'doc1'
       ],
       collapsed: false,
     },
     {
       type: 'category',
       label: 'Tutorials',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
     {
       type: 'category',
       label: 'See Also',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
   ],
   guides: [
     {
       type: 'category',
       label: 'Guides',
       items: [
        'doc1'
       ],
       collapsed: false,
     },
     {
       type: 'category',
       label: 'Database',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
     {
       type: 'category',
       label: 'Auth',
       collapsed: false,
       items: [
        'doc1'
       ],
     },
   ],

 }