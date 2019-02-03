<?php
	/**
	 * Created by PhpStorm.
	 * User: alexandrzanko
	 * Date: 1/10/19
	 * Time: 3:59 PM
	 */

	add_action( 'cmb2_admin_init', 'lesson_page_metabox' );

	function lesson_page_metabox() {
		$cmb = new_cmb2_box( array(
			'id'           => 'lesson-information',
			'title'        => 'Информация Уровня',
			'object_types' => array( 'page' ), // post type
			'show_on'      => array( 'key' => 'page-template', 'value' => 'template-lesson.php' ),
			'context'      => 'normal', //  'normal', 'advanced', or 'side'
			'priority'     => 'high',  //  'high', 'core', 'default' or 'low'
			'show_names'   => true, // Show field names on the left
		) );

		$cmb->add_field( array(
			'name'        => 'Уровень',
			'description' => 'Это целое число (1)',
			'id'          => 'level',
			'type'        => 'text_small',
			'required' => true
		) );
	}