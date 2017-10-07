requirejs.config({
	baseUrl: 'app',
	map: {
	  '*': {
	    'css': 'libs/css',
	    'html': 'libs/html'
	  },
	},
	paths: {
		jquery: 'libs/jquery',
		text: 'libs/text',
	}
});
require(['libs/jquery-ui', 'css!media/css/jquery-ui.min',
		'libs/bootstrap.min', 'css!media/css/normalize', 'css!media/css/bootstrap.min', 'css!media/css/bootstrap-theme.min'],()=>{
	require(['router']);
});;