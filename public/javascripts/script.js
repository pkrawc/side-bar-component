var navigation = (function() {
  var sideMenu = $('#side-menu');

  function toggle() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('body').removeClass('menu-open');

      sideMenu.removeClass('open');
      sideMenu.addClass('closed');
    } else {
      $(this).addClass('open');
      $('body').addClass('menu-open');

      sideMenu.removeClass('closed');
      sideMenu.addClass('open');
    }
  }

  function unitDropDownToggle() {
    $(this).toggleClass('selected');
  }

  function init() {
    var windowWidth = window.innnerWidth;
    console.log(windowWidth);
    if (windowWidth > 1140) {
      console.log(windowWidth);
    }
  }

  init();

  return {
    toggle: toggle,
    unitDropDownToggle: unitDropDownToggle
  }
})()

$(function() {
  var units = $('#unit-list > li');
  var sideMenuBtn = $('#side-menu-btn');
  sideMenuBtn.on('click', navigation.toggle);
  units.on('click', navigation.unitDropDownToggle);
})
