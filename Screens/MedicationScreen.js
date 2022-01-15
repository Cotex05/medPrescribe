import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import MedicineContainer from '../Components/MedicineContainer';

const MedicationScreen = () => {

    const date = new Date().toString().slice(0, 10);

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar style='light' />

                {/* Top Header  */}
                <View style={{ flex: 0.25, justifyContent: 'flex-end', backgroundColor: '#0c717d', height: 200 }}>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#eee', fontWeight: 'bold', fontSize: 30, letterSpacing: 2 }}>
                            Medication
                        </Text>
                        <Text style={{ color: '#6cb9c3', marginVertical: 10, fontSize: 16, fontFamily: 'monospace' }}>
                            Current prescribed medication
                        </Text>
                    </View>
                </View>

                {/* Medicines Components */}
                <View style={{ marginLeft: 2, marginTop: 20, flex: 0.55 }}>
                    <MedicineContainer med="Xanax (1mg)" img="https://i.postimg.cc/061Lv1XV/medicine.jpg" />
                    <MedicineContainer med="Desyrel (2mg)" img="https://i.postimg.cc/0zwLhyn6/desyrel.jpg" />
                    <MedicineContainer med="Prozak (1mg)" img="https://i.postimg.cc/nct225Zs/prozak.jpg" />
                </View>

            </SafeAreaView>
        </ScrollView>
    );
}

export default MedicationScreen;
