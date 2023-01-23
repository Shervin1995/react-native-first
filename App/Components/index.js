import React from 'react';
import service from '../Fetch';
import ListArticle from './ListArticle';
import ListCategories from './ListCategories';
import SingleArticle from './SingleArticle';
import FrontPage from './FrontPage';



// ---------------------------------------------------
// Routes
// ---------------------------------------------------
class Routes extends React.Component {  

    constructor(props){
      super(props);
      
      this.state = {
        page: "Home",
        categories: [],
        articles: [],
        article: {},
      }

      this.setArticles = this.setArticles.bind(this)
      this.setArticle = this.setArticle.bind(this)
      this.setPage = this.setPage.bind(this)
    }

    // get data 
    componentDidMount(){
      service.getCategories().then(categories => this.setState({categories}))
    }

    //
    setArticles(catID){
      service.getArticles(catID).then(articles => this.setState({page: "articles", articles}))
    }

    //
    setArticle(artID){
      service.getArticle(artID).then(article => this.setState({page: "article", article}))
    } 
 
    //
    setPage(page){
      this.setState({page})
    }


    //
    render(){

      //
      const {page, categories, articles, article} = this.state;
      
      switch (page) {
        case "categories": return <ListCategories categories={categories} setArticles={this.setArticles} setPage={this.setPage} />
        case "articles": return <ListArticle articles={articles} setArticle={this.setArticle} setPage={this.setPage} />
        case "article": return <SingleArticle article={article} setPage={this.setPage}/>
        default: return <FrontPage setPage={this.setPage} />
      }
 
      
    }

};

 

// ------------------------------------------
export default Routes;
