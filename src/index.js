// commonJS 모듈 가져오기
//var _ = require('lodash');

//es6 모듈 가져오기
import _ from 'lodash';
// 웹펙은 컴퓨터가 이해할수있는 언어로 바꾸어주는 역할을 한다.
import './style.css';
import './hello.scss';
//named import : {} 안에 export한것과 동일한 이름을 사용해야 한다.
import {area, circumference} from './js/circle';
// default import {} 없고 이름을 마음대로 지정
import defu from './js/cube';


function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(10));
console.log(defu(5));