

let menuTab = document.querySelectorAll('.nav-item a');
console.log(menuTab);
console.log(menuTab[0]);
console.log(menuTab[0].attributes[2]);

menuTab.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(`test`);
        // cand dau click, sa verifice daca #href == id of section

    })
})




