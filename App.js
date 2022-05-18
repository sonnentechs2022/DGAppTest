import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import { nav_bar,Back_btn,search_bar } from "./src/Constants"
// import CONTENTLISTINGPAGE_PAGE3 from './src/CONTENTLISTINGPAGE_PAGE1.json'
// import CONTENTLISTINGPAGE_PAGE3 from './src/CONTENTLISTINGPAGE_PAGE2.json'
import CONTENTLISTINGPAGE_PAGE3 from './src/CONTENTLISTINGPAGE_PAGE3.json'
class App extends Component {

  render() {
    return (
      <>
        <View>
          <Image style={styles.TopNavbar}
            source={nav_bar} />

          <Image style={styles.BackButton}
            source={Back_btn}
          />
          <Text style={styles.HeaderText}>
            {CONTENTLISTINGPAGE_PAGE3.page.title}
          </Text>
          <Image style={styles.SearchBar}
            source={search_bar}
          />
        </View>
        <View style={styles.Container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={CONTENTLISTINGPAGE_PAGE3.page['content-items'].content}
            renderItem={({ item }) => (
              <View style={styles.GridViewContainer}>
                <Image style={styles.GridViewImage}
                  source={{ uri: item["poster-image"] }}
                >
                </Image>
                <Text style={styles.GridViewTextLayout}> {item.name} </Text>
              </View>)}
            numColumns={3}

          />
        </View>
      </>

    );
  };
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  TopNavbar: {
    height: 50,
  },
  BackButton: {
    height: 20,
    width: 20,
    position: "absolute",
    marginTop: 16,
    left: 6
  },
  HeaderText: {
    fontSize: 16,
    color: '#fff',
    position: "absolute",
    marginTop: 16,
    left: 40,
    fontFamily: "Rubik",
  },
  SearchBar: {
    height: 20,
    width: 20,
    position: "absolute",
    marginTop: 16,
    right: 6
  },
  GridViewContainer: {
    flex: 1,
    height: 220,
    marginTop: 4,
    backgroundColor: '#000',
  },
  GridViewImage: {
    width: 140,
    height: 182,
    resizeMode: 'contain',
  },
  GridViewTextLayout: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 8,
    marginVertical: 12,
    textAlign: 'left',
  }

});
