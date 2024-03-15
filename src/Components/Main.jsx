import { useState } from "react";

 

export default function Main(){
 
   const [ nome, setNome ] = useState("");
   const [ telefone, setTelefone] = useState("")

   return(
    
    <main>
       <form>

       <input type="text" 
       name=""
       id="nome"
       onChange={(event) => setNome(event.target.value) }  

   
       />


       
       <input type="tel" 
        name=""
         id="telefone"
         onChange={ (event) => setTelefone(event.target.value)}
         />

<br>
</br>

       {nome}
       {telefone}

<br></br>

         <button>cadastrar</button>
       </form>
      
    </main>
      
   )

}