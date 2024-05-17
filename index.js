let checkbox = document.querySelectorAll(".checkbox");
let iconMenus = document.querySelectorAll(".bodymovinanim");
let tasks = document.querySelectorAll(".tasks");

/* CHECKBOX */

// Loop through each animation element
iconMenus.forEach((iconMenu, index) => {
  // Create a new Bodymovin animation instance for each element
  let animationMenu = bodymovin.loadAnimation({
    container: iconMenu,
    renderer: "svg",
    loop: false,
    autoplay: false,
    // Path can be set dynamically based on the element's attributes or data
    path: "media/checkBox.json", // Assuming you have a data attribute to store the path
  });

  let directionMenu = 1;
  iconMenu.addEventListener("click", (e) => {
    animationMenu.setDirection(directionMenu);
    animationMenu.play();
    directionMenu = -directionMenu;
  });

  iconMenu.addEventListener("click", () => {
    iconMenus.forEach((icon, i) => {
      //Code for checkbox nodeList
      if (index === i) {
        clickedCheckbox(icon, i);
      }
    });
  });
});

//function for clicked checkbox from NodeList
function clickedCheckbox(icon, i) {
  tasks[i].classList.toggle("checkedTask");
  if (!checkbox[i].checked) {
    checkbox[i].checked = true;
  } else {
    checkbox[i].checked = false;
  }
}
