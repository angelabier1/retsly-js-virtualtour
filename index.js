/*
 * Retsly VirtualTour Component
 * Requires Retsly SDK (Full hosted SDK including _, $, BB)
 */

if(typeof Retsly !== 'undefined') {

  Retsly.Views.VirtualTour = module.exports = exports = (function(){

    var Component = function(options) {

      if(!options || typeof options.mls_id === "undefined")
        throw new Error('You must provide a mls_id: `{mls_id: x}`');

      if(!options || typeof options.listing_id === "undefined")
        throw new Error('You must provide a listing_id: `{listing_id: x}`');

      this.options = _.extend({
        mls_id: null,
        listing_id: null
      }, options);

      this.render = function(listing) {
        console.log('virtual tour', listing);
      };

      new Retsly.Models.Listing({ _id: this.options.listing_id }, {
        mls_id: this.options.mls_id,
        callback: this.render
      }).fetch();

    };

    return Component;

  })();

} else {
  module.exports = exports = function(){
    throw new Error('Retsly SDK not detected');
  };
}
