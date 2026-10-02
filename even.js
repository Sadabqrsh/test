

const joinButton = document.getElementById("joinButton");
const notification = document.getElementById("notification");




joinButton.addEventListener("click", function () {

    notification.classList.add("show");

    setTimeout(function () {

        notification.classList.remove("show");

    }, 2500);

});




const priceElement = document.querySelector(".price h2");
const percentageElement = document.querySelector(".price span");

let bitcoinPrice = 67420.50;


function updatePrice() {

  

    const movement = (Math.random() - 0.5) * 100;

    bitcoinPrice += movement;




    priceElement.textContent =
        "$" +
        bitcoinPrice.toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );




    const percentage =
        ((bitcoinPrice - 67420.50) / 67420.50) * 100;


    if (percentage >= 0) {

        percentageElement.textContent =
            "+" + percentage.toFixed(2) + "%";

        percentageElement.style.color = "#00e890";

    } else {

        percentageElement.textContent =
            percentage.toFixed(2) + "%";

        percentageElement.style.color = "#ff5364";

    }

}




setInterval(updatePrice, 3000);