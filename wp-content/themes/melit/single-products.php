
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
                                        echo '<li class="sublist"><a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' .'<i class="fas fa-arrow-right"></i>'. $category->name.'</a> </li> ';
                                    }?>
                                </ul>
                            </div>
                        </div>
                   <?php } ?>
            </div>
            <div class="col-12 col-md-9 product_container container-fluid single-product-centralise">
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <div class="single-product row">
                            <div class="single-product-image col-12 col-md-6"><?php the_post_thumbnail()?></div>
                            <div class="col-12 col-md-6 outer-info-panel">
                                <div class="single-product-info-panel">
                                    <h2 class="product-name"><?php the_title();?></h2>
                                    <p class="excerpts"><b>Περιγραφή : </b><?php the_excerpt();?></p>
                                    <p class="code"><b>Κωδικός : </b><?php echo get_post_meta($post->ID, 'code', true); ?></p>
                                    <time class="publish_date"><b>Ημερομηνία καταχώρησης : </b><?php echo get_the_date(); ?></time>
                                    <p class="availability"><b>Διαθεσιμότητα : </b><?php 
                                        $availability = get_post_meta($post->ID, 'availability', true);
                                        if ($availability === 'yes'){
                                            echo 'Διαθέσιμο';
                                        }else{
                                            echo 'Μη Διαθέσιμο';
                                        };
                                    ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="row line">
        </div>
   </div>
<?php get_footer(); ?>