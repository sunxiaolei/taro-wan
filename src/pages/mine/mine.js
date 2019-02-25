import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";

export default class Mine extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View className='mine'>
        <Text className='mine-text'>Mine</Text>
      </View>
    )
  }
}

