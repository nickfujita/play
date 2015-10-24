// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // el: '<ul class="collapsible" data-collapsible="accordion"></ul>',

  tagName: 'ul',

  className: 'collapsible side-nav full',

  id: 'slide-out',

  attributes: {
    'data-collapsible': 'accordion'
  },

  initialize: function() {
    this.render();
    this.listenTo(this,'songQueueUpdated', function(){
      console.log('hahahhahahhaha');
      $('.collapsible').collapsible({accordion : false});
    });
  },

  render: function() {

    this.$el.children().detach();

    this.$el.append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    this.trigger('songQueueUpdated');
  }

});
