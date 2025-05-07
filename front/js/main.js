document.querySelector('.hero__btn').addEventListener('click', function () {
  const targetElement = document.getElementById('result');

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
});

document.querySelector('.service__btn').addEventListener('click', function () {
  const targetElement = document.getElementById('result');

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
});

