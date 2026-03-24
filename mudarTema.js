let modoEscuro = localStorage.getItem('tema-escuro');
const trocarTema = document.getElementById('trocar-tema');

const ativarModoEscuro = () => {
    document.body.classList.add('tema-escuro');
    localStorage.setItem('tema-escuro', 'ativo');
};

const desativarModoEscuro = () => {
    document.body.classList.remove('tema-escuro');
    localStorage.setItem('tema-escuro', null);
};

if(modoEscuro === 'ativo') ativarModoEscuro();

trocarTema.addEventListener("click", () => {
    let modoEscuro = localStorage.getItem('tema-escuro');
    modoEscuro !== 'ativo' ? ativarModoEscuro() : desativarModoEscuro();
});