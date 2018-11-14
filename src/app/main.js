/**
 * Created by larker on 2018/11/14.
 */
import a from './a.js'
import c from './c.js'
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());
console.log('new webpack 4.0 is so easy');

const s=()=>{
    a.init()
    a.cinit()
    c.init()
    console.log('s init')
}
s()