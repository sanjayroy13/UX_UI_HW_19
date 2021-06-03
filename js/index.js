$("#resume").on({
    mouseenter: function(){
      $(this).css("background-color", "00AC5A");
    },
    mouseleave: function(){
      $(this).css("background-color", "#FFD600");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });