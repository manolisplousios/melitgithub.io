<?php 

//loads,enqueues,calls stylesheets

    function load_stylesheets(){

        wp_register_style('bootstrap', get_template_directory_uri().'/bootstrap/css/bootstrap.min.css', 
            array(), 1.0, 'all');
        wp_enqueue_style('bootstrap');

        wp_register_style('main_css', get_template_directory_uri().'/css/main.css', 
            array(), 1.0, 'all');
        wp_enqueue_style('main_css');

        wp_register_style('fontawesome', get_template_directory_uri().'/fontawesome/css/all.css', 
        array(), 1.0, 'all');
        wp_enqueue_style('fontawesome');
    }

    add_action('wp_enqueue_scripts', 'load_stylesheets');

//loads,enqueues,calls bootstrap

    function bootstrap_scripts() {
        wp_enqueue_script( 'boot1','https://code.jquery.com/jquery-3.3.1.min.js', array( 'jquery' ),'',true );
        wp_enqueue_script( 'boot2','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array( 'jquery' ),'',true );
        wp_enqueue_script( 'boot3','https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', array( 'jquery' ),'',true );
    }

    add_action( 'wp_enqueue_scripts', 'bootstrap_scripts' );
    


//enables wordpress menus

    add_theme_support('menus');

//enable thumbnail

    add_theme_support( 'post-thumbnails' ); 

    

//loads,enqueues,calls all.js
    
    function loadjs(){
    
        wp_register_script('customjs', get_template_directory_uri().'/js/all.js',
            '', 1.1, true);
        wp_enqueue_script('customjs');
    
    }

    add_action('wp_enqueue_scripts', 'loadjs');


//product custom post type

    function custom_post_type() {

        $labels = array(
            'name'                => _x( 'Products', 'Post Type General Name', 'melit' ),
            'singular_name'       => _x( 'Product', 'Post Type Singular Name', 'melit' ),
            'menu_name'           => __( 'Products', 'melit' ),
            'parent_item_colon'   => __( 'Category', 'melit' ),
            'all_items'           => __( 'All Products', 'melit' ),
            'view_item'           => __( 'View Product', 'melit' ),
            'add_new_item'        => __( 'Add New Product', 'melit' ),
            'add_new'             => __( 'Add New', 'melit' ),
            'edit_item'           => __( 'Edit Product', 'melit' ),
            'update_item'         => __( 'Update Product', 'melit' ),
            'search_items'        => __( 'Search Product', 'melit' ),
            'not_found'           => __( 'Not Found', 'melit' ),
            'not_found_in_trash'  => __( 'Not found in Trash', 'melit' ),
        );

        $args = array(
            'label'               => __( 'products', 'melit' ),
            'description'         => __( 'Product description', 'melit' ),
            'labels'              => $labels,
            'supports'            => array( 'title',
                                            'excerpt', 
                                            'author', 
                                            'thumbnail',
                                            'custom-fields'
                                        ),
                                        'taxonomies'          => array( 'category'),
                                        'hierarchical'        => true,
                                        'public'              => true,
                                        'show_ui'             => true,
                                        'show_in_menu'        => true,
                                        'show_in_nav_menus'   => true,
                                        'show_in_admin_bar'   => true,
                                        'menu_position'       => 2,
                                        'menu_icon'           => 'dashicons-buddicons-replies',
                                        'can_export'          => true,
                                        'has_archive'         => true,
                                        'exclude_from_search' => false,
                                        'publicly_queryable'  => true,
                                        'capability_type'     => 'page',
         );         

        register_post_type( 'products', $args );
    }

// Hooking up our function to theme setup
    add_action( 'init', 'custom_post_type', 0 );

//remove add madia from products

    function check_post_type_and_remove_media_buttons() {

        global $current_screen;

        $post_types = array('products');

        if (in_array($current_screen->post_type,$post_types)) {
                remove_action('media_buttons', 'media_buttons');
            }
        }

        add_action('admin_head','check_post_type_and_remove_media_buttons');


//category.php pagination fix

// function custom_pre_get_posts($query)
// {
//     if ($query->is_main_query() && !$query->is_feed() && !is_admin() && is_category()) {
//         $query->set('page_val', get_query_var('paged'));
//         $query->set('paged', 0);
//     }
// }

// add_action('pre_get_posts', 'custom_pre_get_posts');




 ?>

