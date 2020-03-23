const actionsBtns = document.querySelectorAll('.app-sidebar-item-actions');
const actionsDropDowns = document.querySelectorAll('.actions-dropdown');

[...actionsBtns].map(actionBtn => {
  actionBtn.addEventListener('click', () => {
    [...actionsDropDowns].map(actionsDropDown => {
      actionsDropDown.classList.toggle('active');
    })
  })
})

// modal
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.buttonJS');
const cancelButtons = document.querySelectorAll('.close-modal');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = [...modals].find(modal => modal.dataset.id === button.dataset.target)
    modal.style.display = 'block';
  });
});

cancelButtons.forEach(cancelButton => {
  cancelButton.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  })
})
// dismiss modal when the window is clicked
document.addEventListener('click', e => {
  modals.forEach(modal => {
    if (modal.style.display === 'block') {
      if (e.target.className === 'modal') {
        modal.style.display = 'none';
      }
    }
  });
});