const inputText = document.querySelector("input")
const containerImage =document.getElementById("elementos")

inputText.addEventListener("click", (event) => {
        let movie = inputText.value;
        inputText.value = ""; 

        fetch(`https://api.giphy.com/v1/gifs/trending?${gif}api_key=dZZ70R9ZHzNKrWuUmlAOgaBEsl6eYtXG&limit=25&rating=G`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
)
const renderInfo = data => {
    data.data.forEach(element => {
        let
        
    });
    containerImage.innerHTML `<img src="${gifImage}">`;

}