# Vue3-UI 

<p align="center">
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
import { createApp } from 'vue';
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
import { createApp } from 'vue';
import Ui from "@101media/vue3-ui";

const UiConfig = {
    dialog:{
        cancelClass: 'btn-danger',
        confirmClass: 'btn-success',
        center: true,
    }
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

`String text`
The button text

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

```js
<UInput placeholder="Example input" v-model="text" id="TextInput1"></UInput>
```
```html
<div class="form-group" placeholder="Example input">
  
  <input placeholder="Example input" class="form-control" type="text">
  
</div>
```

### Dialog

Dialog spawns a modal to confirm an action.

Ask user to confirm an action. Promise will only be resolved when user confirms action.

So `action.execute()` will only be executed once the user confrims the dialog.

#### confirm

```js
this.$ui.dialog.confirm({
    message: 'Continue on this task?',
}).then(() => action.execute())
```

#### Alert

```js
this.$ui.dialog.alert({
    message: 'Continue on this task?',
}).then(() => action.execute())
```

##### Properties

`String message`
The message that is shown in the dialog

`String title`
The title shown in the dialog modal

`String confirmClass`
The class of the confirm button

`String confirmText`
The text of the confirm button

`String cancelClass`
The class of the cancel button

`String cancelText`
The text of the cancel button

`String canCancel`
Whether the cancel button if shown or not
*_default is on alert is false_*

## Credits

Vue3-UI is inspired by [Buefy](https://github.com/buefy/buefy).

## License

Code released under MIT license.
