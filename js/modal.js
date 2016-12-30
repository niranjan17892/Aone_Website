jQuery(document).ready(function () {
    jQuery(".close-popup").click(function () {
        jQuery(".backdrop, .popup").hide();
    });
    jQuery(".modals").click(function () {
        var id = jQuery(this).attr("data-id");
        jQuery(".backdrop").show();
        jQuery("#" + id).fadeIn();
    });
});