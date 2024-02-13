import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox.tsx";
import { CourseGoal as CourseGoalType } from "../App.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    let warningSeverity: "low" | "medium" | "high";
    goals.length === 4
      ? (warningSeverity = "low")
      : goals.length === 5
      ? (warningSeverity = "medium")
      : (warningSeverity = "high");

    warningBox = (
      <InfoBox mode="warning" severity={warningSeverity}>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
