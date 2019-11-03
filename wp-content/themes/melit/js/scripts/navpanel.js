
//on hover of nav item display the nav sub panel (without the content)

jQuery(function ($){
        $('.header-nav li, .dropdown-parent').hover(
            
            function () {
                $(".dropdown-parent").css({"display":"flex"});
            }, 
                
            function () {
                $(".dropdown-parent").css({"display":"none"});
            }
        );       
});
  
//negate epikinonia

jQuery(function ($) {
    $('#epikinonia').hover(            
        function () {
            $(".dropdown-parent").css({"display":"none"});
        }
    );       
});



// on hover of each different nav item displays the panel's content  that responts to that element

jQuery(function ($) {
    $("#vasilotrofia").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3">'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/βελονάκια-εμβολιασμού/"><i class="fas fa-arrow-right"></i>&ensp;ΒΕΛΟΝΑΚΙΑ ΕΜΒΟΛΙΑΣΜΟΥ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/βέργες-βασιλοτροφίας/"><i class="fas fa-arrow-right"></i>&ensp;ΒΕΡΓΕΣ ΒΑΣΙΛΟΤΡΟΦΙΑΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/εγκλοβιστής-βασίλισσας-βασιλοτροφία/"><i class="fas fa-arrow-right"></i>&ensp;ΕΓΚΛΟΒΙΣΤΗΣ ΒΑΣΙΛΙΣΣΑΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/ζέντερ-βασιλοτροφίας/"><i class="fas fa-arrow-right"></i>&ensp;ΖΕΝΤΕΡ ΒΑΣΙΛΟΤΡΟΦΙΑΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/κλωβοί/"><i class="fas fa-arrow-right"></i>&ensp;ΚΛΩΒΟΙ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/μαρκαδόροι-βασιλισσών/"><i class="fas fa-arrow-right"></i>&ensp;ΜΑΡΚΑΔΟΡΟΙ ΒΑΣΙΛΙΣΣΩΝ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/σημαδευτήρια-βασιλισσών/"><i class="fas fa-arrow-right"></i>&ensp;ΣΗΜΑΔΕΥΤΗΡΙΑ ΒΑΣΙΛΙΣΣΩΝ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/βασιλοτροφία/σύστημα-αριστέας/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΣΤΗΜΑ ΑΡΙΣΤΕΑΣ</a></li>'+
            '</ul>'+
            '<img class="panel-image col-4 offset-1" src="'+theme_directory+'/images/Queen-Bee-2.jpg" alt="bee-queen">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#exoplismos").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
            '<li> <a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/αφεσμός/"><i class="fas fa-arrow-right"></i>&ensp;ΑΦΕΣΜΟΣ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/βούρτσες/"><i class="fas fa-arrow-right"></i>&ensp;ΒΟΥΡΤΣΕΣ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/γάντια/"><i class="fas fa-arrow-right"></i>&ensp;ΓΑΝΤΙΑ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/δαγκάνες/"><i class="fas fa-arrow-right"></i>&ensp;ΔΑΓΚΑΝΕΣ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/καπνιστήρια/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΠΝΙΣΤΗΡΙΑ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/μάσκα-μπουφάν/"><i class="fas fa-arrow-right"></i>&ensp;ΜΑΧΑΙΡΙΑ ΑΠΟΛΕΠΙΣΜΟΥ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/μάσκες/"><i class="fas fa-arrow-right"></i>&ensp;ΜΑΣΚΑ-ΜΠΟΥΦΑΝ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/μαχαίρια-απολεπισμού/"><i class="fas fa-arrow-right"></i>&ensp;ΜΑΣΚΕΣ</a></li>'+
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/ξέστρα/"><i class="fas fa-arrow-right"></i>&ensp;ΞΕΣΤΡΑ</a></li>'+   
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/πιρούνια-απολεπισμού/"><i class="fas fa-arrow-right"></i>&ensp;ΠΙΡΟΥΝΙΑ ΑΠΟΛΕΠΙΣΜΟΥ</a></li>'+ 
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/ρολλά-απολεπισμού/"><i class="fas fa-arrow-right"></i>&ensp;ΡΟΛΛΑ ΑΠΟΛΕΠΙΣΜΟΥ</a></li>'+ 
            '<li><a href="https://melit.000webhostapp.com/category/εξοπλισμός-μελισσοκόμου/φόρμες-ολόσομες/"><i class="fas fa-arrow-right"></i>&ensp;ΦΟΡΜΕΣ ΟΛΟΣΟΜΕΣ</a></li>'+      
        '</ul>'+
        '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/BeekeeperX.jpg" alt="beekeeper">'+
    '</div>');
    });
});

