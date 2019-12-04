const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withCss(withSass({
    webpack: (config) => {
        return Object.assign({}, config, {
            node: {
                fs: 'empty'
            }
        })
    },
}))
