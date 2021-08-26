import ChordStack from "../../../chord-stack";
import chordMapper from "../chord-mapper";

export default () => {
  return <ChordStack chordTones={chordMapper([1, 3, 5, 7])} />;
};
