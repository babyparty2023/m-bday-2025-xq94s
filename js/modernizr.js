<audio id="background-music" src="/Music/Happy Birthday (Piano Version).mp3"></audio>

<!-- ... all annan HTML här ... -->

<script>
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("open").addEventListener("click", function () {
            const music = document.getElementById("background-music");
            if (music && music.paused) {
                music.play().catch(function (error) {
                    console.log("Autoplay-blockerad tills användaren interagerar", error);
                });
            }
        });
    });
</script>
</body>
</html>
