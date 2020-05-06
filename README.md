# `<input type="toggle" />`
A toggle switch HTML &lt;form&rt; control, built from a ``<input type="checkbox" />``.

## HTML
```
<label class="checkboxToggle">
<input type="checkbox" />
<span class="checkboxToggleSwitch"></span>
</label>
```

## CSS
```
.checkboxToggle {
  --toggle-width: 60px;
  --toggle-height: 34px;
  --toggle-padding: 1px;
  --switch-height: calc(var(--toggle-height) - (var(--toggle-padding) * 4));
  --switch-slide: calc(var(--toggle-width) - var(--switch-height) - (var(--toggle-padding) * 4));
}

.checkboxToggle input[type="checkbox"] {
display: none;
}

.checkboxToggle,
.checkboxToggleSwitch {
  position: relative;
  display: flex;
  align-items: center;
  width: var(--toggle-width);
  height: var(--toggle-height);
}

.checkboxToggleSwitch {
  height: var(--switch-height);
  background-color: #ccc;
  border-radius: var(--toggle-height);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 2px rgba(191, 191, 191, 1);
  transition: all 0.4s ease-out;
}

.checkboxToggleSwitch:hover {
  border: 1px solid rgba(191, 0, 0, 0.5);
  box-shadow: 0 0 2px rgba(191, 0, 0, 0.5);
}

.checkboxToggleSwitch::before {
  content: '';
  width: var(--switch-height);
  height: var(--switch-height);
  margin-left: var(--toggle-padding);
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  transition: all 0.4s ease-out;
}

.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch {
  background-color: rgb(255, 0, 0);
  box-shadow: 0 0 2px rgba(191, 0, 0, 1);
}

.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch::before {
  transform: translateX(var(--switch-slide));
}
```

## Javascript
```
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
```
