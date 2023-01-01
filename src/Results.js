import Form from "./Form";

const Results = () => {


    const queryParameters = new URLSearchParams(window.location.search);


    return (  

        <div> 
        <p> dvsdsdvsd {queryParameters.get("mainteanceCalories")}</p>
        <p>{queryParameters.get("proteinIntake")}</p>
        <p>{queryParameters.get("fatIntake")}</p>
        <p>{queryParameters.get("carbsIntake")}</p>

        </div>

    );
}
 
export default Results;