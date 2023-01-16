import { useEffect } from 'react'
import protein from './images/protein.png'
import carbs from './images/carbs.png'
import fats from './images/fats.png'
import calories from './images/calories.png'

const Results = ({handleSubmit}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    // const queryParameters = new URLSearchParams(window.location.search);


    return (  

        <div className='results'> 
        {/* <p> dvsdsdvsd {queryParameters.get("mainteanceCalories")}</p>
        <p>{queryParameters.get("proteinIntake")}</p>
        <p>{queryParameters.get("fatIntake")}</p>
        <p>{queryParameters.get("carbsIntake")}</p> */}
        <div className='presentation'>
        <h1> Aqui estan tus resultados!</h1>
        <h3> Nuestro software utiliza la informacion que has brindado y se encarga de utilizar todos estos factores para calcular la cantidad optima de cada macronutriente que debes ingerir al dia, de forma que cumplas de manera sastisfactoria con el objetivo que tienes en mente</h3>
        </div>
        
        <button> TUS MACROS </button>


        <div className='resultsInfo'>
        <div className="calories">
        <h1> Calorias objetivo: {handleSubmit().mainteanceCalories.toFixed(2)} Cal</h1>
        <img src={calories} style={{width:"70%"}} ></img>
        </div>
        
        <div  className="protein">  
        <h1> Ingesta de proteina recomendada: {handleSubmit().proteinIntake.toFixed(2)} Kg </h1>
        <img src={protein}></img>
        </div>

        <div className="carbs">   
        <h1> Ingesta de grasas recomendada: {handleSubmit().fatIntake.toFixed(2)} Kg</h1>
        <img src={fats} ></img>
        </div>
        
        <div className="fats">
        <h1> Ingesta de carbohidratos recomendada:{handleSubmit().carbsIntake.toFixed(2)} Kg</h1>
        <img src={carbs} ></img>
        </div>
       
        </div>

        </div>

    );
}
 
export default Results;