jQuery(function ($) {
    $("#asthenies").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/καταπολέμηση-ασθενειών/απολύμανση//"><i class="fas fa-arrow-right"></i>&ensp;ΑΠΟΛΥΜΑΝΣΗ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/καταπολέμηση-ασθενειών/βαρρόα/"><i class="fas fa-arrow-right"></i>&ensp;ΒΑΡΡΟΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/καταπολέμηση-ασθενειών/εφαρμογή/"><i class="fas fa-arrow-right"></i>&ensp;ΕΦΑΡΜΟΓΗ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/καταπολέμηση-ασθενειών/κηροσκόρος/"><i class="fas fa-arrow-right"></i>&ensp;ΚΗΡΟΣΚΟΡΟΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/καταπολέμηση-ασθενειών/νοζεμίαση/"><i class="fas fa-arrow-right"></i>&ensp;ΝΟΖΕΜΙΑΣΗ</a></li>'+     
            '</ul>'+
            '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/smokingbees.jpg" alt="beekeeping/smoking">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#kirithres").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/κηρήθρες/καλούπια-σιλικόνης/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΛΟΥΠΙΑ ΣΙΛΙΚΟΝΗΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κηρήθρες-κηρήθρες/"><i class="fas fa-arrow-right"></i>&ensp;ΚΗΡΗΘΡΕΣ</a></li>'+   
            '</ul>'+
            '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/honeycomb_to_use.jpg" alt="honeycomb">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#kipseles").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-2 offset-2 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/κυψέλες/αριθμοί-πυροσφραγίδας/"><i class="fas fa-arrow-right"></i>&ensp;ΑΡΙΘΜΟΙ ΠΥΡΟΣΦΡΑΓΙΔΑΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/αρμωστήρες-τεντωτήρας/"><i class="fas fa-arrow-right"></i>&ensp;ΑΡΜΩΣΤΗΡΕΣ-ΤΕΝΤΩΤΗΡΑΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/βάσεις-κινητές-ξύλινες/"><i class="fas fa-arrow-right"></i>&ensp;ΒΑΣΕΙΣ ΚΙΝΗΤΕΣ ΞΥΛΙΝΕΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/βάσεις-κινητές-πλαστικές/"><i class="fas fa-arrow-right"></i>&ensp;ΒΑΣΕΙΣ ΚΙΝΗΤΕΣ ΠΛΑΣΤΙΚΕΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/γυρεοπαγίδες/"><i class="fas fa-arrow-right"></i>&ensp;ΓΥΡΕΟΠΑΓΙΔΕΣ</a></li>'+
                '<li> <a href="https://melit.000webhostapp.com/categoryκυψέλες/διαφορά/"><i class="fas fa-arrow-right"></i>&ensp;ΔΙΑΦΟΡΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/διαφράγματα-σίτες-πρόπολης/"><i class="fas fa-arrow-right"></i>&ensp;ΔΙΑΦΡΑΓΜΑΤΑ-ΣΙΤΕΣ ΠΡΟΠΟΛΗΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/καπάκια-κυψέλης-ξύλινα/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΠΑΚΙΑ ΚΥΨΕΛΗΣ ΞΥΛΙΝΑ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/καπάκια-κυψέλης-πλαστικά/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΠΑΚΙΑ ΚΥΨΕΛΗΣ ΠΛΑΣΤΙΚΑ</a></li>'+     
            '</ul>'+
            '<ul class="col-2 align-item-center">'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/καψούλια/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΨΟΥΛΙΑ</a></li>'+            
                '<li> <a href="https://melit.000webhostapp.com/category/κυψέλες/κυψέλες-πλαστικές/"><i class="fas fa-arrow-right"></i>&ensp;ΚΥΨΕΛΕΣ ΠΛΑΣΤΙΚΕΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/κυψέλες-ξύλινες/"><i class="fas fa-arrow-right"></i>&ensp;ΚΥΨΕΛΕΣ ΞΥΛΙΝΕΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/κυψέλες-πολυστερίνης/"><i class="fas fa-arrow-right"></i>&ensp;ΚΥΨΕΛΕΣ ΠΟΛΥΣΤΕΡΙΝΗΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/κυψελίδια/"><i class="fas fa-arrow-right"></i>&ensp;ΚΥΨΕΛΙΔΙΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/μανταλάκια-βίδες-καρφάκια/"><i class="fas fa-arrow-right"></i>&ensp;ΜΑΝΤΑΛΑΚΙΑ-ΒΙΔΕΣ-ΚΑΡΦΑΚΙΑ</a></li>'+
                '<li> <a href="https://melit.000webhostapp.com/category/κυψέλες/παγίδες-εντόμων/"><i class="fas fa-arrow-right"></i>&ensp;ΠΑΓΙΔΕΣ ΕΝΤΟΜΩΝ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πάγκοι-συρμάτωσης/"><i class="fas fa-arrow-right"></i>&ensp;ΠΑΓΚΟΙ ΣΥΡΜΑΤΩΣΗΣ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πατώματα-ξύλινα/"><i class="fas fa-arrow-right"></i>&ensp;ΠΑΤΩΜΑΤΑ ΞΥΛΙΝΑ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πατώματα-πλαστικά/"><i class="fas fa-arrow-right"></i>&ensp;ΠΑΤΩΜΑΤΑ ΠΛΑΣΤΙΚΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πλαίσια-ασυναρμολόγητα/"><i class="fas fa-arrow-right"></i>&ensp;ΠΛΑΙΣΙΑ ΑΣΥΝΑΡΜΟΛΟΓΗΤΑ</a></li>'+       
            '</ul>'+
            '<ul class="col-2 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/κυψέλες/πλαίσια-καρφωμένα/"><i class="fas fa-arrow-right"></i>&ensp;ΠΛΑΙΣΙΑ ΚΑΡΦΩΜΕΝΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πλαίσια-συρματωμένα/"><i class="fas fa-arrow-right"></i>&ensp;ΠΛΑΙΣΙΑ ΣΥΡΜΑΤΩΜΕΝΑ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πόρτες-κυψελών/"><i class="fas fa-arrow-right"></i>&ensp;ΠΟΡΤΕΣ ΚΥΨΕΛΩΝ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/πυροσφραγίδες-ανταλλακτικά/"><i class="fas fa-arrow-right"></i>&ensp;ΠΥΡΟΣΦΡΑΓΙΔΕΣ-ΑΝΤΑΛΛΑΚΤΙΚΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/συνδετήρες-χειρολαβές/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΝΔΕΤΗΡΕΣ-ΧΕΙΡΟΛΑΒΕΣ</a></li>'+
                '<li> <a href="https://melit.000webhostapp.com/category/κυψέλες/συντηρητικά-κυψελών/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΝΤΗΡΗΤΙΚΑ ΚΥΨΕΛΩΝ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/σύρματα/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΡΜΑΤΑ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/τροφοδότες-ξύλινοι/"><i class="fas fa-arrow-right"></i>&ensp;ΤΡΟΦΟΔΟΤΕΣ ΞΥΛΙΝΟΙ</a></li>'+ 
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/τροφοδότες-πλαστικοί/"><i class="fas fa-arrow-right"></i>&ensp;ΤΡΟΦΟΔΟΤΕΣ ΠΛΑΣΤΙΚΟΙ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/κυψέλες/χρώματα-κυψελών/"><i class="fas fa-arrow-right"></i>&ensp;ΧΡΩΜΑΤΑ ΚΥΨΕΛΩΝ</a></li>'+       
            '</ul>'+
            '<img class="panel-image col-3 offeset-" src="'+theme_directory+'/images/beesmoking2.jpg" alt="beesmoking">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#michanimata").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-2 offset-2 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/αναδευτήρες/"><i class="fas fa-arrow-right"></i>&ensp;ΑΝΑΔΕΥΤΗΡΕΣ</a></li>'+
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/αντιστάσεις-μελιού/"><i class="fas fa-arrow-right"></i>&ensp;ΑΝΤΙΣΤΑΣΕΙΣ ΜΕΛΙΟΥ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/αντλίες/"><i class="fas fa-arrow-right"></i>&ensp;ΑΝΤΛΙΕΣ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/δοσομετρικά/"><i class="fas fa-arrow-right"></i>&ensp;ΔΟΣΟΜΕΤΡΙΚΑ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/δοχεία-θερμαινόμενα/"><i class="fas fa-arrow-right"></i>&ensp;ΔΟΧΕΙΑ ΘΕΡΜΑΙΝΟΜΕΝΑ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/δοχεία-ωρίμανσης-inox/"><i class="fas fa-arrow-right"></i>&ensp;ΔΟΧΕΙΑ ΩΡΙΜΑΝΣΗΣ INOX</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/θερμοθάλαμοι/"><i class="fas fa-arrow-right"></i>&ensp;ΘΕΡΜΟΘΑΛΑΜΟΙ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/κάνουλες-στάντ-δοχείων/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΝΟΥΛΕΣ-ΣΤΑΝΤ ΔΟΧΕΙΩΝ</a></li>'+
            '</ul>'+
            '<ul class="col-2 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/κηροτήκτης-πρέσσα/"><i class="fas fa-arrow-right"></i>&ensp;ΚΗΡΟΤΗΚΤΗΣ-ΠΡΕΣΣΑ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/μελιτοεξαγωγείς-ηλεκτρικοί/"><i class="fas fa-arrow-right"></i>&ensp;ΜΕΛΙΤΟΕΞΑΓΩΓΕΙΣ ΗΛΕΚΤΡΙΚΟΙ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/μελιτοεξαγωγείς-χειροκίνητοι/"><i class="fas fa-arrow-right"></i>&ensp;ΜΕΛΙΤΟΕΞΑΓΩΓΕΙΣ ΧΕΙΡΟΚΙΝΗΤΟΙ </a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/μηχανήματα-απολεπισμού/"><i class="fas fa-arrow-right"></i>&ensp;ΜΗΧΑΝΗΜΑΤΑ ΑΠΟΛΕΠΙΣΜΟΥ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/μπέν-μαρί/"><i class="fas fa-arrow-right"></i>&ensp;ΜΠΕΝ ΜΑΡΙ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/πάγκοι-απολεπισμού/"><i class="fas fa-arrow-right"></i>&ensp;ΠΑΓΚΟΙ ΑΠΟΛΕΠΙΣΜΟΥ</a></li>'+ 
                '<li> <a href="https://melit.000webhostapp.com/category/μηχανήματα/φιλτράρισμα/"><i class="fas fa-arrow-right"></i>&ensp;ΦΙΛΤΡΑΡΙΣΜΑ</a></li>'+ 
            '</ul>'+
            '<img class="panel-image col-4" src="'+theme_directory+'/images/extractor.jpg" alt="honey-extracting">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#metrisis").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/όργανα-μέτρησης/όργανα-μέτρησης-στερεών/"><i class="fas fa-arrow-right"></i>&ensp;ΟΡΓΑΝΑ ΜΕΤΡΗΣΗΣ ΣΤΕΡΕΩΝ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/όργανα-μέτρησης/όργανα-μέτρησης-υγρών/"><i class="fas fa-arrow-right"></i>&ensp;ΟΡΓΑΝΑ ΜΕΤΡΗΣΗΣ ΥΓΡΩΝ</a></li>'+   
            '</ul>'+
            '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/filling.jpg" alt="honeyfilling">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#siskevasia").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/βάζα-γυάλινα/"><i class="fas fa-arrow-right"></i>&ensp;ΒΑΖΑ ΓΥΑΛΙΝΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/βάζα-πλαστικά/"><i class="fas fa-arrow-right"></i>&ensp;ΒΑΖΑ ΠΛΑΣΤΙΚΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/δοχεία-μεταλλικά/"><i class="fas fa-arrow-right"></i>&ensp;ΔΟΧΕΙΑ ΜΕΤΑΛΛΙΚΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/δοχεία-πλαστικά/"><i class="fas fa-arrow-right"></i>&ensp;ΔΟΧΕΙΑ ΠΛΑΣΤΙΚΑ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/ετικέτες-μελιού/"><i class="fas fa-arrow-right"></i>&ensp;ΕΤΙΚΕΤΕΣ ΜΕΛΙΟΥ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/καπάκια-συσκευασίας/"><i class="fas fa-arrow-right"></i>&ensp;ΚΑΠΑΚΙΑ ΣΥΣΚΕΥΑΣΙΑΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/πλαστικές-κασετίνες/"><i class="fas fa-arrow-right"></i>&ensp;ΠΛΑΣΤΙΚΕΣ ΚΑΣΕΤΙΝΕΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/συσκευασίες-βασιλικού-πολτού-πρόπολ/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΣΚΕΥΑΣΙΕΣ ΒΑΣΙΛΙΚΟΥ ΠΟΛΤΟΥ-ΠΡΟΠΟΛΗΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/συσκευασία/ταινίες-ασφαλείας/"><i class="fas fa-arrow-right"></i>&ensp;ΤΑΙΝΙΕΣ ΑΣΦΑΛΕΙΑΣ</a></li>'+   
            '</ul>'+
            '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/honey-glass.jpg" alt="honeyjars">'+
        '</div>');
    });
});

