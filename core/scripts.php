<?php
	/**
	 * Created by PhpStorm.
	 * User: alexandrzanko
	 * Date: 10/16/18
	 * Time: 4:30 PM
	 */

	add_action( 'template_redirect', function () {

		add_action( 'wp_enqueue_scripts', function () {

			wp_enqueue_script( 'commons', Assets::getJs( 'common' ), false, null, true );

			if ( is_page_template( 'template-lesson.php' ) ) {
				wp_enqueue_script( 'lesson_1', Assets::getJs( 'lesson_1' ), false, null, true );
			}
		} );
	} );