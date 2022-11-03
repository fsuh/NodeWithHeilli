'use strict';

(function(){
    let resultset;
    let licenseInput;
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        resultset = document.getElementById('resultSet');
        licenseInput = document.getElementById('license');

        document.getElementById('send').addEventListener('click', send);


    }

    async function send(){
        try{
            const license = licenseInput.value;
            resultset.innerHtml = '';
            const data = await fetch(`http://localhost:3000/search/bylicense?value=${license}`,{mode:'cors'})
            const cars = await data.json();

            for(const car of cars){
                const tr=document.createElement('tr');
                tr.appendChild(createCell(car.model));
                tr.appendChild(createCell(car.license));
                resultset.appendChild(tr);

            }

        }
        catch(err){

        }
    }

    function createCell(text){
        const td = document.createElement('td')
        td.textContent=text;
        return td;
    }

})();