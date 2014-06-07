var Router = Backbone.Router.extend({
  routes: {
    "start": "startViewer",
    "results": "resultsViewer"
  },

  initialize: function() {
  },

  startViewer: function () {
    $('#app').html(/*this.startView.render().el*/);
  },

  resultsViewer: function () {
    $('#app').html(/*this.startView.render().el*/);
  },
});
