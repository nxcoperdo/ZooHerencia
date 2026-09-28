import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "../components/Background";
import { COLORS, CONTACT_CTA, FONT_FAMILY, SAFE_MARGIN } from "../theme";

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brandEnter = spring({ frame, fps, config: { damping: 200 } });
  const brandScale = interpolate(brandEnter, [0, 1], [0.7, 1]);
  const brandOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [20, 35], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaEnter = spring({
    frame: Math.max(frame - 45, 0),
    fps,
    config: { damping: 200 },
  });
  const ctaScale = interpolate(ctaEnter, [0, 1], [0.85, 1]);
  const ctaOpacity = interpolate(frame, [45, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: SAFE_MARGIN,
          paddingBottom: SAFE_MARGIN,
          paddingLeft: 90,
          paddingRight: 90,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 44,
          }}
        >
          <div
            style={{
              opacity: brandOpacity,
              transform: `scale(${brandScale})`,
              textAlign: "center",
              fontFamily: FONT_FAMILY,
              fontWeight: 800,
              fontSize: 84,
              lineHeight: 1.15,
              color: COLORS.text,
            }}
          >
            Code Repair <span style={{ color: COLORS.primary }}>Tech</span>
          </div>

          <div
            style={{
              opacity: taglineOpacity,
              transform: `translateY(${taglineY}px)`,
              textAlign: "center",
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: 52,
              color: COLORS.secondary,
            }}
          >
            Digitalizamos tu negocio
          </div>

          <div
            style={{
              opacity: ctaOpacity,
              transform: `scale(${ctaScale})`,
              marginTop: 24,
              padding: "28px 48px",
              borderRadius: 100,
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: 40,
              color: COLORS.text,
              textAlign: "center",
            }}
          >
            {CONTACT_CTA}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
