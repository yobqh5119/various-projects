// Listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
  document.querySelector('#results').style.display = "none";

  //show the loading sign
  document.querySelector('#loading').style.display = "block";

  //call the calculateResults function
  setTimeout(calculateResults, 2000)
e.preventDefault();
})

//Calculate Results
function calculateResults(e){
  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;


  //compute monthly payment
  const x = Math.pow( 1 + calculatedInterest, calculatedPayments);
  const monthly = (principal* x * calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //show results
    document.querySelector('#results').style.display = "block";

    //hide the loading sign
    document.querySelector('#loading').style.display = "none";
  }else{
    errorMessage('Please type in valid numbers');
  }
}

// error Message
function errorMessage(error){
  //hide results
  document.querySelector('#results').style.display = "none";

  //hide the loading sign
  document.querySelector('#loading').style.display = "none";

  // create div
  const errorDiv = document.createElement('div')

  // add error class
  errorDiv.className = "alert alert-danger";

  // add text into the error message
  errorDiv.appendChild(document.createTextNode(error));

  // Insert errorDiv before the .heading
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDiv, heading);

  //clear error message after 3 seconds
  setTimeout(clearError, 2000)
}

// clear error function
function clearError(){
  document.querySelector('.alert').remove();
}
