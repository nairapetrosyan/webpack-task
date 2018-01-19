import './style.less';
import './style2.less';
function factorial(n){
    if(n===0)
        return 1;
    return n*factorial(n-1);
};

export default factorial;