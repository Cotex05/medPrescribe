import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'

const MedicationBox = (props) => {

    // States
    const [medicineState, setMedicineState] = useState({ taken: false, disable: false });

    // functions
    const handlePress = () => {
        setMedicineState({ taken: true, disable: true });
    }

    return (
        <View style={styles.box}>
            <View style={styles.innerBox}>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>8:00 AM</Text>
                <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Daily</Text>
            </View>
            <View style={{ backgroundColor: '#fff', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ margin: 18 }}>
                    <Avatar rounded source={{ uri: props.img }} />
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12 }}>{props.med}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={{ padding: 5, marginRight: 12 }}>
                            <Text style={{ fontWeight: 'bold', color: '#999' }}>Qty</Text>
                            <Text style={{ fontWeight: 'bold' }}>120 days</Text>
                        </View>
                        <View style={{ padding: 5, marginRight: 12 }}>
                            <Text style={{ fontWeight: 'bold', color: '#999' }}>Fills</Text>
                            <Text style={{ fontWeight: 'bold' }}>14 left</Text>
                        </View>
                    </View>
                    <TouchableOpacity disabled={medicineState.disable} style={styles.button} onPress={handlePress}>
                        <Text style={{ color: '#0c717d', fontSize: 15, fontWeight: 'bold', alignSelf: 'center' }}>
                            {medicineState.taken ? "Taken!" : "Mark as Taken"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MedicationBox;

const styles = StyleSheet.create({
    box: {
        borderRadius: 15,
        marginVertical: 10,
        width: 250,
        marginHorizontal: 12,
    },
    innerBox: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        backgroundColor: '#fbbbb1',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    button: {
        borderRadius: 25,
        borderColor: '#111',
        borderWidth: 0.2,
        justifyContent: 'center',
        padding: 12,
        marginVertical: 15
    }
})
