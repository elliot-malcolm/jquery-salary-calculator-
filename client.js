$(document).ready( onReady );

let employeeForms = []

function onReady()
{ 
    $( '#addEmployeeForm' ).on( 'click', addInfo );
    $( '#formsOut' ).on('click', '.deleteBtn', removeEmployeeFromDom );
}

    // intake employee info to the DOM + employeeForms[]
function addInfo()
{
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
        let el = $('#missingInputs');
        el.empty();
        el.append(`<ul>Missing Input Fields or Improper Entry.</ul>`);
        return false
    }

    // add employee info 
    else 
        {
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
    let el = $('#formsOut');
    el.empty();
    for( employee of employeeForms )
    {  
        el.append 
            (`<tr>
                <td>${ employee.name }</td>
                <td>${ employee.lastName }</td>
                <td>${ employee.idNum }</td>
                <td>${ employee.jobTitle }</td>
                <td>${ employee.salary }</td>
                <td><button class="deleteBtn">Delete</button>
            <tr>`);
    }
}

    // display monthly costs; check salary total for overage 
function displayMonthlyCosts()
{
    annualCosts = 0

    let el = $('#totalOut');
    el.empty();
   
    for( let i = 0; i< employeeForms.length; i++ )
    {
    annualCosts += Number(employeeForms[i].salary);
    }

    monthlyCosts = Number.parseFloat(annualCosts / 12).toFixed(2);

    el.append(`<h5>Monthly Company Salaries: $${monthlyCosts}<h5>`);

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
function removeEmployeeFromDom()
{
    $(this).parent().parent().remove();
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
// [~] : CSS funtimes 
// [0] : upon deletion, update total salaries in array
