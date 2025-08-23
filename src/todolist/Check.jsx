import { Trash } from "lucide-react";

const Check = (props) => {
  return ( 
    <div className="flex gap-2">
      <span>{props.v}</span>
      <Trash onClick={props.click}/>
    </div>
   );
}
 
export default Check;