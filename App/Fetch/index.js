

var baseURL = "https://juniorfrontend.ir/wp-json/wp/v2"



// getCategories
function getCategories(){
    return fetch(`${baseURL}/categories?per_page=100&_fields=id,name`)
      .then(response => response.json())
      .catch(error => console.error(error))
}


// getArticles
function getArticles(catID){
  return fetch(`${baseURL}/posts?per_page=100&_fields=id,title,date&categories=${catID}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

 
// getArticle
function getArticle(artID){
  return fetch(`${baseURL}/posts/${artID}?_fields=id,title,content,link`)
    .then(response => response.json())
    .catch(error => console.error(error))
}



//
export default {
  getCategories,
  getArticles,
  getArticle
};

