﻿///<reference path="webassembly.d.ts"/>
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    //通过js 调用 wast
    //  var data = new Uint8Array("00 61 73 6d  01 00 00 00  01 0c 02 60  02 7f 7f 01 \
    //7f 60 01 7f  01 7f 03 03  02 00 01 07  10 02 03 61    \
    //64 64 00 00  06 73 71 75  61 72 65 00  01 0a 13 02    \
    //08 00 20 00  20 01 6a 0f  0b 08 00 20  00 20 00 6c    \
    //0f 0b"
    //      .trim().split(/[\s\r\n]+/g).map(str => parseInt(str, 16)));


    fetch("b01.wasm").then((buf) => {
        console.log("load=" + buf.statusText);
        buf.arrayBuffer().then((data) => {
            var u8d = new Uint8Array(data);
            WebAssembly.compile(u8d).then((module) => {
                const instance = new WebAssembly.Instance(module);
                console.log("compile ok.");
                var ext = instance.exports;
                var add = ext["add"];
                var square = ext["square"];

                console.log('2 + 4 =', add(2, 4));
                console.log('3^2 =', square(3));
                console.log('(2 + 5)^2 =', square(add(2 + 5)));
            }
            );
        }
        );
    });




};