import Checked from "../Assets/Button_Checked.png";
import Not_Checked from "../Assets/Button_Not_Checked.png";
function Step(props) {
 
    return (
     <div className="flex flex-row justify-center">
     <span style={{ whiteSpace: "pre-line" }}>
            {props.content}
        </span> 
      </div>
    );
  }
  
  export default Step;