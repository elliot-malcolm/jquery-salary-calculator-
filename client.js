$(document).ready( onReady );

console.log( 'in js ');

let employeeForms = []

function onReady()
{ 
    console.log('inJQ');
    $( '#addEmployeeForm' ).on( 'click', addInfo );
}


Object.getOwnPropertyNames


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

    if( valuePull())
    {
        console.log("Missing Inputs...");
        return false
    }
        else 
        {
        console.log('added employee:', formIn );
        employeeForms.push( formIn );
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

function displayForms()
{   
    console.log('in displayForms');
    let el = $('#formsOut');
    el.empty();
    // for( let i = 0; i < employeeForms.length; i++);
    for( employee of employeeForms )
    {  
        el.append 
            (`<li> 
                ${ employee.name }, 
                ${ employee.lastName }, 
                ${ employee.idNum }, 
                ${ employee.jobTitle }, 
                ${ employee.salary }, 
            </li>`);

    }
}

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
    el.append(`<h3> Monthly Company Salaries: ${annualCosts} <h3>`);
console.log(annualCosts);
}

function valuePull(formIn)
{
    console.log('in Value Pull')
        if( formIn.name === "" || '' || undefined || null )
        {
        return false
        }
        if( formIn.name === "" || '' || undefined || null )
        {
        return false
        }
        if( formIn.name === "" || '' || undefined || null )
        {
        return false
        }
        if( formIn.name === "" || '' || undefined || null )
        {
        return false
        }
        if( formIn.name === "" || '' || undefined || null )
        {
        return false
        }
}


// }
// [x] : input form collecting data 
// [x] : submit button to collect data 
// [x] : store information from submit button
// [x] : append info to the DOM and clear inputs


// [0] : using data, calculate monthly costs 
// [0] : if total exceeds 20k, highlight background red

// [0] : delete button to remove employee from the DOM

// [0] : CSS funtimes 
// [0] : upon deletion, update total salaries 

// Object.getOwnPropertyNames...
// ${ employeeForms[i].name },

// console.log( 'in addInfo' );
// let employeeForm = {
//     name: $('#nameIn').val(),
//     lastName: $('#lastNameIn').val(),
//     idNum: $('#idNumIn').val(),
//     jobTitle: $('#jobTitleIn').val(),
//     salary: $('#salaryIn').val(),
// // // }

// function EmployeeFormator (name, lastName, idNum, jobTitle, salary)
// {
//     $('#nameIn').val() = name;
//     $('#lastNameIn').val() = lastName;
//     $('#idNumIn').val() = idNum;
//     $('#jobTitleIn').val() = jobTitle;
//     $('#salaryIn').val() = salary;
// }
// // console.log('added employee:', employeeForm );

//             // ${ employeeForms[i].lastName },
            // ${ employeeForms[i].idNum }, 
            // ${ employeeForms[i].jobTitle },
            // ${ employeeForms[i].salary },

// function displayForms()
// {   
//     console.log('in displayForms');
//     let el = $('#formsOut');
//     el.empty();
//     for( let i=0; i< employeeForms.length; i++);
//     {
//         el.append(
//             `<li> 
//             ${ employeeForms[i].name }, 
//             ${ employeeForms[i].lastName },
//             ${ employeeForms[i].idNum }, 
//             ${ employeeForms[i].jobTitle },
//             ${ employeeForms[i].salary },
//             </li>`)
//     