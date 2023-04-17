function carregar() {
    var agora = new Date()
    var horas = agora.getHours()
    var texto = window.document.querySelector('.testando')
    texto.innerHTML = 'Olá companheiro, agora são exatas ' + horas + ' horas'
    var img = window.document.getElementById('imagem')
    if (horas >= 0 && horas < 12) {
        console.log('Bom dia')
        img.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas < 19) {
        console.log('Boa tarde')
        img.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
    } else if (horas >= 19) {
        console.log('Boa noite')
        img.src = 'night.jpg'
        document.body.style.background = '#515154'
    }
}
