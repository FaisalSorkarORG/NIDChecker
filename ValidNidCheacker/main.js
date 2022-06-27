let form = document.getElementById('form');
let fnum = document.getElementById('number');
let submit = document.getElementById('submit');
const bday = document.getElementById('birthdate');


    function create(){

        let year = bday.value;
        let date2 = new Date(year);
        let date3 = date2.getFullYear();
        let date4 = Number(date3);
        let n = fnum.value;
        let str = date3 + n;

        if((n.length<13) || (0 == date4 % 4) && (0 != date4 % 100) || (0 == date4 % 400)){
            document.getElementById('demo').innerHTML =  "Your NID is invalid";
        }


        else{
            document.getElementById('demo').innerHTML =  "Your NID is valid <br> Your NID is: " + str;
        }

    }


// Limitations
function limit(element)
{
    var max_chars = 17;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}