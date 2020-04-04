const actionsBtns = document.querySelectorAll(".app-sidebar-item-actions");
const actionsDropDowns = document.querySelectorAll(".actions-dropdown");

[...actionsBtns].map((actionBtn) => {
  actionBtn.addEventListener("click", () => {
    [...actionsDropDowns].map((actionsDropDown) => {
      actionsDropDown.classList.toggle("active");
    });
  });
});

const modals = document.querySelectorAll(".modal");
const buttons = document.querySelectorAll(".buttonJS");
const cancelButtons = document.querySelectorAll(".close-modal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = [...modals].find(
      (modal) => modal.dataset.id === button.dataset.target,
    );
    modal.style.display = "block";
  });
});

cancelButtons.forEach((cancelButton) => {
  cancelButton.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});
document.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (modal.style.display === "block") {
      if (e.target.className === "modal") {
        modal.style.display = "none";
      }
    }
  });
});

// /* Javascript only */
// function displayDropdown(element) {
//   const dropdowns = document.getElementsByClassName("actions-dropdown");
//   let i;
//   for (i = 0; i < dropdowns.length; i++) {
//     dropdowns[i].classList.remove("active");
//   }
//   // element.nextSibling is the carriage return… need to go to the next next to point on the dropdown menu
//   element.nextSibling.nextSibling.classList.toggle("active");
// }

/* W3C function to close the dropdown when clicked outside. */
// window.onclick = function(event) {
//   if (!event.target.matches(".dropbtn")) {
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       const openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
// const arr = [1, 4, 2, 6, 7, 0];

// const a = (str) => str + "!";

// console.log(a("wiz"));

// arr.map((c) => console.log(c));

$(".js-dropdown-toggler").click(function (e) {
  var current = $(this).next(".js-dropdown");
  current.toggleClass("is-open");
  $(".js-dropdown").not(current).removeClass("is-open");
  e.stopPropagation();
});

$("html").click(function () {
  if ($(".js-dropdown").hasClass("is-open")) {
    $(".js-dropdown").removeClass("is-open");
  }
});

$(".js-dropdown").click(function (e) {
  e.stopPropagation();
});
