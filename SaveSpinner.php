<?php

class SaveSpinner {

	/**
	 * @param EditPage   $editPage
	 * @param OutputPage $output
	 */
	public static function onShowEditForm( EditPage &$editPage, OutputPage &$output ) {
		$output->addModules('ext.savespinner');
	}

	public static function onRenderingEnd( $form_text ) {
		global $wgOut;
		$wgOut->addModules('ext.savespinner');
	}

}
