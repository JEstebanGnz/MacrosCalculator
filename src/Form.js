import { useState, useEffect } from "react";
import UseCalculations from "./useCalculations";
import { useNavigate } from "react-router-dom/dist";
import Results from "./Results";

const Form = () => {

    const [sexo, setSexo] = useState();
    const [edad, setEdad] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [porcentaje, setPorcentaje] = useState('');
    const [objetivo, setObjetivo] = useState();
    const [nivel, setNivel] = useState();
    const [exp, setExp] = useState();
    const navigate = useNavigate();
    const [exists, setExists] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleSubmit = () =>{

        const {mainteanceCalories, proteinIntake, fatIntake, carbsIntake} = UseCalculations(sexo,edad,altura,peso,porcentaje,objetivo, nivel,exp);

        setExists(false);

        return {mainteanceCalories, proteinIntake, fatIntake, carbsIntake};
 
        

        // navigate({
        //     pathname: '/Results',
        //     search: `?mainteanceCalories=${mainteanceCalories}&proteinIntake=${proteinIntake}&fatIntake=${fatIntake}&carbsIntake=${carbsIntake}`,
        //   });
        
    }


    

    return (  

       <div>
     
        {exists && <form className="myform" onSubmit={handleSubmit}>

            <label> Sexo </label>
            
            <select

             value={sexo}
             onChange={(e) => {

               setSexo(e.target.value);

             }}
             

            >
                <option value="" selected disabled hidden>Selecciona</option>
                <option value="mujer">Mujer</option>
                <option value="hombre"> Hombre </option>

            </select>

            <label> Edad </label>
    
            <input 
            value={edad} 
            type='number' 
            required
            onChange={(e) => {

                setEdad(e.target.value);

            }}
            > 
            
            </input>

            <label> Altura (en cm) </label>
    
            <input value={altura} 
            type='number' 
            required
            onChange={(e) => {

                setAltura(e.target.value);

            }}>


            </input>

            <label> Peso (en Kg) </label>
    
            <input
            value={peso} 
            type='number' 
            required
            onChange={(e) => {

                setPeso(e.target.value);

            }}
            >



            </input>

            <label> Porcentaje de grasa corporal (%)</label>
    
            <input 
            value={porcentaje} 
            type='number' 
            required
            onChange={(e) => {

                setPorcentaje(e.target.value);

            }}
            
            ></input>

            <label> Cual es tu objetivo?</label>
            
            <select
            value={objetivo}  
            onChange={(e) => {

                setObjetivo(e.target.value);

            }}
            >
                <option value="" selected disabled hidden>Selecciona</option>
                <option value="perder">Perder grasa</option>
                <option value="ganar"> Ganar masa muscular </option>
                <option value="ambas"> Ambas </option>

            </select>

            <label> Como consideras que es tu nivel de actividad fisica?</label>
            
            <select
            value={nivel}  
            onChange={(e) => {

                setNivel(e.target.value);

            }}
            className="helpSelection"
            >
                <option value="" selected disabled hidden>Selecciona</option>
                <option value="sed">Sedentario</option>
                <option value="light">Normal</option>
                <option value="mod">Moderado</option>
                <option value="high">Alto</option>

            </select>    
            <button className="masInfo">[?]</button>
            <p className="mensaje">

            Sedentario: Asemejado a un trabajo de oficina, con muy poca actividad fuera del ejercicio regular <br/>

            Normal: Asemejado a un trabajo de oficina, pero usualmente realizas actividades como sacar a tu mascota o caminar <br/>

            Moderado: Asemejado a un trabajo de movimiento fisico constante. Como por ejemplo un camarero <br/>

            Alto: Asemejado a un trabajo altamente demantante en el aspecto fisico, como obrero de construccion <br/>


            </p>
        
         

            
              

        

            <label> Que nivel de experiencia tienes en el gimnasio?</label>
            
            <select
            value={exp}  
            onChange={(e) => {

                setExp(e.target.value);

            }}
            >
                <option value="" selected disabled hidden>Selecciona</option>
                <option value="beginner">Principiante</option>
                <option value="intermediate"> Intermedio </option>
                <option value="advanced"> Avanzado </option>

            </select>



            <button className="consultButton"> Consultar </button>

         

        </form>}

        {!exists && <Results handleSubmit = {handleSubmit}/>}

        </div>

    );

   

}
 
export default Form;