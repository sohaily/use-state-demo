import React,{useState} from 'react';
function Room() {
    //const state = useState(true);
    const [isLit,setLit] = useState(true);
    let [age,setAge] = useState(23);
    // const isLit = state[0];
    // const setLit = state[1];
  //  console.log(state);
 const updateLight = () =>{
setLit(!isLit);

  }
  function increasAge(){
    setAge(++age);
  }
  return (
    <div>
      this is room comppnent : Lit ={isLit ? 'Lit':'Dark'}
      <br/>
      Age: {age}
      <br/>
      <button onClick={()=>setLit(!isLit)}>Toggle Light</button>
      {/* <button onClick={updateLight}>Toggle Light</button> */}
      <br/>
      <button onClick={increasAge}>Age</button>
    </div>
  );
}

export default Room;
