# remark-underline

A [remark](https://github.com/remarkjs/remark) plugin that repurposes the `__` format for undelining text. Under normal Markdown you can use both `__` and `**` but there is no format for underlining text. This plugin changes that by repurposing `__` to underline and leaving `**` untouched.

## Installation

```
npm install remark-underline
```

For best results you should also use [remark-html]().

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
  <ins>hello world</ins>
</p>
```

Without the plugin the output will be 
```html
<p>
  <strong>hello world</strong>
</p>
```

## License

[MIT](https://github.com/Darkhax/remark-underline/blob/master/LICENSE) © [Darkhax](https://github.com/Darkhax)
