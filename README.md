
# dnative - DOM-native library for typed native Web Component development

The main `dnative` library is in the [dnative/](dnative/) directory.

The `dnative` approach uses the browser as its component framework, with native Web Components (`customElements` with optional Shadow DOM), plus a small set of utilities to streamline application code. The library is less than 7 KB minified.

The [dnui/](dnui/) directory also contains templates for UI element primitives, such as inputs, checkboxes, and selects. See the base [`d-base-field.ts`](dnui/src/d-base-field.ts) component.

## Usage

- Dependency: `"dnative": "^0.12.0"`

- Decorators: `experimental` (a long story, but currently the most portable option)


```typescript
import { BaseHTMLElement, customElement, onEvent, OnEvent } from "dnative";

@customElement("simple-element")
class SimpleElement extends BaseHTMLElement {
  init() {
    this.innerHTML = `
      Hello from SimpleElement!
      <button>Click me</button>
    `;
  }

  @onEvent("click", "button")
  onClick(evt: MouseEvent & OnEvent) {
    const button = evt.selectTarget as HTMLButtonElement;
    button.textContent = "Clicked!";
  }
}
```

```html
<simple-element></simple-element>
```

## Dev / Demo

To build the assets:

```sh
npm install
# For dnative/
cd dnative && npm install && cd ..
# For dnui/
cd dnui && npm install && cd ..

# Build the demo
npm run demo-build
```


Then, serve the repository with a local web server and open `demo/web-content/index.html` in your browser.

## Note on dnative vs dom-native

This is a continuation of the [dom-native](https://www.npmjs.com/package/dom-native) library. It has a shorter name, with drag-and-drop included as `dnd`.

It is mostly a drop-in replacement.


---

[This Repo](https://github.com/jeremychone/dnative)


