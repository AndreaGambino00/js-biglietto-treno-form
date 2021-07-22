var btnGenera = document.getElementById('calcolaPrezzo');
console.log(btnGenera);

btnGenera.addEventListener('click', 
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var eta = document.getElementById('eta').value;
        console.log(nome, km, eta);

        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "block";
        //Nome utente
        document.getElementById('nome-utente').innerHTML = nome;
        //Offerta utente
        document.getElementById('offerta-utente').innerHTML = eta;
        //Carrozza
        var NumCarrozza= Math.floor(Math.random() * 20 + 1);
        document.getElementById('num-carrozza').innerHTML = NumCarrozza;
        //Codice CP
        var CodiceUtente= Math.floor(Math.random() * (100000 -90000) + 90000);
        document.getElementById('cod-cp').innerHTML = CodiceUtente;
        //Costo biglietto
        var eta = document.getElementById('eta').value;
        var prezzoalKm = 0.21;

        if (eta < 18) 
        {
            var under18 = prezzoalKm * km * 0.8;
            document.getElementById('prezzo-biglietto').innerHTML = ' ' + under18.toFixed(2) + '€';
        }
        
        else if (eta >= 65) 
        {
            var over65 = prezzoalKm * km * 0.6;
            document.getElementById('prezzo-biglietto').innerHTML = ' ' + over65.toFixed(2) + '€';
        }
        
        else 
        {
            var prezzostandard = prezzoalKm * km;
            document.getElementById('prezzo-biglietto').innerHTML = ' ' + prezzostandard.toFixed(2) + '€';
        }



    }

    

)


//Annullo inserimenti
var btnAnnulla = document.getElementById('annulla')

btnAnnulla.addEventListener('click',
    function() {
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "none";

        document.getElementById('nome').value = ''
        document.getElementById('km').value = ''
        document.getElementById('eta').value = ''
    }
)



