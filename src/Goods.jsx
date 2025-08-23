import Image from "next/image";

const Goods = (props) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={props.image} alt={null} width={100} height={100} className="object-cover"/>
      <span>{props.name}</span>
      <span>{props.rating}</span>
    </div>
  );
}
 
export default Goods;