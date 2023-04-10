import OpenColor from 'open-color';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    borderColor: OpenColor.gray[6],
    marginHorizontal: 10,
    marginVertical: 10,
  },
  poster: {
    width: 100,
    height: 150,
    backgroundColor: OpenColor.gray[3],
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    color: OpenColor.white,
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
