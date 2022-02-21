/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Alert
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { twittercolor,twitterdarkcolor } from '../utils/contansts';
import { WindowHeight,WindowWidth } from '../utils/Dimensions';
import { FloatingAction } from 'react-native-floating-action';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://www.freetogame.com/api/games')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (   
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: twittercolor,
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      // Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Search..."
          value={this.state.search}
        />
        
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
            <Text style={styles.textStyle}>{item.title}</Text>
             <Image style={{ 
              height: WindowHeight / 1.5,
              marginLeft: WindowWidth * 0.1,
              marginRight: WindowWidth * 0.1,
              marginVertical: WindowHeight * 0.08,
              borderRadius: 20
              }} 
              source={{uri: item.thumbnail}} 
              /> 
            </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
        <FloatingAction
          color={twitterdarkcolor}
          onPressMain={()=> Alert.alert('Deez Nutz')}
          showBackground={false}
          distanceToEdge={25}
          buttonSize={60}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: twittercolor,
  },
  textStyle: {
    padding: 10,
    color:'white',
    fontWeight:'bold'
  },
});