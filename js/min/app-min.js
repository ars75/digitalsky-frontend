$(document).ready(function(){
// Help me apply
$(".drone_weight").on("change",function(){var e=this.value;$(this).addClass("selected"),$("#help-me-apply .other-parts").show(),$("#help-me-apply .question").addClass("selected"),$("#help-me-apply .button").addClass("show"),"under"==e&&($("#help-me-apply .answer .under").show(),$("#help-me-apply .answer .over").hide(),$("#help-me-apply .answer .pilot").hide(),$("#help-me-apply .answer .operator").hide(),$("#help-me-apply .answer .manufacturer").hide(),$("#help-me-apply .answer .in-india").hide(),$("#help-me-apply .answer .import").hide()),"over"==e&&($("#help-me-apply .answer .over").show(),$("#help-me-apply .answer .under").hide())}),$(".license_type").on("change",function(){var e=this.value;$(this).addClass("selected"),"pilot"==e&&($("#help-me-apply .pilot").show(),$("#help-me-apply .operator").hide(),$("#help-me-apply .manufacturer").hide()),"operator"==e&&($("#help-me-apply .pilot").hide(),$("#help-me-apply .operator").show(),$("#help-me-apply .manufacturer").hide()),"manufacturer"==e&&($("#help-me-apply .pilot").hide(),$("#help-me-apply .operator").hide(),$("#help-me-apply .manufacturer").show())}),$(".acquisition_type").on("change",function(){var e=this.value;$(this).addClass("selected"),"in-india"==e&&($("#help-me-apply .in-india").show(),$("#help-me-apply .import").hide()),"import"==e&&($("#help-me-apply .in-india").show(),$("#help-me-apply .import").hide())}),
// Site menu Toggle
$(".site-nav").click(function(e){$(this).toggleClass("open"),$(".site-header").hasClass("sticky")||$("body").toggleClass("body-menu-open"),$(".user-nav.dashboard").removeClass("open"),$(".user-nav.dashboard").hasClass("open")||$(".site-nav").hasClass("open")?$(".site-header").addClass("menu-open"):$(".site-header").removeClass("menu-open")}),$(".user-nav.dashboard").click(function(e){$(this).toggleClass("open"),$(".site-nav").removeClass("open"),$(".site-header").hasClass("sticky")||$("body").toggleClass("body-menu-open"),$(".user-nav.dashboard").hasClass("open")||$(".site-nav").hasClass("open")?$(".site-header").addClass("menu-open"):$(".site-header").removeClass("menu-open")}),
// Show Apply step
$(".show-apply-step").click(function(e){$(".apply-step").addClass("show")}),
// Sticky navigation after scroll
$(window).scroll(function(){550<$(window).scrollTop()&&($(".site-header").addClass("sticky"),$("body").addClass("sticky-gap")),$(window).scrollTop()<551&&($(".site-header").removeClass("sticky"),$("body").removeClass("sticky-gap"))}),
// Clone feilds
$(".profession-clone-button").click(function(e){e.preventDefault(),$(".form-profession-wrap").append('<input type="text" placeholder="Profession">')});
// Permission Altitude drag slider
var e=$(".slider").attr("data-end");$(".slider").on("moved.zf.slider",function(){ariaValue=$(".slider-handle").attr("aria-valuenow"),"NaN"!=ariaValue?$("#altitude-value").val(ariaValue+"m"):$("#altitude-value").val("0m"),ariaValue==e?$(".circle-right").addClass("filled"):$(".circle-right").removeClass("filled")}),
// Sticky footer fix
$("body").css("margin-bottom",$("footer.site-footer").height()),
// Foundation initialisation
$(document).foundation()});