function computeLoan(){
    
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    
    
    const interest = (amount * (interest_rate * 0.01)) / months;
    
       
    let payment = ((amount / months) + interest).toFixed(2); 
    
   
    payment = payment.toString(); 
    
    
    document.querySelector('#payment').innerHTML = `Aylıq Ödəniş = ${payment}`
    }