( function ( $, mw ) {

	function SaveSpinner() {
		this.spinner = null;
		this.isForm = false;

		if ( this.isPopupIframe() ) {
			return;
		}

		this.initialize();

	}

	SaveSpinner.prototype.initialize = function () {
		var saveBtn = document.getElementById( 'wpSave' ),
			previewBtn = document.getElementById( 'wpPreview' ),
			diffBtn = document.getElementById( 'wpDiff' );

		if ( mw.config.get( 'wgAction' ) === 'formedit' ||
			mw.config.get( 'wgCanonicalSpecialPageName' ) === 'FormEdit' ) {
			this.isForm = true;
		}

		this.buildSpinnerWrapper();

		if ( saveBtn ) {
			saveBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		if ( previewBtn ) {
			// Hack for PageForms preview button - there is no better way so far without intrusion
			// into PageForms scripts or this requires deeper investigation
			if ( this.isForm ) {
				var self = this;
				$( document ).on( 'click', '#wpPreview', function ( event ) {
					self.onClick( event );
					setTimeout( function () {
						self.hideSpinner();
					}, 3000 );
				} );
			} else {
				previewBtn.addEventListener( 'click', this.onClick.bind( this ) );
			}
		}

		if ( diffBtn ) {
			diffBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		// Fixes FF problem with navigating back after form submit
		window.onunload = function () {};

	};

	SaveSpinner.prototype.buildSpinnerWrapper = function () {
		this.spinner = document.createElement( 'DIV' );
		this.spinner.classList.add( 'savespinner-wrapper' );
		this.spinner.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
		document.querySelector( 'body' ).appendChild( this.spinner );
	};

	SaveSpinner.prototype.onClick = function () {

		// This leads to validateAll be called twice
		if ( this.isForm && !validateAll() ) {
			return;
		}

		this.displaySpinner();
	};

	SaveSpinner.prototype.displaySpinner = function () {
		this.spinner.classList.add( 'savespinner-wrapper--visible' );
	};

	SaveSpinner.prototype.hideSpinner = function () {
		this.spinner.classList.remove( 'savespinner-wrapper--visible' );
	};

	SaveSpinner.prototype.isPopupIframe = function () {
		try {
			return ( ( window.self !== window.top ) && window.self.frameElement.classList.contains( 'popupform-innerdocument' ) );
		} catch ( e ) {
			return true;
		}
	};

	mediaWiki.SaveSpinner = SaveSpinner;

}( jQuery, mediaWiki ) );

var spinner = new mediaWiki.SaveSpinner();
