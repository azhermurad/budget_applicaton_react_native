import { View, Text, TouchableOpacity } from 'react-native';

type LinkBtnType = {
    title: string;
    onpress(): void;
    style?: string;
};

const LinkBtn = ({ title, onpress, style }: LinkBtnType) => {
    return (
        <TouchableOpacity onPress={onpress}>
            <Text
                className={`text-pink font-uberMoveBold text-sm leading-4 ${
                    style && style
                }`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default LinkBtn;
