const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleButton)



// document.addEventListener('DOMContentLoaded', () => {
//     const expandsMore = document.querySelectorAll('[expand-more]')

//     function expand() {
//         const showContent = document.getElementById(this.dataset.target)
//         if (showContent.classList.contains('expand-active')) {
//             this.innerHTML=this.dataset.showtext;
//         } else {
//             this.innerHTML=this.dataset.hidetext;
//         }
//         showContent.classList.toggle('expand-active')
// }

//     expandsMore.forEach(expandsMore => {
//         expandsMore.addEventListener('click', expand)
//     })
// })