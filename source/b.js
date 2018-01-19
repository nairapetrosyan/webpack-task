import a from './a';
import storage from './storage';
import './style.less';
import './style2.less';


function component() {
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML="Click";
    const h1 = document.createElement('h1');
    h1.id = 'fact';
    button.onclick = a.printfact;
    h1.innerHTML = storage.factorial;
    div.appendChild(button);
    div.appendChild(h1);
    return div;
}
let comp = component();
document.body.appendChild(comp);
