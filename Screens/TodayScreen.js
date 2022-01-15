import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import MedicationBox from '../Components/MedicationBox';

function TodayScreen() {

    const date = new Date().toString().slice(0, 10);

    return (
        <ScrollView>

            <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
                <StatusBar style='light' />

                {/* Top Header */}
                <View style={{ flex: 0.25, justifyContent: 'flex-end', backgroundColor: '#0c717d', height: 200 }}>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#eee', fontWeight: 'bold', fontSize: 30, letterSpacing: 2 }}>Good Morning!</Text>
                        <Text style={{ color: '#6cb9c3', marginVertical: 10, fontSize: 16, fontFamily: 'monospace' }}>{date}</Text>
                    </View>
                </View>

                {/* Medication Scrollview componenets */}
                <View style={{ marginLeft: 15, marginTop: 20, flex: 0.55 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#21292b', marginLeft: 15 }}>Today's Medication</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode='never'>
                        <MedicationBox med="Xanax (1mg)" img="https://i.postimg.cc/061Lv1XV/medicine.jpg" />
                        <MedicationBox med="Desyrel (2mg)" img="https://i.postimg.cc/0zwLhyn6/desyrel.jpg" />
                        <MedicationBox med="Prozak (1mg)" img="https://i.postimg.cc/nct225Zs/prozak.jpg" />
                    </ScrollView>
                </View>

                {/* Bottom For upcoming appointments */}
                <View style={{ flex: 0.20, margin: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#21292b', marginLeft: 15 }}>Next Appointment</Text>
                    <View style={{ margin: 12, backgroundColor: '#fff', padding: 12, borderRadius: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', paddingHorizontal: 18 }}>
                                <Text style={{ color: '#1c717d', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                    {date.slice(4, 7)}
                                </Text>
                                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>
                                    {date.slice(8, 10)}
                                </Text>
                            </View>
                            <View style={{ width: 1.5, margin: 5, backgroundColor: '#999' }}></View>
                            <View style={{ paddingHorizontal: 20 }}>
                                <Text style={{ color: '#21292b', fontSize: 18, fontWeight: 'bold' }}>Dr. Godlstein</Text>
                                <Text style={{ color: '#222', fontSize: 14, fontWeight: 'bold' }}>12:00 pm</Text>
                            </View>
                            <View style={{ paddingLeft: 20, justifyContent: 'center' }}>
                                <Avatar size={50} rounded source={{ uri: "https://www.drsurya.com/wp-content/uploads/2017/04/Dr-Paul-Comartin.png" }} />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

        </ScrollView>
    );
}

export default TodayScreen;
