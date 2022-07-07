import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div
          className="card my-3"
          style={{ height: "30rem" }}
        >
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.tivperfume.com/wp-content/uploads/2017/01/News-Banner-Image.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"style={{ overflow: "scroll" }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">
                By {author} on {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
