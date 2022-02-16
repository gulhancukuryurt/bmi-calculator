function calculate(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var result = weight / Math.pow(height,2);
  
    if(result>0){
        document.getElementById('result').innerText = result.toFixed(2);
    }
    
    
    if(result < 18){
        document.getElementById('result-statu').innerText = "Under Weight";
        document.getElementById('result-statu').style.color = "#ff7b25";
    }

    else if(result > 18 && result<25){
        document.getElementById('result-statu').innerText = "Normal";
        document.getElementById('result-statu').style.color = "green";
    }

    else if(result > 25 && result<30){
        document.getElementById('result-statu').innerText = "Over Wight";
        document.getElementById('result-statu').style.color = "#feb236";
    }

    else if(weight == '' && height == ''){
        alert('Please do not leave blank!');
    }

    else if(weight == 0 && height == 0){
        alert('Please do not leave blank! No zero!');
    }

    

    else{
        document.getElementById('result-statu').innerText = "Obese";
        document.getElementById('result-statu').style.color = "red";
    }

    }

function clear1(){
        document.getElementById('weight').value= "0"
        document.getElementById('height').value = "0";
        document.getElementById('result').innerText = '';
        document.getElementById('result-statu').innerText ='';
        
    }