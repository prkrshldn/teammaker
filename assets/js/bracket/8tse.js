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
let query = new URLSearchParams(window.location.search);
let data = JSON.parse(query.get("r"));
console.log(query.get("r"));
console.log(data);
function RandomGame() {
    rg(data);
    function rg(data) {

        /*
            QUARTER-FINAL 1
        */
        qf1upscore.innerHTML = data[0].score;
        qf1up.innerHTML = data[0].name;
        qf1upimg.src = "../assets/img/teams/" + data[0].img + ".png";
        qf1upimg.srcset = "../assets/img/teams/" + data[0].img + ".png";
        qf1dnscore.innerHTML = data[1].score;
        qf1dn.innerHTML = data[1].name;
        qf1dnimg.src = "../assets/img/teams/" + data[1].img + ".png";
        qf1dnimg.srcset = "../assets/img/teams/" + data[1].img + ".png"

        /*
            QUARTER-FINAL 2
        */
        qf2upscore.innerHTML = data[2].score;
        qf2up.innerHTML = data[2].name;
        qf2upimg.src = "../assets/img/teams/" + data[2].img + ".png";
        qf2upimg.srcset = "../assets/img/teams/" + data[2].img + ".png";
        qf2dnscore.innerHTML = data[3].score;
        qf2dn.innerHTML = data[3].name;
        qf2dnimg.src = "../assets/img/teams/" + data[3].img + ".png";
        qf2dnimg.srcset = "../assets/img/teams/" + data[3].img + ".png"

        /*
            QUARTER-FINAL 3
        */
        qf3upscore.innerHTML = data[4].score;
        qf3up.innerHTML = data[4].name;
        qf3upimg.src = "../assets/img/teams/" + data[4].img + ".png";
        qf3upimg.srcset = "../assets/img/teams/" + data[4].img + ".png";
        qf3dnscore.innerHTML = data[5].score;
        qf3dn.innerHTML = data[5].name;
        qf3dnimg.src = "../assets/img/teams/" + data[5].img + ".png";
        qf3dnimg.srcset = "../assets/img/teams/" + data[5].img + ".png"

        /*
            QUARTER-FINAL 4
        */
        qf4upscore.innerHTML = data[6].score;
        qf4up.innerHTML = data[6].name;
        qf4upimg.src = "../assets/img/teams/" + data[6].img + ".png";
        qf4upimg.srcset = "../assets/img/teams/" + data[6].img + ".png";
        qf4dnscore.innerHTML = data[7].score;
        qf4dn.innerHTML = data[7].name;
        qf4dnimg.src = "../assets/img/teams/" + data[7].img + ".png";
        qf4dnimg.srcset = "../assets/img/teams/" + data[7].img + ".png"

        /*
            SEMI-FINAL 1
        */
        semiupscore.innerHTML = data[8].score;
        semiup.innerHTML = data[8].name;
        semiupimg.src = "../assets/img/teams/" + data[8].img + ".png";
        semiupimg.srcset = "../assets/img/teams/" + data[8].img + ".png";
        semidnscore.innerHTML = data[9].score;
        semidn.innerHTML = data[9].name;
        semidnimg.src = "../assets/img/teams/" + data[9].img + ".png";
        semidnimg.srcset = "../assets/img/teams/" + data[9].img + ".png";

        /*
            SEMI-FINAL 2
        */
        semi2upscore.innerHTML = data[10].score;
        semi2up.innerHTML = data[10].name;
        semi2upimg.src = "../assets/img/teams/" + data[10].img + ".png";
        semi2upimg.srcset = "../assets/img/teams/" + data[10].img + ".png";
        semi2dnscore.innerHTML = data[11].score;
        semi2dn.innerHTML = data[11].name;
        semi2dnimg.src = "../assets/img/teams/" + data[11].img + ".png";
        semi2dnimg.srcset = "../assets/img/teams/" + data[11].img + ".png";

        /*
            GRAND FINALS
        */
        finalupscore.innerHTML = data[12].score;
        finalup.innerHTML = data[12].name;
        finalupimg.src = "../assets/img/teams/" + data[12].img + ".png";
        finalupimg.srcset = "../assets/img/teams/" + data[12].img + ".png";
        finaldnscore.innerHTML = data[13].score;
        finaldn.innerHTML = data[13].name;
        finaldnimg.src = "../assets/img/teams/" + data[13].img + ".png";
        finaldnimg.srcset = "../assets/img/teams/" + data[13].img + ".png";
    }
}