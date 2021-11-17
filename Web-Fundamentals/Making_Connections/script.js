function bye(el) {
    el.parentElement.parentElement.remove()
    document.querySelector(".badge").innerText--
}

function byeplus(el) {
    bye(el)
    document.querySelector("#connections").innerText++
}

function edit() {
    document.querySelector("#user").innerText = "New Name"
}