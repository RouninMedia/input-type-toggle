
# `<input type="toggle">`

There are *four versions* of the **toggle input** below:

 1) Newer WebComponent Version with Declarative Shadow Root: `<toggle-input position="off">`
 2) Standard WebComponent Version: `<toggle-input position="off">`
 3) `DaNIS³H Module` Version: `<input type="toggle">` (this is a showcase and would almost never be used instead of a `WebComponent`)
 4) Original plain `HTML` Version: `<input type="toggle">`

______

## WebComponent Version: `<toggle-input position="off">`

This version of the **toggle input** (`<toggle-input position="off">`) is a modern WebComponent.

The `<toggle-input>` WebComponent fully encapsulates its own Markup, Styles and Scripts.

One significant advantage of the **WebComponent Version** is that the initial `position` can be set to `on` via the HTML attribute, instead of always initialising in an `off` position. 

#### HTML
```html
<toggle-input position="off"></toggle-input>

<button type="button">Click Me</button>

<p class="description">The <code>&lt;toggle-input&gt;</code> is currently switched <strong data-toggle-position="off">off</strong>.</p>
```

#### CSS
```CSS
button {
  margin: 12px 0;
}
```

#### Javascript
```javascript
class toggleInput_Element extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {

    const renderShadow = () => {

      const toggleInputLabel = document.createElement('label');
    toggleInputLabel.classList.add('checkboxToggle');
    
      const toggleInputCheckbox = document.createElement('input');
      toggleInputCheckbox.setAttribute('type', 'checkbox');
      toggleInputLabel.appendChild(toggleInputCheckbox);
    
      const toggleInputSpan = document.createElement('span');
        toggleInputSpan.classList.add('checkboxToggleSwitch');
      toggleInputLabel.appendChild(toggleInputSpan);    

      const toggleInputStyles = document.createElement('style');
      toggleInputStyles.textContent = '';
      toggleInputStyles.textContent += 'p {';
      toggleInputStyles.textContent += 'color: red;';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggle {';
      toggleInputStyles.textContent += '--toggle-width: 60px;';
      toggleInputStyles.textContent += '--toggle-height: 34px;';
      toggleInputStyles.textContent += '--toggle-padding: 1px;';
      toggleInputStyles.textContent += '--switch-height: calc(var(--toggle-height) - (var(--toggle-padding) * 4));';
      toggleInputStyles.textContent += '--switch-slide: calc(var(--toggle-width) - var(--switch-height) - (var(--toggle-padding) * 4) + 3px);';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggle input[type="checkbox"] {';
      toggleInputStyles.textContent += 'display: none;';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggle,';
      toggleInputStyles.textContent += '.checkboxToggleSwitch {';
      toggleInputStyles.textContent += 'position: relative;';
      toggleInputStyles.textContent += 'display: flex;';
      toggleInputStyles.textContent += 'align-items: center;';
      toggleInputStyles.textContent += 'width: var(--toggle-width);';
      toggleInputStyles.textContent += 'height: var(--toggle-height);';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggleSwitch {';
      toggleInputStyles.textContent += 'height: var(--switch-height);';
      toggleInputStyles.textContent += 'background-color: #ccc;';
      toggleInputStyles.textContent += 'border-radius: var(--toggle-height);';
      toggleInputStyles.textContent += 'cursor: pointer;';
      toggleInputStyles.textContent += 'border: 1px solid rgba(0, 0, 0, 0.1);';
      toggleInputStyles.textContent += 'box-shadow: 0 0 2px rgba(191, 191, 191, 1);';
      toggleInputStyles.textContent += 'transition: all 0.4s ease-out;';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggleSwitch:hover {';
      toggleInputStyles.textContent += 'border: 1px solid rgba(191, 0, 0, 0.5);';
      toggleInputStyles.textContent += 'box-shadow: 0 0 2px rgba(191, 0, 0, 0.5);';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggleSwitch::before {';
      toggleInputStyles.textContent += 'content: \'\';';
      toggleInputStyles.textContent += 'width: var(--switch-height);';
      toggleInputStyles.textContent += 'height: var(--switch-height);';
      toggleInputStyles.textContent += 'margin-left: 0;';
      toggleInputStyles.textContent += 'background-color: rgb(255, 255, 255);';
      toggleInputStyles.textContent += 'border: 2px solid rgba(0, 0, 0, 0.3);';
      toggleInputStyles.textContent += 'border-radius: 50%;';
      toggleInputStyles.textContent += 'box-sizing: border-box;';
      toggleInputStyles.textContent += 'transition: all 0.4s ease-out;';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggleSwitch:hover::before {';
      toggleInputStyles.textContent += 'border: 2px solid rgba(191, 0, 0, 0.5);';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch {';
      toggleInputStyles.textContent += 'background-color: rgb(255, 0, 0);';
      toggleInputStyles.textContent += 'border: 1px solid rgba(229, 0, 0, 1);';
      toggleInputStyles.textContent += 'box-shadow: 0 0 2px rgba(191, 0, 0, 1);';
      toggleInputStyles.textContent += '}';

      toggleInputStyles.textContent += '.checkboxToggle input[type="checkbox"]:checked + .checkboxToggleSwitch::before {';
      toggleInputStyles.textContent += 'transform: translateX(var(--switch-slide));';
      toggleInputStyles.textContent += 'border: 2px solid rgba(229, 0, 0, 1);';
      toggleInputStyles.textContent += '}';

      this.shadowRoot.appendChild(toggleInputStyles);
      this.shadowRoot.appendChild(toggleInputLabel);

      
      // INITIALISE TOGGLE POSITION ACCORDING TO INITIAL VALUE OF position="" ATTRIBUTE
      const initialiseTogglePosition = () => {
      
        const initialPosition = this.getAttribute('position');
        toggleInputCheckbox.checked = (initialPosition === 'on') ? true : false;
      }
      
      window.addEventListener('load', initialiseTogglePosition, false);
      
      
      // UPDATE position="" ATTRIBUTE VALUE WHENEVER CHECKBOX IS CHECKED OR UNCHECKED 
      const updatePositionAttribute = () => {
      
        const currentPosition = this.getAttribute('position');
        const newPosition = (currentPosition === 'off') ? 'on' : 'off';
        this.setAttribute('position', newPosition);
      }
      
      toggleInputCheckbox.addEventListener('change', updatePositionAttribute, false);
    };

    renderShadow();
  }
  
  
  // OBSERVE INTERNALLY WHEN VALUE OF position="" ATTRIBUTE CHANGES
  static get observedAttributes() { return ['position']; }

  attributeChangedCallback(name, oldValue, newValue) {
    
    this[name] = newValue;
    
    if (oldValue !== null) {
    
      this.shadowRoot.querySelector('input[type="checkbox"]').checked = (newValue === 'on') ? true : false;
    }
  }
}

customElements.define('toggle-input', toggleInput_Element);



// ACTIVATE BUTTON WHICH OPERATES <toggle-input> EXTERNALLY
const button = document.getElementsByTagName('button')[0];

const clickButton = () => {

  const toggleInput = document.getElementsByTagName('toggle-input')[0];
  const currentPosition = toggleInput.getAttribute('position');
  const newPosition = (currentPosition === 'off') ? 'on' : 'off';
  toggleInput.setAttribute('position', newPosition);
}

button.addEventListener('click', clickButton, false);



// OBSERVE EXTERNALLY WHEN VALUE OF position="" ATTRIBUTE CHANGES
const toggleInput = document.querySelector('toggle-input');

const updateDescription = () => {

  const togglePositionDescription = document.querySelector('.description [data-toggle-position]');
  
  let togglePositionDescriptionData = togglePositionDescription.dataset.togglePosition;

  const toggleInputPosition = toggleInput.getAttribute('position');
  
   togglePositionDescriptionData = (toggleInputPosition === 'on') ? 'on' : 'off';
    
    togglePositionDescription.textContent = togglePositionDescriptionData;
}

let observer = new MutationObserver(updateDescription);
observer.observe(toggleInput, {attributes: true});
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
```html
<label class="checkboxToggle">
<input type="checkbox" />
<span class="checkboxToggleSwitch"></span>
</label>

<p>The <code>&lt;input type="toggle" /&gt;</code> is currently switched <strong data-checkbox-status="off">off</strong>.</p>
```

#### CSS
```css
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
```javascript
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

_________

 - [**Building a switch component**](https://web.dev/building-a-switch-component/) by *Adam Argyle*

A foundational overview of how to build a responsive and accessible switch component.
