document.addEventListener('DOMContentLoaded', function () {
    const trashcans = document.querySelectorAll('a.delete');
    
    trashcans.forEach(trashcan => {
        trashcan.addEventListener('click', (e) => {
            e.preventDefault();
            const endpoint = `/index/${trashcan.dataset.doc}`;
    
            fetch(endpoint, {
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.redirect) {
                    window.location.href = data.redirect;  // Redirect to the specified URL
                }
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        });
    });
});