jQuery(function ($) {
    $("#trofodosia").hover(function () {
        $(".dropdown-panel").html(
        '<div class="row align-items-center">'+
            '<ul class="col-3 offset-3 align-item-center">'+           
                '<li> <a href="https://melit.000webhostapp.com/category/τροφοδοσία/πρώτες-ύλες/"><i class="fas fa-arrow-right"></i>&ensp;ΠΡΩΤΕΣ ΥΛΕΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/τροφοδοσία/στερεά-τροφή/"><i class="fas fa-arrow-right"></i>&ensp;ΣΤΕΡΕΑ ΤΡΟΦΗ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/τροφοδοσία/συνμπληρώματα-διατροφής/"><i class="fas fa-arrow-right"></i>&ensp;ΣΥΜΠΛΗΡΩΜΑΤΑ ΔΙΑΤΡΟΦΗΣ</a></li>'+
                '<li><a href="https://melit.000webhostapp.com/category/τροφοδοσία/υγρή-τροφή/"><i class="fas fa-arrow-right"></i>&ensp;ΥΓΡΗ ΤΡΟΦΗ</a></li>'+
            '</ul>'+
            '<img class="panel-image col-4 offeset-2" src="'+theme_directory+'/images/bee-feeding-1.jpg" alt="beefeeding">'+
        '</div>');
    });
});