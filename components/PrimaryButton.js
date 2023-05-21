import { View, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function PrimaryButton(children) {
    return <View>
        <Text>{children}</Text>
        <Text>{children}</Text>
    </View>
}

export default PrimaryButton;