

function find(ID) {
    // ID = 505801;
    for (var i = 0; i < banks.length; i++) {
        // console.log(String(banks[i].ID));
        // console.log(ID)

        
        if (String(banks[i].ID).includes(ID)) {
            return (banks[i].name)
        }
    }
}

var inp = document.querySelector("#intbnkname");
inp.addEventListener("input", () => {
    let val = inp.value;
    var fni = find(val);
    console.log(val.length > 8)
   
    if (String(fni) != "undefined") {
        document.querySelector(".out").innerHTML = fni
    } 
    else if(val.length > 8){
        document.querySelector(".out").innerHTML = "مقدار بیش از حد مجاز ( 8 )"
    }
    else {
        document.querySelector(".out").innerHTML = "تعریف نشده !"
    }

    

})