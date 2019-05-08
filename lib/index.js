function getLinksFromMd(text) {
  const regexUrlAndText = new RegExp(/\[([^\]]+)\]\(([^)]+)\)/g);
  let urlAndText = text.match(regexUrlAndText);
  if (urlAndText === null) {
    return '[]';
  }
  let resultArr = [];
  let resultObj = {};
  for (let elem of urlAndText) {
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
module.exports = getLinksFromMd;
