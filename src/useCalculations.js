

const UseCalculations = (sexo, edad, altura, peso, porcentaje, objetivo,nivel, exp) => {
 
    const leanmass = (100 - porcentaje)/100;
    const lbm = peso * leanmass; 
    let bmr = 0;
    let mainteanceCalories = 0;
  
    let proteinIntakeFactor = 0;    
    let fatsPercentageCals = 0;
    let proteinIntake = 0;
    let fatIntake = 0;
    let carbsIntake = 0;
    let remainingCalories = 0;
    let calsFromProtein =0;
    let calsFromFats = 0; 
    let suggestedApproach= '';

    if (sexo === 'hombre') {

        bmr = 10 * peso + 6.25 * altura - 5 * edad + 5;

    }

    if(sexo === 'mujer'){

        bmr = 10 * peso + 6.25 * altura - 5 * edad - 161;

    }

    //Determinar factor de actividad fisica
    if (nivel === 'sed') {
        
        mainteanceCalories = bmr*1.5;


    } 
    
    if (nivel === 'light') {
        
        mainteanceCalories = bmr*1.7;

    } 

    if (nivel === 'mod') {
        
        mainteanceCalories = bmr*1.9;

    } 
    
    if (nivel === 'high'){

        mainteanceCalories = bmr*2.1;

    }

    //Determinar si la persona debe hacer deficit, mantenerse o surplus

    if (exp === 'beginner' && objetivo === 'perder') {
        
        mainteanceCalories = mainteanceCalories*0.8;
    }  

    if (exp === 'beginner' && objetivo === 'ganar') {
            suggestedApproach = 'Realizar superavit calorico, un 25% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.25;
    } 

    if (exp === 'beginner' && objetivo === 'ambas') {
            suggestedApproach = 'Mantener una ingesta de calorias igual a las calorias de mantenimiento';
        }

    if (exp === 'intermediate' && objetivo === 'perder') {
        
            suggestedApproach = 'Realizar deficit calorico, un 20% por debajo de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*0.8;
    }


    if (exp === 'intermediate' && objetivo === 'ganar') {

     
            suggestedApproach = 'Realizar superavit calorico, un 15 al 20% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.175;

    }

    if (exp === 'intermediate' && objetivo === 'ambas'){
    
            suggestedApproach = 'Mantener una ingesta de calorias igual a las calorias de mantenimiento';
    }

    if (exp === 'advanced' && objetivo === 'perder'){

            suggestedApproach = 'Realizar deficit calorico, un 20% por debajo de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*0.8;
    }

    if (exp === 'advanced' && objetivo === 'ganar'){
            suggestedApproach = 'Realizar superavit calorico, un 15 al 20% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.175;
        }


    //Determinar factor de multiplicacion de la protein intake y porcentaje de calorias que vienen de las grasas
    //Determinar proteinIntake

    if (porcentaje <= 12) {
        proteinIntakeFactor = 1.65;
        fatsPercentageCals = 22/100;
        
    }

    if (porcentaje <= 20) {
        proteinIntakeFactor = 1.55;
        fatsPercentageCals = 27/100;
    }
    
    if (porcentaje > 20){
        proteinIntakeFactor = 1.4;
        fatsPercentageCals = 32/100;
    }

    //Primer macro importante
    proteinIntake = (lbm*2.20) * proteinIntakeFactor;

    calsFromProtein=  proteinIntake*4;

    //Determinar fatIntake
    calsFromFats= (mainteanceCalories*fatsPercentageCals)
    
    fatIntake = calsFromFats/9;

   
    //Determinar calorias remanentes

    remainingCalories = mainteanceCalories - (calsFromFats + calsFromProtein);

    carbsIntake = remainingCalories/4;

    console.log(leanmass,lbm,bmr,calsFromFats, calsFromProtein);   
 
    return {mainteanceCalories, proteinIntake, fatIntake, carbsIntake};
}




export default UseCalculations;