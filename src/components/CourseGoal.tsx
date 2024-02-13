import { type FC, type PropsWithChildren } from "react";

// note: alternative way of defining props using ReactNode
// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>

const CourseGoal: FC<CourseGoalProps> = ({ 
    title, 
    children
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        { children }
        <button>Delete</button>
      </div>
    </article>
  );
}

export default CourseGoal;