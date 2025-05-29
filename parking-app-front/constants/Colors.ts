/**
 * Colors used in the app (light/dark modes)
 */
const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

// Nuevos colores propuestos
const primaryColor = "#007cce";       // Azul primario nuevo
const secondaryColor = "#2A5CAA";     // Azul profesional (complementario)
const accentColorWarning = "#FFA500"; // Naranja para alertas/énfasis

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    // Añadidos 👇
    primary: primaryColor,
    secondary: secondaryColor,
    warning: accentColorWarning,
    status: {
      available: "#34b233",     // Verde primario
      occupied: "#FF6B6B",       // Rojo suave
      restricted: "#FFA500"      // Naranja de alerta
    }
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    // Añadidos 👇 (mismos colores para consistencia)
    primary: primaryColor, // Azul primario nuevo
    secondary: "#3D7DCC", // Azul más vibrante en oscuro
    warning: accentColorWarning,
    status: {
      available: "#34b233",
      occupied: "#FF6B6B",
      restricted: "#FFA500"
    }
  },
};