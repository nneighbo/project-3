import React from 'react';
import './NewsArticle.css'

class NewsArticle extends React.Component {
    handleOnClick = (link) => {
        // window.location.replace(link);
        window.open(link, "_blank")
      };

    render() {
        return (
            <div className="news-article-container">
                <div className="news-article-header">
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
                <p>{this.props.paragraph}</p>
                <div className="button-align">
                    <button onClick={()=>this.handleOnClick(this.props.link)}>Read More</button>
                </div>
            </div>
        )
    }
}

export default NewsArticle