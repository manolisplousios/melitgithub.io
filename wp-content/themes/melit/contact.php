<?php /* Template Name: ContactPage*/ ?>

<?php get_header(); ?>
<div class="contact-background">
    <div class="container-fluid">
        <div class="row p-md-5">
            <div class="col-12 col-sm-6 contact-inner">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.4932954655587!2d23.281128215390645!3d40.24256707938577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a87bb75b39b4a1%3A0xada8fe48fa679764!2zbWVsaXQsIM6czrXOu865z4PPg86_zrrOv868zrnOus6uIM6nzrHOu866zrnOtM65zrrOrs-C!5e0!3m2!1sel!2sgr!4v1567663701557!5m2!1sel!2sgr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
            <div class="col-12 mt-5 col-sm-6 contact-inner">
                <div>          
                <h4 class="list-heading ml-5">ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h4>
                    <ul> 
                        <li><i class="fas fa-map-marked-alt"></i>&ensp;Λάζαρου Φωτιάδη, Νεα Μουδανιά, Θεσσαλονίκη</li>
                        <li><i class="fas fa-phone-alt"></i>&ensp;+30 2373022401</li>
                        <li><i class="fas fa-phone-alt"></i>&ensp;6947313497 - 6946365674</li>
                        <li><i class="fas fa-envelope"></i>&ensp;triantos@hotmail.gr</li>
                        <li><i class="fab fa-facebook-f"></i></i>&ensp;<a target="_blank" href="https://www.facebook.com/Melit-%CE%9C%CE%B5%CE%BB%CE%B9%CF%83%CF%83%CE%BF%CE%BA%CE%BF%CE%BC%CE%B9%CE%BA%CE%AE-%CE%A7%CE%B1%CE%BB%CE%BA%CE%B9%CE%B4%CE%B9%CE%BA%CE%AE%CF%82-537788163012918/?epa=SEARCH_BOX">Melit Μελισσοκομική Χαλκιδικής</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 contact-inner top-border bottom-border pt-5 ">
                <div class="mailform d-flex justify-content-center alig-items-center">
                    <?php echo do_shortcode('[contact-form-7 id="44" title="Mail form 1"]'); ?>
                </div>
            </div>
        </div>
    </div>
</div>
    
<?php get_footer(); ?>

