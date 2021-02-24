
import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Skeleton = () => {
    return (
      <SkeletonPlaceholder>
      <View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        marginLeft: 20
      }}>
        <View style={{ width: 40, height: 40, borderRadius: 50}} /> 
        <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginLeft: 20
      }}> 
        <View style={{width: 60, height: 10, borderRadius: 4}} />
        <View style={{width: 40, height: 10, borderRadius: 4}} />
        </View>
      </View>
      
      </View>
      </SkeletonPlaceholder>
    );
};

export default Skeleton;