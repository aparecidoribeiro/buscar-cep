const elementoPai = document.querySelector('.form')
const input = document.querySelectorAll('#inputs')

const modalAlert = document.querySelector('.alert')

input[0].onblur = buscar;

async function buscar() {
    try {
        const buscarCep = await fetch(`https://viacep.com.br/ws/${input[0].value}/json/`)
        const cepJson = await buscarCep.json()
        if (cepJson.erro) {
            const alert = 'Cep inválido'
            modal(alert)
        } else {
            completaInput(cepJson)
        }
    } catch (erro) {
        const alert = 'Formato do cep inválido'
        modal(alert)
    }
}

const completaInput = (cepJson) => {
    input[1].value = cepJson.localidade
    input[2].value = cepJson.uf
    input[3].value = cepJson.logradouro
}

const inputChe = document.querySelector('#checkbox')

inputChe.onclick = () => {
    document.body.classList.toggle('dark-mode')
}


const modal = (alert) => {
    const text = modalAlert.children[0]
    const button = modalAlert.children[1]
    modalAlert.style.display = 'block'
    text.innerHTML = alert

    button.addEventListener('click', function () {
        modalAlert.style.display = 'none'
    })
    inputValue()
}


const inputValue = () => {
    input[0].value = ""
    input[1].value = ""
    input[2].value = ""
    input[3].value = ""
}
