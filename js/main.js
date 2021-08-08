// var elsHeader = document.querySelector('.site-header');
// var elsHeaderNavBtn = elsHeader.querySelector('.site-header__btn');

// if (elsHeaderNavBtn){
//   elsHeaderNavBtn.addEventListener('click', function() {
//     elsHeader.classList.toggle('site-header--open');
//   });
// }

//MODAL SEARCH

var elHeaderMainMobileSearch = document.querySelector(".header-main__mobile-search");
var elHeaderMainForm = document.querySelector(".header-main__modal");

if (elHeaderMainMobileSearch) {
  elHeaderMainMobileSearch.addEventListener('click', function (evt) {
    evt.preventDefault();

    elHeaderMainForm.classList.add('header-main__modal--open');
  });
}

if (elHeaderMainForm) {
  elHeaderMainForm.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-main__modal')) {
      elHeaderMainForm.classList.remove('header-main__modal--open');
    }
  });
}

// window.onclick = function(event) {
//   if (event.target == elHeaderMainForm) {
//     elHeaderMainForm.classList.remove('header-main__modal--open');
//   }
// }

var elHeaderMenuLink = document.querySelector(".header-menu__link");
var elHeaderMenuBox = document.querySelector(".header-menu__box");

if (elHeaderMenuLink) {
  elHeaderMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elHeaderMenuBox.classList.add('header-menu__box--open');
  });
}

// window.onclick = function(event) {
//   if (event.target == elHeaderMenuBox) {
//     elHeaderMenuBox.classList.remove('header-menu__box--open');
//   }
// }

if (elHeaderMenuBox) {
  elHeaderMenuBox.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-menu__box')) {
      elHeaderMenuBox.classList.remove('header-menu__box--open');
    }
  });
}



var elManageButton = document.querySelector(".manage__button");
var elManageList = document.querySelector(".manage__button--list");

elManageButton.addEventListener('click', function(){
     elManageList.classList.remove('manage__button--active');

     elManageButton.classList.add('manage__button--active');

});
elManageList.addEventListener('click', function(){
  elManageButton.classList.remove('manage__button--active');

  elManageList.classList.add('manage__button--active');

});




var elsFiltreButton = document.querySelectorAll(".filtre__list-button");
var elsFiltreSpan = document.querySelectorAll(".filtre__list-span");

elsFiltreButton.forEach(function (list) {
  list.addEventListener('click', function () {
    list.closest('li').remove(".filtre__list-span");
  });
});



var elProductButtonGrid = document.querySelector(".manage__button--grid");
var elProductButtonList = document.querySelector(".manage__button--list");
var elProductGrid = document.querySelector(".products__box");


if (elProductButtonGrid) {
  elProductButtonGrid.addEventListener('click', function (btn_open) {
    btn_open.preventDefault();
    elProductGrid.classList.add('products__box--grid');
  });
}

if (elProductButtonList) {
  elProductButtonList.addEventListener('click', function (btn_close) {
    btn_close.preventDefault();
    elProductGrid.classList.remove('products__box--grid');

  });

}

var elSiteHero = document.querySelector(".hero")

var elSiteHeroToggle = elSiteHero.querySelector(".hero__button")

if(elSiteHeroToggle){
  elSiteHeroToggle.addEventListener("click", function(){
    elSiteHero.classList.toggle("hero--open")
  })
}


window.addEventListener('resize', function(event){
  var newWidth = window.innerWidth;
  if (newWidth <= 910) {
    elProductGrid.classList.add('products__box--grid');
  }
});

var newWidth = window.innerWidth;
  if (newWidth <= 910) {
    elProductGrid.classList.add('products__box--grid');
}

var elShoppinButton = document.querySelector(".header-main__cart");
var elShoppinButtonClose = document.querySelector(".shopping-cart__btn ");
var elShoppinModal = document.querySelector(".shopping-cart");


if (elShoppinButton) {
  elShoppinButton.addEventListener('click', function (btn_open) {
    btn_open.preventDefault();
    elShoppinModal.classList.add('shopping-cart-open');
  });
}

if (elShoppinButtonClose) {
  elShoppinButtonClose.addEventListener('click', function (btn_close) {
    btn_close.preventDefault();
    elShoppinModal.classList.remove('shopping-cart-open');

  });

}
