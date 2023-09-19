const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    otherLanguages: ['geo'],
    defaultNS: 'common',
    localeSubpaths:{
        hr:'geo'
    },
    localePath: 'public/static/locales',

})