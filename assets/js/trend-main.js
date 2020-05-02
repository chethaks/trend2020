/** Page Jquery */

/** Sticky Menu */
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 10) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
  return false;
});

/** Scroll to section */
$("#market").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#marketSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#covid").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#covidSection").offset().top,
    },
    2000,
  );
  return false;
});

/** Scroll to top */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scrollTop").fadeIn();
  } else {
    $("#scrollTop").fadeOut();
  }
  return false;
});

$("#scrollTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});

/** Page Parallax */
var rellax = new Rellax(".rellax"); // Accepts any class name

/** Slide Section */

$(function () {
  $(".show-section-2").hide();

  $(".prev, .next").bind("click", function () {
    $(".show-section-1, .show-section-2").hide();

    if ($(this).attr("class") == "prev") {
      $(".show-section-1").show();
    } else {
      $(".show-section-2").show();
    }
  });
});

$(".btnNext").click(function () {
  $(".nav-tabs > .active").next("li").find("a").trigger("click");
});

$(".btnPrevious").click(function () {
  $(".nav-tabs > .active").prev("li").find("a").trigger("click");
});
