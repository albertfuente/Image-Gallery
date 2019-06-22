const current=document.querySelector("#current");
const imgs=document.querySelectorAll(".imgs img");
const opacity=0.4;


//set first img opacity
imgs[0].style.opacity=opacity;

function change(e){
  //reset opacity
  imgs.forEach(img=>(img.style.opacity=1));

  //change current image to source of clicked image
  current.src=e.target.src;

  //add fade in class
  current.classList.add("fade-in");

  //settimeou to remove fade in class after 0.5s
  setTimeout(()=> current.classList.remove("fade-in"),500);

  //change opacity to opacity var
  e.target.style.opacity=opacity;

}


imgs.forEach((img)=>{
  img.addEventListener("click", change)
});
