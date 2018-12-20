const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
	chainWebpack: config => {
		config
		.module
		.rule("csv")
		.test(/\.csv$/)
		.use("csv-loader")
		.loader("csv-loader")
		.options({
			dynamicTyping: true,
			header: true,
			skipEmptyLines: true
		})
		.end();
	},
	configureWebpack: config => {
	    if (process.env.NODE_ENV !== 'prerender') return;
	    return {
	      plugins: [
	        new PrerenderSPAPlugin({
	          staticDir: path.join(__dirname, '/dist/'),
	          routes: ['/', '/en/', '/fr/', '/de/'],
	          postProcessHtml: function(renderedRoute) {
	          	renderedRoute.html = renderedRoute.html.replace(/\/app\.js/g, "/cancer-risks/app.js")
	          	return renderedRoute
	          },
	          minify: {
	            collapseBooleanAttributes: true,
	            collapseWhitespace: true,
	            decodeEntities: true,
	            keepClosingSlash: true,
	            sortAttributes: true,
	          },
	          renderer: new Renderer({
	            renderAfterElementExists: '#app',
	            //renderAfterTime: 20000,
	            //headless: false
	          }),
	        }),
	      ],
	    };
	},

	baseUrl: process.env.NODE_ENV === 'production'
	? '/cancer-risks/'
	: '/'
}