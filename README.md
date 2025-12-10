# Rippleeffect.js

![Rippleeffect.js](https://img.shields.io/badge/version-1.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

**Rippleeffect.js** is a lightweight JavaScript library that adds smooth and beautiful ripple effects to your clickable elements. It works on any HTML element, is fully customizable, and integrates seamlessly into HTML or React projects.

---

## Features

- **Lightweight** and dependency-free  
- **Works on any clickable element** (div, button, etc.)  
- **Customizable colors** and styles via CSS  
- **Easy to integrate** in HTML and React projects  
- **Smooth ripple animations** for modern UI interactions  

---

## Installation

### HTML

Simply include the script in your HTML:

```html
<script src="rippleeffect.js"></script>
```

Add the classes `ripple-black` or `ripple-white` to any clickable div:

```html
<div class="greenbtn ripple-black">Click Me</div>
```

Style your buttons or divs with CSS as needed.

### React

1. Import the script in your component or `index.html`:

```javascript
import '../path/to/rippleeffect.js';
```

2. Add the classes to any div you want ripple effects on:

```jsx
<div className="greenbtn ripple-black">Click Me</div>
```

3. Ensure your CSS for buttons is imported as well.

---

## Examples

Here are some sample buttons using Rippleeffect.js:

```html
<div class="greenbtn ripple-black">Download</div>
<div class="blackbtn ripple-white">Docs</div>
<div class="bluebtn ripple-black">Play</div>
<div class="orangebtn ripple-white">Login</div>

```

All of these will have smooth ripple animations when clicked.

---

## Customization

You can easily customize button colors and sizes in your CSS:

```css
.greenbtn {
  background-color: #76B900;
  color: black;
  padding: 15px 25px;
  border-radius: 4px;
}
```

Rippleeffect.js will automatically apply the ripple animation to any element with `ripple-black` or `ripple-white` class.

---

## Demo

Check out the interactive documentation page for live examples and instructions:

[Demo](https://soroush-osouli.github.io/Rippleeffect.js)

---

**Made with 💪 by [Soroush]**
