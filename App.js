import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Bread'},
    {id: 2, text: 'Veggies'},
    {id: 3, text: 'Beer'},
    {id: 4, text: 'Cereals'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems((prevItems) => {
        return [{id: Date.now(), text}, ...prevItems];
      });
    }
  };

  return (
    // cannot use html tags here, you have to use React Native components
    // the view component enables to set a display flex, except it works a bit differently from the "normal" flex, e.g direction column by default
    <View style={styles.container}>
      <Header title="Shopping List" />
      {/* <Text style={styles.text}>Hello World</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
        style={styles.img}
      /> */}
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
