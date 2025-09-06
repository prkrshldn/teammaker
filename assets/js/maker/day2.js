let final;
let ubqfscoredn = document.getElementById("ubqfscore-dn");
let ubqfscoreup = document.getElementById("ubqfscore-up");
let ubqf2scoredn = document.getElementById("ubqf2score-dn");
let ubqf2scoreup = document.getElementById("ubqf2score-up");
let ubqf3scoredn = document.getElementById("ubqf3score-dn");
let ubqf3scoreup = document.getElementById("ubqf3score-up");
let ubqf4scoredn = document.getElementById("ubqf4score-dn");
let ubqf4scoreup = document.getElementById("ubqf4score-up");
let lbqf2scoredn = document.getElementById("lbqf2score-dn");
let lbqf2scoreup = document.getElementById("lbqf2score-up");
let lbqfscoredn = document.getElementById("lbqfscore-dn");
let lbqfscoreup = document.getElementById("lbqfscore-up");
let ubsf2scoredn = document.getElementById("ubsf2score-dn");
let ubsf2scoreup = document.getElementById("ubsf2score-up");
let ubsfscoredn = document.getElementById("ubsfscore-dn");
let ubsfscoreup = document.getElementById("ubsfscore-up");
let lbsf2scoredn = document.getElementById("lbsf2score-dn");
let lbsf2scoreup = document.getElementById("lbsf2score-up");
let lbsfscoredn = document.getElementById("lbsfscore-dn");
let lbsfscoreup = document.getElementById("lbsfscore-up");
let finalscoredn = document.getElementById("finalscore-dn");
let finalscoreup = document.getElementById("finalscore-up");
let lfinalscoredn = document.getElementById("lfinalscore-dn");
let lfinalscoreup = document.getElementById("lfinalscore-up");
function menu() {
    fetch("assets/js/teams21225.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            rg(data);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the rg function
     * @description - It takes the data from gs.json and helps send the user to the randomly chosen game.
     * @param {*} data - the data that is being passed through.
     */
    function rg(data) {
        console.log(data);
        MsDropdown.make("#ubqf-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf2-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf2-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf3-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf3-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf4-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubqf4-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbqf-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbqf-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbqf2-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbqf2-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubsf-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubsf-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubsf2-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#ubsf2-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbsf-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbsf-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbsf2-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lbsf2-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#final-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#final-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lfinal-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lfinal-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#finalwinner-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#finalwinner-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lfinalwinner-up", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
        MsDropdown.make("#lfinalwinner-dn", {
            byJson: {
                data: data,
                selectedIndex: 0,
                width: 200,
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false,
        });
    }
}
$("#final").click(function () {
    var ubqf1up = $("#ubqf-up option:selected").val();
    var ubqf1upimg = $("#ubqf-up option:selected").data("image");
    var ubqf1dn = $("#ubqf-dn option:selected").val();
    var ubqf1dnimg = $("#ubqf-dn option:selected").data("image");
    var ubqf2up = $("#ubqf2-up option:selected").val();
    var ubqf2upimg = $("#ubqf2-up option:selected").data("image");
    var ubqf2dn = $("#ubqf2-dn option:selected").val();
    var ubqf2dnimg = $("#ubqf2-dn option:selected").data("image");
    var ubqf3up = $("#ubqf3-up option:selected").val();
    var ubqf3upimg = $("#ubqf3-up option:selected").data("image");
    var ubqf3dn = $("#ubqf3-dn option:selected").val();
    var ubqf3dnimg = $("#ubqf3-dn option:selected").data("image");
    var ubqf4up = $("#ubqf4-up option:selected").val();
    var ubqf4upimg = $("#ubqf4-up option:selected").data("image");
    var ubqf4dn = $("#ubqf4-dn option:selected").val();
    var ubqf4dnimg = $("#ubqf4-dn option:selected").data("image");
    var lbqf1up = $("#lbqf-up option:selected").val();
    var lbqf1upimg = $("#lbqf-up option:selected").data("image");
    var lbqf1dn = $("#lbqf-dn option:selected").val();
    var lbqf1dnimg = $("#lbqf-dn option:selected").data("image");
    var lbqf2up = $("#lbqf2-up option:selected").val();
    var lbqf2upimg = $("#lbqf2-up option:selected").data("image");
    var lbqf2dn = $("#lbqf2-dn option:selected").val();
    var lbqf2dnimg = $("#lbqf2-dn option:selected").data("image");
    var ubsfup = $("#ubsf-up option:selected").val();
    var ubsfupimg = $("#ubsf-up option:selected").data("image");
    var ubsfdn = $("#ubsf-dn option:selected").val();
    var ubsfdnimg = $("#ubsf-dn option:selected").data("image");
    var ubsf2up = $("#ubsf2-up option:selected").val();
    var ubsf2upimg = $("#ubsf2-up option:selected").data("image");
    var ubsf2dn = $("#ubsf2-dn option:selected").val();
    var ubsf2dnimg = $("#ubsf2-dn option:selected").data("image");
    var lbsfup = $("#lbsf-up option:selected").val();
    var lbsfupimg = $("#lbsf-up option:selected").data("image");
    var lbsfdn = $("#lbsf-dn option:selected").val();
    var lbsfdnimg = $("#lbsf-dn option:selected").data("image");
    var lbsf2up = $("#lbsf2-up option:selected").val();
    var lbsf2upimg = $("#lbsf2-up option:selected").data("image");
    var lbsf2dn = $("#lbsf2-dn option:selected").val();
    var lbsf2dnimg = $("#lbsf2-dn option:selected").data("image");
    var finalup = $("#final-up option:selected").val();
    var finalupimg = $("#final-up option:selected").data("image");
    var finalwinnerup = $("#finalwinner-up option:selected").val();
    var finalwinnerupimg = $("#finalwinner-up option:selected").data("image");
    var finaldn = $("#final-dn option:selected").val();
    var finaldnimg = $("#final-dn option:selected").data("image");
    var finalwinnerdn = $("#finalwinner-dn option:selected").val();
    var finalwinnerdnimg = $("#finalwinner-dn option:selected").data("image");
    var lfinalup = $("#lfinal-up option:selected").val();
    var lfinalupimg = $("#lfinal-up option:selected").data("image");
    var lfinalwinnerup = $("#lfinalwinner-up option:selected").val();
    var lfinalwinnerupimg = $("#lfinalwinner-up option:selected").data("image");
    var lfinaldn = $("#lfinal-dn option:selected").val();
    var lfinaldnimg = $("#lfinal-dn option:selected").data("image");
    var lfinalwinnerdn = $("#lfinalwinner-dn option:selected").val();
    var lfinalwinnerdnimg = $("#lfinalwinner-dn option:selected").data("image");
    final = `[{ "type": "ubqf1-up", "name": "${ubqf1up}", "img": "${ubqf1upimg}", "score": "${ubqfscoreup.value}" }, { "type": "ubqf1-dn", "name": "${ubqf1dn}", "img": "${ubqf1dnimg}", "score": "${ubqfscoredn.value}" }, { "type": "ubqf2-up", "name": "${ubqf2up}", "img": "${ubqf2upimg}", "score": "${ubqf2scoreup.value}" }, { "type": "ubqf2-dn", "name": "${ubqf2dn}", "img": "${ubqf2dnimg}", "score": "${ubqf2scoredn.value}" }, { "type": "ubqf3-up", "name": "${ubqf3up}", "img": "${ubqf3upimg}", "score": "${ubqf3scoreup.value}" }, { "type": "ubqf3-dn", "name": "${ubqf3dn}", "img": "${ubqf3dnimg}", "score": "${ubqf3scoredn.value}" }, { "type": "ubqf4-up", "name": "${ubqf4up}", "img": "${ubqf4upimg}", "score": "${ubqf4scoreup.value}" }, { "type": "ubqf4-dn", "name": "${ubqf4dn}", "img": "${ubqf4dnimg}", "score": "${ubqf4scoredn.value}" }, { "type": "lbqf1-up", "name": "${lbqf1up}", "img": "${lbqf1upimg}", "score": "${lbqfscoreup.value}" }, { "type": "lbqf1-dn", "name": "${lbqf1dn}", "img": "${lbqf1dnimg}", "score": "${lbqfscoredn.value}" }, { "type": "lbqf2-up", "name": "${lbqf2up}", "img": "${lbqf2upimg}", "score": "${lbqf2scoreup.value}" }, { "type": "lbqf2-dn", "name": "${lbqf2dn}", "img": "${lbqf2dnimg}", "score": "${lbqf2scoredn.value}" }, { "type": "ubsf1-up", "name": "${ubsfup}", "img": "${ubsfupimg}", "score": "${ubsfscoreup.value}" }, { "type": "ubsf1-dn", "name": "${ubsfdn}", "img": "${ubsfdnimg}", "score": "${ubsfscoredn.value}" }, { "type": "ubsf2-up", "name": "${ubsf2up}", "img": "${ubsf2upimg}", "score": "${ubsf2scoreup.value}" }, { "type": "ubsf2-dn", "name": "${ubsf2dn}", "img": "${ubsf2dnimg}", "score": "${ubsf2scoredn.value}" }, { "type": "lbsf1-up", "name": "${lbsfup}", "img": "${lbsfupimg}", "score": "${lbsfscoreup.value}" }, { "type": "lbsf1-dn", "name": "${lbsfdn}", "img": "${lbsfdnimg}", "score": "${lbsfscoredn.value}" }, { "type": "lbsf2-up", "name": "${lbsf2up}", "img": "${lbsf2upimg}", "score": "${lbsf2scoreup.value}" }, { "type": "lbsf2-dn", "name": "${lbsf2dn}", "img": "${lbsf2dnimg}", "score": "${lbsf2scoredn.value}" }, { "type": "ubf-up", "name": "${finalup}", "img": "${finalupimg}", "score": "${finalscoreup.value}" }, { "type": "ubf-dn", "name": "${finaldn}", "img": "${finaldnimg}", "score": "${finalscoredn.value}" }, { "type": "ubf-up", "name": "${finalwinnerup}", "img": "${finalwinnerupimg}", "score": "" }, { "type": "ubf-dn", "name": "${finalwinnerdn}", "img": "${finalwinnerdnimg}", "score": "" }, { "type": "lbf-up", "name": "${lfinalup}", "img": "${lfinalupimg}", "score": "${lfinalscoreup.value}" }, { "type": "lbf-dn", "name": "${lfinaldn}", "img": "${lfinaldnimg}", "score": "${lfinalscoredn.value}" }, { "type": "lbf-up", "name": "${lfinalwinnerup}", "img": "${lfinalwinnerupimg}", "score": "" }, { "type": "lbf-dn", "name": "${lfinalwinnerdn}", "img": "${lfinalwinnerdnimg}", "score": "" }, { "type": "none", "name": "", "img": "none", "score": "" } ]`;
    document.getElementById("jsontext").innerText = final;
    console.log("In case of a fuck up\n" + final);

    frontflip = `${document.getElementById("ubqf-up").msDropdown.selectedIndex}|${document.getElementById("ubqfscore-up").value}|${document.getElementById("ubqf-dn").msDropdown.selectedIndex}|${document.getElementById("ubqfscore-dn").value}|${document.getElementById("ubqf2-up").msDropdown.selectedIndex}|${document.getElementById("ubqf2score-up").value}|${document.getElementById("ubqf2-dn").msDropdown.selectedIndex}|${document.getElementById("ubqf2score-dn").value}|${document.getElementById("ubqf3-up").msDropdown.selectedIndex}|${document.getElementById("ubqf3score-up").value}|${document.getElementById("ubqf3-dn").msDropdown.selectedIndex}|${document.getElementById("ubqf3score-dn").value}|${document.getElementById("ubqf4-up").msDropdown.selectedIndex}|${document.getElementById("ubqf4score-up").value}|${document.getElementById("ubqf4-dn").msDropdown.selectedIndex}|${document.getElementById("ubqf4score-dn").value}|${document.getElementById("lbqf-up").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-up").value}|${document.getElementById("lbqf-dn").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-dn").value}|${document.getElementById("lbqf2-up").msDropdown.selectedIndex}|${document.getElementById("lbqf2score-up").value}|${document.getElementById("lbqf2-dn").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-dn").value}|${document.getElementById("ubsf-up").msDropdown.selectedIndex}|${document.getElementById("ubsfscore-up").value}|${document.getElementById("ubsf-dn").msDropdown.selectedIndex}|${document.getElementById("ubsfscore-dn").value}|${document.getElementById("ubsf2-up").msDropdown.selectedIndex}|${document.getElementById("ubsf2score-up").value}|${document.getElementById("ubsf2-dn").msDropdown.selectedIndex}|${document.getElementById("ubsf2score-dn").value}|${document.getElementById("lbsf-up").msDropdown.selectedIndex}|${document.getElementById("lbsfscore-up").value}|${document.getElementById("lbsf-dn").msDropdown.selectedIndex}|${document.getElementById("lbsfscore-dn").value}|${document.getElementById("lbsf2-up").msDropdown.selectedIndex}|${document.getElementById("lbsf2score-up").value}|${document.getElementById("lbsf2-dn").msDropdown.selectedIndex}|${document.getElementById("lbsf2score-dn").value}|${document.getElementById("final-up").msDropdown.selectedIndex}|${document.getElementById("finalscore-up").value}|${document.getElementById("final-dn").msDropdown.selectedIndex}|${document.getElementById("finalscore-dn").value}|${document.getElementById("lfinal-up").msDropdown.selectedIndex}|${document.getElementById("lfinalscore-up").value}|${document.getElementById("lfinal-dn").msDropdown.selectedIndex}|${document.getElementById("lfinalscore-dn").value}|${document.getElementById("finalwinner-up").msDropdown.selectedIndex}|${document.getElementById("finalwinner-dn").msDropdown.selectedIndex}|${document.getElementById("lfinalwinner-up").msDropdown.selectedIndex}|${document.getElementById("lfinalwinner-dn").msDropdown.selectedIndex}`;
    document.getElementById("importtext").innerText = btoa(frontflip);


});
let counter1 = 0;
function myFunction() {
    let text = document.getElementById("jsontext").innerHTML;
    document.getElementById("jsontext").innerHTML =
        text.replaceAll("../assets/img/teams/", "");
    if (text.includes("../assets/img/teams/")) {
        if (counter1 == 27) {
            counter1 = 0;
            document.getElementById("counterbtn").innerHTML = "👍";
        } else {
            counter1++;
            document.getElementById("counterbtn").innerHTML = counter1;
        }
    }
}

let counter2 = 0;
function myFunction2() {
    let text = document.getElementById("jsontext").innerHTML;
    document.getElementById("jsontext").innerHTML =
        text.replaceAll(".png", "");
    backflip = encodeURIComponent(document.getElementById("jsontext").innerHTML)
    document.getElementById("urltext").innerHTML = backflip;
    if (text.includes(".png")) {
        if (counter2 == 27) {
            counter2 = 0;
            document.getElementById("counter2btn").innerHTML = "👍";
        } else {
            counter2++;
            document.getElementById("counter2btn").innerHTML = counter2;
        }
    }
}

function myFunction3() {
    if (document.getElementById("urltext").value.length == 0) {
        alert("what are you copying? THERES NOTHING TO COPY 😂🫵")
    } else {
        let gold = `http://${window.location.hostname}:${window.location.port}/rlcs/day2.html?r=` + document.getElementById("urltext").value;
        document.getElementById("urltext").select();
        document.getElementById("urltext").setSelectionRange(0, 99999);
        navigator.clipboard.writeText(gold);
        alert("Text Copied! Make sure to submit it to the form when you can :)");
    }
}

function FUCKFUCKPUSSYPUSSYSHITSHITSHIT() {
    let philminigan = atob(document.getElementById("importtext").value);
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50, a51, a52] = philminigan.split('|');
    document.getElementById("ubqf-up").msDropdown.selectedIndex = a1;
    document.getElementById("ubqfscore-up").value = a2;
    document.getElementById("ubqf-dn").msDropdown.selectedIndex = a3;
    document.getElementById("ubqfscore-dn").value = a4;
    document.getElementById("ubqf2-up").msDropdown.selectedIndex = a5;
    document.getElementById("ubqf2score-up").value = a6;
    document.getElementById("ubqf2-dn").msDropdown.selectedIndex = a7;
    document.getElementById("ubqf2score-dn").value = a8;
    document.getElementById("ubqf3-up").msDropdown.selectedIndex = a9;
    document.getElementById("ubqf3score-up").value = a10;
    document.getElementById("ubqf3-dn").msDropdown.selectedIndex = a11;
    document.getElementById("ubqf3score-dn").value = a12;
    document.getElementById("ubqf4-up").msDropdown.selectedIndex = a13;
    document.getElementById("ubqf4score-up").value = a14;
    document.getElementById("ubqf4-dn").msDropdown.selectedIndex = a15;
    document.getElementById("ubqf4score-dn").value = a16;
    document.getElementById("lbqf-up").msDropdown.selectedIndex = a17;
    document.getElementById("lbqfscore-up").value = a18;
    document.getElementById("lbqf-dn").msDropdown.selectedIndex = a19;
    document.getElementById("lbqfscore-dn").value = a20;
    document.getElementById("lbqf2-up").msDropdown.selectedIndex = a21;
    document.getElementById("lbqf2score-up").value = a22;
    document.getElementById("lbqf2-dn").msDropdown.selectedIndex = a23;
    document.getElementById("lbqfscore-dn").value = a24;
    document.getElementById("ubsf-up").msDropdown.selectedIndex = a25;
    document.getElementById("ubsfscore-up").value = a26;
    document.getElementById("ubsf-dn").msDropdown.selectedIndex = a27;
    document.getElementById("ubsfscore-dn").value = a28;
    document.getElementById("ubsf2-up").msDropdown.selectedIndex = a29;
    document.getElementById("ubsf2score-up").value = a30;
    document.getElementById("ubsf2-dn").msDropdown.selectedIndex = a31;
    document.getElementById("ubsf2score-dn").value = a32;
    document.getElementById("lbsf-up").msDropdown.selectedIndex = a33;
    document.getElementById("lbsfscore-up").value = a34;
    document.getElementById("lbsf-dn").msDropdown.selectedIndex = a35;
    document.getElementById("lbsfscore-dn").value = a36;
    document.getElementById("lbsf2-up").msDropdown.selectedIndex = a37;
    document.getElementById("lbsf2score-up").value = a38;
    document.getElementById("lbsf2-dn").msDropdown.selectedIndex = a39;
    document.getElementById("lbsf2score-dn").value = a40;
    document.getElementById("final-up").msDropdown.selectedIndex = a41;
    document.getElementById("finalscore-up").value = a42;
    document.getElementById("final-dn").msDropdown.selectedIndex = a43;
    document.getElementById("finalscore-dn").value = a44;
    document.getElementById("lfinal-up").msDropdown.selectedIndex = a45;
    document.getElementById("lfinalscore-up").value = a46;
    document.getElementById("lfinal-dn").msDropdown.selectedIndex = a47;
    document.getElementById("lfinalscore-dn").value = a48;
    document.getElementById("finalwinner-up").msDropdown.selectedIndex = a49;
    document.getElementById("finalwinner-dn").msDropdown.selectedIndex = a50;
    document.getElementById("lfinalwinner-up").msDropdown.selectedIndex = a51;
    document.getElementById("lfinalwinner-dn").msDropdown.selectedIndex = a52;
}