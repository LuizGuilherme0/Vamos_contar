function Contar(){
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        res.innerHTML = `[ERRO] Dados incorretos, por favor preencha todos os campos`
        //alert(`[ERRO] Dados incorretos, por favor coloque valores em todos os campos`)
    }

    else{
        res.innerHTML = `Contado: <br>`
        let ini = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        if(passo <= 0){
            alert(`Passo inválido, vamos considerar o PASSO como valor 1`)
            passo = 1
        }
        if (ini <= fim){ //contagem crescente
            for(let c = ini; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else{ //contagem decrescente
            for(let c = ini; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}