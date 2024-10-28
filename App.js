import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = {
    image1: require('./assets/imagen 1.jpg'),
    image2: require('./assets/imagen 2.jpg'),
    image3: require('./assets/imagen 3.jpg'),
    image4: require('./assets/imagen 4.jpg'),
    image5: require('./assets/imagen 5.jpg'),
  };

  const onClickHandler = () => {
    if (currentImage === 4) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Object.values(images)[currentImage]} style={{width: 300, height: 500}} />
      <TouchableOpacity style={styles.buttonContainer} onPress={onClickHandler}>
        <Text style={styles.buttonText}>change!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293241',
    alignItems: 'center',
    paddingTop: 120,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: '#ff87ab',
    borderRadius: 50,
    width: '80%',
    justifySelf: 'flex-end',
    alignItems: 'center',
    marginTop: 100,
  },
  buttonText: {
    fontSize: 20,
    color: '#fadde1',
    fontWeight: 'bold',
  },
});
