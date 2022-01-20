let menuIcon = document.getElementById('mobile-menu');
let mobileMenu = document.getElementById('navigation')
let closeMenuBtn = document.getElementById('close-menu')

let techNav = document.querySelectorAll('.nav-tech')


menuIcon.addEventListener('click', ()=> {
    mobileMenu.style.right = "0"
    menuIcon.style.display = "none"
    
})

closeMenuBtn.addEventListener('click', ()=>{
    mobileMenu.style.right = "-70%"
    menuIcon.style.display  = "block"
})


techNav.forEach(element =>{
    element.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = "#FFFFFF"
        
    })
})