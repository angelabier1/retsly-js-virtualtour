
/**
 * Dependencies
 */
var ListingInfo = require('retsly-listinginfo');
var PhotoTile = require('retsly-phototile');

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

    if(!options || typeof options.vendorID === "undefined")
      throw new Error('Retsly.Views.VirtualTour requires a vendorID: `{vendorID: \'id\'}`');

    if(!options || typeof options.listingID === "undefined")
      throw new Error('Retsly.Views.VirtualTour requires a listingID: `{listingID: listing.id}`');

    if(typeof options == "undefined" || !options.target)
      throw new Error('Retsly.Views.VirtualTour is a subview and must have a target: `{target:this}`');

    this.options = _.extend({ vendorID: null, listingID: null }, options);
    options.target = (typeof options.target.$el !== "undefined") ? options.target.$el : $(options.target);

    $(options.target).append(this.$el);

    new PhotoTile.Basic({
      target: this.$el,
      vendorID: this.options.vendorID,
      listingID: this.options.listingID,
      height: 200
    });

    new ListingInfo.Basic({
      target: this.$el,
      vendorID: this.options.vendorID,
      listingID: this.options.listingID,
    });

  }
});
