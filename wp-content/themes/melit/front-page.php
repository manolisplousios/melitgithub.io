<?php /* Template Name: FrontPage*/ ?>

<?php get_header(); ?>

    <div id="melitslide" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img  src="<?php echo get_template_directory_uri();?>/images/beekeeperX.jpg" alt="slide1">
                <div class="carousel caption">
                    <h2>test-text-1</h2>
                </div>
            </div>

            <div class="carousel-item">
                <img  src="<?php echo get_template_directory_uri();?>/images/smokingbees.jpg" alt="slide2">
                <div class="carousel caption">
                    <h2>test-text-2</h2>
                </div>
            </div>

            <div class="carousel-item">
                <img  src="<?php echo get_template_directory_uri();?>/images/beesmoking2.jpg" alt="slide3">
                <div class="carousel caption">
                    <h2>test-text-3</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid company-id-container">
        <div class="row">
            <div class="col-6 offset-3 flexin">
                <h2>Lorem Ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, pro at vidisse oporteat. Id mei nihil moderatius,
                     eu est accusamus voluptatibus. Vim enim dolorem sensibus no. Ipsum Ipsum Loerm Ipsum.
                </p>
                <ul>
                    <li>Me nihil scire, alios credere quod non sciat</li>
                    <li>Me nihil scire, alios credere quod non sciat</li>
                    <li>Me nihil scire, alios credere quod non sciat</li>
                    <li>Me nihil scire, alios credere quod non sciat</li>
                    <li>Me nihil scire, alios credere quod non sciat</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="recent_posts">
        <p class="recent_posts_title">ΤΕΛΕΥΤΑΙΕΣ ΚΑΤΑΧΩΡΗΣΕΙΣ</p>
        <?php 
            $recent_posts = wp_get_recent_posts(array(
                                                        'post_type'=>'products',
                                                        'numberposts' => 4,
                                                    )
                                                );
            foreach( $recent_posts as $recent ){?>
                <a href="<?php echo get_post_permalink($recent["ID"]);?>">
                    <div class="recent_product">
                        <div class="image-container">
                            <?php echo  get_the_post_thumbnail($recent["ID"],'medium');?>
                        </div> 
                        <p class="title"><?php echo esc_attr($recent["post_title"]) ?></p>
                    </div>   
                </a>            
         <?php } ?>
    </div>
<?php get_footer(); ?>