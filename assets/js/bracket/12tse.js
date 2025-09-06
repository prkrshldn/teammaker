let finaldnimg = document.getElementById("finalimg-dn");
let finalupimg = document.getElementById("finalimg-up");
let semi2dnimg = document.getElementById("semi2img-dn");
let semi2upimg = document.getElementById("semi2img-up");
let semidnimg = document.getElementById("semi1img-dn");
let semiupimg = document.getElementById("semi1img-up");
let qf1upimg = document.getElementById("qf1img-up");
let qf1dnimg = document.getElementById("qf1img-dn");
let qf2upimg = document.getElementById("qf2img-up");
let qf2dnimg = document.getElementById("qf2img-dn");
let qf3upimg = document.getElementById("qf3img-up");
let qf3dnimg = document.getElementById("qf3img-dn");
let qf4upimg = document.getElementById("qf4img-up");
let qf4dnimg = document.getElementById("qf4img-dn");
let r1upimg = document.getElementById("r1img-up");
let r1dnimg = document.getElementById("r1img-dn");
let r2upimg = document.getElementById("r2img-up");
let r2dnimg = document.getElementById("r2img-dn");
let r3upimg = document.getElementById("r3img-up");
let r3dnimg = document.getElementById("r3img-dn");
let r4upimg = document.getElementById("r4img-up");
let r4dnimg = document.getElementById("r4img-dn");
let finaldn = document.getElementById("final-dn");
let finalup = document.getElementById("final-up");
let semi2dn = document.getElementById("semi2-dn");
let semi2up = document.getElementById("semi2-up");
let semidn = document.getElementById("semi1-dn");
let semiup = document.getElementById("semi1-up");
let qf1up = document.getElementById("qf1-up");
let qf1dn = document.getElementById("qf1-dn");
let qf2up = document.getElementById("qf2-up");
let qf2dn = document.getElementById("qf2-dn");
let qf3up = document.getElementById("qf3-up");
let qf3dn = document.getElementById("qf3-dn");
let qf4up = document.getElementById("qf4-up");
let qf4dn = document.getElementById("qf4-dn");
let r1up = document.getElementById("r1-up");
let r1dn = document.getElementById("r1-dn");
let r2up = document.getElementById("r2-up");
let r2dn = document.getElementById("r2-dn");
let r3up = document.getElementById("r3-up");
let r3dn = document.getElementById("r3-dn");
let r4up = document.getElementById("r4-up");
let r4dn = document.getElementById("r4-dn");
let finaldnscore = document.getElementById("finalscore-dn");
let finalupscore = document.getElementById("finalscore-up");
let semi2dnscore = document.getElementById("semi2score-dn");
let semi2upscore = document.getElementById("semi2score-up");
let semidnscore = document.getElementById("semi1score-dn");
let semiupscore = document.getElementById("semi1score-up");
let qf1upscore = document.getElementById("qf1score-up");
let qf1dnscore = document.getElementById("qf1score-dn");
let qf2upscore = document.getElementById("qf2score-up");
let qf2dnscore = document.getElementById("qf2score-dn");
let qf3upscore = document.getElementById("qf3score-up");
let qf3dnscore = document.getElementById("qf3score-dn");
let qf4upscore = document.getElementById("qf4score-up");
let qf4dnscore = document.getElementById("qf4score-dn");
let r1upscore = document.getElementById("r1score-up");
let r1dnscore = document.getElementById("r1score-dn");
let r2upscore = document.getElementById("r2score-up");
let r2dnscore = document.getElementById("r2score-dn");
let r3upscore = document.getElementById("r3score-up");
let r3dnscore = document.getElementById("r3score-dn");
let r4upscore = document.getElementById("r4score-up");
let r4dnscore = document.getElementById("r4score-dn");
let query = new URLSearchParams(window.location.search);
let data = JSON.parse(query.get("r"));
console.log(query.get("r"));
console.log(data);
function RandomGame() {
    rg(data);
    function rg(data) {

        /*
            ROUND 1 1
        */
        r1upscore.innerHTML = data[0].score;
        r1up.innerHTML = data[0].name;
        r1upimg.src = "../assets/img/teams/" + data[0].img + ".png";
        r1upimg.srcset = "../assets/img/teams/" + data[0].img + ".png";
        r1dnscore.innerHTML = data[1].score;
        r1dn.innerHTML = data[1].name;
        r1dnimg.src = "../assets/img/teams/" + data[1].img + ".png";
        r1dnimg.srcset = "../assets/img/teams/" + data[1].img + ".png"

        /*
            ROUND 1 2
        */
        r2upscore.innerHTML = data[2].score;
        r2up.innerHTML = data[2].name;
        r2upimg.src = "../assets/img/teams/" + data[2].img + ".png";
        r2upimg.srcset = "../assets/img/teams/" + data[2].img + ".png";
        r2dnscore.innerHTML = data[3].score;
        r2dn.innerHTML = data[3].name;
        r2dnimg.src = "../assets/img/teams/" + data[3].img + ".png";
        r2dnimg.srcset = "../assets/img/teams/" + data[3].img + ".png"

        /*
            ROUND 1 3
        */
        r3upscore.innerHTML = data[4].score;
        r3up.innerHTML = data[4].name;
        r3upimg.src = "../assets/img/teams/" + data[4].img + ".png";
        r3upimg.srcset = "../assets/img/teams/" + data[4].img + ".png";
        r3dnscore.innerHTML = data[5].score;
        r3dn.innerHTML = data[5].name;
        r3dnimg.src = "../assets/img/teams/" + data[5].img + ".png";
        r3dnimg.srcset = "../assets/img/teams/" + data[5].img + ".png"

        /*
            ROUND 1 4
        */
        r4upscore.innerHTML = data[6].score;
        r4up.innerHTML = data[6].name;
        r4upimg.src = "../assets/img/teams/" + data[6].img + ".png";
        r4upimg.srcset = "../assets/img/teams/" + data[6].img + ".png";
        r4dnscore.innerHTML = data[7].score;
        r4dn.innerHTML = data[7].name;
        r4dnimg.src = "../assets/img/teams/" + data[7].img + ".png";
        r4dnimg.srcset = "../assets/img/teams/" + data[7].img + ".png"

        /*
            QUARTER-FINAL 1
        */
        qf1upscore.innerHTML = data[8].score;
        qf1up.innerHTML = data[8].name;
        qf1upimg.src = "../assets/img/teams/" + data[8].img + ".png";
        qf1upimg.srcset = "../assets/img/teams/" + data[8].img + ".png";
        qf1dnscore.innerHTML = data[9].score;
        qf1dn.innerHTML = data[9].name;
        qf1dnimg.src = "../assets/img/teams/" + data[9].img + ".png";
        qf1dnimg.srcset = "../assets/img/teams/" + data[9].img + ".png"

        /*
            QUARTER-FINAL 2
        */
        qf2upscore.innerHTML = data[10].score;
        qf2up.innerHTML = data[10].name;
        qf2upimg.src = "../assets/img/teams/" + data[10].img + ".png";
        qf2upimg.srcset = "../assets/img/teams/" + data[10].img + ".png";
        qf2dnscore.innerHTML = data[11].score;
        qf2dn.innerHTML = data[11].name;
        qf2dnimg.src = "../assets/img/teams/" + data[11].img + ".png";
        qf2dnimg.srcset = "../assets/img/teams/" + data[11].img + ".png"

        /*
            QUARTER-FINAL 3
        */
        qf3upscore.innerHTML = data[12].score;
        qf3up.innerHTML = data[12].name;
        qf3upimg.src = "../assets/img/teams/" + data[12].img + ".png";
        qf3upimg.srcset = "../assets/img/teams/" + data[12].img + ".png";
        qf3dnscore.innerHTML = data[13].score;
        qf3dn.innerHTML = data[13].name;
        qf3dnimg.src = "../assets/img/teams/" + data[13].img + ".png";
        qf3dnimg.srcset = "../assets/img/teams/" + data[13].img + ".png"

        /*
            QUARTER-FINAL 4
        */
        qf4upscore.innerHTML = data[14].score;
        qf4up.innerHTML = data[14].name;
        qf4upimg.src = "../assets/img/teams/" + data[14].img + ".png";
        qf4upimg.srcset = "../assets/img/teams/" + data[14].img + ".png";
        qf4dnscore.innerHTML = data[15].score;
        qf4dn.innerHTML = data[15].name;
        qf4dnimg.src = "../assets/img/teams/" + data[15].img + ".png";
        qf4dnimg.srcset = "../assets/img/teams/" + data[15].img + ".png"

        /*
            SEMI-FINAL 1
        */
        semiupscore.innerHTML = data[16].score;
        semiup.innerHTML = data[16].name;
        semiupimg.src = "../assets/img/teams/" + data[16].img + ".png";
        semiupimg.srcset = "../assets/img/teams/" + data[16].img + ".png";
        semidnscore.innerHTML = data[17].score;
        semidn.innerHTML = data[17].name;
        semidnimg.src = "../assets/img/teams/" + data[17].img + ".png";
        semidnimg.srcset = "../assets/img/teams/" + data[17].img + ".png";

        /*
            SEMI-FINAL 2
        */
        semi2upscore.innerHTML = data[18].score;
        semi2up.innerHTML = data[18].name;
        semi2upimg.src = "../assets/img/teams/" + data[18].img + ".png";
        semi2upimg.srcset = "../assets/img/teams/" + data[18].img + ".png";
        semi2dnscore.innerHTML = data[19].score;
        semi2dn.innerHTML = data[19].name;
        semi2dnimg.src = "../assets/img/teams/" + data[19].img + ".png";
        semi2dnimg.srcset = "../assets/img/teams/" + data[19].img + ".png";

        /*
            GRAND FINALS
        */
        finalupscore.innerHTML = data[20].score;
        finalup.innerHTML = data[20].name;
        finalupimg.src = "../assets/img/teams/" + data[20].img + ".png";
        finalupimg.srcset = "../assets/img/teams/" + data[20].img + ".png";
        finaldnscore.innerHTML = data[21].score;
        finaldn.innerHTML = data[21].name;
        finaldnimg.src = "../assets/img/teams/" + data[21].img + ".png";
        finaldnimg.srcset = "../assets/img/teams/" + data[21].img + ".png";
    }
}