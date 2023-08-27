function Heading1(props) {
 
    //Returns a formatted Heading
    //content: Title 
    //fontSize: font size (preferably 3xl or 2xl)
    return (
     <div className="flex h-5 flex-row align-center justify-center">
       <span className= {`text-${props.fontSize} font-h1`} > {props.content}</span>
      </div>
    );
  }
  
  export default Heading1;