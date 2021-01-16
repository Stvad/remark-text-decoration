# remark-text-decoration

[![npm version](https://badge.fury.io/js/remark-text-decoration.svg)](https://badge.fury.io/js/remark-text-decoration)

A [remark](https://github.com/remarkjs/remark) plugin that adds support for adding arbitrary decoration round the text (i.e. things like underlining or highlighting)

Based on https://github.com/Darkhax/remark-underline

## Installation

```
npm install remark-text-decoration
```

For best results you should use [remark-html](https://www.npmjs.com/package/remark-html) or similar.

## Usage

We'll demonstrate the usage using underlining as example decoration.
Import the plugin and then pass it into remark, or your unified processor chain.

```js
import remark from 'remark';
import html from 'remark-html';
import decoration from 'remark-text-decoration';

remark.use(html).use(decoration("__", "ins")).process("__hello world__");
```

With the plugin the output will be 
```html
<p>
  <ins>hello world</ins>
</p>
```

Without the plugin the output will be 
```html
<p>
  <strong>hello world</strong>
</p>
```

## Options
You may supply additional parameters to the function to configure the plugin. These are the options currently supported:

- `marker` - **Required**. The token used to identify text to decorate.
- `tagType` - **Required**. The name of the HTML tag to wrap the text in.
- `classNames` - An array of class names to use for the HTML tag. Empty by default.
- `nodeType` - The name of the node to create. By default, this is `decoration`.

**Example**
```js
remark().use(html).use(decoration("__", "ins", ['class1', 'class2'], "superDecoration")).process("__I Am Underline__");
```

## License

[MIT](https://github.com/Darkhax/remark-text-decoration/blob/master/LICENSE)   
© [Darkhax](https://github.com/Darkhax)  
© [Valdyslav Sitalo](https://github.com/Stvad)  
