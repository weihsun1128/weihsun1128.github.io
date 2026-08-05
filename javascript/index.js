    // 聯絡我
    
    // 抓輸入的值
        function getValues(event) {

        event.preventDefault();    

        var name = document.getElementById("name");
        var jobtitle = document.getElementById("jobtitle");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email");
        var subject = document.getElementById("subject");
        var message = document.getElementById("message");

        var rowData = {
            name: name.value,
            jobtitle: jobtitle.value,
            phone: phone.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        fetch("https://script.google.com/macros/s/AKfycbwRC63Xt4aySiT0HMo3-GOxvkCA_Iui4l653fuoeyQ69HCvcS6QrzhY3VUSZLaeDo9ZAw/exec", {
            method: "POST",
            
            body: JSON.stringify(rowData)
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("myForm").reset();
            alert("謝謝您的訊息，會盡快處理您的留言！");
        })
        .catch(error => {
            alert("送出失敗");
            console.error(error);
        });
    }

$(function () {
  //上方按鈕點選可跳至該位置
  var blockA = $(".about").offset().top - 100;
  var blockB = $(".project").offset().top - 100;
  var blockC = $(".skill").offset().top - 100;
  var blockD = $(".contact").offset().top - 100;

  $(".btn1").click(function () {
    $("html,body").animate({ scrollTop: blockA }, 800);
    return false;
  });
  $(".btn2").click(function () {
    $("html,body").animate({ scrollTop: blockB }, 800);
    return false;
  });
  $(".btn3").click(function () {
    $("html,body").animate({ scrollTop: blockC }, 800);
    return false;
  });
  $(".btn4").click(function () {
    $("html,body").animate({ scrollTop: blockD }, 800);
    return false;
  });

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
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500,
    );

    return false;
  });
 

  // 主視覺捲軸滑到該位置會再跑一次動畫
});

$(".menu-btn").click(function () {
    $(".menu").toggleClass("show");
});