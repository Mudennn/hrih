$(document).ready(function () {
    // Hide all sub-menus initially
    $(".sub-menu").hide();

    // Handle click on menu items
    $(".menu > ul > li").click(function (e) {
        // // prevent default behavior
        // e.preventDefault();
        
        // remove active from already active
        $(this).siblings().removeClass("active");
        
        // add active to clicked
        $(this).toggleClass("active");
        
        // if has sub menu open it
        $(this).find("ul").slideToggle();
        
        // if has sub menu close it
        $(this).siblings().find("ul").slideUp();
        
        // remove active class of sub menus items  
        $(this).siblings().find("ul").find("li").removeClass("active");
    });

    // sidebar open and close
    $(".menu-btn").click(function () {
        $(".sidebar").toggleClass("active");
        
        // Ensure sub-menus are hidden when sidebar is toggled
        if (!$(".sidebar").hasClass("active")) {
            $(".sub-menu").slideUp();
        }
    });
});

const sideMenu = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});