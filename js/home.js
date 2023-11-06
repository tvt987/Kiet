/**------------------------set coundown time sale-----------------------  **/

let countDownDate = new Date("Nov 5, 2023 15:37:25").getTime();
const conutdown = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  document.querySelector('.count-down .countdown-time .hours span').innerHTML = hours;
  document.querySelector('.count-down .countdown-time .minutes span').innerHTML = minutes;
  document.querySelector('.count-down .countdown-time .seconds span').innerHTML = seconds;
  if (distance < 0) {
    clearInterval();

  }

}, 1000);
//------------   slide sale product-------------------
const itemlist = document.querySelector('#slider .product-sale');
const itemlisttopzone = document.querySelector('.topzone .list-topzone');
const nextp = document.getElementById('next-product');
const nexttopzone = document.getElementById('next-topzone');
const prevp = document.getElementById('prev-product');
const prevtopzone = document.getElementById('prev-topzone');
const initSlider = () => {
  nextp.addEventListener('click', () => {
    const scrollAmount = itemlist.clientWidth;
    itemlist.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevp.addEventListener('click', () => {
    const scrollAmount = -itemlist.clientWidth;
    itemlist.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  nexttopzone.addEventListener('click', () => {
    const scrollAmount = itemlisttopzone.clientWidth;
    itemlisttopzone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevtopzone.addEventListener('click', () => {
    const scrollAmount = -itemlisttopzone.clientWidth;
    itemlisttopzone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

window.addEventListener("load", initSlider);

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modelLoginO = $$('.js-model-login')
const modelLogin = $('.model-login')
const modelRegister = $('.model-register')
const modelLoginForm = $$('.model-form')
const modelRegisterO = $('.js-model-registerO')
const modelLoginOpen = $('.js-model-loginO')
const modelForget = $('.model-forget')
const modelForgetO = $('.js-model-forget')
const modelChangePass = $('.model-changepass')
const modelChangePassO = $('.js-model-changepass')
const btnModel = $('.model-form__header--btn')
const modelSetProfileO = $('.js-model-setprofileO')
const modelSetProfile = $('.model-setprofile')

btnModel.addEventListener('click', () => {
  modelSetProfile.style.display = 'none'
})

modelSetProfileO.addEventListener('click', () => {
  modelSetProfile.style.display = 'block'
  modelLogin.style.display = 'none'
})

modelSetProfile.addEventListener('click', () => {
  modelSetProfile.style.display = 'none'
})

modelChangePass.addEventListener('click', () => {
  modelChangePass.style.display = 'none'
})

modelChangePassO.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelChangePass.style.display = 'block'
})

modelForgetO.addEventListener('click', () => {
  modelForget.style.display = 'block'
  modelLogin.style.display = 'none'
})

modelForget.addEventListener('click', () => {
  modelForget.style.display = 'none'
})

modelLoginO.forEach(element => {
  element.addEventListener('click', () => {
    modelLogin.style.display = 'flex'
    modelRegister.style.display = 'none'
    modelForget.style.display = 'none'
  })
});
modelLogin.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'none'
})

modelRegister.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'none'
})

modelLoginForm.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  })
});

modelRegisterO.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'block'
})

modelLoginOpen.addEventListener('click', () => {
  modelLogin.style.display = 'flex'
  modelRegister.style.display = 'none'
})

