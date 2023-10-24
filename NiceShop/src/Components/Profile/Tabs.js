import { 
    View, 
    Text, 
} from 'native-base'
import React, { useState } from 'react'
import Colors from '../../color'
import Profile from './Profile';
import Orders from './Orders';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

const renderScene = SceneMap({
    first:Profile,
    second:Orders
})

export default function Tabs() {

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key:"first",
            title:"PROFILE",
        },
        {
            key:"second",
            title:"ORDERS",
        }
    ]);

    const renderTabsBar = (props) => (
        <TabBar
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{ backgroundColor: Colors.main, height: 3 }}
            activeColor={Colors.main}
            inactiveColor={Colors.white}
            renderLabel={({ route, color }) => (
                <Text style={{ color, ...styles.text }}>
                    {route.title}
                </Text>
            )}

        />
    );

  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor: Colors.black,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Roboto",
    }
});