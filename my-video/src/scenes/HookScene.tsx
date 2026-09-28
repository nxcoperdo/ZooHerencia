import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "../components/Background";
import { COLORS, FONT_FAMILY, SAFE_MARGIN } from "../theme";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  const translateY = interpolate(enter, [0, 1], [70, 0]);
  const opacity = interpolate(frame, [0, 15], [0, 1], {
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
            opacity,
            transform: `translateY(${translateY}px)`,
            maxWidth: 880,
            textAlign: "center",
            fontFamily: FONT_FAMILY,
            fontWeight: 800,
            fontSize: 80,
            lineHeight: 1.2,
            color: COLORS.text,
          }}
        >
          ¿Tu negocio todavía lo manejas{" "}
          <span style={{ color: COLORS.secondary }}>a mano</span>?
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
