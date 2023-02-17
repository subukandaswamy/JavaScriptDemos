
let val = 10

export default class ValClass {
    constructor(val){
        this.val = val
    }
}

export function getval(vc) {
    return vc.val
}
export function setval(vc, newval) {
    vc.val = newval
}

