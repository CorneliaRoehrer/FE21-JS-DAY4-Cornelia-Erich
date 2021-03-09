function removeItem() {
    this.style.opacity = "0";
    // (this) here will back to the element that we will target or select
    this.style.transition = "1s";
    setTimeout(() => { this.remove(); }, 1000);
};


// removing all objects

// function addRemoveToList() {
// var items = document.getElementsByTagName("img");
//     for (let i in items) {
//         items[i].addEventListener("click", removeItem);
//     }
// };

// removing just the santas
var items = document.getElementsByClassName("santa");
    for (let i in items) {
        items[i].addEventListener("click", removeItem);
    }