let temaEscuro = localStorage.getItem('tema-escuro');
const trocarTema = document.getElementById('trocar-tema');

const ativarModoEscuro = () => {
    document.body.classList.add('tema-escuro');
    localStorage.setItem('tema-escuro', 'ativo' );
}

const desativarModoEscuro = () => {
    document.body.classList.remove('tema-escuro');
    localStorage.setItem('tema-escuro', null);
}

if(temaEscuro === 'ativo') ativarModoEscuro();

trocarTema.addEventListener("click", () => {
    let temaEscuro = localStorage.getItem('tema-escuro');
    temaEscuro !== "ativo" ? ativarModoEscuro() : desativarModoEscuro();
})

