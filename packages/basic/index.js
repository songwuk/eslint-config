// https://github.com/lerna/lerna/issues/1821
module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    reportUnusedDisableDirectives: true,
    /**
     * https://eslint.org/docs/latest/user-guide/configuring/plugins#configuring-plugins
     */
    plugins:[
        'normal',
    ],
    settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.mjs'] },
        },
        "sharedData": "Hello"
    },
    rules: {
        'no-var': 'warn',
        'no-alert': 'warn',
        // normal
        'normal/if-newline': 'error',
    }
    
}