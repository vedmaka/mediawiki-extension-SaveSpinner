( function ( $, mw ) {

	function SaveSpinner() {
		this.initialize();
	}

	SaveSpinner.prototype.initialize = function () {
		console.log( 'SaveSpinner' );
	};

	mw.SaveSpinner = SaveSpinner;

} )( jQuery, mediaWiki );

var spinner = new mediaWiki.SaveSpinner();
