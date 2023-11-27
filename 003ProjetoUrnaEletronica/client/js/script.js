const numeroCandidatoInput = document.querySelector('#iNumeroCandidato')
let nomeCandidato = document.querySelector('.nomeCandidato')
let imgCandidato = document.querySelector('.imgCandidato')
const candidato = {}

const btnConfirma = document.querySelector('.confirma')
const btnCorrige = document.querySelector('.corrige')
const btnBranco = document.querySelector('.branco')

numeroCandidatoInput.addEventListener('keydown', fetchCandidatos)
numeroCandidatoInput.addEventListener('change', fetchCandidatos)

btnCorrige.addEventListener('click', () => {
    numeroCandidatoInput.value = '00'
    nomeCandidato.innerHTML = 'Ivan Borchardt'
})

async function fetchCandidatos() {
    try {
        const response = await fetch('http://localhost:3000/cargainicial')
        const candidatos = await response.json()

        const numeroCandidato = numeroCandidatoInput.value

        const candidatoIndex = candidatos.indexOf(numeroCandidato)
        
        if (candidatoIndex !== -1) {

            candidato.numero = candidatos[candidatoIndex]
            candidato.nome = candidatos[candidatoIndex + 1]
            candidato.imagem = candidatos[candidatoIndex + 2]

            nomeCandidato.innerHTML = candidato.nome
            imgCandidato.src = candidato.imagem

            console.log(imgCandidato)
        } else {
            nomeCandidato.innerHTML = 'Escolha um candidato válido'
            console.log('Candidato não encontrado.')
        }

    } catch (error) {
        console.error('Erro ao buscar candidatos: ', error)
    }
}
