import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

// Import semua gambar lokal
const mainImages = [
  require('../assets/images/main0.jpg'),
  require('../assets/images/main1.jpg'),
  require('../assets/images/main2.jpg'),
  require('../assets/images/main3.jpg'),
  require('../assets/images/main4.jpg'),
  require('../assets/images/main5.jpg'),
  require('../assets/images/main6.jpg'),
  require('../assets/images/main7.png'),
  require('../assets/images/main8.jpg'),
];

const altImages = [
  require('../assets/images/alt0.jpg'),
  require('../assets/images/alt1.jpg'),
  require('../assets/images/alt2.jpg'),
  require('../assets/images/alt3.jpeg'),
  require('../assets/images/alt4.jpg'),
  require('../assets/images/alt5.jpg'),
  require('../assets/images/alt6.jpg'),
  require('../assets/images/alt7.jpg'),
  require('../assets/images/alt8.png'),
];

export default function IndexPage() {
  const [imageStates, setImageStates] = useState(
    Array.from({ length: 9 }, () => ({
      isAlt: false,
      scale: 1.0,
    }))
  );

  const handlePress = (index: number) => {
    setImageStates(prev =>
      prev.map((state, i) => {
        if (i !== index) return state;
        const newScale = Math.min(state.scale * 1.2, 2.0);
        return {
          isAlt: !state.isAlt,
          scale: parseFloat(newScale.toFixed(2)),
        };
      })
    );
  };

  const screenWidth = Dimensions.get('window').width;
  const itemSize = screenWidth / 3 - 20;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {mainImages.map((mainImg, index) => {
          const { isAlt, scale } = imageStates[index];
          const imageSource = isAlt ? altImages[index] : mainImg;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              activeOpacity={0.8}
            >
              <Image
                source={imageSource}
                style={[
                  styles.image,
                  {
                    width: itemSize,
                    height: itemSize,
                    transform: [{ scale }],
                  },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
