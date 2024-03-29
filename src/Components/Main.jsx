import { useState } from "react";

 

export default function Main(){
 
   const [ nome, setNome ] = useState("");
   const [ telefone, setTelefone] = useState("")
   const [ listaContatos, setListaContatos]= useState([])

   const registrar = (event) => {
      event.preventDefault();
     
      setListaContatos([...listaContatos, 
      {
         nomeSalvo: nome,
         telefoneSalvo: telefone
      }
   ])

   };

   console.table(listaContatos)

   return(
    
    <main>
       <form action="" onSubmit={registrar}>

<label htmlFor="nome"> </label>
       <input type="text" 
       name=""
       id="nome"
       onChange={(event) => setNome(event.target.value) }  

   
       />


       <label htmlFor=" telefone"></label>
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