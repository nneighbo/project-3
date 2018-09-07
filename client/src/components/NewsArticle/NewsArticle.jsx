import React from 'react';
import './NewsArticle.css'

class NewsArticle extends React.Component {
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
                    <button>Read More</button>
                </div>
            </div>
        )
    }
}

export default NewsArticle