import { GreetProps } from "./Greet.types"
// const Greet = ({ name: myName }:{name?:string}) => {
//   return (
//       <div>Hello {myName}</div>
//   )
// }

// export default Greet



const Greet = (props:GreetProps) => {
  return (
      <div>Hello {props.name? props.name:"Guess"}</div>
  )
}

export default Greet