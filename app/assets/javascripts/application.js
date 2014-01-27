// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require raffler
Raffler = Ember.Application.create();

Raffler.store = DS.Store.create({
  revision: 4,
  adapter: DS.RESTAdapter.create()
});

Raffler.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

Raffler.router = Raffler.Router.create({
  location: 'history'
});

Raffler.initialize(Raffler.router);
