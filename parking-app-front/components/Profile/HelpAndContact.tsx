import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useThemeColor } from '@/hooks/useThemeColor';

// Clase que recibe el color por props
class HelpAndContact extends Component<{ textColor: string }> {
  render() {
    const { textColor } = this.props;
    return (
      <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent:"flex-start", gap: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="help" size={24} color={textColor} />
          <Text style={[styles.text, { color: textColor }]}> Ayuda </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="phone" size={24} color={textColor} />
          <Text style={[styles.text, { color: textColor }]}> Contacto </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

// Wrapper funcional para usar el hook y pasar el color como prop
export default function HelpAndContactWrapper(props) {
  const textColor = useThemeColor({}, 'text');
  return <HelpAndContact {...props} textColor={textColor} />;
}