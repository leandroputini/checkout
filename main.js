function mascara(masc){
    const tamanho = document.getElementById(`${masc}`).maxLength;
    let entrada = document.getElementById(`${masc}`).value;
    let entradaApenasNumeros = entrada.replace(/([^\d])/g, "");
    const mascaras = {
        cep: entrada.replace(/([^\d])/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"),
        numeroCartao: entrada.replace(/([^\d])/g, "").replace(/(\d{4})(\d{4})(\d{3})(\d{3})/, "$1 $2 $3 $4"),
        cvv: entrada.replace(/([^\d])/g, ""),
        dataVenc: entrada.replace(/([^\d])/g, "").replace(/(\d{2})(\d{4})/, "$1/$2")
    }
    entrada.length == tamanho ? document.getElementById(`${masc}`).value = mascaras[masc] 
    : document.getElementById(`${masc}`).value = entradaApenasNumeros;
}