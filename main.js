$(document).ready(function () {

    $('#btn1').click(function () {
        $(".displaybox .heading1").css('display', 'block');
        $(".displaybox .heading2").css('display', 'none');
        $(".displaybox .heading3").css('display', 'none');
        $(".displaybox .heading4").css('display', 'none');
    });
    $('#btn2').click(function () {
        $(".displaybox .heading2").css('display', 'block');
        $(".displaybox .heading1").css('display', 'none');
        $(".displaybox .heading3").css('display', 'none');
        $(".displaybox .heading4").css('display', 'none');
    });
    $('#btn3').click(function () {
        $(".displaybox .heading3").css('display', 'block');
        $(".displaybox .heading4").css('display', 'none');
        $(".displaybox .heading1").css('display', 'none');
        $(".displaybox .heading2").css('display', 'none');
    });
    $('#btn4').click(function () {
        $(".displaybox .heading4").css('display', 'block');
        $(".displaybox .heading1").css('display', 'none');
        $(".displaybox .heading2").css('display', 'none');
        $(".displaybox .heading3").css('display', 'none');
    });



     const btn1 = document.getElementById('btn1');

      btn1.addEventListener('click', function onClick() {
     btn1.style.backgroundColor = 'red';
     btn1.style.color = 'white';
    });

      const btn2 = document.getElementById('btn2');

        btn2.addEventListener('click', function onClick() {
         btn2.style.backgroundColor = 'red';
        btn2.style.color = 'white';
    });

        const btn3 = document.getElementById('btn3');

        btn3.addEventListener('click', function onClick() {
      btn3.style.backgroundColor = 'red';
      btn3.style.color = 'white';
    });

     const btn4 = document.getElementById('btn4');

        btn4.addEventListener('click', function onClick() {
        btn4.style.backgroundColor = 'red';
        btn4.style.color = 'white';
    });
});



