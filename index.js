function getCharacter(done){

    const result = fetch("https://rickandmortyapi.com/api/character");
    result
    .then(response => response.json())
    .then(data => {
        done(data)
    });

}
getCharacter(data => {
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/* html */`
            <article>
            <div class="imagen-container">
                <img src="${personaje.image}" alt="culebrarick¡¡">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
            `);

            const main = document.querySelector("main");
            main.append(article);

    });
});