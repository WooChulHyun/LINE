var item = $(".menu-item");

// item.on("mouseenter", function() {
//     $(".sub-menu", this).slideDown("fast");
// }).on("mouseleave", function() {
//     $(".sub-menu", this).stop();
//     $(".sub-menu", this).slideUp("fast");
//     item.removeClass("menu-act");
// });

item.on("mouseenter focusin", function() {
    $(".sub-menu", this).removeClass("hide");
    $(this).addClass("menu-act");
    $(".sub-menu", this).addClass("show");
}).on("mouseleave focusout", function() {
    $(this).removeClass("menu-act");
    $(".sub-menu", this).removeClass("show");
    $(".sub-menu", this).addClass("hide");
});

$(document).ready(function() {
    $("ul.languageMenuSub").hide();
    $("Button.languageMenuBtn").click(function(e) {
        e.preventDefault();
        $("ul.languageMenuSub").toggle();
        if ($("Button.languageMenuBtn").hasClass("dropboxHide")) {
            $("Button.languageMenuBtn").removeClass("dropboxHide");
            $("ul.languageMenuSub").removeClass("languageMenuLiClicked");
        } else {
            $("Button.languageMenuBtn").addClass("dropboxHide");
            $("ul.languageMenuSub").addClass("languageMenuLiClicked");
            document.getElementById("languageMenuListA").focus();
        }
    });
    var timeout;
    $("ul.languageMenuSub")
        .on("focusin", function() {
            clearTimeout(timeout);
        })
        .on("focusout", function(e) {
            timeout = setTimeout(function() {
                $("ul.languageMenuSub").hide();
                $("Button.languageMenuBtn").removeClass("dropboxHide");
                $("ul.languageMenuSub").removeClass("languageMenuLiClicked");
            }, 100);
        });
});
