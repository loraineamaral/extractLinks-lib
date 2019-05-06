function findURLsInText(text) {
  const regex_url = new 
  RegExp(/\[([^\[\]]+)\]\(([^)]+)\)/g);

let urls = text.match(regex_url)

if (urls === null){
  return "[]"
}
let resultArr = [];

for (elem of urls){
  let regexText = new 
  RegExp(/\[([^\[\]]+)\]/g);
  let textElem = (elem.match(regexText).join()).replace(/(\[)|(\])/g, '');  

  let regexHref = new 
  RegExp(/\(([^)]+)\)/g);
  let hrefElem = (elem.match(regexHref).join()).replace(/(\()|(\))/g, '');  
  
  resultObj = {
    href: hrefElem,
    text: textElem
  }
    resultArr.push(resultObj)
}
console.log(resultArr)
return resultArr; 
}

module.exports.findURLsInText = findURLsInText;

