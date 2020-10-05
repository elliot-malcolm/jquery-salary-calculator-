$(document).ready( onReady );

console.log( 'in js ');

let employeeForms = []

function onReady()
{ 
    console.log('inJQ');
    $( '#addEmployeeForm' ).on( 'click', addInfo );
    $( '#formsOut' ).on('click', '.deleteBtn', removeEmployee );
}

    // intake employee info to the DOM + employeeForms[]
function addInfo()
{
    console.log( 'in addInfo' );

    let formIn = 
        {
            name: $('#nameIn').val(),
            lastName: $('#lastNameIn').val(),
            idNum: $('#idNumIn').val(),
            jobTitle: $('#jobTitleIn').val(),
            salary: $('#salaryIn').val(),
        }
    // gate out empty inputs
    if( formIn.name === '' || formIn.lastName === '' || formIn.idNum === '' || formIn.jobTitle === '' || formIn.salary === '' )
    {
        console.log("Missing Inputs...");
        let el = $('#missingInputs');
        el.empty();
        el.append(`<ul>Missing Input Fields or Improper Entry.</ul>`);
        return false
    }
    // add employee info 
    else 
        {
        console.log('added employee:', formIn );
        employeeForms.push( formIn );
        let el = $('#missingInputs');
        el.empty();
        console.log(employeeForms);

        $('#nameIn').val( '' );
        $('#lastNameIn').val( '' );
        $('#idNumIn').val( '' );
        $('#jobTitleIn').val( '' );
        $('#salaryIn').val( '' );

        displayForms();
        displayMonthlyCosts();
    }
}

    // display employee info
function displayForms()
{   
    console.log('in displayForms');
    let el = $('#formsOut');
    el.empty();
    for( employee of employeeForms )
    {  
        el.append 
            (`<li> 
                ${ employee.name }
                ${ employee.lastName }
                ${ employee.idNum }
                ${ employee.jobTitle }
                ${ employee.salary }
                <button class="deleteBtn">Delete</button>
            </li>`);
    }
}

    // display monthly costs; check salary total for overage 
function displayMonthlyCosts()
{
    console.log( 'in monthly costs');

    annualCosts = 0

    let el = $('#totalOut');
    el.empty();
   
    for( let i = 0; i< employeeForms.length; i++ )
    {
    annualCosts += Number(employeeForms[i].salary);
    }

    monthlyCosts = Number.parseFloat(annualCosts / 12).toFixed(2);

    el.append(`<h3> Monthly Company Salaries: $${monthlyCosts} <h3>`);

    checkTotalSalary();
}

    //highlight costs 'red' if overage
function checkTotalSalary()
{
    if( monthlyCosts > Number(20000))
    {
        $( '#totalOut' ).css( 'background-color', 'red');
    }
}

    //delete employee from DOM (but remains in employeeForms[] until refresh)
function removeEmployee()
{
    console.log( 'in remove employee ');
    $(this).parent().remove();
    displayMonthlyCosts();
}







// [x] : input form collecting data 
// [x] : submit button to collect data 
// [x] : store information from submit button
// [x] : append info to the DOM and clear inputs


// [x] : using data, calculate monthly costs 
// [x] : if total exceeds 20k, highlight background red

// [x] : delete button to remove employee from the DOM


// Stretchgoals
// [0] : CSS funtimes 
// [0] : upon deletion, update total salaries 
