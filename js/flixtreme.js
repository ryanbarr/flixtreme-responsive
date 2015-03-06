/**
 * Flixtreme.js
 * Requires jQuery v1.10.x or higher.
 */
var Flixtreme = (function(){

    // Method which executes upon import of the Flixtreme file.
    this.init = function() {
        this.bindFlixtremeEvents();

        return this;
    };

    // Binds global event handlers for the Flixtreme website.
    this.bindFlixtremeEvents = function() {
        $(document.body).on('click', '.toggle-menu', this.toggleMobileMenu);
    };

    // Toggles the visible state of the menu for mobile devices.
    this.toggleMobileMenu = function() {
        $('#menu').toggleClass('hidden-xs');
    };

    return this.init();
})();
