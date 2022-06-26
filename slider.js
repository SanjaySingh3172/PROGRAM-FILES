var item_length = $('.slide > div').length - 1;
var slider = $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    onAfterChange: function(){
        //check the length of total items in .slide container
        //if that number is the same with the number of the last slide
        //Then pause the slider
        if( item_length == slider.slickCurrentSlide() ){
            //this should do the same thing -> slider.slickPause();
            slider.slickSetOption("autoplay",false,false)
        };
    }
});