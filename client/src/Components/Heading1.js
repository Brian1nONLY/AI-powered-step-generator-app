function Heading1(props) {
 
    return (
     <div className="flex h-5 flex-row align-center justify-center">
       <span className= {`text-${props.size} font-h1`} > {props.content}</span>
      </div>
    );
  }
  
  export default Heading1;