<?php
	/**
	 * Created by PhpStorm.
	 * User: alexandrzanko
	 * Date: 10/17/18
	 * Time: 3:07 PM
	 */

	add_filter( 'nav_menu_css_class', 'change_class_tag_li', 1, 3 );
	function change_class_tag_li( $classes, $item, $args ) {
		if($args->theme_location === 'main-menu'){

			if($args->menu === 'Main'){
				$classes[] = 'lesson-menu__item';

				if ( in_array( 'current_page_item', $classes ) ) {
					$classes[] = 'lesson-menu__item_active';
				}
			}

		}

		return $classes;
	}

//	add_filter( 'wp_nav_menu', 'add_menu_link_class' );

	function add_menu_link_class( $ulclass ) {
		return preg_replace( '/<a /', '<a class="menu__list-item-link"', $ulclass );
	}
