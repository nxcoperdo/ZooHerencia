export const COLORS = {
  background: "#05070D",
  backgroundAlt: "#0B1220",
  primary: "#2563EB", // azul eléctrico (marca)
  secondary: "#22D3EE", // cian (marca)
  text: "#F8FAFC",
  muted: "#94A3B8",
} as const;

export const FONT_FAMILY =
  "'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif";

export const SAFE_MARGIN = 120;

export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;

export const SCENE_DURATIONS = {
  hook: 90, // 0-3s
  problem: 120, // 3-7s
  solution: 240, // 7-15s
  closing: 150, // 15-20s
} as const;

export const TOTAL_DURATION =
  SCENE_DURATIONS.hook +
  SCENE_DURATIONS.problem +
  SCENE_DURATIONS.solution +
  SCENE_DURATIONS.closing;

// Placeholder de contacto: reemplazar con el dato real de WhatsApp/contacto.
export const CONTACT_CTA = "Escríbenos: [WHATSAPP / CONTACTO]";
