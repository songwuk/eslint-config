// https://github.com/lerna/lerna/issues/1821
module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    /**
     * https://eslint.org/docs/latest/user-guide/configuring/plugins#configuring-plugins
     */
    plugins:[
        'normal',
    ],
    rules: {
        'no-var': 'warn',
        'no-alert': 'warn',
        // normal
        'normal/if-newline': 'error',
    }
    
}