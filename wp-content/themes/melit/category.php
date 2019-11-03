
<?php get_header(); ?>
   <div class="container-fluid background">
        <div class="row flex-centralise">
            <div class="col-3 sidelist" id="accordionlist"> 
                <?php  
                    $categories = get_categories( array(
                        'orderby' => 'name',
                        'parent'  => 0
                    ) );

                    foreach( $categories as $category ) { ?>
                        <div class="accordion" id=" <?php echo $category->name ?>">
                            <div class="card-header" id=" <?php echo $category->term_id ?>">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#<?php echo $category->term_id?>" aria-expanded="true" aria-controls="<?php echo $category->term_id?>">
                                       <?php echo $category->name ?>
                                    </button>
                                </h2>
                            </div>

                            <div id="<?php echo $category->term_id?>" class="collapse hide" data-parent="#accordionlist" aria-labelledby=" <?php echo $category->term_id ?>" data-parent="#<?php echo $category->name ?>">
                                <ul>
                                    <?php 
                                    $args = array('child_of' => $category->term_id);
                                    $categories = get_categories( $args );
                                    foreach($categories as $category) { 
                                        echo '<li class="sublist"><a href="' . get_category_link( $category->term_id ) . '" title="' . '" ' . '>' .'<i class="fas fa-arrow-right"></i>'. $category->name.'</a> </li> ';
                                    }?>
                                </ul>
                            </div>
                        </div>
                   <?php } ?>
            </div>
            <div class="col-9 product_container">

                <?php                        
                    $paged = get_query_var('paged');
                
                    $args = array(
                    'post_type' => 'products',
                    'post_status' => 'publish',
                    'cat' => $cat,
                    'posts_per_page' => 20,
                    'paged' => $paged
                );

                $query = new WP_Query( $args );
                   
                if ( $query->have_posts() ) :              
                    while ( $query->have_posts() ) : $query->the_post();?>
                        <a href="<?php the_permalink();?>">
                            <div class="product">
                                <div class="image-container">
                                    <?php the_post_thumbnail();?>
                                </div> 
                                <p class="title"><?php the_title(); ?></p>
                            </div>    
                        </a>                   
                    <?php 
                    endwhile;?> 
                    <div class="pagination-container">
                        <div class="pagination">
                            <?php 
                                echo paginate_links(array(
                                    'total' => $query->max_num_pages
                                ));
                            ?>
                        </div>
                    </div>
                    
                <?php endif;?>
            </div>
        </div>
        <div class="row line">
        </div>
   </div>
<?php get_footer(); ?>

