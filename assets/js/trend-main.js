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

// HCS CLICK DOWN ARROW START
$("#hcs-connected-lifestyle").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#connected-lifestyle").offset().top,
    },
    2000,
  );
  return false;
});
// HCS CLICK DOWN ARROW END

// LS CLICK DOWN ARROW START
$("#ls-cons-ptrns").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#consumer-pttrns").offset().top,
    },
    2000,
  );
  return false;
});
// LS CLICK DOWN ARROW END


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

$("#endUser").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#endUserSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#competitorsIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#competitorSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#verticalIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#verticalSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#channelIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#channelSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#productIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#productSection").offset().top,
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
window.onload = function () {
  lax.setup() // init

  const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

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

$("#covidClick").click(function () {
  $("#openCovideSection").slideDown("slow");
  $("html, body").animate(
    {
      scrollTop: $("#openCovideSection").offset().top,
    },
    2000,
  );
});