import CourseGoal from "./CourseGoal";
import { CourseGoal as CourseGoalType } from "../App.tsx"

type CourseGoalListProps = {
  goals: CourseGoalType[]
};

const CourseGoalList = ({goals}: CourseGoalListProps ) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
