<!DOCTYPE html>

<html>
    <head>
        <?php wp_head(); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>
            theme_directory = "<?php echo get_template_directory_uri() ?>";
        </script>
    </head>
    <body>
        <header class="container-fluid mobile-bottom-border">
                <div class="row top-header">  
                    <div class="col-12 col-md-4 mobile-center-align">
                        <a href="https://melit.000webhostapp.com/">
                            <img class="logo" src="<?php echo get_template_directory_uri();?>/images/melit-logo-01.png" alt="melit logo">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 part ">
                        <span>
                            <i class="fas fa-phone-alt"></i>
                         +30 2373022401 
                        </span>
                        <span>
                            <i class="fas fa-phone-alt" id="testid"></i>
                            6947313497 - 6946365674
                        </span>
                    </div>
                    <div class=" part last-part col-6 col-md-4">
                        <!-- <span>Γλώσσα</span> -->
                    </div>
                </div>
                <nav class="row nav">
                    <ul class="nav header-nav">
                        <li id="vasilotrofia">
                            <a href="#">ΒΑΣΙΛΟΤΡΟΦΙΑ</a>
                        </li>
                        <li id="exoplismos">
                            <a  href="#">ΕΞΟΠΛΙΣΜΟΣ ΜΕΛΙΣΣΟΚΟΜΟΥ</a>
                        </li>
                        <li id="asthenies">
                            <a  href="#">ΚΑΤΑΠΟΛΕΜΗΣΗ ΑΣΘΕΝΕΙΩΝ</a>
                        </li>
                        <li id="kirithres">
                            <a  href="#">ΚΗΡΗΘΡΕΣ</a>
                        </li>
                        <li id="kipseles">
                            <a  href="#">ΚΥΨΕΛΕΣ</a>
                        </li>
                        <li id="michanimata">
                            <a  href="#">ΜΗΧΑΝΗΜΑΤΑ</a>
                        </li>
                        <li id="metrisis">
                            <a  href="#">ΟΡΓΑΝΑ ΜΕΤΡΗΣΗΣ</a>
                        </li>
                        <li id="siskevasia">
                            <a  href="#">ΣΥΣΚΕΥΑΣΙΑ</a>
                        </li>
                        <li id="trofodosia">
                            <a  href="#">ΤΡΟΦΟΔΟΣΙΑ</a>
                        </li>
                        <li id="epikinonia">
                            <a  href="https://melit.000webhostapp.com/contact-page/">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                        </li>
                    </ul>  
                </nav>
                <div class="btncont row">
                    <button class="navbtn" type="button">ΠΕΡΙΗΓΗΣΗ</button>
                </div>
                <div class="mob-nav">
                    <div class="onemorelayer">
                        <div class="mob-nav-content" id="accordionlist2"> 
                                <div class="mdivout">
                                    <div class="mdiv">
                                        <div class="md"></div>
                                    </div>
                                <div>
                                <div class=accordion>
                                    <div class="card-header">
                                        <a href="https://melit.000webhostapp.com/" class="list_like mb-0">Αρχική</a>
                                    </div>
                                </div>
                                <div class=accordion>
                                    <div class="card-header">
                                        <a href="https://melit.000webhostapp.com/contact-page/" class="list_like mb-0">Επικοινωνία</a>
                                    </div>
                                </div>
                            <?php  
                                $categories = get_categories( array(
                                    'orderby' => 'name',
                                    'parent'  => 0
                                ) );

                                foreach( $categories as $category ) { ?>
                                    <div class="accordion" id=" <?php echo $category->name ?>2">
                                        <div class="card-header" id=" <?php echo $category->term_id ?>2">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#<?php echo $category->term_id?>2" aria-expanded="true" aria-controls="<?php echo $category->term_id?>2">
                                                <?php echo $category->name ?>
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="<?php echo $category->term_id?>2" class="collapse hide" data-parent="#accordionlist2" aria-labelledby=" <?php echo $category->term_id ?>2" data-parent="#<?php echo $category->name ?>2">
                                            <ul>
                                                <?php 
                                                $args = array('child_of' => $category->term_id);
                                                $categories = get_categories( $args );
                                                foreach($categories as $category) { 
                                                    echo '<li class="mob-nav-sublist"><a href="' . get_category_link( $category->term_id ) . '" title="' . '" ' . '>' .'<i class="fas fa-arrow-right"></i>'. $category->name.'</a> </li> ';
                                                }?>
                                            </ul>
                                        </div>
                                    </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
        </header>
                <div class="dropdown-parent">                   
                    <div class="dropdown-panel container-fluid">
                        <div class="row align-items-center">
                        </div>
                    </div>  
                </div>              


