function bye(el) {
    el.remove()
}

function searchGo(event) {
    event.preventDefault();
    let search = document.getElementById("search");
    alert(`You are searching for "${search.value}"`)
}

function addlike(el) {
    el.nextElementSibling.innerText++
}