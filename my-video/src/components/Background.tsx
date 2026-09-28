import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const glowOpacity = interpolate(
    Math.sin(frame / 40),
    [-1, 1],
    [0.25, 0.45],
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% -10%, ${COLORS.backgroundAlt} 0%, ${COLORS.background} 55%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -180,
          left: -160,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: COLORS.primary,
          opacity: glowOpacity,
          filter: "blur(160px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -220,
          right: -180,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: COLORS.secondary,
          opacity: glowOpacity * 0.8,
          filter: "blur(180px)",
        }}
      />
    </AbsoluteFill>
  );
};
