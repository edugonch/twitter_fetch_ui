// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require core
//= require dashboard

var App = {
    Observable: function(){
        this.handlers = {};
    },
    initObservable: function(observable){
        observable.prototype = {
          subscribe: function(identifier, fn) {
            this.handlers[identifier] = fn;
          },
    
          unsubscribe: function(identifier) {
            delete this.handlers[identifier];
          },
    
          fire: function(identifier, thisObj) {
              return this.handlers[identifier];
          }
        }
    },
    init: function(){
        App.initObservable(App.Observable);
        App.observable = new App.Observable();
    }
}