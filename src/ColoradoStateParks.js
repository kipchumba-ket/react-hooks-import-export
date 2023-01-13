import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife} from "./parks/RockyMountain"


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  return(<div>
     <h1>Colorado State Parks!</h1>
       <h4>{MesaVerde()}</h4>
       <h4>RockyMountain</h4>
       <p>Trees present in the park include {trees} and animals include {wildlife}
       </p>
  </div>
  )
 
}

export default ColoradoStateParks;