function InputField() {
 
    return (
     <div className="flex flex-row justify-center">
       <textarea className="bg-zinc-200 text-xl h-64 w-10/12 rounded-3xl placeholder:italic font-body placeholder:text-zinc-400  align-left p-6"
        placeholder="Build a snowmen and make a snow angel"  >
       
       </textarea> 
      </div>
    );
  }
  
  export default InputField;