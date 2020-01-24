"use strict";

const mq = {
    mo:500,
    sm: 650,
    lx: 1200,
    get moDn() { return this.mo - .1; },
    get smDn() { return this.sm - .1; },
    get lxDn() { return this.lx - .1; }
};

Object.defineProperty(mq, 'max', {
    enumerable: true,
    get: () => mq.lx,
});

export default Object.freeze(mq);