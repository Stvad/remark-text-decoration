/** This done as function returning function mainly to workaround deduplication
 * logic in plugin pipeline processor preventing you from having two instances
 * of a plugin.
 */
export default (marker, tagType, classNames = [], nodeType = "decoration") => {
  if (!marker || !tagType) throw "You must specify both marker and tag"

  return function() {
    const Parser = this.Parser.prototype
    Parser.inlineTokenizers[nodeType] = function underlineTokenizer(eat, value, silent) {
      if (value.startsWith(marker)) {
        const end = value.indexOf(marker, marker.length)

        if (end > -1) {
          if (silent) {
            return true
          }

          const text = value.substring(marker.length, end)

          const now = eat.now()
          now.column += marker.length
          now.offset += marker.length

          return eat(marker + text + marker)({
            type: nodeType,
            children: this.tokenizeInline(text, now),
            data: {
              hName: tagType,
              hProperties: classNames.length ? { className: classNames } : {}
            }
          })
        }
      }

      return false
    }
    Parser.inlineTokenizers[nodeType].locator = (value, fromIndex) => value.indexOf(marker, fromIndex)
    Parser.inlineMethods.splice(Parser.inlineMethods.indexOf("strong"), 0, nodeType)
  }
}
