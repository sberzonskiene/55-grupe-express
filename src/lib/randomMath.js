const btnEl = document.querySelector('.btn');

buttonEl.addEventListener('click', () => {
  createRandom();
});

function createRandom() {
    const randomString = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLength = 12;
    let result = '';
    for ( let i = 0; i < randomLength; i++ ) {
      const randomNum = Math.floor(Math.random()*randomString.length);
      result += randomString.charAt(randomNum);
    }
    return result;
}
 console.log(createRandom(12));








