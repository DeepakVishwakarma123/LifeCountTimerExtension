let isArticleElementExist=document.querySelector("article")

if(isArticleElementExist)
{
calculateReadingTime(isArticleElementExist)
}
else{
    console.log("no pages detected")
}

function calculateReadingTime(isArticleElementExist)
{   
    let alreadyAddedReadingTime=isArticleElementExist.previousElementSibling
    if(alreadyAddedReadingTime)
    {
        alreadyAddedReadingTime.remove()
    }
    let articlTagContent=isArticleElementExist.textContent
    let arrayOfContent=articlTagContent.split(" ")
    let totalWordCount=arrayOfContent.length
    let readingTime=totalWordCount/275
    let updatedRead=Math.floor(readingTime)
    let paragraphEle=document.createElement("h1")
    paragraphEle.textContent=`read time${updatedRead}m`
    isArticleElementExist.insertAdjacentElement("beforebegin",paragraphEle)
}


//this is copy pasted code
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    // If a new article was added.
    for (const node of mutation.addedNodes) {
      if (node instanceof Element && node.tagName === 'ARTICLE') {
        // Render the reading time for this particular article.
        calculateReadingTime(node);
      }
    }
  }
});

// https://developer.chrome.com/ is a SPA (Single Page Application) so can
// update the address bar and render new content without reloading. Our content
// script won't be reinjected when this happens, so we need to watch for
// changes to the content.
observer.observe(document.querySelector('devsite-content'), {
  childList: true
});