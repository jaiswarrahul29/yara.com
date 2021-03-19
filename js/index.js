$(document).ready(function(){
    // jquery script nav-bar for responsive
    $(".menu").click(function(){
        $(".nav-bar ul").toggleClass('show')
    })
})
// when list is click then close the panel 
$(".link-list").click(function close() {
    $(".nav-bar ul").toggleClass('show')
})

// for about border
$(".link-list-1").click(function close() {
    $(".link-list-1").addClass('active')
    $(".link-list-0").removeClass("active");
    $(".link-list-2").removeClass("active");
    $(".link-list-3").removeClass("active");
    $(".link-list-4").removeClass("active");
})
// for service border
$(".link-list-2").click(function close() {
    $(".link-list-2").addClass('active')
    $(".link-list-1").removeClass("active")
    $(".link-list-3").removeClass("active")
    $(".link-list-4").removeClass("active")
})
// for project border
$(".link-list-3").click(function close() {
    $(".link-list-3").addClass('active')
    $(".link-list-1").removeClass("active")
    $(".link-list-2").removeClass("active")
    $(".link-list-4").removeClass("active")
})
// for process border
$(".link-list-4").click(function close() {
    $(".link-list-4").addClass('active')
    $(".link-list-1").removeClass("active")
    $(".link-list-2").removeClass("active")
    $(".link-list-3").removeClass("active")
})
// for contact border
$(".link-list-5").click(function close() {
    $(".link-list-0").removeClass("active")
    $(".link-list-1").removeClass("active")
    $(".link-list-2").removeClass("active")
    $(".link-list-3").removeClass("active")
    $(".link-list-4").removeClass("active")
})


function comingsoon(){
    window.alert("coming soon");
}