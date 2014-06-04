require.config({
	baseUrl: './javascripts',
	paths: {
		'jQuery': 'libs/jquery/dist/jquery',
		'angular': 'libs/angular/angular',
		'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
		'angular-resource': 'libs/angular-resource/angular-resource'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular'],
			exports: 'angular-resource'
		},
		'jQuery': {
			exports: 'jQuery'
		},
		'bootstrap': {
			deps: ['jQuery'],
			exports: 'bootstrap'
		}
	}
});

require([
	'jQuery',
	'angular', 
	'bootstrap',
	'angular-resource',
	'modules/makeup'
] , function($, angular) {
	$(function () {
		angular.bootstrap(document, ['makeup']);
	});
});