require('dotenv').config();
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script:[
            {src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"},
            {src:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js"},
            {src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"},
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/vform'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: ['@nuxtjs/router'],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/auth',
      '@nuxtjs/axios',
      '@nuxtjs/dotenv',
    ],

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'login', method: 'post', propertyName: 'token' },
                    logout: { url: 'logout', method: 'post' },
                    user: { url: 'me', method: 'get', propertyName: 'data' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer'
                // autoFetchUser: true
            }
        }
    },
    /*
    ** Build configuration
    */

    axios :{
        baseURL: process.env.API_BASE
    },
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
