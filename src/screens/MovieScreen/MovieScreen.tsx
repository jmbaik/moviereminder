import Colors from 'open-color';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Movie from './Movie';
import useMovies from './useMovies';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  movieList: {},
});

const MovieScreen = () => {
  const {movies} = useMovies();
  // console.log('movies', movies);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.movieList}
        data={movies}
        renderItem={({item: movie}) => (
          <Movie
            key={movie.title}
            title={movie.title}
            originalTitle={movie.originalTitle}
            overview={movie.overview}
            posterUrl={movie.posterUrl}
            releaseDate={movie.releaseDate}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MovieScreen;
