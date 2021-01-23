var listProducts = [];
var tbody = document.querySelector(".tbody")
var input = document.querySelector("#name-product");
var buttonSubmit = document.querySelector(".submit");

var modeStatus = true
var ItemNeedEdit;
var flag = true
var notifycation = document.querySelector(".message");
var message = document.querySelector(".message-main");
var close = document.querySelector(".close")

if ( localStorage.getItem("products")) {
    listProducts = JSON.parse(localStorage.getItem("products"));
} else {
    localStorage.setItem("products", JSON.stringify(listProducts));
}

function s4() {
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
}
function guid() {
    return `${s4()}--${s4()}`
}
function render() {
    var htmls = "";
    listProducts.forEach( (product,index) => {
        htmls += `<tr>
                    <td>${index +1}</td>
                    <td>${product.id}</td>
                    <td>
                        <span class="nameProduct">${product.name}</span>
                        <input type="text" class="dp-none ${index}"  value="${product.name}"/>
                        <button class="dp-none ${index}"
                        onClick="editLiveItem(${index})"
                        >save</button>
                        <button class="dp-none ${index}"
                        onClick="cancleEdit(${index})"
                        >cancle</button>
                    </td>
                    <td>
                    <p class="handle${index} edit" onClick = "editItem(${index})">Edit</p>
                    <p class="handle${index} edit" onClick = "handlerEdit(${index})">Ed Live</p>
                    <p class="handle${index} delete" onClick="removeItem(${index})" >Delete</p>
                    </td>
                </tr>`
    })
    tbody.innerHTML = htmls
}
render();
function getValueInput(selector) {
    return selector.value
}
buttonSubmit.addEventListener("click", function () {
    var newProduct = {
        id: guid(),
        name: getValueInput(input)
    }
    addNewItem(newProduct);
    input.value = "";
    render();
} )

function addNewItem(product) {
    if (modeStatus) {
        listProducts.push(product)
        localStorage.setItem("products", JSON.stringify(listProducts))
        message.innerHTML = "Thêm Công Việc Thành Công"
        notifycation.classList.remove("dp-none")
        setTimeout(() => {
            notifycation.classList.add("dp-none")
        }, 3000);
    } else {
        listProducts.forEach( (product,index) => {
            if ( product.id === ItemNeedEdit.id ) {
                listProducts[index].id = ItemNeedEdit.id,
                listProducts[index].name = getValueInput(input)
            }
        })
        buttonSubmit.innerHTML = "Add";
        localStorage.setItem("products", JSON.stringify(listProducts))
        message.innerHTML = "Chỉnh Sửa Thành Công"
        notifycation.classList.remove("dp-none")
        setTimeout(() => {
            notifycation.classList.add("dp-none")
        }, 3000);
        modeStatus = true
        render();
    }
}

function removeItem(index) {
    listProducts.splice(index,1)
    localStorage.setItem("products", JSON.stringify(listProducts))
    render();
}
function editItem(ind) {
    listProducts.forEach((product, index)=> {
        if ( ind === index ) {
            ItemNeedEdit = product
        }
    });
    input.value = ItemNeedEdit.name;
    buttonSubmit.innerHTML= "Save"
    modeStatus = false;
};
function getElementAndRemoveClass(selector, clss) {
    var elms = document.getElementsByClassName(selector)
    for ( let i = 0 ; i < elms.length ; i++ ) {
        (elms[i].classList.remove(clss));
    }
}
function getElementAndAddClass(selector,clss, id) {
    var elms = document.getElementsByClassName(selector);
    elms[id].classList.add(clss)
}
function doDisplayNone(selector) {
    var elms = document.getElementsByClassName(selector);
    for ( let i = 0 ; i < elms.length ; i++ ) {
        elms[i].style.display = "none"
    }
}

function handlerEdit (id) {
    if ( flag ) {
        getElementAndAddClass("nameProduct","dp-none",id)
        getElementAndRemoveClass(id, "dp-none")
        doDisplayNone(`handle${id}`)
        flag = !flag
    } else {
        if ( confirm("Do you want to continue Edit this Item???") ) {
            console.log(1);
        } else {
            alert("Please save after edit or cancle !!!")
        }
    }
    
}

function cancleEdit(id) {
    // var elms = document.getElementsByClassName("nameProduct ");
    // elms[id].classList.remove("dp-none");
    // var elms2 = document.getElementsByClassName(id);
    // for ( let i = 0 ; i < elms2.length ; i++ ) {
    //     (elms2[i].classList.add("dp-none"));
    // }
    // var elms2 = document.getElementsByClassName(`handle${id}`);
    // for ( let i = 0 ; i < elms2.length ; i++ ) {
    //     elms[i].style.display = "block"
    // }
    flag = true;
    render()
}

function getValueToEdit(selector) {
    var elm = document.getElementsByClassName(`${selector}`);
    return elm[0].value
}
function editLiveItem(index) {
    listProducts[index].name = getValueToEdit(index);
    localStorage.setItem("products", JSON.stringify(listProducts))
    flag = true;
    render()
}

close.addEventListener("click", closeMessage);

function closeMessage () {
    notifycation.classList.add("dp-none")
    console.log("thêm");
}