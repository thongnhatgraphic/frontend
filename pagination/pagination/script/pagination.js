let listData;
let numberData = 43;
let pageSize = 10;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let searchBtn = document.querySelector(".search");
let select = document.querySelector(".select");
let listDt = document.querySelector(".listDt")
let pageNumber = document.querySelector(".pageNumber")
function createName() {
    let length = Math.floor(Math.random() * 4 + 5);
    let fristChar = upperCase[Math.floor(Math.random() * 25 + 1)];
    let theRestChars = lowerCase.substr(Math.floor(Math.random() * (26 - length) + 2), length - 1);
    return `${fristChar}${theRestChars}`;
}
function fullName() {
    return `${createName()} ${createName()}`
}

function createList(size) {
    var arr = []
    for (let i = 0; i < size; i++) {
        arr.push(fullName())
    };
    localStorage.setItem("listStudent", JSON.stringify(arr))
    return arr
};

function renderList(numberPage, amountOn1Page) {
    listDt.innerHTML = "";
    var arrOnPage = listData.slice((numberPage - 1) * amountOn1Page, numberPage * amountOn1Page)
    arrOnPage.forEach((data, index) => {
        listDt.innerHTML +=
            `<tr>
                <td>${(numberPage - 1) * amountOn1Page + index + 1}</td >
                <td>${data}</td>
            </tr > `
    })
}
function renderNumberButtonOnPage(numberPageCurrent, pageSize) {
    var amountBtn = Math.ceil(numberData / pageSize);
    pageNumber.innerHTML = ""
    for (let i = 0; i < amountBtn; i++) {
        pageNumber.innerHTML += `
        <button 
            class= ${numberPageCurrent === i + 1 ? "active" : " "}
            style="display: inline-block; margin: 10px"
            onClick = "handleChangePage(this)"
            >${i + 1}
        </button>
        `
    }
}

function handleChangePage(e) {
    var numberPage = parseInt(e.innerHTML)
    renderList(numberPage, pageSize)
    renderNumberButtonOnPage(numberPage, pageSize)
}


select.addEventListener("change", filterCountOnPage);
function filterCountOnPage(e) {
    var numberDataOnPage = parseInt(e.target.value);
    pageSize = numberDataOnPage;
    renderList(1, numberDataOnPage);
    renderNumberButtonOnPage(1, numberDataOnPage)
}

searchBtn.addEventListener("input", searchItem);


function searchItem(e) {
    var keyWord = e.target.value;
    var arrClone = JSON.parse(localStorage.getItem("listStudent"))
    if (keyWord) {
        listData = arrClone.filter((data) => {
            return data.toLowerCase().indexOf(keyWord.toLowerCase().trim()) !== -1
        })
        numberData = listData.length
    } else {
        listData = JSON.parse(localStorage.getItem("listStudent"))
        numberData = listData.length
    }
    renderList(1, pageSize)
    renderNumberButtonOnPage(1, pageSize)
    console.log(listData);
}


function init() {
    listData = JSON.parse(localStorage.getItem("listStudent"));
    renderList(1, pageSize);
    renderNumberButtonOnPage(1, 10)
}
function startApp() {
    init()
};
startApp();
