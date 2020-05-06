const toggleCheckbox = document.querySelector('.checkboxToggle input[type="checkbox"]');

const reviewCheckboxStatus = () => {

  const checkboxStatus = document.querySelector('[data-checkbox-status]');
  
  if (toggleCheckbox.checked === true) {
  
    checkboxStatus.dataset.checkboxStatus = 'on';
    checkboxStatus.textContent = checkboxStatus.dataset.checkboxStatus;
  }
  
  else {
  
    checkboxStatus.dataset.checkboxStatus = 'off';
    checkboxStatus.textContent = checkboxStatus.dataset.checkboxStatus;
  }
}

toggleCheckbox.addEventListener('click', reviewCheckboxStatus, false);
