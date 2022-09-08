let setData = document.getElementById("setData");
let userInput = document.getElementById("input");
let userInput1 = document.getElementById("input1");
let userInput2 = document.getElementById("input2");
let searchButton = document.getElementById("btn");
let searchButton2 = document.getElementById("btn2");

let apiName = "https://rebrickable.com"
let apiEndpoint = "/api/v3/lego/sets/?theme_id=158&min_year=2019&max_year=2019"
let apiKey = "&key=684c6ac2b8ec455942dd6902ec1183d1"

searchButton.addEventListener('click', function(e){
    setData.innerHTML = ""
    fetchfunction(apiName + "/api/v3/lego/sets/?theme_id=158&min_year" 
    + `=${userInput.value}&max_year=${userInput.value}` + apiKey)
})

searchButton2.addEventListener('click', function(e){
    setData.innerHTML = ""
    fetchfunction(apiName + "/api/v3/lego/sets/?theme_id=158&min_year" 
    + `=${userInput1.value}&max_year=${userInput2.value}` + apiKey)
})

async function fetchfunction(url)
{
    const response = await fetch(url)
    if(response.ok)
    {
        let jsonData = await response.json();
        console.log(jsonData.results)
        if(Array.isArray(jsonData.results))
        {
            jsonData.results.forEach(results => {
                displayData(results)
            })
        }
    }
}

function displayData(data)
{
    //Image
    let imgCol = document.createElement("div")
    //imgCol.className = "col-1"

    let img = document.createElement("img")
    img.setAttribute('src', data.set_img_url);
    img.className = "img-fluid"

    imgCol.appendChild(img)

    //Text
    let textCol = document.createElement("div")
    //textCol.className = "col-1"

    let setName = document.createElement("h2");
    setName.innerText = "Set Name: " + data.name;

    let setNum = document.createElement("h2");
    setNum.innerText = "Set Number: " + data.set_num;

    let setYear = document.createElement("h2");
    setYear.innerText = "Release Year: " + data.year;

    let setBreak = document.createElement("h2");
    setBreak.innerText = "-----------------------------------------------"
                            + "------------------------------------------";

    textCol.appendChild(setName);
    textCol.appendChild(setNum);
    textCol.appendChild(setYear);
    textCol.appendChild(setBreak);

    //put together pieces

    setData.appendChild(imgCol);
    setData.appendChild(textCol);
}