var result = document.getElementById('result')

result.innerHTML = "<p class='fw-semibold'>Preparando a contagem...</p>"

function contar(){
    var init = Number(document.getElementById('init').value)
    var end = Number(document.getElementById('end').value)
    var step = Number(document.getElementById('step').value)

    result.innerHTML = 'Contando: <br />'

    
    if(init == '' || end == '' || step == '' || step <= 0 || init == end){
        result.innerHTML = 'Impossível contar!'
        return;
    }
    else if(init < end){
        for (var i = init; i < end; i += step){
            result.innerHTML += `
            ${i} 👉
            `
        }
        result.innerHTML += '🏁'
        return;
    }
    
    for (var i = init; i > end; i -= step){
        result.innerHTML += `
         ${i} 👉
         `
        }
        result.innerHTML += '🏁'
}