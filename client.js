$(document).on( onReady );

console.log( 'in js ');

let employeeForms = []

// [x] : input form collecting data 
// [~] : submit button to collect data 
// [0] : store information from submit button
// [0] : append info to the DOM and clear inputs

// [0] : using data, calculate monthly costs 
// [0] : if total exceeds 20k, highlight background red

// [0] : delete button to remove employee from the DOM

// [0] : CSS funtimes 
// [0] : upon deletion, update total salaries 

function onReady()
{ 
$( '#addEmployeeForm' ).on( 'click', addInfo );
}

function addInfo(){
console.log( 'in addInfo' );
    let employeeForm = {
        name: $('nameIn').val();
        lastName: $('lastNameIn').val();
        idNum: $('idNumIn').val();
        jobTitle: $('jobTitleIn').val();
        salary: $('salaryIn').val();
    }
console.log('added employee:', employeeForm);

employeeForms.push( employeeForm )
}

