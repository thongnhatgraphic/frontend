class moblie {
    constructor(pin, name, msgIb, msgS) {
        this.battlery = pin;
        this.name = name;
        this.inbox = msgIb;
        this.send = msgS;
        this.allMsg = [...msgIb,...msgS]
    };
    
    spendEnergyForUse() {
        this.battlery.decrease()
    };
    showBattery() {
        return this.battlery.showEnerry()
    };
    showMsg () {
        return this.allMsg
    }

};
class pin {
    constructor(enerry) {
        this.enerry = enerry
    }
    decrease() {
        this.enerry -= 1
    }
    showEnerry() {
        return this.enerry
    }
};

var PinIp = new pin(20);
var PinSs = new pin(15);

var msgInbox = ["aaa","bbbb","ccc"]
var msgSend = ["dddd","eeeeeee","ffffff"]

var iphone = new moblie(PinIp,"Iphone 10",msgInbox,msgSend);
var samsung = new moblie(PinSs,"Samsung Note 10",msgInbox,msgSend);

var screenLeft = document.querySelector(".screen_left");
var screenRight = document.querySelector(".screen_right");

var battery_left = document.querySelector(".battery_left");
var battery_right = document.querySelector(".battery_right");

battery_left.innerHTML = `${iphone.showBattery()}%`;
battery_right.innerHTML = `${samsung.showBattery()}%`;

function showMesageOnScreen(device,side) {
    device.
}