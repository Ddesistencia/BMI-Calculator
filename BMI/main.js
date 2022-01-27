const calculate = document.getElementById('calculate');


function bmi () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== '') {
        
        const BMIvalue = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (BMIvalue < 18.5){
            classification = 'underweight.'
        }else if(BMIvalue < 25) {
            classification = 'in the ideal weight'
        }else if(BMIvalue < 30) {
            classification = 'overweight'
        }else if(BMIvalue < 35) {
            classification = 'in obesity class I'
        }else if(BMIvalue < 40) {
            classification = 'in obesity class II'
        }else{
            classification = 'in obesity class III. Be Careful!!'
        }
        
        result.textContent = `${name} your BMI is ${BMIvalue} that means you are ${classification}!`;

    }else{
        result.textContent = 'Preencha todos os campos!'
    }

}

calculate.addEventListener('click', bmi);