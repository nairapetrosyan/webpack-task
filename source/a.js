
import storage from './storage';


function factorial(n){
    if(n===1)
        return 1;
    return +n*factorial(n-1);
};
console.log('aaaaa')
function printfact()
{
    const h1 = document.getElementById('fact');
    const n = document.getElementById('input').value;
    if(n) {
        console.log(typeof n)
        storage.factorial = factorial(n);
        h1.innerHTML = storage.factorial;
    }
    else {
        h1.innerHTML = storage.factorial;
    }
}
export default {
    printfact,
    factorial
}
