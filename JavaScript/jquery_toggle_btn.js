   $(document).ready(function() {
      $("#toggleBtn").click(function() {
        // Toggle background color
        if ($("body").css("background-color") === "rgb(255, 255, 255)") {
          $("body").css("background-color", "lightblue");
        } else {
          $("body").css("background-color", "white");
        }
        // Toggle paragraph 
        $("#myPara").toggle();
      });
    });