// Project 1: Coffee Shop

let order;
let price;
let nextSlide;
const menuItem = [ "Espresso", "espresso", "Ristretto", "ristretto", "Americano", "americano", "Cappuccino", "cappuccino" ];


// Defining Functions
function NextSlide(slideButton){
  nextSlide = document.getElementById(slideButton);

  document.getElementById(slideButton).style.display = "block";

  nextSlide.scrollIntoView({ behavior: "smooth" });
};

document.getElementById("project-button").onclick = () => NextSlide("greeting");

document.getElementById("name-button").onclick = function(){
  let name = document.getElementById("name").value;

  document.getElementById("opening-statement").textContent =
    `Nice to meet you ${name}!\n` +
    `Below is the available menu:`;

  document.getElementById("menu").textContent =
    "  Espresso: $3\n" +
    "  Ristretto: $2.5\n" +
    "  Americano: $4\n" +
    "  Cappuccino: $5";

  document.getElementById("order-statement").textContent =
    `What would you like to order today?`;

  document.getElementById("ordering").style.display = "block";

  NextSlide("ordering");
};

function OrderOutput(order) {
  document.getElementById("order-reorder").textContent = "";
  document.getElementById("order-remenu").textContent = "";

  /* 
  while (true) {
    if (order == "Espresso") {
      price = 3;
      break;
  } else if (order == "Ristretto") {
      price = 2.5;
      break;
  } else if (order == "Americano") {
      price = 4;
      break;
  } else if (order == "Cappuccino") {
      price = 5;
      break;
  } else {
      document.getElementById("order-reorder").textContent =
        `I am sorry. ${order} is currently not available. Please select from the menu below.`;
      document.getElementById("order-remenu").textContent =
        "  Espresso: $3\n" +
        "  Ristretto: $2.5\n" +
        "  Americano: $4\n" +
        "  Cappuccino: $5";

      document.getElementById("reorder-input").style.display = "block";
      document.getElementById("reorder-button").style.display = "block";
    }
  };
  */
 
  switch (order) {
    case "Espresso":
      price = 3;
      break;

    case "espresso":
      price = 3;
      break;

    case "Ristretto":
      price = 2.5;
      break;

    case "ristretto":
      price = 2.5;
      break;

    case "Americano":
      price = 4;
      break;

    case "americano":
      price = 4;
      break;

    case "Cappuccino":
      price = 5;
      break;

    case "cappuccino":
      price = 5;
      break;

    default:
      document.getElementById("first-ascii").style.display = "none";
      document.getElementById("second-ascii").style.display = "block";
      document.getElementById("order-reorder").textContent =
        `I am sorry. ${order} is currently not available.\n` +
        `Please select from the menu below.`;

      document.getElementById("order-remenu").textContent =
        "  Espresso: $3\n" +
        "  Ristretto: $2.5\n" +
        "  Americano: $4\n" +
        "  Cappuccino: $5";

      document.getElementById("first-order").style.display = "none";
      document.getElementById("reorder-input").style.display = "block";
      document.getElementById("reorder-button").style.display = "block";

      return;
  };

  document.getElementById("number-statement").textContent =
    `How many cups of ${order} would you like?`;

  NextSlide("ordering-number");
  document.getElementById("ordering-number").style.display = "block";
  document.getElementById("number-ascii").style.display = "block";
}


// Ordering
document.getElementById("order-button").onclick = function(){
  order = document.getElementById("order-input").value;
  OrderOutput(order)
};

document.getElementById("reorder-button").onclick = function(){
  let reorder = document.getElementById("reorder-input").value;
  OrderOutput(reorder)

  if (menuItem.includes(reorder)) {
    document.getElementById("first-ascii").style.display = "block";
    document.getElementById("second-ascii").style.display = "none";
    document.getElementById("order-reorder").textContent =
      `${reorder} is currently available!!`

    document.getElementById("order-remenu").textContent =
      "  Espresso: $3\n" +
      "  Ristretto: $2.5\n" +
      "  Americano: $4\n" +
      "  Cappuccino: $5";
  } else {
    document.getElementById("order-reorder").textContent =
      `I am sorry. ${reorder} is currently not available.\n` +
      `Please select from the menu below.`;

    document.getElementById("order-remenu").textContent =
      "  Espresso: $3\n" +
      "  Ristretto: $2.5\n" +
      "  Americano: $4\n" +
      "  Cappuccino: $5";
  }
};


// Ordering Number and Closing
document.getElementById("number-button").onclick = function(){ 

  let orderAmount = document.getElementById("number-input").value;

  let cost = Number(price) * Number(orderAmount);
  let time = 2 * Number(orderAmount);

  document.getElementById("closing-statement").textContent = 
    `Thank you for your order.\n` +
    `It will cost total of $${cost},\n` +
    `and will take us around ${time} minutes to brew!`;

  NextSlide("closing")
  document.getElementById("closing-ascii").style.display = "block";
};
