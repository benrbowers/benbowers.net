<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'benbower_wp435' );

/** MySQL database username */
define( 'DB_USER', 'benbower_wp435' );

/** MySQL database password */
define( 'DB_PASSWORD', 'NS176p4[y-' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'midozndkjfnbeoyk6xc0m6yex7ujksbjk7uq2gvqjmkivu01mrvk9yu46nkokbdw' );
define( 'SECURE_AUTH_KEY',  'ubcgnxvgbh1ntxlpoxlvyjqtecryxlln40klhssyhzclugp79zm2yzrwukd5foad' );
define( 'LOGGED_IN_KEY',    'vmgk01jzhtbao0ibseueefbtpb1ybr70ctaha8xfpfqinax8ij5rsdhlchfvck94' );
define( 'NONCE_KEY',        'rhwrxbvgihd4ktruyg8k4hyvxlpwe7a9e60d0fqifbh6bbdql7l7vvyuemrgqdbk' );
define( 'AUTH_SALT',        'poxlu1xkyy04cmctyod2iudm0ghypnsoddgsgvchf0rb4kn7dd8veqcxsprh5htq' );
define( 'SECURE_AUTH_SALT', 'm4h7j45fmwnwafhbom6tu9j42seshvgmxjmwo1s9o2cdqesap3t5lsu3qrrx4a2z' );
define( 'LOGGED_IN_SALT',   'hyetymx8llo4wxaepxwegooijt5vdvzav8rsonwxexaxsgssldvefdwm06sdhbye' );
define( 'NONCE_SALT',       'gcgli7wbad2apy7lsjllvx4uozg3nb2bzhtz1251ukchnbmj3lc02bvktbewrdin' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpws_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
