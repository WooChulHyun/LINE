var item = $(".menu-item");

item.on("mouseenter focusin", function() {
    $(".sub-menu", this).slideDown("slow");
}).on("mouseleave focusout", function() {
    $(".sub-menu", this).stop();
    $(".sub-menu", this).slideUp("fast");
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
