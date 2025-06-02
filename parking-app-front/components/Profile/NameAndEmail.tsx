import React, { Component } from 'react'
import { ThemedText } from '../ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '../ThemedView'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // ...tus estilos
});

class NameAndEmail extends Component<{ textColor: string }> {
  render() {
    const { textColor } = this.props;
    return (
      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-evenly', paddingTop: 36 }}>  
        <View style={styles.icon}>
          <Icon name="user" size={24} color={textColor}/>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 4 }}>
          <ThemedText style={[styles.name, { color: textColor }]}> Esteban Manuel Tellechea </ThemedText>
          <ThemedText style={[styles.email, { color: textColor }]}> esteban.tellechea@gmail.com </ThemedText>
        </View>
      </ThemedView>
    )
  }
}

function NameAndEmailWrapper(props) {
  const textColor = useThemeColor({}, 'text');
  return <NameAndEmail {...props} textColor={textColor} />;
}

export default NameAndEmailWrapper;