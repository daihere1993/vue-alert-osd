Vue-alert-osd RENDME
<!-- more -->
# Overview

vue-alert-osd is a message alert package for vue.js.

# Install

Get source from npm

```bash
$ npm insatll vue-alert-osd --save
```

Supported UMD library and individual CSS file.

```bash
./lib/
├── vue-alert-osd.js
└── vue-alert-osd.css
./src/
├── index.js
└── alert.vue
```

```JavaScript
// For ES6 module
import Alert from 'vue-alert-osd'

// For commonJS
const Alert = require('vue-alert-osd').default

// For global variable, import from script label
const Alert = Alert.default

// Import from src code for debugging or self building
import Alert from 'vue-alert-osd/src'
```

And import CSS file:

```JavaScript
require('vue-alert-osd/lib/vue-msgbox.css')
```

# Usage

## Basic usage

```JaveScript
Alert(Message, MessageType) //now, just support four types: success(default), warning, info, danger.
```

Example:

```JavaScript
Alert('This is a default success message!')
```

## Set duration

We can set duration for all Alert.

Example:

```JaveScript
Alert.set('duration', 3000)
```

## Other function

Developing...

# Develop

Codeing with watching and hot-reload

```bash
$ npm run dev
```

# License
MIT
