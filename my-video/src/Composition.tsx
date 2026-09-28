import { Composition } from "remotion";
import { PromoVideo } from "./PromoVideo";
import { TOTAL_DURATION, VIDEO } from "./theme";

export const MyComposition = () => {
  return (
    <Composition
      id="CodeRepairPromo"
      component={PromoVideo}
      durationInFrames={TOTAL_DURATION}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  );
};
