import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "../components/Background";
import { CodeIcon, InvoiceIcon, WrenchIcon } from "../components/Icons";
import { COLORS, FONT_FAMILY, SAFE_MARGIN } from "../theme";

const TITLE_DURATION = 40;
const SERVICE_STAGGER = 66;
const SCENE_LENGTH = 240;

const SERVICES = [
  { Icon: CodeIcon, label: "Software a la medida" },
  { Icon: InvoiceIcon, label: "Sistemas de gestión y facturación" },
  { Icon: WrenchIcon, label: "Soporte técnico y reparación" },
];

const BrandTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const scale = interpolate(enter, [0, 1], [0.85, 1]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        textAlign: "center",
        fontFamily: FONT_FAMILY,
        fontWeight: 800,
        fontSize: 66,
        color: COLORS.text,
      }}
    >
      Con <span style={{ color: COLORS.secondary }}>Code Repair Tech</span>
    </div>
  );
};

const ServiceCard: React.FC<{
  Icon: React.FC<{ size?: number; color?: string }>;
  label: string;
}> = ({ Icon, label }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 200 } });
  const translateX = interpolate(enter, [0, 1], [-60, 0]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        alignItems: "center",
        gap: 32,
        width: "100%",
      }}
    >
      <div
        style={{
          width: 108,
          height: 108,
          flexShrink: 0,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={52} color={COLORS.text} />
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontWeight: 700,
          fontSize: 46,
          lineHeight: 1.2,
          color: COLORS.text,
          maxWidth: 620,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const SolutionScene: React.FC = () => {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
          <Sequence durationInFrames={SCENE_LENGTH} layout="none">
            <BrandTitle />
          </Sequence>

          <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
            {SERVICES.map(({ Icon, label }, index) => {
              const from = TITLE_DURATION + index * SERVICE_STAGGER;
              return (
                <Sequence
                  key={label}
                  from={from}
                  durationInFrames={SCENE_LENGTH - from}
                  layout="none"
                >
                  <ServiceCard Icon={Icon} label={label} />
                </Sequence>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
