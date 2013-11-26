
/**
 * Dependencies
 */
var ListingInfo = require('retsly-js-listinginfo');
var PhotoTile = require('retsly-js-phototile');

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');


/*
 * Retsly VirtualTour Component
 * Requires Retsly SDK (Full hosted SDK including _, $, BB)
 * TODO: Need to be able to pass in a listing model
 */
var Components = module.exports = {};

Components.Basic = Backbone.View.extend({
  index: 0,
  className: 'retsly-component retsly-js-virtualtour span12 row-fluid',
  initialize: function(options) {

    if(!options || typeof options.vendor_id === "undefined")
      throw new Error('Retsly.Views.VirtualTour requires a vendor_id: `{vendor_id: \'id\'}`');

    if(!options || typeof options.listing_id === "undefined")
      throw new Error('Retsly.Views.VirtualTour requires a listing_id: `{listing_id: listing.id}`');

    if(typeof options == "undefined" || !options.target)
      throw new Error('Retsly.Views.VirtualTour is a subview and must have a target: `{target:this}`');

    this.options = _.extend({ vendor_id: null, listing_id: null }, options);
    options.target = (typeof options.target.$el !== "undefined") ? options.target.$el : $(options.target);

    $(options.target).append(this.$el);

    new PhotoTile.Basic({
      target: this.$el,
      vendor_id: this.options.vendor_id,
      listing_id: this.options.listing_id,
      height: 200
    });

    new ListingInfo.Basic({
      target: this.$el,
      vendor_id: this.options.vendor_id,
      listing_id: this.options.listing_id,
    });

  }
});
