import Check from "./Check";

const List = (props) => {
  return ( 
    <div className="flex flex-col">
      <span>{props.name} 할일</span>
      {props.check.map((v, i) => (
        <Check v={v} key={i} click={props.click}/>
      ))}
    </div> 
   );
}
 
export default List;