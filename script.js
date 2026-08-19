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

let form = document.getElementById("orderForm");

let orderResult = document.getElementById("orderResult");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let username = document.getElementById("username").value;

    let age = document.getElementById("age").value;

    let gender = document.getElementById("gender").value;

    let orderType = document.getElementById("orderType").value;

    let temp = document.querySelector("input[name='temp']:checked").value;


    let title = "";

    if (gender === "male") {
        title = "MR. ";
    }
    else if (gender === "female") {
        title = "MS. ";
    }


    let info = ["Username : " + username,
                "Age : " + age,
                "Gender : " + gender,
                "Order type : " + orderType,
                "Drink : " + temp];


    orderResult.innerHTML = "";

    let hello = document.createElement("h2");

    hello.innerHTML = "Hello " + title + username;

    orderResult.appendChild(hello);


    let infoList = document.createElement("ul");

    infoList.id = "orderInfo";

    for (let i = 0; i < info.length; i++) {

        let li = document.createElement("li");

        li.innerHTML = info[i];

        infoList.appendChild(li);

        console.log(info[i]);

    }

    orderResult.appendChild(infoList);


    let message = document.createElement("p");

    message.innerHTML = "Your " + temp + " " + orderType + " needs a few seconds";

    orderResult.appendChild(message);

});
