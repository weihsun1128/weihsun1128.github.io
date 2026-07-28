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

  fetch(
    "https://script.google.com/macros/s/AKfycbziPPitUmJU0CXognzZ0HYxjuyF81p6s_OjFeBUeAtYGrNXwfleIAm8vTt_uL1Zm9C9/exec",
    {
      method: "POST",

      body: JSON.stringify(rowData),
    },
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("myForm").reset();
      alert("謝謝您的訊息，會盡快處理您的留言！");
    })
    .catch((error) => {
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
  $(".toTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  // 主視覺捲軸滑到該位置會再跑一次動畫

  // 照片輪播
  const projects = {
    1: [
      "img/pro1-1.png",
      "img/pro1-2.png",
      "img/pro1-3.png",
      "img/pro1-4.png",
      "img/pro1-5.png",
      "img/pro1-6.png",
      "img/pro1-7.png",
      "img/pro1-8.png",
      "img/pro1-9.png",
      "img/pro1-10.png",
      "img/pro1-11.png",
      "img/pro1-12.png",
      "img/pro1-13.png",
      "img/pro1-14.png",
      "img/pro1-15.png",
      "img/pro1-16.png",
      "img/pro1-17.png",
      "img/pro1-18.png",
      "img/pro1-19.png",
      "img/pro1-20.png",
      "img/pro1-21.png",
    ],
    2: [
      "img/pro2-1.png",
      "img/pro2-2.png",
      "img/pro2-3.png",
      "img/pro2-4.png",
      "img/pro2-5.png",
      "img/pro2-6.png",
      "img/pro2-7.png",
      "img/pro2-8.png",
      "img/pro2-9.png",
      "img/pro2-10.png",
      "img/pro2-11.png",
      "img/pro2-12.png",
      "img/pro2-13.png",
      "img/pro2-14.png",
      "img/pro2-15.png",
      "img/pro2-16.png",
      "img/pro2-17.png",
    ],
    3: [
      "img/pro3-1.png",
      "img/pro3-2.png",
      "img/pro3-3.png",
      "img/pro3-4.png",
      "img/pro3-5.png",
      "img/pro3-6.png",
      "img/pro3-7.png",
      "img/pro3-8.png",
      "img/pro3-9.png",
      "img/pro3-10.png",
      "img/pro3-11.png",
      "img/pro3-12.png",
      "img/pro3-13.png",
      "img/pro3-14.png",
      "img/pro3-15.png",
      "img/pro3-16.png",
      "img/pro3-17.png",
      "img/pro3-18.png",
      "img/pro3-19.png",
      "img/pro3-20.png",
    ],
    4: [
      "img/pro4-1.svg",
      "img/pro4-2.svg",
      "img/pro4-3.svg",
      "img/pro4-4.svg",
      "img/pro4-5.svg",
      "img/pro4-6.svg",
      "img/pro4-7.svg",
      "img/pro4-8.svg",
      "img/pro4-9.svg",
    ],
  };
  $(".open-modal").click(function () {
    let id = $(this).data("project"); // 1 , 2 , 3
    let imgs = projects[id]; // 取圖片陣列

    $(".slides").empty(); // 清空舊圖片

    imgs.forEach(function (src) {
      $(".slides").append(`<img src="${src}">`);
    });

    index = 0;
    maxIndex = imgs.length - 1;
    $(".slides").css("transform", "translateX(0px)");

    $("#modal").css("display", "flex");
  });
  // 開關視窗
  $(".open-modal").click(function () {
    $("#modal").css("display", "flex");
  });
  $(".close").click(function () {
    $("#modal").css("display", "none");
    index = 0;
    $(".slides").css("transform", `translateX(0px)`);
  });
  $("#modal").click(function (e) {
    if (e.target === this) {
      $(this).hide();

      index = 0;
      $(".slides").css("transform", `translateX(0px)`);
    }
  });
  // 切換上下頁
  $(".next").click(function () {
    index++;
    if (index > maxIndex) {
      index = 0;
    }
    $(".slides").css("transform", `translateX(-${index * 800}px)`);
  });
  $(".prev").click(function () {
    if (index > 0) {
      index--;
      $(".slides").css("transform", `translateX(-${index * 800}px)`);
    }
  });

  // 只有第一個
  // const modal = document.getElementById('modal');
  // const openBtn = document.querySelector('.open-modal');
  // const closeBtn = document.querySelector('.close');

  // const slides = document.querySelector('.slides');
  // const image = document.querySelectorAll('.slides img');

  // const prev = document.querySelector('.prev');
  // const next = document.querySelector('.next');

  // let index = 0;
  // let maxIndex = $('.slides img').length - 1;

  // $(openBtn).click(function(){
  //     $(modal).css("display", "flex");
  // })
  // $(closeBtn).click(function(){
  //     $(modal).css("display", "none");
  //     index = 0;
  //     $(slides).css("transform", `translateX(0px)`);
  // })
  // $(modal).click(function (e) {
  //     if(e.target === this){
  //         $(this).hide();

  //         index = 0;
  //         $(slides).css("transform", `translateX(0px)`);
  //     }
  // });
  // $(next).click(function(){
  //     index++;
  //     if (index > maxIndex){
  //         index = 0;
  //     }
  //     $(slides).css("transform", `translateX(-${index * 800}px)`);
  // })
  // $(prev).click(function(){
  //     if(index > 0){
  //         index--;
  //         $(slides).css("transform", `translateX(-${index * 800}px)`);
  //     }
  // })
});
