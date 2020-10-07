// 😋
const bigYear = document.getElementById("big-year");
const smallYear18 = document.getElementById("small-year-18")
const smallYear19 = document.getElementById("small-year-19")
const listContainer = document.getElementById("list")
const hover = document.getElementById("hover")
const foodNum = document.getElementById("num")
const food = document.getElementById("food")
const body = document.querySelector("body")
let y2018 = false
let y2019 = true




smallYear18.addEventListener("click", (e) => {
    bigYear.innerText = "2018"
    smallYear18.classList.add("active")
    smallYear19.classList.remove("active")
    y2018 = true
    y2019 = false
})
smallYear19.addEventListener("click", (e) => {
    bigYear.innerText = "2019"
    smallYear19.classList.add("active")
    smallYear18.classList.remove("active")
    y2018 = false
    y2019 = true
})

for(i=0; i<10; i++){
    let pList = document.createElement("p");
    pList.className = "that"
    pList.id = i+1
    pList.textContent = i+1
    listContainer.appendChild(pList)
    pList.addEventListener("mouseover", (e)=>{
        hover.style.display = "none"
        if(y2018 === true){
            foodNum.innerText = topTenList[2018][e.target.id-1].id
            food.innerText = topTenList[2018][e.target.id-1].name
            foodNum.style.display = "block"
            food.style.display = "block"
        }
        if(y2019 === true){
            foodNum.innerText = topTenList[2019][e.target.id-1].id
            food.innerText = topTenList[2019][e.target.id-1].name
            foodNum.style.display = "block"
            food.style.display = "block"
        }
    })
    pList.addEventListener("mouseleave", () => {
        hover.style.display = "block"
        foodNum.style.display = "none"
        food.style.display = "none"
    })
}

foodNum.style.display = "none"
food.style.display = "none"