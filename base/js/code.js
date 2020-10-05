document.addEventListener("DOMContentLoaded", function () {
    chkTitle.addEventListener("click",function () {
        if (chkTitle.checked) {
            lblTitle.classList.remove("hidden")
        }
        else {
            lblTitle.classList.add("hidden")
        }
    })
    chkTitre.addEventListener("click",function () {
        if (chkTitre.checked) {
            lblTitre.classList.remove("hidden")
            NARUTO.classList.remove("hidden")
        }
        else {
            lblTitre.classList.add("hidden")
            NARUTO.classList.add("hidden")
        }
    })
})