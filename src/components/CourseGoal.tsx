import { type FC, type PropsWithChildren } from "react";

// note: alternative way of defining props using ReactNode
// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{ 
  id: number;
  title: string; 
  onDelete: (id: number) => void; 
}>

const CourseGoal: FC<CourseGoalProps> = ({ 
    title,
    id, 
    onDelete,
    children
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        { children }
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
}

export default CourseGoal;