var btnGenera = document.getElementById('calcolaPrezzo');
console.log(btnGenera);

btnGenera.addEventListener('click', 
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;

        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "block";

        document.getElementById('nome').innerHTML = 'Nome:';
    }

)

var btnAnnulla = document.getElementById('annulla')

btnAnnulla.addEventListener('click',
    function() {
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "none";

        document.getElementById('nome').value = ''
        document.getElementById('km').value = ''
        document.getElementById('fascia-eta').value = ''
    }
)

