const particleCanvas =
    document.getElementById(
        "particleCanvas"
    );

const particleCtx =
    particleCanvas.getContext("2d");


let particles = [];


function resizeParticles() {

    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    particleCanvas.width =
        window.innerWidth * dpr;


    particleCanvas.height =
        window.innerHeight * dpr;


    particleCanvas.style.width =
        window.innerWidth + "px";


    particleCanvas.style.height =
        window.innerHeight + "px";


    particleCtx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );
}


function createParticles() {

    particles = [];


    for (
        let i = 0;
        i < 28;
        i++
    ) {

        particles.push({

            x:
                Math.random()
                * window.innerWidth,

            y:
                window.innerHeight *
                (.42 +
                    Math.random() * .35),

            radius:
                Math.random()
                * 1.5
                + .4,

            speed:
                Math.random()
                * .25
                + .08,

            alpha:
                Math.random()
                * .5
                + .2,

            phase:
                Math.random()
                * Math.PI * 2

        });

    }

}


function animateParticles(time) {

    particleCtx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );


    particles.forEach(
        particle => {

            particle.y -=
                particle.speed;


            const x =
                particle.x +
                Math.sin(
                    time * .001 +
                    particle.phase
                ) * 8;


            const alpha =

                particle.alpha *
                (
                    .65 +
                    Math.sin(
                        time * .003 +
                        particle.phase
                    ) * .35
                );


            particleCtx.beginPath();


            particleCtx.arc(
                x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );


            particleCtx.fillStyle =

                `rgba(
                    255,
                    225,
                    130,
                    ${alpha}
                )`;


            particleCtx.shadowBlur =
                12;


            particleCtx.shadowColor =
                "#ffd86a";


            particleCtx.fill();


            particleCtx.shadowBlur =
                0;


            if (
                particle.y < 0
            ) {

                particle.y =
                    window.innerHeight;

            }

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


resizeParticles();

createParticles();


window.addEventListener(
    "resize",
    () => {

        resizeParticles();

        createParticles();

    }
);


requestAnimationFrame(
    animateParticles
);



/* =================================
   GOLDEN BURST
================================= */

function goldenBurst(
    x,
    y
) {

    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const angle =
            Math.random()
            * Math.PI
            * 2;


        const speed =
            Math.random()
            * 4
            + 1;


        particles.push({

            x: x,

            y: y,

            radius:
                Math.random()
                * 2
                + 1,

            speed: speed,

            alpha: 1,

            phase: angle

        });

    }

}