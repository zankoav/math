<?php
	/**
	 * Created by PhpStorm.
	 * User: alexandrzanko
	 * Date: 10/16/18
	 * Time: 4:30 PM
	 */

	add_action( 'template_redirect', function () {

		add_action( 'wp_enqueue_scripts', function () {

			wp_enqueue_style( 'commons', Assets::getCss( 'common' ), false, null );

			if ( is_page_template( 'template-lesson-1.php' ) ) {
				wp_enqueue_style( 'lesson_1', Assets::getCss( 'lesson_1' ), false, null );
			}

			wp_enqueue_style( 'style', BASE_URL . '/style.css', false, null );

		} );
	} );
