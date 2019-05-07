function findURLsInText(text) {
  const regexUrl = new RegExp(/\[([^\]]+)\]\(([^)]+)\)/g);
  let urls = text.match(regexUrl);
  if (urls === null) {
    return '[]';
  }
  let resultArr = [];
  let resultObj = {};

  for (let elem of urls) {
    let regexText = new RegExp(/\[([^\]]+)\]/g);
    let textElem = (elem.match(regexText).join()).replace(/(\[)|(\])/g, '');  
    let regexHref = new RegExp(/\(([^)]+)\)/g);
    let hrefElem = (elem.match(regexHref).join()).replace(/(\()|(\))/g, '');  
    
    resultObj = {
      href: hrefElem,
      text: textElem
    };
    resultArr.push(resultObj);
  }
  return resultArr; 
}

module.exports.findURLsInText = findURLsInText;

