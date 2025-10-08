import { TextInput, TextInputProps } from "react-native";
import { colors } from "../theme/colors";

export function AppTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[
        {
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 8,
          padding: 10,
        },
        props.style,
      ]}
    />
  );
}
