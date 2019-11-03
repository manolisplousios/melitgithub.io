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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'melit' );

/** MySQL database username */
define( 'DB_USER', 'plousios' );

/** MySQL database password */
define( 'DB_PASSWORD', 'plousios' );

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
define( 'AUTH_KEY',         '[]ng3RimhI}~TD;=!>)op%Fxrj,GVGtKZNtu;,cw`PnP{:}9lTC~-7+#(|9^b>, ' );
define( 'SECURE_AUTH_KEY',  '@G_n;?^@h,^= _L*ue?r4nwNJuEk`lYFkauU,ozA&#PP#i4,:T=(y 0&Yc(H#nQ}' );
define( 'LOGGED_IN_KEY',    'l{+$<:h|j41HIH2ud1$7fOPGr7m=4!eL~<is#>=t](0j*^HVsTQ;Kzcl&!Npgueb' );
define( 'NONCE_KEY',        'U7tt?UR}JP/4J$@OIYT;>c%3Ctuaq?ZyOho+$|>~y%t(W=r9Y}k+qr8,.Qav-;~)' );
define( 'AUTH_SALT',        '/Q*X:,GridW5s~+%~jR#6g${}wE?>gCy@&vqz[*`0BNH)N22*,&-|A (v$nmDANG' );
define( 'SECURE_AUTH_SALT', 'ehwqlVe>O)6W~[EG],A-Et*2Tc.l:xwgTK?<2u(Ns:<IK($fgAF>9CE1;P75SF A' );
define( 'LOGGED_IN_SALT',   'J{8x^vP#,J?dKo<bsc:Z3roSAZh[H_VOid[RS.7>*2< /ixn.Qk[oq_75HDIiWrX' );
define( 'NONCE_SALT',       'f|gMB6ZZz4tw+t(jLc*/hoZ}GnS8?/$@N$RAM.:^Vzcp]^U4)9<OV7pTjy@3`v~I' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
