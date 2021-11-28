let lista = document.querySelector('#lista');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const autor = document.getElementById('autor');
    const descon = document.getElementById('descon');
    const description = document.getElementById('description');

    if(nome.value == '' || autor.value == '' || descon.value == '' || description.value == '') {
        window.alert('Preencha todas as informações antes de continuar');
    } else {
        let array = [nome, autor, descon, description];

        lista.innerHTML += `<li><div class="blocos">
                <div class="top">
                    <h3>${nome.value}</h3>
                    <div class="promos"><p>[${descon.value}% OFF]</p></div>
                </div>
                <h4>${autor.value}</h4>
                <p>${description.value}</p>
            </div></li>`;
    }
})