export function createString() {
    const randomString = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLength = 20;
    let result = '';
    for ( let i = 0; i < randomLength; i++ ) {
      const randomNum = Math.floor(Math.random()*randomString.length);
      result += randomString.charAt(randomNum);
    }
    return result;
}
// console.log(createRandom(10));








