import { View, Text } from 'react-native';

function PrimaryButton({children}) {
    return <View>
        <Text>{children}</Text>
        <Text>{children}</Text>
    </View>
}

export default PrimaryButton;