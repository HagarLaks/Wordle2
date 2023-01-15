import Key from "./Key";

export function Keyboard(){
    const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
                 "A", "S", "D", "F", "G", "H", "J", "K", "L",
                  "Z", "X", "C", "V", "B", "N", "M", "DEL" ];


    return(
        
            <div className="keyboard">{keys.map((key,i)=>{
   return <Key key={key} keyVal={key} />;
            }   )}      
           </div>
           
    )
}


