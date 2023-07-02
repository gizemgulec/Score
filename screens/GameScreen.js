import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
    return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* Guess */}
        <View>
            <Text>Higher or lower?</Text>
            {/* + - */}
            {/* <View>LOG ROUNDS</View> */}
        </View>
    </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ddb52f',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
});