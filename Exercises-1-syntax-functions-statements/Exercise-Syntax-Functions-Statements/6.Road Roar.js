function solve(input) {

    let speeding = "speeding";
    let excessive = "excessive speeding";
    let reckless = "reckless driving";
    
    switch (input[1]) {
        case "city":
            let limitCity = 50;
            x(limitCity, input[0]);
            // if (input[0]>50 && input[0] <=70){
            //     console.log(speeding);
            // }else if(input[0]>70 && input[0] <=90){
            //     console.log(excessive);
            // }else if(input[0]>90){
            //     console.log(reckless);
            // }
            break;

        case "residential":
            let limitRes = 20;
            x(limitRes, input[0]);
            // if (input[0]>20 && input[0] <=40){
            //     console.log(speeding);
            // }else if(input[0]>40 && input[0] <=60){
            //     console.log(excessive);
            // }else if(input[0]>60){
            //     console.log(reckless);
            // }
            break;
        case "interstate":
            let limitInt = 90;
            x(limitInt, input[0]);
            // if (input[0]>90 && input[0] <110){
            //     console.log(speeding);
            // }else if(input[0]>110 && input[0] <=130){
            //     console.log(excessive);
            // }else if(input[0]>130){
            //     console.log(reckless);
            // }
            break;    
        case "motorway":

            let limit = 130;
            x(limit, input[0]);
            // if (input[0]>130 && input[0] <=150){
            //     console.log(speeding);
            // }else if(input[0]>150 && input[0] <=170){
            //     console.log(excessive);
            // }else if(input[0]>170){
            //     console.log(reckless);
            // }
            break;
        default:
            break;
    }

    function x(num1, num2){
        if (num1 - num2 <= 20){
            console.log(speeding);  
        }else if ( num1 - num2 <= 40 ){
            console.log(excessive);
        }else if ( num1 - num2 > 40 ){
            console.log(reckless);
        };
    }
}

solve([21, "residential"]);