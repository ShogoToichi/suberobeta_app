export default () => {
  var nGram = require("n-gram")
  const text = "abcdefg"
  const ngramtext = nGram(2)(text)
  console.log(text)
  console.log(ngramtext)
  return "hello"
}
