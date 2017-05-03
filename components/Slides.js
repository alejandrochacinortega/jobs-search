import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards"
          raise
          buttonStyle={style.buttonStyle}
          onPress={this.props.onComplete}
        />
      )
    }
  }
  
  renderSlides() {
    return this.props.data.map((slide, index)=> {
      return (
        <View
          style={[style.slide, { backgroundColor: slide.color}]}
          key={slide.text}
        >
          <Text style={style.textSlide}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      )
    })
  }
  
  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const style = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textSlide: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;