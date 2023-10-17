const accessKey="7ZwYeRTOZHcVcKoGb8UY1qEtQ1uBVIwKffVSCzodD8o"

const forme1=document.querySelector('form');
const input=document.getElementById("search-input");
const searchResult=document.querySelector('.search-results');
const showMore=document.getElementById("show-more-button");
let page=1;
let inputData="";


 async function searchImage(){

    inputData=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const Data = await response.json();
    const finalresults = Data.results;

    if(page===1){
    searchResult.innerHTML= "";}
    console.log(finalresults);

    finalresults.map((result) => {
 

        const  imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;

        const imageLink=document.createElement("a");
        imageLink.herf=result.links.html;
        imageLink.target='_blank';
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);
     });

     page++;
     if(page>1){
        showMore.style.display='block';}
    }

    forme1.addEventListener("submit",(event)=>
    {
        event.preventDefault();
        page=1;
        searchImage();
    });

    showMore.addEventListener("click",()=>
    {
        searchImage();
    });


