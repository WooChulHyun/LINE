var item = $(".menu-item");

item.on("mouseenter focusin", function() {
    item.removeClass("menu-act");
    // $(this).addClass("menu-act");
    $(".sub-menu", this).slideDown("fast");
});

item.on("mouseleave focusout", function() {
    item.removeClass("menu-act");
    // $(this).addClass("menu-act");
    $(".sub-menu", this).slideUp("fast");
});

// $(".menu-item")
//     .mouseenter(function() {
//         item.removeClass("menu-act");
//         // $(this).addClass("menu-act");
//         $(".sub-menu", this).slideDown("fast");
//     })
//     .mouseleave(function() {
//         item.removeClass("menu-act");
//         // $(this).addClass("menu-act");
//         $(".sub-menu", this).slideUp("fast");
//     });

$(document).ready(function() {
    $(".headerMenuLanguage ul.languageMenuSub").hide();
    $(".headerMenuLanguage ul.languageMenu li").click(function() {
        $("ul", this).toggle();
    });

    $(".languageMenuLi").click(function() {
        if ($("li.languageMenuLi>a").hasClass("dropboxHide")) {
            $("li.languageMenuLi>a").removeClass("dropboxHide");
            $("li.languageMenuLi").removeClass("languageMenuLiClicked");
        } else {
            $("li.languageMenuLi>a").addClass("dropboxHide");
            $("li.languageMenuLi").addClass("languageMenuLiClicked");
        }
    });
});
