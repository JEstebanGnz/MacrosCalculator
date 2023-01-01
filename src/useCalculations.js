const UseCalculations = (sexo, edad, altura, peso, porcentaje, objetivo,nivel, exp) => {
 
    const leanmass = (100 - porcentaje)/100;
    const lbm = peso * leanmass; 
    let bmr = 0;
    let mainteanceCalories = 0;
    let suggestedApproach;
    let proteinIntakeFactor = 0;
    let fatsPercentageCals = 0;
    let proteinIntake = 0;
    let fatIntake = 0;
    let carbsIntake = 0;
    let remainingCalories = 0;


    if (sexo == 'hombre') {

        bmr = 10 * peso + 6.25 * altura - 5 * edad + 5;

    }

    else{

        bmr = 10 * peso + 6.25 * altura - 5 * edad - 161;

    }


    //Determinar factor de actividad fisica
    if (nivel== 'sed') {
        
        mainteanceCalories = bmr*1.35;

    } 
    
    if (nivel== 'light') {
        
        mainteanceCalories = bmr*1.65;

    } 

    if (nivel== 'mod') {
        
        mainteanceCalories = bmr*1.9;

    } 
    
    else{

        mainteanceCalories = bmr*2.1;

    }

    //Determinar si la persona debe hacer deficit, mantenerse o surplus

    if (exp == 'beginner') {
        
        if (objetivo == 'perder') {
            suggestedApproach = 'Realizar deficit calorico, un 20% por debajo de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories/1.20;
        }

        if (objetivo == 'ganar') {
            suggestedApproach = 'Realizar superavit calorico, un 25% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.25;
        }

        if (objetivo == 'ambas') {
            suggestedApproach = 'Mantener una ingesta de calorias igual a las calorias de mantenimiento';
        }

    }

    if (exp == 'intermediate') {
        
        if (objetivo == 'perder') {
            suggestedApproach = 'Realizar deficit calorico, un 20% por debajo de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.20;
        }

        if (objetivo == 'ganar') {
            suggestedApproach = 'Realizar superavit calorico, un 15 al 20% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories/1.175;
        }

        if (objetivo == 'ambas') {
            suggestedApproach = 'Mantener una ingesta de calorias igual a las calorias de mantenimiento';
        }

    }

    else{

        if (objetivo == 'perder') {
            suggestedApproach = 'Realizar deficit calorico, un 20% por debajo de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories*1.20;
        }

        if (objetivo == 'ganar') {
            suggestedApproach = 'Realizar superavit calorico, un 15 al 20% por encima de las calorias de mantenimiento';
            mainteanceCalories = mainteanceCalories/1.175;
        }


    }

    //Determinar factor de multiplicacion de la protein intake y porcentaje de calorias que vienen de las grasas
    //Determinar proteinIntake

    if ( porcentaje >= 14 && porcentaje <= 17) {
        proteinIntakeFactor = 1.25;
        fatsPercentageCals = 22/100;
        
    }

    if ( porcentaje >= 18 && porcentaje <= 24) {
        proteinIntakeFactor = 1.45;
        fatsPercentageCals = 27/100;
    }
    
    if ( porcentaje >= 25) {
        proteinIntakeFactor = 1.65;
        fatsPercentageCals = 32/100;
    }

    //Primer macro importante
    proteinIntake = lbm * proteinIntakeFactor;

    //Determinar fatIntake

    fatIntake = (mainteanceCalories*fatsPercentageCals)/9;


    //Determinar calorias remanentes

    remainingCalories = ((proteinIntake*4) - (fatIntake*9));

    carbsIntake = remainingCalories/4;

    if (carbsIntake < 0) {
        
        carbsIntake = carbsIntake*-1;
    }

    return {mainteanceCalories, proteinIntake, fatIntake, carbsIntake};
}
 
export default UseCalculations;