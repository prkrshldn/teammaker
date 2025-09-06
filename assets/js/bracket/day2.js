let finaldnimg = document.getElementById("ubf-dn");
let finalupimg = document.getElementById("ubf-up");
let final2dnimg = document.getElementById("lbf-dn");
let final2upimg = document.getElementById("lbf-up");
let semi2dnimg = document.getElementById("ubsf2-dn");
let semi2upimg = document.getElementById("ubsf2-up");
let semildnimg = document.getElementById("lbsf-dn");
let semilupimg = document.getElementById("lbsf-up");
let semil2dnimg = document.getElementById("lbsf2-dn");
let semil2upimg = document.getElementById("lbsf2-up");
let semidnimg = document.getElementById("ubsf-dn");
let semiupimg = document.getElementById("ubsf-up");
let lbqf2dnimg = document.getElementById("lbqf2-dn");
let lbqf2upimg = document.getElementById("lbqf2-up");
let lbqfdnimg = document.getElementById("lbqf-dn");
let lbqfupimg = document.getElementById("lbqf-up");
let ubqf4dnimg = document.getElementById("ubqf4-dn");
let ubqf4upimg = document.getElementById("ubqf4-up");
let ubqf3dnimg = document.getElementById("ubqf3-dn");
let ubqf3upimg = document.getElementById("ubqf3-up");
let ubqf2dnimg = document.getElementById("ubqf2-dn");
let ubqf2upimg = document.getElementById("ubqf2-up");
let ubqfdnimg = document.getElementById("ubqf-dn");
let ubqfupimg = document.getElementById("ubqf-up");
let finalwinner = document.getElementById("ubf-winner");
let finalloser = document.getElementById("ubf-loser");
let final2winner = document.getElementById("lbf-winner");
let final2loser = document.getElementById("lbf-loser");
let finalnamedn = document.getElementById("ubfname-dn");
let finalnameup = document.getElementById("ubfname-up");
let final2namedn = document.getElementById("lbfname-dn");
let final2nameup = document.getElementById("lbfname-up");
let semi2namedn = document.getElementById("ubsf2name-dn");
let semi2nameup = document.getElementById("ubsf2name-up");
let seminamedn = document.getElementById("ubsfname-dn");
let seminameup = document.getElementById("ubsfname-up");
let semil2namedn = document.getElementById("lbsf2name-dn");
let semil2nameup = document.getElementById("lbsf2name-up");
let semilnamedn = document.getElementById("lbsfname-dn");
let semilnameup = document.getElementById("lbsfname-up");
let lbqf2namedn = document.getElementById("lbqf2name-dn");
let lbqf2nameup = document.getElementById("lbqf2name-up");
let lbqfnamedn = document.getElementById("lbqfname-dn");
let lbqfnameup = document.getElementById("lbqfname-up");
let ubqfnamedn = document.getElementById("ubqfname-dn");
let ubqfnameup = document.getElementById("ubqfname-up");
let ubqf2namedn = document.getElementById("ubqf2name-dn");
let ubqf2nameup = document.getElementById("ubqf2name-up");
let ubqf3namedn = document.getElementById("ubqf3name-dn");
let ubqf3nameup = document.getElementById("ubqf3name-up");
let ubqf4namedn = document.getElementById("ubqf4name-dn");
let ubqf4nameup = document.getElementById("ubqf4name-up");
let finalwinnername = document.getElementById("ubfname-winner");
let finallosername = document.getElementById("ubfname-loser");
let final2winnername = document.getElementById("lbfname-winner");
let final2losername = document.getElementById("lbfname-loser");
let finalscoredn = document.getElementById("ubfscore-dn");
let finalscoreup = document.getElementById("ubfscore-up");
let final2scoredn = document.getElementById("lbfscore-dn");
let final2scoreup = document.getElementById("lbfscore-up");
let semi2scoredn = document.getElementById("ubsf2score-dn");
let semi2scoreup = document.getElementById("ubsf2score-up");
let semiscoredn = document.getElementById("ubsfscore-dn");
let semiscoreup = document.getElementById("ubsfscore-up");
let semil2scoredn = document.getElementById("lbsf2score-dn");
let semil2scoreup = document.getElementById("lbsf2score-up");
let semilscoredn = document.getElementById("lbsfscore-dn");
let semilscoreup = document.getElementById("lbsfscore-up");
let lbqf2scoredn = document.getElementById("lbqf2score-dn");
let lbqf2scoreup = document.getElementById("lbqf2score-up");
let lbqfscoredn = document.getElementById("lbqfscore-dn");
let lbqfscoreup = document.getElementById("lbqfscore-up");
let ubqfscoredn = document.getElementById("ubqfscore-dn");
let ubqfscoreup = document.getElementById("ubqfscore-up");
let ubqf2scoredn = document.getElementById("ubqf2score-dn");
let ubqf2scoreup = document.getElementById("ubqf2score-up");
let ubqf3scoredn = document.getElementById("ubqf3score-dn");
let ubqf3scoreup = document.getElementById("ubqf3score-up");
let ubqf4scoredn = document.getElementById("ubqf4score-dn");
let ubqf4scoreup = document.getElementById("ubqf4score-up");
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
            UPPER-BRACKET QUARTER FINALS 3
        */
        ubqf3scoreup.innerHTML = data[4].score;
        ubqf3nameup.innerHTML = data[4].name;
        ubqf3upimg.src = "../assets/img/teams/" + data[4].img + ".png";
        ubqf3upimg.srcset = "../assets/img/teams/" + data[4].img + ".png";
        ubqf3scoredn.innerHTML = data[5].score;
        ubqf3namedn.innerHTML = data[5].name;
        ubqf3dnimg.src = "../assets/img/teams/" + data[5].img + ".png";
        ubqf3dnimg.srcset = "../assets/img/teams/" + data[5].img + ".png";

        /*
            UPPER-BRACKET QUARTER FINALS 4
        */
        ubqf4scoreup.innerHTML = data[6].score;
        ubqf4nameup.innerHTML = data[6].name;
        ubqf4upimg.src = "../assets/img/teams/" + data[6].img + ".png";
        ubqf4upimg.srcset = "../assets/img/teams/" + data[6].img + ".png";
        ubqf4scoredn.innerHTML = data[7].score;
        ubqf4namedn.innerHTML = data[7].name;
        ubqf4dnimg.src = "../assets/img/teams/" + data[7].img + ".png";
        ubqf4dnimg.srcset = "../assets/img/teams/" + data[7].img + ".png";

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
            UPPER-BRACKET SEMI-FINALS 1
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
            UPPER-BRACKET SEMI-FINALS 2
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
            LOWER-BRACKET SEMI-FINALS 1
        */
        semilscoreup.innerHTML = data[16].score;
        semilnameup.innerHTML = data[16].name;
        semilupimg.src = "../assets/img/teams/" + data[16].img + ".png";
        semilupimg.srcset = "../assets/img/teams/" + data[16].img + ".png";
        semilscoredn.innerHTML = data[17].score;
        semilnamedn.innerHTML = data[17].name;
        semildnimg.src = "../assets/img/teams/" + data[17].img + ".png";
        semildnimg.srcset = "../assets/img/teams/" + data[17].img + ".png";

        /*
            LOWER-BRACKET SEMI-FINALS 2
        */
        semil2scoreup.innerHTML = data[18].score;
        semil2nameup.innerHTML = data[18].name;
        semil2upimg.src = "../assets/img/teams/" + data[18].img + ".png";
        semil2upimg.srcset = "../assets/img/teams/" + data[18].img + ".png";
        semil2scoredn.innerHTML = data[19].score;
        semil2namedn.innerHTML = data[19].name;
        semil2dnimg.src = "../assets/img/teams/" + data[19].img + ".png";
        semil2dnimg.srcset = "../assets/img/teams/" + data[19].img + ".png";

        /*
            UPPER-BRACKET FINAL
        */
        finalscoreup.innerHTML = data[20].score;
        finalnameup.innerHTML = data[20].name;
        finalupimg.src = "../assets/img/teams/" + data[20].img + ".png";
        finalupimg.srcset = "../assets/img/teams/" + data[20].img + ".png";
        finalscoredn.innerHTML = data[21].score;
        finalnamedn.innerHTML = data[21].name;
        finaldnimg.src = "../assets/img/teams/" + data[21].img + ".png";
        finaldnimg.srcset = "../assets/img/teams/" + data[21].img + ".png";
        // WHO WON???
        finalwinnername.innerHTML = data[22].name;
        finalwinner.src = "../assets/img/teams/" + data[22].img + ".png";
        finalwinner.srcset = "../assets/img/teams/" + data[22].img + ".png";
        // WHO LOST??
        finallosername.innerHTML = data[23].name;
        finalloser.src = "../assets/img/teams/" + data[23].img + ".png";
        finalloser.srcset = "../assets/img/teams/" + data[23].img + ".png";

        /*
            LOSER-BRACKET FINAL
        */
        final2scoreup.innerHTML = data[24].score;
        final2nameup.innerHTML = data[24].name;
        final2upimg.src = "../assets/img/teams/" + data[24].img + ".png";
        final2upimg.srcset = "../assets/img/teams/" + data[24].img + ".png";
        final2scoredn.innerHTML = data[25].score;
        final2namedn.innerHTML = data[25].name;
        final2dnimg.src = "../assets/img/teams/" + data[25].img + ".png";
        final2dnimg.srcset = "../assets/img/teams/" + data[25].img + ".png";
        // WHO WON???
        final2winnername.innerHTML = data[26].name;
        final2winner.src = "../assets/img/teams/" + data[26].img + ".png";
        final2winner.srcset = "../assets/img/teams/" + data[26].img + ".png";
        // WHO LOST??
        final2losername.innerHTML = data[27].name;
        final2loser.src = "../assets/img/teams/" + data[27].img + ".png";
        final2loser.srcset = "../assets/img/teams/" + data[27].img + ".png";
    }
}