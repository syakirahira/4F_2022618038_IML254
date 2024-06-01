function showSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}

function hideSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=> {
if (window.pageYOffset > 100) {
toTop.classList.add("active");
} else {
toTop.classList.remove("active");
}
})


