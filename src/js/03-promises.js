import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {   
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
    })
}

const form = document.querySelector('.form')
form.addEventListener('submit', (Event) => {
  Event.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value)

  for (let i = 1; i <= amount; i ++) {
    const position = i;
    const currentDelay = delay + (i - 1) * step;
    createPromise(position, currentDelay)
    .then(({ position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${currentDelay}ms`);
    })
  }
})