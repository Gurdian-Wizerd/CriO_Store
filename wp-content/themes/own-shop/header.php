<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section
 * 
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package own-shop
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/92d94854676f6b719ee977b83/759ca0f06da1c77f61cf3d927.js");</script>
<?php wp_head(); ?>
</head>

<body <?php body_class('at-sticky-sidebar');?>>
	<?php 
      if(function_exists('wp_body_open')) :
          wp_body_open();
      else :
          do_action('wp_body_open');
      endif;
    ?>
	<?php
	if(true === get_theme_mod( 'own_shop_enable_preloader',true )) :
  		?>
        <!-- Begin Preloader -->
            <div class="loader-wrapper lds-flickr">
                <div id="pre-loader">
                    <div class="loader-pulse"></div>
                </div>
            </div>
    		<!-- End Preloader -->
  		<?php
  endif;
	?>
    <!-- Header Styles -->
    <?php
        /**
         * Hook - own_shop_action_header.
         *
         * @hooked own_shop_header_menu_styles - 10
         */
        do_action( 'own_shop_action_header' );
    ?>