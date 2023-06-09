import Colors from 'open-color';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MovieScreen = () => {
  const {movies, isLoading, loadMore, canLoadMore, refresh} = useMovies();
  // console.log('movies', movies);

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.movieList}
          data={movies}
          renderItem={({item: movie}) => (
            <Movie
              id={movie.id}
              title={movie.title}
              originalTitle={movie.originalTitle}
              overview={movie.overview}
              posterUrl={movie.posterUrl ?? undefined}
              releaseDate={movie.releaseDate}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={() => {
            if (canLoadMore) {
              loadMore();
            }
          }}
          refreshControl={
            <RefreshControl
              tintColor={Colors.white}
              refreshing={isLoading}
              onRefresh={refresh}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default MovieScreen;
