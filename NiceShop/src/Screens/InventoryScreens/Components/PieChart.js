// import { View, Text, TouchableOpacity  } from 'react-native'
// import { Image, HStack, Box, Input, Flex, Pressable, VStack, Heading, Center, Button, ScrollView, Container, Content, Card, CardItem } from 'native-base'
// import React from 'react'
// import { Ionicons, EvilIcons, MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

// import Colors from '../../../color';

// const PieChart = () => {
//     const data = [
//       {
//         key: 1,
//         amount: 0.3, // Example data point with a value of 30%
//         svg: { fill: '#FF5733' }, // Color of the segment
//       },
//       {
//         key: 2,
//         amount: 0.2, // Example data point with a value of 20%
//         svg: { fill: '#33FF57' },
//       },
//       // Add more data points as needed
//     ];
  
//     return (
//       <Container>
//         <Content>
//           <Card>
//             <CardItem>
//               <View style={{ flex: 1 }}>
//                 <PieChart style={{ height: 200 }} data={data} />
//               </View>
//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   };
  
//   export default PieChart;



import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Pie from 'react-native-pie'

export default class PieDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={100}
          series={[10, 20, 30, 40]}
          colors={['red', 'lime', 'blue', 'yellow']} />
        <Pie
          radius={100}
          innerRadius={60}
          series={[10, 20, 30, 40]}
          colors={['#f00', '#0f0', '#00f', '#ff0']} />
        <View>
          <Pie
            radius={50}
            innerRadius={45}
            series={[60]}
            colors={['#f00']}
            backgroundColor='#ddd' />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>60%</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
})