/**
 * Created by peter joseph on 7/18/2017.
 */


//helper note function

function helperNote(attrId){

    //input name attribute

    var inputVal=document.getElementById(attrId).attributes["name"].value;

    //closure function

    function displayVal(valName) {

        return valName;
    }

    //displaying output

    document.getElementById('helper').innerHTML ="Please input the " + " " + displayVal(inputVal);

}
