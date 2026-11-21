const intro =
    document.getElementById(
        "intro"
    );

const startButton =
    document.getElementById(
        "startButton"
    );

const music =
    document.getElementById(
        "bgMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );


let started = false;

let musicPlaying = false;



/* =================================
   FIREFLIES
================================= */

function createFireflies() {

    const container =
        document.getElementById(
            "fireflies"
        );


    for (
        let i = 0;
        i < 14;
        i++
    ) {

        const fly =
            document.createElement(
                "div"
            );


        fly.className =
            "firefly";


        fly.style.left =
            Math.random()
            * 100 +
            "%";


        fly.style.top =
            38 +
            Math.random()
            * 42 +
            "%";


        fly.style.setProperty(
            "--x",
            (
                Math.random()
                * 80 -
                40
            ) + "px"
        );


        fly.style.setProperty(
            "--y",
            (
                Math.random()
                * -90
            ) + "px"
        );


        fly.style.setProperty(
            "--duration",
            (
                3 +
                Math.random() * 4
            ) + "s"
        );


        fly.style.animationDelay =
            (
                Math.random() * 3
            ) + "s";


        container.appendChild(
            fly
        );

    }

}


createFireflies();



/* =================================
   MUSIC
================================= */

async function startMusic() {

    try {

        music.volume = 0;


        await music.play();


        musicPlaying = true;


        musicButton.classList.add(
            "visible"
        );


        /*
            Smooth fade-in
        */

        let volume = 0;


        const fade =
            setInterval(
                () => {

                    volume += .02;


                    if (
                        volume >= .38
                    ) {

                        volume = .38;

                        clearInterval(
                            fade
                        );

                    }


                    music.volume =
                        volume;

                },
                100
            );


    }
    catch (error) {

        console.error(
            "Music error:",
            error
        );

    }

}



/* =================================
   START EXPERIENCE
================================= */

startButton.addEventListener(
    "click",
    async () => {


        if (started) return;


        started = true;


        /*
            IMPORTANT:
            play() happens directly
            inside user's click.
        */

        await startMusic();


        /*
            Fade intro
        */

        intro.style.opacity =
            "0";


        setTimeout(
            () => {

                intro.style.display =
                    "none";

            },
            1500
        );


        /*
            Start story
        */

        startStory();

    }
);



/* =================================
   MUSIC TOGGLE
================================= */

musicButton.addEventListener(
    "click",
    async () => {


        if (
            musicPlaying
        ) {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "♪";

        }

        else {

            try {

                await music.play();

                musicPlaying = true;

                musicButton.textContent =
                    "♫";

            }

            catch (error) {

                console.error(
                    error
                );

            }

        }

    }
);