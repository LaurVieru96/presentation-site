

// let menuTab = document.querySelectorAll('.nav-item a');
// console.log(menuTab);
// console.log(menuTab[0]);
// console.log(menuTab[0].attributes[2]);

// let sectionAtt = document.querySelectorAll('section')
// console.log(sectionAtt);
// console.log(sectionAtt[0].id);


// menuTab.forEach(tab => {
//     tab.addEventListener('click', () => {
//         console.log(`click`);
//         window.location.href=`#${sectionAtt[0].id}`;
//         console.log(`after-click`);
//         return false;


//         // cand dau click, sa verifice daca #href == id of section
//     })
// })


function handleSectionRedirect(sectionNameId) {
    window.location.href = sectionNameId;
}

