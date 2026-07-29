 // 捲動到一定高度才顯示
  $(window).scroll(function () {
    console.log($(this).scrollTop());
      if ($(this).scrollTop() > 800) {
          $(".toTop").addClass("show");
      } else {
          $(".toTop").removeClass("show");
      }
  });

  // 回到最上方
  $(".toTop").click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 500);
      return false;
  });