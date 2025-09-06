let final;
let backflip;
let frontflip;
let finaldn = document.getElementById("final-dn");
let finalup = document.getElementById("final-up");
let semi2dn = document.getElementById("semi2-dn");
let semi2up = document.getElementById("semi2-up");
let semidn = document.getElementById("semi-dn");
let semiup = document.getElementById("semi-up");
let lbqf2dn = document.getElementById("lbqf2-dn");
let lbqf2up = document.getElementById("lbqf2-up");
let lbqfdn = document.getElementById("lbqf-dn");
let lbqfup = document.getElementById("lbqf-up");
let ubqf2dn = document.getElementById("ubqf2-dn");
let ubqf2up = document.getElementById("ubqf2-up");
let ubqfdn = document.getElementById("ubqf-dn");
let ubqfup = document.getElementById("ubqf-up");
let lbr12dn = document.getElementById("lbr12-dn");
let lbr12up = document.getElementById("lbr12-up");
let lbr1dn = document.getElementById("lbr1-dn");
let lbr1up = document.getElementById("lbr1-up");
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
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#ubqf-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#ubqf2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#ubqf2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbr1-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbr1-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbr12-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbr12-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbqf-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbqf-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbqf2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#lbqf2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#semi-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#semi-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#semi2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#semi2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#final-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
        MsDropdown.make("#final-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 115,
            enableCheckbox: false
        });
    }
}
$("#final").click(function () {
    var ubqf1up = $('#ubqf-up option:selected').val();
    var ubqf1upimg = $('#ubqf-up option:selected').data('image');
    var ubqf1dn = $('#ubqf-dn option:selected').val();
    var ubqf1dnimg = $('#ubqf-dn option:selected').data('image');
    var ubqf2up = $('#ubqf2-up option:selected').val();
    var ubqf2upimg = $('#ubqf2-up option:selected').data('image');
    var ubqf2dn = $('#ubqf2-dn option:selected').val();
    var ubqf2dnimg = $('#ubqf2-dn option:selected').data('image');
    var lbr1up = $('#lbr1-up option:selected').val();
    var lbr1upimg = $('#lbr1-up option:selected').data('image');
    var lbr1dn = $('#lbr1-dn option:selected').val();
    var lbr1dnimg = $('#lbr1-dn option:selected').data('image');
    var lbr2up = $('#lbr12-up option:selected').val();
    var lbr2upimg = $('#lbr12-up option:selected').data('image');
    var lbr2dn = $('#lbr12-dn option:selected').val();
    var lbr2dnimg = $('#lbr12-dn option:selected').data('image');
    var lbqfup = $('#lbqf-up option:selected').val();
    var lbqfupimg = $('#lbqf-up option:selected').data('image');
    var lbqfdnn = $('#lbqf-dn option:selected').val();
    var lbqfdnnimg = $('#lbqf-dn option:selected').data('image');
    var lbqf2up = $('#lbqf2-up option:selected').val();
    var lbqf2upimg = $('#lbqf2-up option:selected').data('image');
    var lbqf2dn = $('#lbqf2-dn option:selected').val();
    var lbqf2dnimg = $('#lbqf2-dn option:selected').data('image');
    var semiup = $('#semi-up option:selected').val();
    var semiupimg = $('#semi-up option:selected').data('image');
    var semidn = $('#semi-dn option:selected').val();
    var semidnimg = $('#semi-dn option:selected').data('image');
    var semi2up = $('#semi2-up option:selected').val();
    var semi2upimg = $('#semi2-up option:selected').data('image');
    var semi2dn = $('#semi2-dn option:selected').val();
    var semi2dnimg = $('#semi2-dn option:selected').data('image');
    var finalup = $('#final-up option:selected').val();
    var finalupimg = $('#final-up option:selected').data('image');
    var finaldn = $('#final-dn option:selected').val();
    var finaldnimg = $('#final-dn option:selected').data('image');
    final = `[{"type": "ubqf1-up","name": "${ubqf1up}","img": "${ubqf1upimg}","score": "${ubqfscoreup.value}"},{"type": "ubqf1-dn","name": "${ubqf1dn}","img": "${ubqf1dnimg}","score": "${ubqfscoredn.value}"},{"type": "ubqf2-up","name": "${ubqf2up}","img": "${ubqf2upimg}","score": "${ubqf2scoreup.value}"},{"type": "ubqf2-dn","name": "${ubqf2dn}","img": "${ubqf2dnimg}","score": "${ubqf2scoredn.value}"},{"type": "lbr1-up","name": "${lbr1up}","img": "${lbr1upimg}","score": "${lbr1scoreup.value}"},{"type": "lbr1-dn","name": "${lbr1dn}","img": "${lbr1dnimg}","score": "${lbr1scoredn.value}"},{"type": "lbr12-up","name": "${lbr2up}","img": "${lbr2upimg}","score": "${lbr12scoreup.value}"},{"type": "lbr12-dn","name": "${lbr2dn}","img": "${lbr2dnimg}","score": "${lbr12scoredn.value}"},{"type": "lbqf1-up","name": "${lbqfup}","img": "${lbqfupimg}","score": "${lbqfscoreup.value}"},{"type": "ubqf2-up","name": "${lbqfdnn}","img": "${lbqfdnnimg}","score": "${lbqfscoredn.value}"},{"type": "lbqf1-up","name": "${lbqf2up}","img": "${lbqf2upimg}","score": "${lbqf2scoreup.value}"},{"type": "ubqf2-up","name": "${lbqf2dn}","img": "${lbqf2dnimg}","score": "${lbqf2scoredn.value}"},{"type": "ubqf2-dn","name": "${semiup}","img": "${semiupimg}","score": "${semiscoreup.value}"},{"type": "ubqf2-dn","name": "${semidn}","img": "${semidnimg}","score": "${semiscoredn.value}"},{"type": "ubqf2-dn","name": "${semi2up}","img": "${semi2upimg}","score": "${semi2scoreup.value}"},{"type": "ubqf1-dn","name": "${semi2dn}","img": "${semi2dnimg}","score": "${semi2scoredn.value}"},{"type": "ubqf2-dn","name": "${finalup}","img": "${finalupimg}","score": "${finalscoreup.value}"},{"type": "ubqf2-dn","name": "${finaldn}","img": "${finaldnimg}","score": "${finalscoredn.value}"},{"type": "none","name": "","img": "none","score": ""}]`
    document.getElementById("jsontext").innerText = final;
    console.log("In case of a fuck up\n" + final);

    frontflip = `${document.getElementById("ubqf-up").msDropdown.selectedIndex}|${document.getElementById("ubqfscore-up").value}|${document.getElementById("ubqf-dn").msDropdown.selectedIndex}|${document.getElementById("ubqfscore-dn").value}|${document.getElementById("ubqf2-up").msDropdown.selectedIndex}|${document.getElementById("ubqf2score-up").value}|${document.getElementById("ubqf2-dn").msDropdown.selectedIndex}|${document.getElementById("ubqf2score-dn").value}|${document.getElementById("lbr1-up").msDropdown.selectedIndex}|${document.getElementById("lbr1score-up").value}|${document.getElementById("lbr1-dn").msDropdown.selectedIndex}|${document.getElementById("lbr1score-dn").value}|${document.getElementById("lbr12-up").msDropdown.selectedIndex}|${document.getElementById("lbr12score-up").value}|${document.getElementById("lbr12-dn").msDropdown.selectedIndex}|${document.getElementById("lbr12score-dn").value}|${document.getElementById("lbqf-up").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-up").value}|${document.getElementById("lbqf-dn").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-dn").value}|${document.getElementById("lbqf2-up").msDropdown.selectedIndex}|${document.getElementById("lbqf2score-up").value}|${document.getElementById("lbqf2-dn").msDropdown.selectedIndex}|${document.getElementById("lbqfscore-dn").value}|${document.getElementById("semi-up").msDropdown.selectedIndex}|${document.getElementById("semiscore-up").value}|${document.getElementById("semi-dn").msDropdown.selectedIndex}|${document.getElementById("semiscore-dn").value}|${document.getElementById("semi2-up").msDropdown.selectedIndex}|${document.getElementById("semi2score-up").value}|${document.getElementById("semi2-dn").msDropdown.selectedIndex}|${document.getElementById("semi2score-dn").value}|${document.getElementById("final-up").msDropdown.selectedIndex}|${document.getElementById("finalscore-up").value}|${document.getElementById("final-dn").msDropdown.selectedIndex}|${document.getElementById("finalscore-dn").value}`;
    document.getElementById("importtext").innerText = btoa(frontflip);


});

