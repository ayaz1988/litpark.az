jQuery(document).ready(function() {
    jQuery('#imageGallery').lightSlider({
		auto:true,
		pause:5000,
        gallery:true,
        item:1,
        slideMove:2,
        loop:true,
        thumbItem:4,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
		pauseOnHover: true,
		pager: true,
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide',
            });
        }   
    });  
  });