import React from 'react';

import ContentContainer from '../../components/ContentContainer'
import NewsArticle from '../../components/NewsArticle'

class News extends React.Component {

    render() {
        return (
            <div>

                {/* When you're mapping
                    data, map the ContentContainer, not just the NewsArticle.
                    Each article will have its own ContentContainer */}
                    
                <ContentContainer>
                    <NewsArticle
                        title="Nasdaq Sues ‘Flash Boys’ Exchange IEX for Patent Infringement"
                        paragraph="Nasdaq Inc. sued IEX Group Inc. for patent infringement, claiming the smaller firm stole aspects of its trading technology. Nasdaq Inc. sued IEX Group Inc. for patent infringement, claiming the smaller firm stole aspects of its trading technology."
                        link="https://www.bloomberg.com/news/articles/2018-03-01/nasdaq-sues-flash-boys-exchange-iex-for-patent-infringement"
                    />
                </ContentContainer>
                
            </div>
        )
    }

}

export default News;