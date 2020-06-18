# remark-underline

A [remark](https://github.com/remarkjs/remark) plugin that repurposes the `__` token for underlining text. With traditional Markdown both `__` and `**` are used for bolding text while there is no support for underlined text. This plugin repurposes `__` for underlining but leaves `**` untouched.

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
