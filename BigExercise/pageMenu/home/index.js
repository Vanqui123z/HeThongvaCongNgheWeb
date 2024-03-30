$(document).ready(function () {
    $(".btnDeleteSp").click(function () {
        $(this).parent().remove()

    });

    // +-sp
    $(".add").click(function () {
        var number =$(this).parent().find(".number")
        var currentValue =parseInt(number.text())
        currentValue= currentValue+1;
        ($(this).parent().find(".number").text(currentValue));

    });

    $(".sub").click(function () {
        var number =$(this).parent().find(".number")
        var currentValue =parseInt(number.text())
        if (currentValue > 1) {
            currentValue= currentValue-1;
            ($(this).parent().find(".number").text(currentValue));

        }
    });

    document.getElementById("paymentButton").addEventListener("click", function() {
        window.location.href = "../../permenent/cart/index.html";
    });
   
});

