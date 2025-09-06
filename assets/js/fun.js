let finaldnimg = document.getElementById("final-dn");
let finalupimg = document.getElementById("final-up");
let semi2dnimg = document.getElementById("semi2-dn");
let semi2upimg = document.getElementById("semi2-up");
let semidnimg = document.getElementById("semi-dn");
let semiupimg = document.getElementById("semi-up");
let lbqf2dnimg = document.getElementById("lbqf2-dn");
let lbqf2upimg = document.getElementById("lbqf2-up");
let lbqfdnimg = document.getElementById("lbqf-dn");
let lbqfupimg = document.getElementById("lbqf-up");
let ubqf2dnimg = document.getElementById("ubqf2-dn");
let ubqf2upimg = document.getElementById("ubqf2-up");
let ubqfdnimg = document.getElementById("ubqf-dn");
let ubqfupimg = document.getElementById("ubqf-up");
let lbr12dnimg = document.getElementById("lbr12-dn");
let lbr12upimg = document.getElementById("lbr12-up");
let lbr1dnimg = document.getElementById("lbr1-dn");
let lbr1upimg = document.getElementById("lbr1-up");
let finalnamedn = document.getElementById("finalname-dn");
let finalnameup = document.getElementById("finalname-up");
let semi2namedn = document.getElementById("semi2name-dn");
let semi2nameup = document.getElementById("semi2name-up");
let seminamedn = document.getElementById("seminame-dn");
let seminameup = document.getElementById("seminame-up");
let lbqf2namedn = document.getElementById("lbqf2name-dn");
let lbqf2nameup = document.getElementById("lbqf2name-up");
let lbqfnamedn = document.getElementById("lbqfname-dn");
let lbqfnameup = document.getElementById("lbqfname-up");
let lbr1namedn = document.getElementById("lbr1name-dn");
let lbr1nameup = document.getElementById("lbr1name-up");
let lbr12namedn = document.getElementById("lbr12name-dn");
let lbr12nameup = document.getElementById("lbr12name-up");
let ubqfnamedn = document.getElementById("ubqfname-dn");
let ubqfnameup = document.getElementById("ubqfname-up");
let ubqf2namedn = document.getElementById("ubqf2name-dn");
let ubqf2nameup = document.getElementById("ubqf2name-up");
let finalscoredn = document.getElementById("finalscore-dn");
let finalscoreup = document.getElementById("finalscore-up");
let semi2scoredn = document.getElementById("semi2score-dn");
let semi2scoreup = document.getElementById("semi2score-up");
let semiscoredn = document.getElementById("semiscore-dn");
let semiscoreup = document.getElementById("semiscore-up");
let lbqf2scoredn = document.getElementById("lbqf2score-dn");
let lbqf2scoreup = document.getElementById("lbqf2score-up");
let lbqfscoredn = document.getElementById("lbqfscore-dn");
let lbqfscoreup = document.getElementById("lbqfscore-up");
let lbr1scoredn = document.getElementById("lbr1score-dn");
let lbr1scoreup = document.getElementById("lbr1score-up");
let lbr12scoredn = document.getElementById("lbr12score-dn");
let lbr12scoreup = document.getElementById("lbr12score-up");
let ubqfscoredn = document.getElementById("ubqfscore-dn");
let ubqfscoreup = document.getElementById("ubqfscore-up");
let ubqf2scoredn = document.getElementById("ubqf2score-dn");
let ubqf2scoreup = document.getElementById("ubqf2score-up");
let query = new URLSearchParams(window.location.search);
let data = JSON.parse(query.get("r"));
console.log(query.get("r"));
console.log(data);
function RandomGame() {
    rg(data);
    function rg(data) {
        /*
            UPPER-BRACKET QUARTER FINALS 1
        */
        ubqfscoreup.innerHTML = data[0].score;
        ubqfnameup.innerHTML = data[0].name;
        ubqfupimg.src = "../assets/img/teams/" + data[0].img + ".png";
        ubqfupimg.srcset = "../assets/img/teams/" + data[0].img + ".png";
        ubqfscoredn.innerHTML = data[1].score;
        ubqfnamedn.innerHTML = data[1].name;
        ubqfdnimg.src = "../assets/img/teams/" + data[1].img + ".png";
        ubqfdnimg.srcset = "../assets/img/teams/" + data[1].img + ".png";

        /*
            UPPER-BRACKET QUARTER FINALS 2
        */
        ubqf2scoreup.innerHTML = data[2].score;
        ubqf2nameup.innerHTML = data[2].name;
        ubqf2upimg.src = "../assets/img/teams/" + data[2].img + ".png";
        ubqf2upimg.srcset = "../assets/img/teams/" + data[2].img + ".png";
        ubqf2scoredn.innerHTML = data[3].score;
        ubqf2namedn.innerHTML = data[3].name;
        ubqf2dnimg.src = "../assets/img/teams/" + data[3].img + ".png";
        ubqf2dnimg.srcset = "../assets/img/teams/" + data[3].img + ".png";

        /*
            LOWER-BRACKET ROUND 1 1
        */
        lbr1scoreup.innerHTML = data[4].score;
        lbr1nameup.innerHTML = data[4].name;
        lbr1upimg.src = "../assets/img/teams/" + data[4].img + ".png";
        lbr1upimg.srcset = "../assets/img/teams/" + data[4].img + ".png";
        lbr1scoredn.innerHTML = data[5].score;
        lbr1namedn.innerHTML = data[5].name;
        lbr1dnimg.src = "../assets/img/teams/" + data[5].img + ".png";
        lbr1dnimg.srcset = "../assets/img/teams/" + data[5].img + ".png";

        /*
            LOWER-BRACKET ROUND 1 2
        */
        lbr12scoreup.innerHTML = data[6].score;
        lbr12nameup.innerHTML = data[6].name;
        lbr12upimg.src = "../assets/img/teams/" + data[6].img + ".png";
        lbr12upimg.srcset = "../assets/img/teams/" + data[6].img + ".png";
        lbr12scoredn.innerHTML = data[7].score;
        lbr12namedn.innerHTML = data[7].name;
        lbr12dnimg.src = "../assets/img/teams/" + data[7].img + ".png";
        lbr12dnimg.srcset = "../assets/img/teams/" + data[7].img + ".png";

        /*
            LOWER-BRACKET QUARTER FINALS 1
        */
        lbqfscoreup.innerHTML = data[8].score;
        lbqfnameup.innerHTML = data[8].name;
        lbqfupimg.src = "../assets/img/teams/" + data[8].img + ".png";
        lbqfupimg.srcset = "../assets/img/teams/" + data[8].img + ".png";
        lbqfscoredn.innerHTML = data[9].score;
        lbqfnamedn.innerHTML = data[9].name;
        lbqfdnimg.src = "../assets/img/teams/" + data[9].img + ".png";
        lbqfdnimg.srcset = "../assets/img/teams/" + data[9].img + ".png";

        /*
            LOWER-BRACKET QUARTER FINALS 2
        */
        lbqf2scoreup.innerHTML = data[10].score;
        lbqf2nameup.innerHTML = data[10].name;
        lbqf2upimg.src = "../assets/img/teams/" + data[10].img + ".png";
        lbqf2upimg.srcset = "../assets/img/teams/" + data[10].img + ".png";
        lbqf2scoredn.innerHTML = data[11].score;
        lbqf2namedn.innerHTML = data[11].name;
        lbqf2dnimg.src = "../assets/img/teams/" + data[11].img + ".png";
        lbqf2dnimg.srcset = "../assets/img/teams/" + data[11].img + ".png";

        /*
            LOWER-BRACKET ROUND 1 2
        */
        semiscoreup.innerHTML = data[12].score;
        seminameup.innerHTML = data[12].name;
        semiupimg.src = "../assets/img/teams/" + data[12].img + ".png";
        semiupimg.srcset = "../assets/img/teams/" + data[12].img + ".png";
        semiscoredn.innerHTML = data[13].score;
        seminamedn.innerHTML = data[13].name;
        semidnimg.src = "../assets/img/teams/" + data[13].img + ".png";
        semidnimg.srcset = "../assets/img/teams/" + data[13].img + ".png";

        /*
            LOWER-BRACKET QUARTER FINALS 1
        */
        semi2scoreup.innerHTML = data[14].score;
        semi2nameup.innerHTML = data[14].name;
        semi2upimg.src = "../assets/img/teams/" + data[14].img + ".png";
        semi2upimg.srcset = "../assets/img/teams/" + data[14].img + ".png";
        semi2scoredn.innerHTML = data[15].score;
        semi2namedn.innerHTML = data[15].name;
        semi2dnimg.src = "../assets/img/teams/" + data[15].img + ".png";
        semi2dnimg.srcset = "../assets/img/teams/" + data[15].img + ".png";

        /*
            LOWER-BRACKET QUARTER FINALS 2
        */
        finalscoreup.innerHTML = data[16].score;
        finalnameup.innerHTML = data[16].name;
        finalupimg.src = "../assets/img/teams/" + data[16].img + ".png";
        finalupimg.srcset = "../assets/img/teams/" + data[16].img + ".png";
        finalscoredn.innerHTML = data[17].score;
        finalnamedn.innerHTML = data[17].name;
        finaldnimg.src = "../assets/img/teams/" + data[17].img + ".png";
        finaldnimg.srcset = "../assets/img/teams/" + data[17].img + ".png";
    }
}