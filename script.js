
let container = document.querySelector('.container')

let btn = document.querySelector('.btn');
let rmv = document.querySelector(".rmv");

btn.addEventListener("click", function (e){

    let input = prompt('Select up to 100x100:');
        while (!input || input > 100){
            input = prompt('Max input is 100 or numbers only');
        }
    for (let j = 0; j < input; j++){

        let col = document.createElement('div')
        col.className = "column";
        container.appendChild(col);

        for (let i = 1; i <= input; i++){

            let cell = document.createElement('div');
            cell.className = "cell";
            cell.textContent = ` `;
            col.appendChild(cell);
        }

    }



    let cell = document.querySelectorAll('.cell');
    let col = document.querySelectorAll('.column');
    console.log(cell)

    cell.forEach((iCell) => iCell.addEventListener("mouseover", function (e) {
        randomNum1 = Math.floor(Math.random() * 255);
        randomNum2 = Math.floor(Math.random() * 255);
        randomNum3 = Math.floor(Math.random() * 255);
    iCell.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3}, 1`;
    }));

    rmv.addEventListener("click", function(){
        cell.forEach((iCell) => iCell.remove())
        col.forEach((iCol) => iCol.remove());
        console.log("clicked");
    });
});


