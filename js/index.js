
window.addEventListener("load", function(){
    loader = document.querySelector(".loader");
    loader.className += " hidden";
});
$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 18) {
        $this.css({ "font-size": "18px" });   
    }
});