import React from 'react';

import ContentContainer from '../../components/ContentContainer'
import NewsArticle from '../../components/NewsArticle'
import API from "../../utils/API"

class News extends React.Component {
    
    state = {
        news: []
      };

    componentDidMount(){
        API.getNews().then(res=>{
            this.setState({news:res.data})
            console.log(res.data)
            console.log(this.state.news)
        })
    
    
    }  
    render() {
        return (
            <div>

                {/* When you're mapping
                    data, map the ContentContainer, not just the NewsArticle.
                    Each article will have its own ContentContainer */}
                    
                {this.state.news.map(article => {
                    return (
                <ContentContainer>
                      <NewsArticle
                        key={article.headline}
                        title={article.headline}
                        paragraph={article.summary}
                        link={article.url}
                      />
                </ContentContainer>
                    );
                  })}
                
            </div>
        )
    }

}

export default News;