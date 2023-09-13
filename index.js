const mobileMenuButton = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenuButton.addEventListener('click', () => {
  navList.classList.toggle('active');
});



const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
    const resumeURL = './images/resume.pdf'; // Replace with your resume file URL
    window.open(resumeURL, '_blank');
});


const blurDivs = document.querySelectorAll(".blur-div")

blurDivs.forEach(div=>{
  const img = div.querySelector("img")

  function loaded(){

  }
  if(img.complete){
    loaded()
  }
  else{
    img.addEventListener("load",loaded)
  }
})