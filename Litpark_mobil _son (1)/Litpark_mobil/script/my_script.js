// search-panel-start

let open_panel=document.querySelector(".search_mobil");


open_panel.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel_mobil");

    search_panel.style="display:block";
    e.preventDefault()

});

let close=document.querySelector('#close_panel');
close.addEventListener("click",function (e){
    let search_panel=document.querySelector("#search-panel_mobil");
    search_panel.style="display:none";
    e.preventDefault()
})

// search-panel-end


// mobil-menu start

function openNav() {
    document.getElementById("myNav").classList.add("open");
    document.body.classList.add("noscroll");
}

function closeNav() {
    document.getElementById("myNav").classList.remove("open");
    document.body.classList.remove("noscroll");
}

// mobil-menu end



// vertical slider -start

$('.main-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false,
    pauseOnFocus:false,
    pauseOnDotsHover:true,
});

// vertical slider -End




setHeights  = function()

{
    var $list       = $( '.posts-wrap' ).not('.a-height');
    $list.each(function(){
        $items      = $(this).find( '.post-item-title' );

        $items.css( 'height', 'auto' );

        var perRow = Math.floor( $(this).width() / $items.width() );
        if( perRow == null || perRow < 2 ) return true;

        for( var i = 0, j = $items.length; i < j; i += perRow )
        {

            var maxHeight   = 0,
                $row        = $items.slice( i, i + perRow );

            $row.each( function()
            {
                var itemHeight = parseInt( $( this ).outerHeight() );
                if ( itemHeight > maxHeight ) maxHeight = itemHeight;
            });
            $row.css( 'height', maxHeight );
            // console.log($row);
        }
    });

};
setHeights();
$( window ).on( 'resize', function(){setTimeout(function(){ setHeights()}, 1000) });





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