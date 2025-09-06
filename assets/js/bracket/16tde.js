let ubr1imgup1 = document.getElementById("ubr1img-up-1");
let ubr1imgup2 = document.getElementById("ubr1img-up-2");
let ubr1imgdn1 = document.getElementById("ubr1img-dn-1");
let ubr1imgdn2 = document.getElementById("ubr1img-dn-2");
let ubr1up1 = document.getElementById("ubr1-up-1");
let ubr1up2 = document.getElementById("ubr1-up-2");
let ubr1dn1 = document.getElementById("ubr1-dn-1");
let ubr1dn2 = document.getElementById("ubr1-dn-2");
let ubr1scoreup1 = document.getElementById("ubr1score-up-1");
let ubr1scoreup2 = document.getElementById("ubr1score-up-2");
let ubr1scoredn1 = document.getElementById("ubr1score-dn-1");
let ubr1scoredn2 = document.getElementById("ubr1score-dn-2");
let lbr1imgup1 = document.getElementById("lbr1img-up-1");
let lbr1imgup2 = document.getElementById("lbr1img-up-2");
let lbr1imgdn1 = document.getElementById("lbr1img-dn-1");
let lbr1imgdn2 = document.getElementById("lbr1img-dn-2");
let lbr1up1 = document.getElementById("lbr1-up-1");
let lbr1up2 = document.getElementById("lbr1-up-2");
let lbr1dn1 = document.getElementById("lbr1-dn-1");
let lbr1dn2 = document.getElementById("lbr1-dn-2");
let lbr1scoreup1 = document.getElementById("lbr1score-up-1");
let lbr1scoreup2 = document.getElementById("lbr1score-up-2");
let lbr1scoredn1 = document.getElementById("lbr1score-dn-1");
let lbr1scoredn2 = document.getElementById("lbr1score-dn-2");
let query = new URLSearchParams(window.location.search);
let data = JSON.parse(query.get("r"));
console.log(query.get("r"));
console.log(data);
function RandomGame() {
    rg(data);
    function rg(data) {
        /*
            UPPER-BRACKET ROUND 1
        */
        ubr1scoreup1.innerHTML = data[0].score;
        ubr1up1.innerHTML = data[0].name;
        ubr1imgup1.src = "../assets/img/teams/" + data[0].img + ".png";
        ubr1imgup1.srcset = "../assets/img/teams/" + data[0].img + ".png";
        ubr1scoredn1.innerHTML = data[1].score;
        ubr1dn1.innerHTML = data[1].name;
        ubr1imgdn1.src = "../assets/img/teams/" + data[1].img + ".png";
        ubr1imgdn1.srcset = "../assets/img/teams/" + data[1].img + ".png";

        /*
            UPPER-BRACKET ROUND 1 2
        */
        ubr1scoreup2.innerHTML = data[2].score;
        ubr1up2.innerHTML = data[2].name;
        ubr1imgup2.src = "../assets/img/teams/" + data[2].img + ".png";
        ubr1imgup2.srcset = "../assets/img/teams/" + data[2].img + ".png";
        ubr1scoredn2.innerHTML = data[3].score;
        ubr1dn2.innerHTML = data[3].name;
        ubr1imgdn2.src = "../assets/img/teams/" + data[3].img + ".png";
        ubr1imgdn2.srcset = "../assets/img/teams/" + data[3].img + ".png";

        /*
            LOWER-BRACKET ROUND 1 1
        */
        lbr1scoreup1.innerHTML = data[4].score;
        lbr1up1.innerHTML = data[4].name;
        lbr1imgup1.src = "../assets/img/teams/" + data[4].img + ".png";
        lbr1imgup1.srcset = "../assets/img/teams/" + data[4].img + ".png";
        lbr1scoredn1.innerHTML = data[5].score;
        lbr1dn1.innerHTML = data[5].name;
        lbr1imgdn1.src = "../assets/img/teams/" + data[5].img + ".png";
        lbr1imgdn1.srcset = "../assets/img/teams/" + data[5].img + ".png";

        /*
            LOWER-BRACKET ROUND 1 2
        */
        lbr1scoreup2.innerHTML = data[6].score;
        lbr1up2.innerHTML = data[6].name;
        lbr1imgup2.src = "../assets/img/teams/" + data[6].img + ".png";
        lbr1imgup2.srcset = "../assets/img/teams/" + data[6].img + ".png";
        lbr1scoredn2.innerHTML = data[7].score;
        lbr1dn2.innerHTML = data[7].name;
        lbr1imgdn2.src = "../assets/img/teams/" + data[7].img + ".png";
        lbr1imgdn2.srcset = "../assets/img/teams/" + data[7].img + ".png";

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