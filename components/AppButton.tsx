import { Pressable, Text, ViewStyle } from "react-native";
import { colors } from "../theme/colors";

export function AppButton({
  title,
  onPress,
  disabled,
  style,
  tone = "primary",
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  tone?: "primary" | "danger";
}) {
  const bg = tone === "danger" ? colors.danger : colors.primary;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[{
        backgroundColor: disabled ? "#9db9ff" : bg,
        paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8,
      }, style]}
    >
      <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
}
