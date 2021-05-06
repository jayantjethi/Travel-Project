  $(".myul1").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    // when you click on dustbin, item gets removed from the todo list
    $(".myul1").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });



    });

    // For entering a new item in to-do list
    $(".inputtodo1").keypress(function (event) {
      if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $(".myul1").append("<li><span>x </span>" + todo + "</li>");
      }
    });

    $(".myul2").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    // when you click on dustbin, item gets removed from the todo list
    $(".myul2").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });



    });

    // For entering a new item in to-do list
    $(".inputtodo2").keypress(function (event) {
      if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $(".myul2").append("<li><span>x </span>" + todo + "</li>");
      }
    });

    

      $(".myul3").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    // when you click on dustbin, item gets removed from the todo list
    $(".myul3").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });



    });

    // For entering a new item in to-do list
    $(".inputtodo3").keypress(function (event) {
      if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $(".myul3").append("<li><span>x </span>" + todo + "</li>");
      }
    });

     $(".myul4").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    // when you click on dustbin, item gets removed from the todo list
    $(".myul4").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });



    });

    // For entering a new item in to-do list
    $(".inputtodo4").keypress(function (event) {
      if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $(".myul").append("<li><span>x </span>" + todo + "</li>");
      }
    });

    

      $(".myul5").on("click", "li", function () {
      $(this).toggleClass("completed");
    });

    // when you click on dustbin, item gets removed from the todo list
    $(".myul5").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });



    });

    // For entering a new item in to-do list
    $(".inputtodo5").keypress(function (event) {
      if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $(".myul").append("<li><span>x </span>" + todo + "</li>");
      }
    });

    