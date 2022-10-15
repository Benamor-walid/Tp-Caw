var status = document.querySelector("#status");
window.onload = () => {
    let start = false;

    document.getElementById("start").addEventListener("click", () => {
        start = true;
        restart();
        document.getElementById("maze").addEventListener("mouseout", (info) => {
            if (!document.getElementById("maze").matches(":hover") && start) {
                start = false;
                alert("You lose !! out of the map")
            }
        })
        let obstacles = document.getElementsByClassName("boundary");
        for (const obstacle of obstacles) {
            obstacle.addEventListener("mouseover", () => {
                if (start) {
                    start = false;
                    obstacle.style.backgroundColor = "red"
                    document.getElementById("status").innerHTML = "YOU LOSE!"
                }
            })
        }
        document.getElementById("end").addEventListener("mouseover", () => {
            if (start) {
                start = false;
                document.getElementById("status").innerHTML = "YOU win !"
            }
        })

    })

    function restart() {
        let obstacles = document.getElementsByClassName("boundary");
        for (const obstacle of obstacles) {
            obstacle.style.backgroundColor = null
            
        }
    }

}