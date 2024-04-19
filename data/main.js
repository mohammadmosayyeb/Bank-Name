

function find(ID) {
    // ID = 505801;
    for (var i = 0; i < banks.length; i++) {
        if (banks[i].ID == ID) {
            return (banks[i].name)
        }
    }
}

var inp = document.querySelector("#intbnkname");
inp.addEventListener("input", () => {
    let val = inp.value;


    document.querySelector(".out").innerHTML = find(val)

})