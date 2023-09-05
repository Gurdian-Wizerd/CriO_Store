<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sam_wpcf777' );

/** Database username */
define( 'DB_USER', 'sam_wpcf77' );

/** Database password */
define( 'DB_PASSWORD', 'wpcf@77' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY','T//8{-5TV+[oPw?.uvw$S+$&TV|ou-@>[ zD<+.39G}bN+o6`j?g]%5,Fs2+2JV[');
define('SECURE_AUTH_KEY','B-BT]$$%K+wH4C_!~+34.*3g](+I[n{z;|bl!VJ$CP_DKR)CF311j!VC_[ZLPfpp');
define('LOGGED_IN_KEY','A6+D])8WW?/yssog0mnHwh+fnhl.KgWF j(&he&[99zo`B|$*:;sIeMG;9`aDg^-');
define('NONCE_KEY','k]v:t-+.9?!yD`_BjL|OQfUc3X6$g-@.>o+|rCP4rYl$?U.+58Y!p#|^*H]+)8-G');
define('AUTH_SALT','-xBdUyF|,p]MCzR*jih?ikir}+_P?GN$+ -@pz)#)JsWG2hw:!rL|3tX AS($1p{');
define('SECURE_AUTH_SALT','(fqGFuq>`.q7i;Kw$uU:p>fX)s`X?|AmYR>1yzS^u`ivLUB0cfbBV`t@#YaQ X.C');
define('LOGGED_IN_SALT','d[}f7v5QI&S%&AQpbr7e05d]UNnq6b?UwGcPeg=anQK.zX7$kbgQ43g>]RCiU.v2');
define('NONCE_SALT','1NfDNqR+-A(Q+2yi.t/0}E5-d*Sc]0ek^Q`D.Pp11+fblMAWoMWlgVi+m{Brim=l');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

@ini_set('upload_max_size' , '256M' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
