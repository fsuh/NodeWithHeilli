'use strict';

(function(){
    let iceCreamList;
    let resultArea;

    document.addEventListener('DOMContentLoaded', init);

    async function init(){
        iceCreamList = document.getElementById('iceCreamList');
        resultArea = document.getElementById('resultArea');

        try{
            const data = await fetch('/all');
            const flavors = await data.json();
            populateIcecreamList(flavors);

        }
        catch(err){
            // how error

        }
        function populateIcecreamList(queryResult){
            for(const flavor of queryResult){
                const option = document.createElement('option');
                option.value=flavor;
                option.textContent=Flavor;
                iceCreamList.appendChild(option);
            }
            iceCreamList.addEventListener('change', choose);
            iceCreamList.value ='';
        }

        function choose(){
            const iceCreamFlavor=iceCreamList.value;
            if(iceCreamFlavor.length>0){
                try {
                    const data = await fetch(`/icecreams/${iceCreamFlavor}`);
                    const result = await data.json();
                    updateResult(result)

                }
                catch(err){
                    // show error
                }
            }
            else{
                // clear result
            }
        }
    }

    function updateResult(data){
        if(!data){
            //error
        }
        else if(data.message){
            //error
        }
        else if(data.name && data.name.length===0){
            // clear result
        }
        else {
            let htmlString=`
            <div>
                <p id="name">${data.name}</p>
                <p id="price">${data.price}</p>
            </div>`;
            if(data.image && data.image.length > 0){
                htmlString += `<img src="/images/${data.image}" />`;
            }
            resultArea.innerHTML=htmlString
        }
    }
    function clearResultarea(){
        resultArea.innerHTML='';
    }

    function showErrorMessage(message){
        resultArea.innerHTML = `
        <div class="error">
        <h2>error</h2>
        <p>${message}</p>
        </div>`;
    }

}())