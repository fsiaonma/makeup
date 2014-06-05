require.config({
	baseUrl: './javascripts',
	paths: {
		'jQuery': 'libs/jquery/dist/jquery',
		'angular': 'libs/angular/angular',
		'jquery-form': 'libs/jquery-form/jquery.form',
		'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
		'angular-route': 'libs/angular-route/angular-route'
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
] , function($, angular) {
	$(function () {
		angular.bootstrap(document, ['makeup']);
	});
});