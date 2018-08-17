( function ( $, mw ) {

	function SaveSpinner() {
		this.spinner = null;
		this.initialize();
	}

	SaveSpinner.prototype.initialize = function () {
		var saveBtn = document.getElementById( 'wpSave' ),
			previewBtn = document.getElementById( 'wpPreview' ),
			diffBtn = document.getElementById( 'wpDiff' );

		this.spinner = document.createElement( 'DIV' );
		this.spinner.classList.add( 'savespinner-wrapper' );
		this.spinner.innerHTML = 'Loading...';
		document.querySelector( 'body' ).appendChild( this.spinner );

		if( saveBtn ) {
			saveBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		if( previewBtn ) {
			previewBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}

		if( diffBtn ) {
			diffBtn.addEventListener( 'click', this.onClick.bind( this ) );
		}
	};

	SaveSpinner.prototype.onClick = function ( event ) {
		// event.preventDefault();
		this.displaySpinner();
	};

	SaveSpinner.prototype.displaySpinner = function () {
		this.spinner.classList.add( 'savespinner-wrapper--visible' );
	};

	mw.SaveSpinner = SaveSpinner;

}( jQuery, mediaWiki ) );

var spinner = new mediaWiki.SaveSpinner();
