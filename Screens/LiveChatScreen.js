import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

const LiveChatScreen = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar style='light' />
                <View style={{ flex: 0.25, justifyContent: 'flex-end', backgroundColor: '#0c717d', height: 200 }}>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#eee', fontWeight: 'bold', fontSize: 30, letterSpacing: 2 }}>Live Chats</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LiveChatScreen;
