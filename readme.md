# Vue3-UI

<p>
  <a href="https://www.npmjs.com/package/@101media/vue3-ui" title="Version" target="_blank" rel="noopener noreferrer">
    <img alt="npm (tag)" src="https://img.shields.io/npm/v/@101media/vue3-ui">
  </a>
  <a href="https://www.npmjs.com/package/@101media/vue3-ui" title="License" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/l/@101media/vue3-ui" alt="License">
  </a>
  <a href="https://github.com/vueup/vue-quill" title="Last commit" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/github/last-commit/101media/vue3-ui?logo=github" alt="Last commit">
  </a>
</p>

Vue3-UI is a package that implements some default UI elements for Bootstrap 5.

## Installation

Using npm:

```bash
$ npm install @101media/vue3-ui
```

Using bower:

```bash
$ bower install @101media/vue3-ui
```

Using yarn:

```bash
$ yarn add @101media/vue3-ui
```

## Usage

```js
import {createApp} from 'vue';
import Ui from "@101media/vue3-ui";


const app = createApp({
    //
});

app.use(Ui)
...

```

## Configuration

Default configuration can be set when initializing plugin.

```js 
import {createApp} from 'vue';
import Ui from "@101media/vue3-ui";

const UiConfig = {
    //
}

const app = createApp({
    //
});

app.use(Ui, UiConfig)
 ```

## Components

All components support default HTML attributes.

### Button

Show a button.

`String type`
The button type

`String class`
The button class

`Boolean block`
Whether the button should be displayed as block.

`Callable @click`
On button click event

```vue

<Button type="button" class="btn-secondary" :block="true" @click="test"></Button>
```

### Checkbox

Show a checkbox.

`String type`
Define the input type.

`Boolean switches`
Whether the checkbox should be a switch

`Array|Boolean checked`
whether the checkbox is checked

`Any value`
The checkbox value

`String formClass`
The class of the form group

### Input

Show an input.

`String id`
The component ID

`String error`
The error message

`Boolean group`
Whether the input should be grouped

`String groupClass`
The class for the form group

`String type`
The input type

```vue
<Input placeholder="Example input" v-model="text" id="TextInput1"></Input>
```

### MultiSelect

Show a multiselect component.

This component is a wrapper around [VueForm/Multiselect](https://github.com/vueform/multiselect).

`String error`
The error message

`Boolean group`
Whether the input should be grouped

`String mode`
The type of input, options are `single`, `multiple`, `tags`

`Array|Object options`
An array or object of the selectable options.

```vue

<MultiSelect v-model="form.multiselect" :options="{1: 'first', 2:'second', 3: 'third' }">
This is a multiselect with three options
</MultiSelect>


```

## Credits

Vue3-UI is inspired by [Buefy](https://github.com/buefy/buefy).

## License

Code released under MIT license.