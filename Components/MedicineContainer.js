import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const MedicineContainer = (props) => {
    return (
        <View style={styles.box}>
            <View style={{ padding: 12 }}>

                {/* Medicine */}
                <View style={{ flexDirection: 'row' }}>
                    <Avatar size={30} rounded source={{ uri: props.img }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 12 }}>{props.med}</Text>
                    <View style={{ right: 5, position: 'absolute' }}>
                        <Icon name="info-outline" size={30} color="#1c717d" onPress={() => console.log("Info...!")} />
                    </View>
                </View>

                {/* Direction Line */}
                <View style={{ marginLeft: 32, padding: 8 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Directions: Take with food every morning. Prescribed by Dr. Godlstein.</Text>
                </View>

                {/* Inline info row */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: 10 }}>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: '#999' }}>Qty</Text>
                        <Text style={{ fontWeight: 'bold' }}>120 days</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: '#999' }}>Fills</Text>
                        <Text style={{ fontWeight: 'bold' }}>14 left</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: '#999' }}>RX</Text>
                        <Text style={{ fontWeight: 'bold' }}>32543782</Text>
                    </View>
                </View>

                {/* Prescribe line */}
                <View style={{ borderRadius: 6, padding: 5, marginVertical: 15, backgroundColor: '#f5f6f8', width: 280, marginLeft: 36, flexDirection: 'row' }}>
                    <Icon type="material-community" name='clock-time-nine-outline' size={20} color="#a4a7ae" />
                    <Text style={{ color: '#a4a7ae', fontSize: 13, fontWeight: 'bold', fontFamily: 'monospace' }}> 1 pill daily every morning</Text>
                </View>
            </View>

            {/* Separator  */}
            <View style={styles.sep} />
        </View>
    )
}

export default MedicineContainer;

const styles = StyleSheet.create({
    box: {
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 12,
    },
    sep: {
        height: 1.5,
        backgroundColor: 'rgba(240,240,240,0.8)',
        width: 350,
        alignSelf: 'center'
    }
})
