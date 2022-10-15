window.onload = () => {
    let start = false;

    document.getElementById("start").addEventListener("click", () => {
        start = true;
        restart();
        
        let obstacles = document.getElementsByClassName("boundary");
        for (const obstacle of obstacles) {
            obstacle.addEventListener("mouseover", () => {
                if (start) {
                    start = false;
                    obstacle.style.backgroundColor = "red"
                    alert("You lose !")
                }
            })
        }
        

    })

    function restart() {
        let obstacles = document.getElementsByClassName("boundary");
        for (const obstacle of obstacles) {
            obstacle.style.backgroundColor = null
        }
    }

}