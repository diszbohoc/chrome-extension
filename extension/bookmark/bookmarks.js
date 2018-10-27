//let bookmarks = document.getElementById('bookmarks');

chrome.bookmarks.getTree(function(bookmarks){
    printBookmarks(bookmarks);
});

function printBookmarks(bookmarks) {
  bookmarks.forEach(function(bookmark) {
    console.log(bookmark.id + ' - ' + bookmark.title + ' - ' + bookmark.url);
    if (bookmark.children)
      printBookmarks(bookmark.children);
  });
}