document.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.classList.contains("img-fluid")){
        // console.log(e.target);
       const src = e.target.getAttribute("src");
        let modalimg = document.querySelector(".modal-img");
        modalimg.src = src;
        modalimg.setAttribute("class", "modal-img");
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
     
    }
})


// Nasa Image viewer
const inputvals = document.getElementById('myInput');
const imgchange = document.querySelector(".img-fluid");
// const uservalue = inputvals.value;
const container = document.querySelector(".container-fluid");
const btn = document.querySelector(".input-group-text");
const APIKEY = `BoRKVRlEQ9PT7SamJ1IKbVVGEomW3poChnvegMoY`;
let video = document.createElement("iframe");
            video.setAttribute("width", "900px");
            video.setAttribute("height", "550px");

btn.addEventListener("click", function(){
    console.log(inpvals.value);
   if(inpvals.value === ""){
       alert("Please Enter the date")
   }else{
       const APIURL = `https://api.nasa.gov/planetary/apod?date=${inputvals.value}&api_key=${APIKEY}`
   console.log(APIURL);
         
fetch(APIURL)
.then((Response) => {
    if (!Response.ok) {
        console.log(APIURL);
        console.log("Error fOunded", Response)
    } else {
        return Response.json();
    }
}).then((data) => {
    container.appendChild(video);
    imgchange.replaceWith(video);
    console.log(data);
    if (data.media_type === 'video') {
           video.setAttribute("src", data.url);
    }else if(data.media_type === 'image'){
        container.replaceChild(imgchange, video);
        imgchange.setAttribute("src", data.url);
        imgchange.setAttribute("class", "img-fluid");
    }
}).catch((error) => {
    console.log("error founded", error);
}).finally(() => {
    console.log("runned")
})
   }
   
});
