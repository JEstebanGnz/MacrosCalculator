import { useState } from "react";
import UseCalculations from "./useCalculations";
import { useNavigate } from "react-router-dom/dist";
import Results from "./Results";

const Form = () => {

    const [sexo, setSexo] = useState('mujer');
    const [edad, setEdad] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [porcentaje, setPorcentaje] = useState('');
    const [objetivo, setObjetivo] = useState('perder');
    const [nivel, setNivel] = useState('sed');
    const [exp, setExp] = useState('beginner');
    const navigate = useNavigate();
    const [exists, setExists] = useState(true);


    const handleSubmit = (e) =>{

        e.preventDefault();

        const {mainteanceCalories, proteinIntake, fatIntake, carbsIntake} = UseCalculations(sexo,edad,altura,peso,porcentaje,objetivo, nivel,exp);

        console.log(mainteanceCalories);
        console.log(proteinIntake);
        console.log(fatIntake);
        console.log(carbsIntake);

        let results = {mainteanceCalories, proteinIntake, fatIntake, carbsIntake};

        setExists(false);

        navigate({
            pathname: '/Results',
            search: `?mainteanceCalories=${mainteanceCalories}&proteinIntake=${proteinIntake}&fatIntake=${fatIntake}&carbsIntake=${carbsIntake}`,
          });
        
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
            >
                <option value="sed">Asemejado a un trabajo de oficina, con muy poca actividad fuera del ejercicio regular</option>
                <option value="light"> Asemejado a un trabajo de oficina, pero usualmente realizas actividades como sacar a tu mascota o caminar</option>
                <option value="mod"> Asemejado a un trabajo de movimiento fisico constante, como por ejemplo un camarero </option>
                <option value="high"> Asemejado a un trabajo altamente demantante en el aspecto fisico, como obrero de construccion </option>

            </select>



            <label> Que nivel de experiencia tienes en el gimnasio?</label>
            
            <select
            value={exp}  
            onChange={(e) => {

                setExp(e.target.value);

            }}
            >

                <option value="beginner">Principiante</option>
                <option value="intermediate"> Intermedio </option>
                <option value="advanced"> Avanzado </option>

            </select>



            <button> Consultar </button>

            <p> {edad}</p>
            <p> {objetivo}</p>
            <p> {peso}</p>
            <p> {sexo}</p>
            <p> {altura}</p>
            <p> {porcentaje}</p>



        </form>}

        {!exists && <Results mainteanceCalories = {handleSubmit.mainteanceCalories} proteinIntake ={handleSubmit.proteinIntake} fatIntake = {handleSubmit.fatIntake} carbsIntake = {handleSubmit.carbsIntake}/>}

        </div>

    );

   

}
 
export default Form;