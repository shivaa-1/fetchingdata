const url = "https://api.openbrewerydb.org/v1/breweries";

async function getdata(){
    try {
        let res = await fetch(url);
        let jobject = await res.json();
        console.log(jobject);

        let output="";
        jobject.forEach(d => {
           output+=`
                 <div class="card">
                 <h1>Name: ${d.name}</h1>
                 <h4>Type: ${d.brewery_type}</h4>
                 <h5>Adress: ${d.address_1}</h5>
                 <h6>City: ${d.city}</h6>
                 <p>Country: ${d.country}</p>
                 <h5>Website: ${d.website_url}<h5>
                 </div>`

        let cards = document.getElementById("cards");
        cards.innerHTML=output;
    });


        
        
    } catch (error) {
        alert("this is not right.")    
    }
    
    
}

function reset(){
    let cardss=document.getElementById("cards");
    cardss.innerHTML="";
}