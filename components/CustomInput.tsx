import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
{
}

interface InputFieldProps {
    name: string;
    placeholder: string;
    value: string;
    secureTextEntry?: boolean;
    isPassword?: boolean;
    textChangeHandler(value: string, name: string): void;
}

const InputField = ({
    placeholder,
    secureTextEntry,
    value,
    textChangeHandler,
    name,
    isPassword,
}: InputFieldProps) =>
    // ref: Ref<TextInput>
    {
        return (
            <View
                className={`mt-[1.875rem] flex-row items-center border-[1.5px] border-grayPrimary h-14 rounded-xl  px-3 relative`}
            >
                <Text
                    className={`absolute font-uberMoveBold text-sm text-grayPrimary capitalize px-1 -top-2 leading-4 left-3 bg-white`}
                >
                    {name}
                </Text>
                <TextInput
                    className={`flex-1 text-lightDark text-sm leading-4 font-uberMoveBold align-middle`}
                    onChangeText={(value) => {
                        textChangeHandler(value, name);
                    }}
                    value={value}
                    // ref={ref}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                />
                {/* // icon */}

                {isPassword && (
                    <TouchableOpacity
                        onPress={() => {
                            console.log(false);
                        }}
                    >
                        <Image
                            source={require('../assets/images/password.png')}
                            contentFit='cover'
                            className='w-5 h-[14px] bg-red-100'
                            style={{ width: 20, height: 14 }}
                        />
                    </TouchableOpacity>
                )}
            </View>
        );
    };

export default InputField;

// export default forwardRef(InputField);
