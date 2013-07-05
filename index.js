/*
 * Retsly VirtualTour Component
 * Requires Retsly SDK (Full hosted SDK including _, $, BB)
 * TODO: Need to be able to pass in a listing model
 */

if(typeof Retsly !== 'undefined') {

  Retsly.Views.VirtualTour = module.exports = exports = (function(){

    var PhotoTile = require('retsly-js-phototile')
      , ListingInfo = require('retsly-js-listinginfo');

    var Component = {};
    Component.Basic = Backbone.View.extend({
      index: 0,
      initialize: function(options) {

        if(!options || typeof options.mls_id === "undefined")
          throw new Error('Retsly.Views.VirtualTour requires a mls_id: `{mls_id: mls.id}`');

        if(!options || typeof options.listing_id === "undefined")
          throw new Error('Retsly.Views.VirtualTour requires a listing_id: `{listing_id: listing.id}`');

        if(typeof options == "undefined" || !options.target)
          throw new Error('Retsly.Views.VirtualTour is a subview and must have a target: `{target:this}`');

        this.options = _.extend({ mls_id: null, listing_id: null }, options);
        options.target = (typeof options.target.$el !== "undefined") ? options.target.$el : $(options.target)

        $(options.target).append(this.$el);

        new PhotoTile.Basic({
          target: this.$el,
          mls_id: this.options.mls_id,
          listing_id: this.options.listing_id,
          height: 200
        });

        new ListingInfo.Basic({
          target: this.$el,
          mls_id: this.options.mls_id,
          listing_id: this.options.listing_id,
        });

      }
    });

    return Component;

  })();

} else {
  module.exports = exports = function(){
    return; // NOOP.
  };
}
