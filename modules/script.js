( function ( $, mw ) {

	function SaveSpinner() {
		this.spinner = null;
		this.initialize();
	}

	SaveSpinner.prototype.initialize = function () {
		var saveBtn = document.getElementById( 'wpSave' ),
			previewBtn = document.getElementById( 'wpPreview' ),
			diffBtn = document.getElementById( 'wpDiff' );

		this.buildSpinnerWrapper();

		if ( saveBtn ) {
			saveBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		if ( previewBtn ) {
			previewBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		if ( diffBtn ) {
			diffBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		/*

		Not sure if we actually need this, but worth to save for later.

		if ( mw.config.get( 'wgAction' ) === 'formedit' ||
			mw.config.get( 'wgCanonicalSpecialPageName' ) === 'FormEdit' ) {
		}
		*/

	};

	SaveSpinner.prototype.buildSpinnerWrapper = function () {
		this.spinner = document.createElement( 'DIV' );
		this.spinner.classList.add( 'savespinner-wrapper' );
		this.spinner.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
		document.querySelector( 'body' ).appendChild( this.spinner );
	};

	SaveSpinner.prototype.onClick = function () {
		this.displaySpinner();
	};

	SaveSpinner.prototype.displaySpinner = function () {
		this.spinner.classList.add( 'savespinner-wrapper--visible' );
	};

	mediaWiki.SaveSpinner = SaveSpinner;

}( jQuery, mediaWiki ) );

var spinner = new mediaWiki.SaveSpinner();

/*

PageForms "preview" button is actually being replaced with a new node dynamically
so it requires a little bit more efforts to make it display loading spinner
without intrusion into PageForms code.

$.fn.pfAjaxPreview = ( function ( orig ) {
	return orig;
} )( $.fn.pfAjaxPreview );
*/
