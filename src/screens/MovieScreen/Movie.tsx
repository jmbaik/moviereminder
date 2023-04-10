import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#00000050',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 3,
    padding: 7,
  },
  poster: {
    width: 100,
    height: 150,
    backgroundColor: '#00000030',
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  originalTitleText: {
    marginTop: 2,
    fontSize: 16,
    color: 'white',
  },
  releaseDateText: {
    marginTop: 2,
    fontSize: 14,
    color: 'white',
  },
  overviewText: {
    marginTop: 8,
    fontSize: 12,
    color: 'white',
  },
});

interface MovieProps {
  title: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
  posterUrl: string | null;
}

const Movie = ({
  title,
  originalTitle,
  releaseDate,
  overview,
  posterUrl,
}: MovieProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.poster}>
        {posterUrl != null && <Image source={{uri: posterUrl}} />}
      </View>
      <View style={styles.info}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.originalTitleText}>{originalTitle}</Text>
        <Text style={styles.releaseDateText}>{releaseDate}</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
    </View>
  );
};

export default Movie;
