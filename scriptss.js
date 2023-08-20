const accesskey = "UlVEiBFyWQ7mdupipFnqO2Ik0IDRpasPXt2xO7j9n7g"
const formE1 = document.querySelector("form")
const inputE1=document.getElementById("search-input")
const searchresults = document.querySelector(".search-input")
const showmore=document.getElementById('showmore')


let inputdata=""
 let page = 1

async function searchimages(){
inputdata=inputE1.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`;

const response=await fetch(url)
const data=await response.json()

const results= data.results


 if(page===1){
    searchresults.innerHTML=""
}
results.map((result)=>{

const imagewrapper=document.createElement('div')
imagewrapper.classList.add('search-result')
const image= document.createElement('img')
image.src=result.urls.small
image.alt=result.alt_description
imagewrapper.appendChild(image)
searchresults.appendChild(imagewrapper)
 if (result.links && result.links.html) {
    const imagelink = document.createElement('a');
    imagelink.href = result.links.html;
     imagelink.target = '_blank';
     imagelink.textContent = result.alt_description;
     imagewrapper.appendChild(imagelink);
 }





}); 

page++
if(page>1){
    showmore.style.display='block'
}
}
 formE1.addEventListener("submit", (event)=>{

  event.preventDefault()
    page=1
    searchimages()
 }); 
 showmore.addEventListener("click",(event)=>{
   // event.preventDefault()
    searchimages()
 })
