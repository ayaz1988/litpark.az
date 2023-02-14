
// change text font-size start
$(document).ready(function () {
    function newsInFontSize() {
        // text scale and print end
        var $affectedElements = $(".news_fonts");
        $affectedElements.each(function () {
            var $this = $(this);
            $this.data("orig-size", $this.css("font-size"));
        });

        $("#btn-increase").click(function () {
            changeFontSize(1);
        })

        $("#btn-decrease").click(function () {
            changeFontSize(-1);
        })

        $("#btn-orig").click(function () {
            $affectedElements.each(function () {
                var $this = $(this);
                $this.css("font-size", $this.data("orig-size"));
            });
        })

        function changeFontSize(direction) {
            $affectedElements.each(function () {
                var $this = $(this);
                $this.css("font-size", parseInt($this.css("font-size")) + direction);
            });
        }
    }
    newsInFontSize();
});

// font size end!!!


// vertical slider -start

$('.main-slider').slick({
    dots: true,
    infinite: true,
    vertical:true,
    verticalSwiping:true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false,
    pauseOnFocus:false,
    pauseOnDotsHover:true,
});

// vertical slider -End





let open_panel=document.querySelector("#open_panel");


open_panel.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");

    search_panel.style="display:block";
    e.preventDefault()

});

let close=document.querySelector('#close_panel');
close.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel");
    search_panel.style="display:none";
    e.preventDefault()
})

// end!!!!



