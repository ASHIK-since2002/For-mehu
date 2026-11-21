const riverCanvas =
    document.getElementById("riverCanvas");

const riverCtx =
    riverCanvas.getContext("2d");



function resizeRiver() {

    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    riverCanvas.width =
        window.innerWidth * dpr;


    riverCanvas.height =
        window.innerHeight * dpr;


    riverCanvas.style.width =
        window.innerWidth + "px";


    riverCanvas.style.height =
        window.innerHeight + "px";


    riverCtx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );
}



function drawRiver(time) {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    riverCtx.clearRect(
        0,
        0,
        width,
        height
    );


    const horizon =
        height * 0.585;


    /* WATER */

    const waterGradient =
        riverCtx.createLinearGradient(
            0,
            horizon,
            0,
            height
        );


    waterGradient.addColorStop(
        0,
        "#102451"
    );


    waterGradient.addColorStop(
        0.45,
        "#081735"
    );


    waterGradient.addColorStop(
        1,
        "#020714"
    );


    riverCtx.fillStyle =
        waterGradient;


    riverCtx.fillRect(
        0,
        horizon,
        width,
        height - horizon
    );



    /* LARGE SLOW WAVES */

    for (
        let row = 0;
        row < 30;
        row++
    ) {

        const y =
            horizon +
            row * 16;


        riverCtx.beginPath();


        for (
            let x = -30;
            x <= width + 30;
            x += 7
        ) {


            const wave =

                Math.sin(
                    x * 0.025 +
                    time * 0.0011 +
                    row * 0.72
                ) * 2.5;


            const secondWave =

                Math.sin(
                    x * 0.06 -
                    time * 0.0007
                ) * .8;


            const finalY =
                y +
                wave +
                secondWave;


            if (x === -30) {

                riverCtx.moveTo(
                    x,
                    finalY
                );

            } else {

                riverCtx.lineTo(
                    x,
                    finalY
                );

            }

        }


        const opacity =
            Math.max(
                .035,
                .16 - row * .003
            );


        riverCtx.strokeStyle =
            `rgba(
                92,
                126,
                184,
                ${opacity}
            )`;


        riverCtx.lineWidth = 1;


        riverCtx.stroke();

    }



    /* MOON REFLECTION */

    const center =
        width / 2;


    for (
        let i = 0;
        i < 19;
        i++
    ) {


        const y =
            horizon +
            10 +
            i * 12;


        const reflectionWidth =
            22 +
            i * 6;


        const movement =

            Math.sin(
                time * .0013 +
                i
            ) * 10;


        riverCtx.beginPath();


        riverCtx.moveTo(
            center -
            reflectionWidth +
            movement,
            y
        );


        riverCtx.lineTo(
            center +
            reflectionWidth +
            movement,
            y
        );


        riverCtx.strokeStyle =

            `rgba(
                255,
                240,
                184,
                ${Math.max(
                .025,
                .19 - i * .009
            )}
            )`;


        riverCtx.lineWidth =
            2;


        riverCtx.stroke();

    }


    requestAnimationFrame(
        drawRiver
    );

}



resizeRiver();


window.addEventListener(
    "resize",
    resizeRiver
);


requestAnimationFrame(
    drawRiver
);