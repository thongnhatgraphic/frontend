class Mobile {
    constructor(name, pin, status) {
        this.name = name;
        this.battery = pin;
        this.msgBox = [];
        this.MSG;
        this.status = status
    };
    toggleStatus() {
        if (this.battery.enery > 0) {
            this.status = !this.status
        } else {
            alert("Không bật nguồn lên được")
        }
    }
    showBattlery() {
        return this.battery.enery
    }
    showNameProduct() {
        return this.name;
    }
    showCurrentMessage() {
        return this.msgBox
    }
    sendMessage(device, msg) {
        if (msg === "") {
            alert(`${this.name} không được gửi ký tự trắng`)
        } else {
            this.battery.decreaseEnergyForUse();
            this.MSG = {
                type: "send",
                message: msg
            };
            this.msgBox.push(this.MSG)
            if (device) {
                var newMSG = {
                    ...this.MSG, type: "receive"
                }
                device.receiveMessage(newMSG)
            }
        }
    }

    receiveMessage(objMsg) {
        this.msgBox.push(objMsg)
    }

};

class Pin {
    constructor(enery) {
        this.enery = enery;
    }
    decreaseEnergyForUse() {
        return this.enery -= 1
    }
}

var pinIp = new Pin(4);
var pinSs = new Pin(5);
var Iphone = new Mobile("Iphone X", pinIp, true);
var SamSung = new Mobile("Note 10 litle", pinSs, true);

var battery_left = document.querySelector(".battery_left");
var battery_right = document.querySelector(".battery_right")
var nameIp = document.querySelector(".name_mobile_left");
var nameSs = document.querySelector(".name_mobile_right");

var messageLeft = document.querySelector(".message_left")
var messageRight = document.querySelector(".message_right")

var inputMessageLeft = document.querySelector(".input_send_message_left")
var inputMessageRight = document.querySelector(".input_send_message_right")

var btnSendLeft = document.querySelector(".btn_send_left")
var btnSendRight = document.querySelector(".btn_send_right")

var btnTurnOnLeft = document.querySelector(".onBattery_left")
var btnTurnOnRight = document.querySelector(".onBattery_right")

function getValueInput(selector) {
    return selector.value
}
function resetForm(selector) {
    selector.value = ""
}
btnSendLeft.addEventListener("click", () => { handleSendMessage(Iphone, SamSung) })
btnSendRight.addEventListener("click", () => { handleSendMessage(SamSung, Iphone) })

function setOnOffDevice(device) {
    if (device.name === "Iphone X") {
        if (device.status === true) {
            btnSendLeft.removeAttribute("disabled")
        } else {
            btnSendLeft.setAttribute("disabled", "true")
        }
    }
    if (device.name === "Note 10 litle") {
        if (device.status === true) {
            btnSendRight.removeAttribute("disabled")
        } else {
            btnSendRight.setAttribute("disabled", "true")
        }
    }
}
function showBtnOnOff() {
    setOnOffDevice(Iphone)
    setOnOffDevice(SamSung)
}
function toggleBtnOnOf(device) {
    device.toggleStatus()
    setOnOffDevice(device)
    showBtnOnOff()
}

btnTurnOnLeft.addEventListener("click", () => { toggleBtnOnOf(Iphone) })
btnTurnOnRight.addEventListener("click", () => { toggleBtnOnOf(SamSung) })



function handleSendMessage(device, toDevice) {
    var selector
    if (device.name === "Iphone X") {
        selector = inputMessageLeft
    } else if (device.name === "Note 10 litle") {
        selector = inputMessageRight
    }
    device.sendMessage(toDevice, getValueInput(selector))
    resetForm(inputMessageLeft)
    resetForm(inputMessageRight)
    showMessageAll();
    showPin()
}

function showBattleryOnEveryDevice(device) {
    var showPin = device.battery.enery > 0 ? device.showBattlery() : "Hết pin"
    if (device.name === "Iphone X") {
        battery_left.innerHTML = `${showPin}%`
        if (device.battery.enery <= 0) {
            btnSendLeft.setAttribute("disabled", "true")
            btnTurnOnLeft.setAttribute("disabled", "true")
        }
    }
    if (device.name === "Note 10 litle") {
        battery_right.innerHTML = `${showPin}%`
        if (device.battery.enery <= 0) {
            btnSendRight.setAttribute("disabled", "true")
            btnTurnOnRight.setAttribute("disabled", "true")
        }
    }
}

function showNameOnEveryDevice(device) {
    if (device.name === "Iphone X") {
        nameIp.innerHTML = `${device.name}`
    }
    if (device.name === "Note 10 litle") {
        nameSs.innerHTML = `${device.name}`
    }
}
function showMessageOnEveryDevice(device) {
    if (device.name === "Note 10 litle") {
        messageRight.innerHTML = ""
        device.msgBox.forEach((mes) => {
            if (mes.type === "send") {
                messageRight.innerHTML += `<div class="turnRight"><li>${mes.message}</li></div>`
            }
            if (mes.type === "receive") {
                messageRight.innerHTML += `<div class="turnLeft"><li>${mes.message}</li></div>`
            }
        })
    }
    if (device.name === "Iphone X") {
        messageLeft.innerHTML = ""
        device.msgBox.forEach((mes) => {
            if (mes.type === "send") {
                messageLeft.innerHTML += `<div class="turnRight"><li>${mes.message}</li></div>`
            }
            if (mes.type === "receive") {
                messageLeft.innerHTML += `<div class="turnLeft"><li>${mes.message}</li></div>`
            }
        })
    }
}

function showPin() {
    showBattleryOnEveryDevice(Iphone);
    showBattleryOnEveryDevice(SamSung);
}
function showName() {
    showNameOnEveryDevice(Iphone)
    showNameOnEveryDevice(SamSung)
}
function showMessageAll() {
    showMessageOnEveryDevice(Iphone)
    showMessageOnEveryDevice(SamSung)
}


function init() {
    showPin()
    showName();
    showMessageAll();
}


function startApp() {
    init()
    showMessageAll();
    showBtnOnOff()
};
startApp();
