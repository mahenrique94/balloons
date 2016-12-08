/// <reference path="./balloon.model.ts"/>
/// <reference path="./cord.model.ts"/>
/// <reference path="./head.model.ts"/>
/// <reference path="./leg.model.ts"/>
/// <reference path="./nuvem.model.ts"/>

const nuvens : number = 5;
for (let i = 0; i < nuvens; i++) {
    let top : number = parseInt(Math.random() * 500);
    let left : left = parseInt(Math.random() * 900);
    document.body.appendChild(new Nuvem(top, left).create());
}

setInterval(() => {
    let left : number = parseInt(Math.random() * 1280);
    document.body.appendChild(new Balloon(left).create());
}, 1000);