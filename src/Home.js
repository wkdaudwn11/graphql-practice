import React from "react";
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if ( loading ) return "loading";
            if ( error ) return "something error";
            return data.movies.map(movie => (
                <Movie
                    rating={movie.rating}
                    poster={movie.medium_cover_image}
                    id={movie.id}
                    title={movie.title}
                    key={movie.id}
                />
            ));
        }}
    </Query>
);

export default Home;