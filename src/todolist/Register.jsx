import Input from "./Input";
import Button from "./Button";

const Register = (props) => {
  return ( 
    <div>
      <Input change={props.change}/>
      <Button click={props.click}/>
    </div>
   );
}
 
export default Register;