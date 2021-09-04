$(document).ready(function () {
  //start navbar section

  //active class for links
  let link = $(".container li a");

  link.click(function (e) {
    e.preventDefault();
    link.removeClass("active");
    $(this).addClass("active");
    console.log($(window).innerWidth());
  });

  //navbar up and down with width < 992px
  $(window).resize(function () {
    if ($(window).innerWidth() < 992) {
      $(".nav-elements").css("display", "none");
    } else {
      $(".nav-elements").css("display", "flex");
    }
  });
  $(".fa-bars").click(function () {
    $(".nav-elements").css({
      "padding-left":
        parseInt($(".navbar .container").css("margin-left").slice(0, 2)) +
        20 +
        "px ",
    });

    $(".nav-elements").slideToggle();
  });
  //end navbar section

  //setting dynamic width for thumbnails images
  let numberOfImages = $(".thumbnails img").length;
  let margin = 0.5;
  $(".thumbnails img").each(function () {
    $(this).css({
      width: `${(100 - margin * (numberOfImages - 1)) / numberOfImages}%`,
      marginRight: margin + "%",
    });
  });

  //gallery images section
  $(".thumbnails img").each(function () {
    $(this).click(function () {
      $(".img img").hide().attr("src", $(this).attr("src")).fadeIn(500);

      $(this).addClass("selected").siblings().removeClass("selected");
    });
  });

  //right and left button
  $(".fa-chevron-left").click(function () {
    if ($(".thumbnails img:first-of-type").hasClass("selected")) {
      $(".thumbnails img").last().click();
    } else {
      $(".thumbnails .selected").prev().click();
    }
  });
  $(".fa-chevron-right").click(function () {
    if ($(".thumbnails img:last-of-type").hasClass("selected")) {
      $(".thumbnails img").first().click();
    } else {
      $(".thumbnails .selected").next().click();
    }
  });
});
