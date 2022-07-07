import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitaliZe = (string) => {
    let T = string.charAt(0).toUpperCase() + string.slice(1);
    return T;
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = this.capitaliZe(this.props.category) + " - NewsMonkey";
  }

  async updateNews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62292a5ab8cb4cff91e6b821ee62b797&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(25);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(75);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    // //We check if the page number can be increased by 1 or not.
    // if (this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize) ) {
    //   //If it can be increased by 1 we increase it by one.
    //   //We increase page in state by 1 also.
    //   //Now we update the function to fetch API.
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62292a5ab8cb4cff91e6b821ee62b797&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevClick = async () => {
    // //We check if the page number can be decreased by 1 or not.
    // //It it can be decreased by 1 we decresae it by one.
    // if (this.state.page - 1 >= 1) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62292a5ab8cb4cff91e6b821ee62b797&page=${
    //     this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading: true
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62292a5ab8cb4cff91e6b821ee62b797&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ margin: "35px 0",marginTop: "100px" }}>
          News Monkey - Trending in {this.capitaliZe(this.props.category)}
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        {/* This is code for the buttons prev and next. */}
        {/* <div className="container d-flex justify-content-between">
          <button
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-primary"
          >
            &larr;Prev
          </button>
          <button
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div> */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Author"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
