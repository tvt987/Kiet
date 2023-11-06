const searchOn = document.getElementById("on-search");
const searchOff = document.getElementById("close-search");
const searchForm = document.querySelector(".search-bar");
searchOn.addEventListener("click", () => {
  searchForm.style.display = "block";
});

searchOff.addEventListener("click", () => {
  searchForm.style.display = "none";
});

//------------btn slide -bar ------------------
let onSlideBar = document.querySelector('nav .btn-bars');
let sildeBar = document.querySelector('nav .slide-bar');
let switchSlideBar = false;
onSlideBar.addEventListener('click', () => {
  switchSlideBar = !switchSlideBar;
  console.log(switchSlideBar);

  if (switchSlideBar) {
    sildeBar.style.display = "inline-block";
    onSlideBar.innerHTML = `
      <i class="fas fa-times"></i>
    `
    let closeSearch = document.querySelector('nav .btn-bars i');
    closeSearch.classList.add('close-search');
    let clazzClose = document.querySelector('nav .btn-bars .close-search');
    clazzClose.style.fontSize = "30px";
    clazzClose.style.backgroundColor = "#101010";
    clazzClose.style.color = "#D9FFFF";
    clazzClose.style.border = "none";
  } else {
    onSlideBar.innerHTML = `
      <i class="fas fa-bars"></i>
    `
    sildeBar.style.display = "none";
    closeSearch.classList.remove('close-search');
  }
});

/* -----------------scroll page---------------- */
let scrollpage = document.querySelector('.fa-arrow-up ');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollpage.style.display = "block";
  } else {
    scrollpage.style.display = "none";
  }
}
scrollpage.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$('#myCarousel').carousel({
  interval: false
});
$('#carousel-thumbs').carousel({
  interval: false
});

let lst = document.querySelector('.myslider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let items = document.querySelectorAll('.item-img');

let action = 0;
let lengthList = items.length;
next.addEventListener('click',()=> {
    if(action >= lengthList){
        action = 0;
    }else{
      action ++ ;
      
    }
});

function reloadSlider(){
  let widthImg = doc
};