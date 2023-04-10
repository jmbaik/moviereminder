import Colors from 'open-color';
import React from 'react';
import {FlatList, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Movie from './Movie';
import useMovies from './useMovies';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  movieList: {
    padding: 20,
  },
  separator: {height: 16},
});

const MovieScreen = () => {
  const {movies} = useMovies();
  // console.log('movies', movies);

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      <FlatList
        contentContainerStyle={styles.movieList}
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
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default MovieScreen;
