import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
import Icon from "react-native-vector-icons/MaterialIcons";
import { useThemeColor } from '@/hooks/useThemeColor';

const styles = StyleSheet.create({
  text: {
    fontSize: width * 0.04,         // ~16 en móviles comunes
    fontWeight: "bold",
  },
  container: {
    padding: width * 0.05,          // 5% del ancho
    marginHorizontal: width * 0.05, // 5% del ancho
    marginBottom: width * 0.05,     // 5% del ancho
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: width * 0.18,           // ~70 en móviles comunes
    gap: width * 0.025,             // 2.5% del ancho
  },
});

class ProfileOptionList extends Component<{ textColor: string }> {

  render() {
    const { textColor } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: textColor,
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="person" size={24} color={textColor}/>
            <Text style={[styles.text, { color: textColor }]}>Mi cuenta</Text>
          </View>
          <Icon name="arrow-right" size={24} color={textColor} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: textColor,
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="book" size={24} color={textColor} />
            <Text style={[styles.text, { color: textColor }]}>Reservas</Text>
          </View>
          <Icon name="arrow-right" size={24} color={textColor} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: textColor,
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="warning" size={24} color={textColor} />
            <Text style={[styles.text, { color: textColor }]}>Multas</Text>
          </View>
          <Icon name="arrow-right" size={24} color={textColor} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: textColor,
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.listItem}>
            <Icon name="business" size={24} color={textColor} style={{ alignSelf: 'center' }} />
            <Text style={[styles.text, { color: textColor }]}>Beneficio corporativo</Text>
          </View>
          <Icon name="arrow-right" size={24} color={textColor} />
        </View>
      </View>
    );
  }
}

function ProfileOptionListWrapper(props) {
  const textColor = useThemeColor({}, 'text');
  return <ProfileOptionList {...props} textColor={textColor} />;
}

export default ProfileOptionListWrapper;
