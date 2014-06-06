require.config({
	baseUrl: './javascripts',
	paths: {
		'jQuery': 'libs/jquery/dist/jquery.min',
		'angular': 'libs/angular/angular.min',
		'jquery-form': 'libs/jquery-form/jquery.form',
		'bootstrap': 'libs/bootstrap/dist/js/bootstrap.min',
		'angular-route': 'libs/angular-route/angular-route.min'
	},
	shim: {
		'jQuery': {
			exports: 'jQuery'
		},
		'angular': {
			exports: 'angular'
		},
		'jquery-form': {
			deps: ['jQuery'],
			exports: 'jquery-form'
		},
		'bootstrap': {
			deps: ['jQuery'],
			exports: 'bootstrap'
		},
		'angular-route': {
			deps: ['angular'],
			exports: 'angular-route'
		}
	}
});

require([
	'jQuery',
	'angular',
	'jquery-form',
	'bootstrap',
	'modules/makeup',
	'modules/router'
], function($, angular) {
	$(function () {
		angular.bootstrap(document, ['makeup']);
	});
});