document.addEventListener('DOMContentLoaded', function() {
  const signupButton = document.querySelector('.signup-button');
  const signupButtonWelcome = document.querySelector('.signup-button-welcome');
  const registerSection = document.getElementsByClassName('register-form');

  signupButton.addEventListener('click', scrollToRegister);
  signupButtonWelcome.addEventListener('click', scrollToRegister);

  function scrollToRegister(event) {
    event.preventDefault();
    registerSection[0].scrollIntoView({ behavior: 'smooth' });
  }

});

document.addEventListener('DOMContentLoaded', function() {
  const linkOne = document.getElementsByClassName('link-1')[0];
  const sellSection = document.getElementsByClassName('sell-section')[0];

  const linkTwo = document.getElementsByClassName('link-2')[0];
  const aboutSection = document.getElementsByClassName('staffInfo-section')[0];

  const linkThree = document.getElementsByClassName('link-3')[0];
  const register = document.getElementsByClassName('register-form')[0];



  linkOne.addEventListener('click', scrollToSellSection);
  linkTwo.addEventListener('click', scrollToAboutSection);
  linkThree.addEventListener('click', registerScroll);
  

  function scrollToSellSection(event) {
    event.preventDefault();
    sellSection.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToAboutSection (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth'});
  }

  function registerScroll(event) {
    event.preventDefault();
    register.scrollIntoView({ behavior: 'smooth' });
  }
  
});
