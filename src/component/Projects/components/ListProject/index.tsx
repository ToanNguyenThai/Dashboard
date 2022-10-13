import { useEffect } from "react";
import { useSelector } from "react-redux";
import { projectSelectors } from "../../../../redux/slice/project";
export default function ListProject() {
  const prjs = useSelector(projectSelectors.selectProject);
  useEffect(() => {
    console.log(prjs);
  }, [prjs]);

  return <div></div>;
}
