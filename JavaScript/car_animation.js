let anim;
    $("#forward").click(function() {
      $("#car").stop();
      anim = $("#car").animate({left: "+=500px"}, 5000);
    });
    $("#reverse").click(function() {
      $("#car").stop();
      anim = $("#car").animate({left: "-=500px"}, 5000);
    });
    $("#stop").click(function() {
      $("#car").stop();
    });