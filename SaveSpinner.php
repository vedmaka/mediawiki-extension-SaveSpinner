<?php

class SaveSpinner {

	/**
	 * @param EditPage   $editPage
	 * @param OutputPage $output
	 */
	public static function onShowEditForm( EditPage &$editPage, OutputPage &$output ) {
		$output->addModules('ext.savespinner');
	}

}
