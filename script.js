var result = document.getElementById('result')

result.innerHTML = "<p class='fw-semibold'>Preparando a contagem...</p>"

function contar(){
    var init = Number(document.getElementById('init').value)
    var end = Number(document.getElementById('end').value)
    var step = Number(document.getElementById('step').value)

    result.innerHTML = 'Contando: <br />'

    if(init == '' || end == ''){
        result.innerHTML = 'Impossível contar!'
    }
    else if (step == '' || step <= 0){
        result.innerHTML = 'Quantidade de passos inváida. Por favor, digite um número válido.'
    }
    else if(init < end){
        for (var i = init; i < end; i += step){
            result.innerHTML += `
            ${i} 👉
            `
        }
        result.innerHTML += '🏁'
    }
    else if(init > end){
        for (var i = init; i > end; i -= step){
            result.innerHTML += `
            ${i} 👉
            `
        }
        result.innerHTML += '🏁'
    }
    else {
        result.innerHTML = 'Impossível contar!'
    }
    
}