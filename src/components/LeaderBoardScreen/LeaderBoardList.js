import React, { useState, useEffect } from 'components/LeaderBoardScreen/react';
import { LeaderBoardListStyles as styles } from 'components/styles/leaderBoardStyles';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const _sort = (data, sortBy, sort) => {
  if (sort) {
    return sort(data);
  } else if (typeof data === 'object') {
    let sortedKeys =
      data &&
      Object.keys(data).sort((key1, key2) => {
        return data[key2][sortBy] - data[key1][sortBy];
      });
    return (
      sortedKeys &&
      sortedKeys.map(key => {
        return data[key];
      })
    );
  } else if (Array.isArray(data)) {
    return (
      data &&
      data.sort((item1, item2) => {
        return item2[sortBy] - item1[sortBy];
      })
    );
  }
};

const Leaderboard = ({
  sortBy,
  data,
  sort,
  evenRowColor,
  oddRowColor,
  icon,
  avatarStyle,
  labelStyle,
  scoreStyle,
  rankStyle,
  onRowPress,
  labelBy,
  renderItem,
}) => {
  const [sortedData, setSortedData] = useState([]);
  const [prevData, setPrevData] = useState([]);

  if (prevData !== data) {
    setSortedData(_sort(data, sortBy, sort)), setPrevData(data);
  }

  const defaultRenderItem = (item, index) => {
    const evenColor = evenRowColor || '#f2f5f7';
    const oddColor = oddRowColor || 'white';
    const rowColor = index % 2 === 0 ? evenColor : oddColor;

    const rowJSx = (
      <View style={[styles.row, { backgroundColor: rowColor }]}>
        <View style={styles.left}>
          <Text
            style={[
              styles.rank,
              rankStyle,
              index < 9 ? styles.singleDidget : styles.doubleDidget,
            ]}>
            {parseInt(index, 10) + 1}
          </Text>
          {icon && (
            <Image
              source={{ uri: item[icon] }}
              style={[styles.avatar, avatarStyle]}
            />
          )}
          <Text style={[styles.label, labelStyle]} numberOfLines={1}>
            {item[labelBy]}
          </Text>
        </View>
        <Text style={[styles.score, scoreStyle]}>{item[sortBy] || 0}</Text>
      </View>
    );

    return onRowPress ? (
      <TouchableOpacity onPress={() => onRowPress(item, index)}>
        {rowJSx}
      </TouchableOpacity>
    ) : (
      rowJSx
    );
  };

  useEffect(() => {
    setSortedData(_sort(data, sortBy, sort));
  }, []);

  return (
    <FlatList
      data={sortedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={data =>
        renderItem
          ? renderItem(data.item, data.index)
          : defaultRenderItem(data.item, data.index)
      }
    />
  );
};

export default Leaderboard;
