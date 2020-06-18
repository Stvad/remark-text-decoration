# remark-underline

A [remark](https://github.com/remarkjs/remark) plugin that adds support for underlining. By default this is done by repurposing `__` from the bold formatter. Bold also supports `**` so repurposing `__` is a popular choice for underlining text.

## Installation

```
npm install remark-underline
```

For best results you should use [remark-html](https://www.npmjs.com/package/remark-html) or similar.

## Usage

Get the plugin using `import` or `require` based on what makes sense for your project. Then pass the plugin into remark.

```js
import remark from 'remark';
import html from 'remark-html'
import underline from 'remark-underline`;

remark.use(html).use(underline).process("__hello world__");
```

With the plugin the output will be 
```html
<p>
  <ins class="underline">hello world</ins>
</p>
```

Without the plugin the output will be 
```html
<p>
  <strong>hello world</strong>
</p>
```

## Options
You may supply an optional options object to configure the plugin. These are the options currently supported.

- `marker` - The token used to identify unerlined text. By default this is '__'.
- `nodeType` - The name of the node to create. By default this is 'unerline'.
- `tagType` - The name of the HTML tag to wrap the text in. The default is 'ins' however this may not always be appropriate.
- `classNames` - An array of class names to use for the HTML tag. By default this is just 'underline'. Passing an empty array will disable this.

**Example**
```js
    const underlineOptions = {
        marker: '!!',
        classNames: ['thing1', 'thing2']
    }

    remark().use(html).use(underline, underlineOptions).process("!!I Am Underline!!");
```

## License

[MIT](https://github.com/Darkhax/remark-underline/blob/master/LICENSE) © [Darkhax](https://github.com/Darkhax)
