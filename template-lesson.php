<?php
	/**
	 * Template Name: Уровень
	 */

	get_header();
	$args = [
		'theme_location'  => 'main-menu',
		'menu'            => 'Main',
		'container'       => '',
		'menu_class'      => 'lesson-menu',
		'echo'            => true,
		'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
		'depth'           => 0
    ];
	$level = get_post_meta( get_the_ID(), 'level', 1 ); ?>

    <div class="loader">
        <div class="loader__spinner loader__spinner_egg"></div>
    </div>
    <div class="app">
        <header class="header">
            <div class="container">Математика для школьников</div>
        </header>
        <div class="app__content">
            <?php wp_nav_menu($args);?>
            <main class="lesson">
                <hedaer class="lesson__header">
                    <h1 class="lesson__title"><?= get_the_title();?></h1>
                    <p class="lesson__description">Проверь себя, решив 10 примеров по математике</p>
                </hedaer>
                <div class="lesson__content" id="lesson" data-level="<?= $level; ?>"></div>
            </main>
        </div>
        <footer class="footer">
            <div class="container">Математика для школьников</div>
        </footer>
    </div>


<?php get_footer(); ?>