let winner;
let loser;
function lunathekiller() {
    const inputs = document.querySelectorAll(".pepper");
    if (inputs.length >= 2) { // Ensure there are at least two inputs to compare
        if (inputs[0].value != "") {
            if (inputs[0].value > inputs[1].value) {
                // Values are equal
                winner = document.getElementById("ubqf-up").msDropdown.selectedIndex;
                document.getElementById("semi2-dn").msDropdown.selectedIndex = winner;
                loser = document.getElementById("ubqf-dn").msDropdown.selectedIndex;
                document.getElementById("lbqf-up").msDropdown.selectedIndex = loser;
            } else {
                // Values are different
                winner = document.getElementById("ubqf-dn").msDropdown.selectedIndex;
                document.getElementById("semi2-dn").msDropdown.selectedIndex = winner;
                loser = document.getElementById("ubqf-up").msDropdown.selectedIndex;
                document.getElementById("lbqf-up").msDropdown.selectedIndex = loser;
            }
        } else {
            document.getElementById("semi2-dn").msDropdown.selectedIndex = 0;
        }
        if (inputs[2].value != "") {
            if (inputs[2].value > inputs[3].value) {
                // Values are equal
                winner = document.getElementById("ubqf2-up").msDropdown.selectedIndex;
                document.getElementById("semi-dn").msDropdown.selectedIndex = winner;
                loser = document.getElementById("ubqf2-dn").msDropdown.selectedIndex;
                document.getElementById("lbqf2-up").msDropdown.selectedIndex = loser;
            } else {
                // Values are different
                winner = document.getElementById("ubqf2-dn").msDropdown.selectedIndex;
                document.getElementById("semi-dn").msDropdown.selectedIndex = winner;
                loser = document.getElementById("ubqf2-up").msDropdown.selectedIndex;
                document.getElementById("lbqf2-up").msDropdown.selectedIndex = loser;
            }
        } else {
            document.getElementById("semi-dn").msDropdown.selectedIndex = 0;
        }
        if (inputs[4].value != "") {
            if (inputs[4].value > inputs[5].value) {
                // Values are equal
                winner = document.getElementById("lbr1-up").msDropdown.selectedIndex;
                document.getElementById("lbqf-dn").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("lbr1-dn").msDropdown.selectedIndex;
                document.getElementById("lbqf-dn").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("lbqf-dn").msDropdown.selectedIndex = 0;
        }

        if (inputs[6].value != "") {
            if (inputs[6].value > inputs[7].value) {
                // Values are equal
                winner = document.getElementById("lbqf-up").msDropdown.selectedIndex;
                document.getElementById("semi-up").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("lbqf-dn").msDropdown.selectedIndex;
                document.getElementById("semi-up").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("semi-up").msDropdown.selectedIndex = 0;
        }

        if (inputs[8].value != "") {
            if (inputs[8].value > inputs[9].value) {
                // Values are equal
                winner = document.getElementById("semi-up").msDropdown.selectedIndex;
                document.getElementById("final-up").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("semi-dn").msDropdown.selectedIndex;
                document.getElementById("final-up").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("final-up").msDropdown.selectedIndex = 0;
        }

        if (inputs[10].value != "") {
            if (inputs[10].value > inputs[11].value) {
                // Values are equal
                winner = document.getElementById("lbr12-up").msDropdown.selectedIndex;
                document.getElementById("lbqf2-dn").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("lbr12-dn").msDropdown.selectedIndex;
                document.getElementById("lbqf2-dn").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("lbqf2-dn").msDropdown.selectedIndex = 0;
        }
        
        if (inputs[12].value != "") {
            if (inputs[12].value > inputs[13].value) {
                // Values are equal
                winner = document.getElementById("lbqf2-up").msDropdown.selectedIndex;
                document.getElementById("semi2-up").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("lbqf2-dn").msDropdown.selectedIndex;
                document.getElementById("semi2-up").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("semi2-up").msDropdown.selectedIndex = 0;
        }

        if (inputs[14].value != "") {
            if (inputs[14].value > inputs[15].value) {
                // Values are equal
                winner = document.getElementById("semi2-up").msDropdown.selectedIndex;
                document.getElementById("final-dn").msDropdown.selectedIndex = winner;
            } else {
                // Values are different
                winner = document.getElementById("semi2-dn").msDropdown.selectedIndex;
                document.getElementById("final-dn").msDropdown.selectedIndex = winner;
            }
        } else {
            document.getElementById("final-dn").msDropdown.selectedIndex = 0;
        }
    }
}

let counter1 = 0;
function myFunction() {
    let text = document.getElementById("jsontext").innerHTML;
    document.getElementById("jsontext").innerHTML =
        text.replaceAll("../assets/img/teams/", "");
    if (text.includes("../assets/img/teams/")) {
        if (counter1 == 17) {
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
        if (counter2 == 17) {
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
        let gold = `http://${window.location.hostname}:${window.location.port}/rlcs/day3.html?r=` + document.getElementById("urltext").value;
        document.getElementById("urltext").select();
        document.getElementById("urltext").setSelectionRange(0, 99999);
        navigator.clipboard.writeText(gold);
        alert("Text Copied! Make sure to submit it to the form when you can :)");
    }
}

function IGOTYOU() {
    let mold = `http://${window.location.hostname}:${window.location.port}/rlcs/day3.html?r=` + encodeURIComponent(document.getElementById("fuckedup").value);
    document.getElementById("igotyoudawg").innerHTML = mold;
}

function FUCKFUCKPUSSYPUSSYSHITSHITSHIT() {
    let philminigan = atob(document.getElementById("importtext").value);
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36] = philminigan.split('|');
    document.getElementById("ubqf-up").msDropdown.selectedIndex = a1;
    document.getElementById("ubqfscore-up").value = a2;
    document.getElementById("ubqf-dn").msDropdown.selectedIndex = a3;
    document.getElementById("ubqfscore-dn").value = a4;
    document.getElementById("ubqf2-up").msDropdown.selectedIndex = a5;
    document.getElementById("ubqf2score-up").value = a6;
    document.getElementById("ubqf2-dn").msDropdown.selectedIndex = a7;
    document.getElementById("ubqf2score-dn").value = a8;
    document.getElementById("lbr1-up").msDropdown.selectedIndex = a9;
    document.getElementById("lbr1score-up").value = a10;
    document.getElementById("lbr1-dn").msDropdown.selectedIndex = a11;
    document.getElementById("lbr1score-dn").value = a12;
    document.getElementById("lbr12-up").msDropdown.selectedIndex = a13;
    document.getElementById("lbr12score-up").value = a14;
    document.getElementById("lbr12-dn").msDropdown.selectedIndex = a15;
    document.getElementById("lbr12score-dn").value = a16;
    document.getElementById("lbqf-up").msDropdown.selectedIndex = a17;
    document.getElementById("lbqfscore-up").value = a18;
    document.getElementById("lbqf-dn").msDropdown.selectedIndex = a19;
    document.getElementById("lbqfscore-dn").value = a20;
    document.getElementById("lbqf2-up").msDropdown.selectedIndex = a21;
    document.getElementById("lbqf2score-up").value = a22;
    document.getElementById("lbqf2-dn").msDropdown.selectedIndex = a23;
    document.getElementById("lbqfscore-dn").value = a24;
    document.getElementById("semi-up").msDropdown.selectedIndex = a25;
    document.getElementById("semiscore-up").value = a26;
    document.getElementById("semi-dn").msDropdown.selectedIndex = a27;
    document.getElementById("semiscore-dn").value = a28;
    document.getElementById("semi2-up").msDropdown.selectedIndex = a29;
    document.getElementById("semi2score-up").value = a30;
    document.getElementById("semi2-dn").msDropdown.selectedIndex = a31;
    document.getElementById("semi2score-dn").value = a32;
    document.getElementById("final-up").msDropdown.selectedIndex = a33;
    document.getElementById("finalscore-up").value = a34;
    document.getElementById("final-dn").msDropdown.selectedIndex = a35;
    document.getElementById("finalscore-dn").value = a36;
}