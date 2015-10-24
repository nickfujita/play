// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  el: '<li>',

  template: _.template('\
      <div class="collapsible-header queuedSong truncate"><%= title %></div>\
      <div class="collapsible-body card"><div class="card-image"><img src="<%- artwork_url %>"/></div></div>\
      '),

  // template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  // events: {
  //   // 'click': function() {
  //   //   // this.model.dequeue(); // dequeue a song when clicked
  //   // }
  // },

  render: function(){
    this.$el.append(this.template(this.model.attributes));

    return this.el;
  }

});