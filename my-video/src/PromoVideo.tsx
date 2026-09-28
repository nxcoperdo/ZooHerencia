import { AbsoluteFill, Sequence } from "remotion";
import { ClosingScene } from "./scenes/ClosingScene";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { SolutionScene } from "./scenes/SolutionScene";
import { SCENE_DURATIONS } from "./theme";

const HOOK_START = 0;
const PROBLEM_START = HOOK_START + SCENE_DURATIONS.hook;
const SOLUTION_START = PROBLEM_START + SCENE_DURATIONS.problem;
const CLOSING_START = SOLUTION_START + SCENE_DURATIONS.solution;

export const PromoVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={HOOK_START} durationInFrames={SCENE_DURATIONS.hook}>
        <HookScene />
      </Sequence>
      <Sequence from={PROBLEM_START} durationInFrames={SCENE_DURATIONS.problem}>
        <ProblemScene />
      </Sequence>
      <Sequence from={SOLUTION_START} durationInFrames={SCENE_DURATIONS.solution}>
        <SolutionScene />
      </Sequence>
      <Sequence from={CLOSING_START} durationInFrames={SCENE_DURATIONS.closing}>
        <ClosingScene />
      </Sequence>
    </AbsoluteFill>
  );
};
