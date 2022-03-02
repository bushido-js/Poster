const buttonListener = {
    filmsButton: document.querySelector('.js-films-button'),

    listener() {
        filmsButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('sdfsdf')
        })
    }
}

export default buttonListener;

 