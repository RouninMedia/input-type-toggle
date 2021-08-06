
# `<input type="toggle">`

There are *two versions* of the **toggle input** below:

 1) WebComponent Version: `<toggle-input position="off">`
 2) Original Version: `<input type="toggle">`

______

## WebComponent Version: `<toggle-input position="off">`

The WebComponent Version of the **toggle input** (`<toggle-input position="off">`) is a WebComponent, fully encapsulating its own Markup, Styles and Scripts.

#### HTML
```
<toggle-input position="off"></toggle-input>

<p>The <code>&lt;toggle-input&gt;</code> is currently switched <strong data-toggle-position="off">off</strong>.</p>
```


______
______

## Original Version: `<input type="toggle">`

The Original Version of the **toggle input** (`<input type="toggle">`) is a toggle switch HTML `<form>` control, built from a `<input type="checkbox">`.

### Working Example of `<input type="toggle">`

See a working example of <a href="https://htmlpreview.github.io/?https://github.com/RouninMedia/input-type-toggle/blob/master/input-type-toggle.html" title="https://htmlpreview.github.io/?https://github.com/RouninMedia/input-type-toggle/blob/master/input-type-toggle.html" target="_blank">`<input type="toggle">`</a>.

________

### Build your own `<input type="toggle">`

**N.B.** The `<input type="toggle">` makes good use of _CSS Custom Properties_ which are all initially declared at the top of the stylesheet and which may be customised.

#### HTML
```
<label class="checkboxToggle">
<input type="checkbox" />
<span class="checkboxToggleSwitch"></span>
</label>

<p>The <code>&lt;input type="toggle" /&gt;</code> is currently switched <strong data-checkbox-status="off">off</strong>.</p>
```

#### CSS
```
.checkboxToggle {
  --toggle-width: 60px;
  --toggle-height: 34px;
  --toggle-padding: 1px;
  --switch-height: calc(var(--toggle-height) - (var(--toggle-padding) * 4));
  --switch-slide: calc(var(--toggle-width) - var(--switch-height) - (var(--toggle-padding) * 4) + 3px);
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
  margin-left: 0;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.4s ease-out;
}

.checkboxToggleSwitch:hover::before {
  border: 2px solid rgba(191, 0, 0, 0.5);
}

.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch {
  background-color: rgb(255, 0, 0);
  border: 1px solid rgba(229, 0, 0, 1);
  box-shadow: 0 0 2px rgba(191, 0, 0, 1);
}

.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch::before {
  transform: translateX(var(--switch-slide));
  border: 2px solid rgba(229, 0, 0, 1);
}
```

#### Javascript
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
