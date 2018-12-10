import React, { Component } from "react";
import ReadMoreAndLess from "react-read-more-less";

// Styles
import styled from "styled-components";
import { black } from "../styles/colors";
import { Roboto } from "../styles/fonts";

// Components
import Star from "../components/icons/Star";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <ImageWrap>
          <Poster
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt="Movie poster"
          />
        </ImageWrap>
        <CardContentWrap>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>
            <ReadMoreAndLess
              ref={this.ReadMore}
              className="read-more-content"
              charLimit={150}
              readMoreText="Read more"
              readLessText="Read less"
            >
              {movie.overview}
            </ReadMoreAndLess>
          </MovieOverview>
          <MovieRatingWrap>
            <Label>Average Rating</Label>
            <Wrap>
              <Star size="20px" /> <AvgRating>{movie.vote_average}</AvgRating>
            </Wrap>
          </MovieRatingWrap>
        </CardContentWrap>
      </Card>
    );
  }
}

// Styles
const Card = styled.div`
  width: 100%;
  display: flex;
`;
const Poster = styled.img`
  max-width: 120px;
`;
const ImageWrap = styled.div``;
const MovieTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${Roboto};
  margin: 0 0 0.7rem 0;
  color: ${black};
  word-wrap: auto;
`;

const CardContentWrap = styled.div`
  padding: 0 1rem;
  text-align: left;
`;

const MovieOverview = styled.p`
  margin: 0;
  font-family: ${Roboto};
  color: ${black};
  font-weight: 300;
  margin-bottom: 1rem;
`;

const MovieRatingWrap = styled.div``;

const AvgRating = styled.span`
  font-size: 1.6rem;
  font-family: ${Roboto};
  color: ${black};
`;

const Wrap = styled.div``;

const Label = styled.span`
  font-size: 0.7rem;
  font-family: ${Roboto};
  color: ${black};
`;

export default MovieCard;
