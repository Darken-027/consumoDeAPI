function getCharacter(done){

    const result = fetch("https://rickandmortyapi.com/api/character");
    result
    .then(Response => response.json())
    .then(data => {
        done(data)
    });

}
getCharacter(data => {
    console.log(data);
});