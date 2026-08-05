let fruits = ["apple","banana","orange","strawberry","watermelon"];

let list = document.getElementById("fruitList");

for (let i = 0; i < fruits.length; i++) {

    let li = document.createElement("li");

    let img = document.createElement("img");


    li.innerHTML = fruits[i];

    img.src = "Images/" + fruits[i] + ".jpg";


    li.appendChild(img);

    list.appendChild(li);

}


function q2(a, number) {

    for (let i = 0; i < a.length; i++) {

        if (a[i] === number) {
            return i;
        }
    }
    return -1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(q2(numbers, 3));
console.log(q2(numbers, 10));
console.log(q2(numbers, 17));
console.log(q2(numbers, 1));