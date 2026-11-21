const mainMessage =
    document.getElementById(
        "mainMessage"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );

const bouquet =
    document.getElementById(
        "bouquet"
    );



function startStory() {


    /*
        INTRO শেষ হওয়ার পর
        bouquet আসে
    */


    setTimeout(
        () => {

            mainMessage.classList.add(
                "show"
            );

        },
        2300
    );



    /*
        কিছুক্ষণ পরে
        second message
    */


    setTimeout(
        () => {

            finalMessage.classList.add(
                "show"
            );

        },
        7200
    );

}



/* =================================
   BOUQUET INTERACTION
================================= */

bouquet.addEventListener(
    "click",
    event => {

        const rect =
            bouquet.getBoundingClientRect();


        goldenBurst(

            rect.left +
            rect.width / 2,

            rect.top +
            rect.height / 2

        );

    }
);