# Vue3-UI

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

```
import { createApp } from 'vue';
import Ui from "@101media/vue3-ui";


const app = createApp({
  //
});

app.use(Ui)
...

```

## Components

### Dialog

Dialog spawns a modal to confirm an action.

Ask user to confirm an action. Promise will only be resolved when user confirms action.

So `action.execute()` will only be executed once the user confrims the dialog.

#### confirm

```
this.$ui.dialog.confirm({
    message: 'Continue on this task?',
}).then(() => action.execute())
```

#### Alert

```
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