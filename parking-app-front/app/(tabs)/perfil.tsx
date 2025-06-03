import { StyleSheet, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import NameAndEmail from "@/components/Profile/NameAndEmail";
import React, { useState } from "react";
import ProfileOptionList from "@/components/Profile/ProfileOptionList";
import HelpAndContact from "@/components/Profile/HelpAndContact";
import LigthDarkMode from "@/components/Profile/LigthDarkMode";
import MyAccount from "@/app/profile/MyAccount";

export default function ProfileScreen() {
  const [showMyAccount, setShowMyAccount] = useState(false);

  return showMyAccount ? (
    <MyAccount onGoBack={() => setShowMyAccount(false)} />
  ) : (
    <ThemedView style={styles.container}>
      <View style={styles.container}>
        {/* Información del usuario */}
        <ThemedView style={{ flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
          <NameAndEmail />
        </ThemedView>
        {/* Opciones */}
        <ProfileOptionList />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Ayuda y contacto */}
          <HelpAndContact />
          {/* Modo oscuro*/}
          <LigthDarkMode />
        </View>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    
  },
});
