let order = new Order();
const form = document.getElementById("menuForm");
form.addEventListener("submit", formSubmit);
const card = document.getElementById("cardSection");

const radioButtons = document.querySelectorAll("input[type='radio']");
radioButtons.forEach(function (elem) {
  elem.addEventListener("click", changeRadioButton);
});

function formSubmit(event) {
  event.preventDefault();
  if (!order.isPayed) {
    let formData = new FormData(form);

    const currentInput = {};
    formData.forEach((value, key) => (currentInput[key] = value));

    if (currentInput.size && currentInput.filler) {
      order.addPosition(
        new Hamburger(
          hamburgerSize[currentInput.size],
          fillerType[currentInput.filler]
        )
      );
    }

    if (currentInput.saladName) {
      order.addPosition(
        new Salad(
          saladType[currentInput.saladName],
          Number(currentInput.weight)
        )
      );
    }

    if (currentInput.drinkName) {
      order.addPosition(new Drink(drinkType[currentInput.drinkName]));
    }
    if (order.positions.length) drawCard();
  } else alert("Заказ уже оплачен");
}

function changeRadioButton(event) {
  if (event.target.dataset.waschecked === "false") {
    event.target.dataset.waschecked = "true";
    radioButtons.forEach((element) => {
      if (event.target !== element && event.target.name === element.name) {
        element.dataset.waschecked = "false";
      }
    });
    if (event.target.value === "small") {
      document.getElementById("hamburgerImage").src = "media/small.jpg";
      document.getElementById(
        "hamburgerPrice"
      ).innerHTML = `${hamburgerSize.small.price} 💵`;
      document.getElementById(
        "hamburgerCalories"
      ).innerHTML = `${hamburgerSize.small.calories} кКал`;
    }
    if (event.target.value === "big") {
      document.getElementById("hamburgerImage").src = "media/big.jpg";
      document.getElementById(
        "hamburgerPrice"
      ).innerHTML = `${hamburgerSize.big.price} 💵`;
      document.getElementById(
        "hamburgerCalories"
      ).innerHTML = `${hamburgerSize.big.calories} кКал`;
    }

    if (event.target.value === "coffee") {
      document.getElementById("drinkImage").src = "media/coffee.jpg";
      document.getElementById(
        "drinkPrice"
      ).innerHTML = `${drinkType.coffee.price} 💵`;
      document.getElementById(
        "drinkCalories"
      ).innerHTML = `${drinkType.coffee.calories} кКал`;
    }
    if (event.target.value === "cola") {
      document.getElementById("drinkImage").src = "media/cola.jpg";
      document.getElementById(
        "drinkPrice"
      ).innerHTML = `${drinkType.cola.price} 💵`;
      document.getElementById(
        "drinkCalories"
      ).innerHTML = `${drinkType.cola.calories} кКал`;
    }

    if (event.target.value === "caesar") {
      document.getElementById("saladImage").src = "media/caesar.jpg";
      document.getElementById(
        "saladPrice"
      ).innerHTML = `${saladType.caesar.price} 💵`;
      document.getElementById(
        "saladCalories"
      ).innerHTML = `${saladType.caesar.calories} кКал`;
    }
    if (event.target.value === "olivier") {
      document.getElementById("saladImage").src = "media/olivier.jpg";
      document.getElementById(
        "saladPrice"
      ).innerHTML = `${saladType.olivier.price} 💵`;
      document.getElementById(
        "saladCalories"
      ).innerHTML = `${saladType.olivier.calories} кКал`;
    }

    if (event.target.value === "cheese") {
      document.getElementById(
        "fillerPrice"
      ).innerHTML = `${fillerType.cheese.price} 💵`;
      document.getElementById(
        "fillerCalories"
      ).innerHTML = `${fillerType.cheese.calories} кКал`;
    }
    if (event.target.value === "salad") {
      document.getElementById(
        "fillerPrice"
      ).innerHTML = `${fillerType.salad.price} 💵`;
      document.getElementById(
        "fillerCalories"
      ).innerHTML = `${fillerType.salad.calories} кКал`;
    }

    if (event.target.value === "fries") {
      document.getElementById(
        "fillerPrice"
      ).innerHTML = `${fillerType.fries.price} 💵`;
      document.getElementById(
        "fillerCalories"
      ).innerHTML = `${fillerType.fries.calories} кКал`;
    }
    document.getElementById("hamburgerFullPrice").innerHTML = `${
      parseInt(document.getElementById("fillerPrice").innerHTML) +
      parseInt(document.getElementById("hamburgerPrice").innerHTML)
    } 💵`;
    document.getElementById("hamburgerFullCalories").innerHTML = `${
      parseInt(document.getElementById("fillerCalories").innerHTML) +
      parseInt(document.getElementById("hamburgerCalories").innerHTML)
    } кКал`;
  } else {
    radioButtons.forEach((element) => {
      if (event.target.name === element.name) {
        element.checked = false;
        element.dataset.waschecked = "false";
      }
    });
  }
}

function drawCard() {
  card.innerHTML = `          <div class="card-divider" style="">${
    order.isPayed ? "Ваш заказ (ожидайте доставку) " : "Ваша 🛒"
  }</div>`;
  order.positions.map(
    (value, index) =>
      (card.innerHTML += `<article>
              <div class="callout">
                  ${
                    !order.isPayed
                      ? `<button class="close-button"  type="button" onclick="deletePosition(${index})">
                      <span aria-hidden="true">&times;</span>
                  </button>`
                      : ""
                  }
                  <p class="separator-left">${value.getName()}</p>
              </div>
                  <p>калорийность</p>
                  <div class="stat">${value.getCalories()}</div>
                  <p>цена</p>
                  <div class="stat">${value.getPrice()}</div>
          </article>`)
  );
  card.innerHTML += `          <article>
              <hr/>
              <div class="callout">
                  <p class="separator-left">ИТОГО</p>
              </div>
                  <p>калорийность</p>
                  <div class="stat">${order.getCalories()}</div>
                  <p>цена</p>
                  <div class="stat">${order.getPrice()}</div>
                  </br>
          </article>
          ${
            !order.isPayed
              ? `          <button
                  type="button"
                  class="button small expanded"
                  onclick="payForOrder()"
          >
              Оплатить 💳
          </button>`
              : `          <button
                  type="button"
                  class="button small expanded"
                  onclick="newOrder()"
          >
              Новый заказ ➕
          </button>`
          }
`;
}

function deletePosition(index) {
  if (!order.isPayed) {
    order.deletePosition(index);
    drawCard();
  }
}

function payForOrder() {
  order.isPayed = true;
  form.setAttribute("style", "filter:blur(2px);pointer-events:none;");
  drawCard();
}

function newOrder() {
  card.innerHTML = "";
  form.setAttribute("style", "");
  order = new Order();
}
