import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "../components/Background";
import { COLORS, FONT_FAMILY, SAFE_MARGIN } from "../theme";

const PROBLEMS = ["Desorden", "Pérdida de tiempo", "Ventas sin control"];
const ITEM_STAGGER = 40;
const SCENE_LENGTH = ITEM_STAGGER * PROBLEMS.length;

const ProblemItem: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const scale = interpolate(enter, [0, 1], [0.8, 1]);
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        alignItems: "center",
        gap: 28,
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          flexShrink: 0,
          borderRadius: "50%",
          background: COLORS.secondary,
        }}
      />
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontWeight: 800,
          fontSize: 68,
          color: COLORS.text,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const ProblemScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background }}>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: SAFE_MARGIN,
          paddingBottom: SAFE_MARGIN,
          paddingLeft: 100,
          paddingRight: 100,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {PROBLEMS.map((text, index) => (
            <Sequence
              key={text}
              from={index * ITEM_STAGGER}
              durationInFrames={SCENE_LENGTH - index * ITEM_STAGGER}
              layout="none"
            >
              <ProblemItem text={text} />
            </Sequence>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
