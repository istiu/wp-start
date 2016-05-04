<?php
/**
 * The template used for displaying hero content.
 *
 * @package Start_WP
 */
?>

<?php if ( has_post_thumbnail() ) : ?>
	<div class="start-wp-hero">
		<?php the_post_thumbnail( 'start-wp-hero' ); ?>
	</div>
<?php endif; ?>
