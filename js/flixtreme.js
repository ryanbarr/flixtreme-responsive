/**
 * Flixtreme.js
 * Requires jQuery v1.10.x or higher.
 */
var Flixtreme = (function(){

    // Method which executes upon import of the Flixtreme file.
    this.init = function() {
        this.setupPopover();
        this.bindFlixtremeEvents();

        return this;
    };

    // Sets up the popover element
    this.setupPopover = function() {
        $(document.body)
            .find('.download-app')
            .popover({
                content: 'Test',
                placement: 'top',
                trigger: 'manual'
            });
    };

    // Binds global event handlers for the Flixtreme website.
    this.bindFlixtremeEvents = function() {
        $(document.body)
            .on('click', '.toggle-menu', this.toggleMobileMenu)
            .on('click', '.download-app', this.downloadApp);

        // Set the header video to autoplay if it needs to.
        this.toggleVideoAutoplay();

        // Make sure autoplay respond to window resizing.
        $(window).resize(this.toggleVideoAutoplay);
    };

    // Navigate the user to the iTunes store.
    this.downloadApp = function() {
        if (document.body.clientWidth >= 768) {
          $(this).popover('show');
        } else {
          window.location = "https://itunes.apple.com/us/app/flixtreme/id959659626?mt=8";
        }
    };

    // Toggles the visible state of the menu for mobile devices.
    this.toggleMobileMenu = function() {
        $('#menu').toggleClass('hidden-xs');
    };

    // Toggles the autoplay property on the video, which is off by default.
    // This prevents mobile from buffering the video automatically when it is hidden.
    this.toggleVideoAutoplay = function() {
        if (document.body.clientWidth >= 768) {
            $('#backgroundVideo').prop('autoplay', true).show();
            document.getElementById('backgroundVideo').play();
        } else {
            $('#backgroundVideo').prop('autoplay', false).hide();
            document.getElementById('backgroundVideo').pause();
        }
    };

    return this.init();
})();
