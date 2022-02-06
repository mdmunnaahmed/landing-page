

(function($) {
    'use strict';
    
    var hyion = { 
        /* ---------------------------------------------
            01. Scroll top
         --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
        
        /* ---------------------------------------------
            02. Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-wrap nav').meanmenu({
                meanMenuClose: 'X',
                meanMenuCloseSize: '18px',
                meanScreenWidth: '992',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu'
            }); 
            if ($('.menu.right-menu').length) {
                var mobileLeftMenu = $('.site-header .navigation-area .mainmenu-wrap .menu.right-menu ul li').clone().appendTo('.mobile-menu .mean-bar .mean-nav ul');
            }
        },
        
        
        /*-------------------------------------------
            03. Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length) {
                var stickyMenu = $('.site-header').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 992) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(300);
                        } else {
                            $('#sticky-header').slideUp(300);
                        }
                    }
                });
            } 
        },
        
        
        /*-------------------------------------------
            04. Parallax Background
        --------------------------------------------- */
        bg_parallax: function () {
            if ($('.bg-parallax').length) {
                $('.bg-parallax').parallax("30%", -0.25);
            }
        },
        
        
        /*-------------------------------------------
            05. Aos Initializ
        --------------------------------------------- */
        aos_initializ: function () {
            AOS.init()
        },
        
        /*-------------------------------------------
            06. Nav scroll
        --------------------------------------------- */
        nav_scroller: function() {
            if ($('.site-header').length) {
                $('.menu ul').navScroll({
                    mobileDropdown: true,
                    mobileBreakpoint: 991,
                    scrollSpy: true,
                    navHeight: 65,
                });
            }  
        },
    
    
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {          
            hyion.scroll_top();         
            hyion.mobile_menu();         
            hyion.sticky_header();         
            hyion.bg_parallax();         
            hyion.aos_initializ();          
            hyion.nav_scroller();         
        }
    };

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        hyion.initializ();
    }); 
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

})(jQuery);
