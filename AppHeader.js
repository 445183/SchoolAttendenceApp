import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>STUDENTS CLASS ATTENDANCE</Text>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2016/08/18/809111_law_512x512.png',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'cadetblue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});

