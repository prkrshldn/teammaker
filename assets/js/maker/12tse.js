let final;
let backflip;
let frontflip;
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
let semidnscore = document.getElementById("semiscore-dn");
let semiupscore = document.getElementById("semiscore-up");
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
        MsDropdown.make("#r1-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r1-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r3-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r3-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r4-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#r4-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf1-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf1-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf3-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf3-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf4-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#qf4-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#semi-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#semi-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#semi2-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#semi2-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#final-up", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
        MsDropdown.make("#final-dn", {
            byJson: {
                data: data, selectedIndex: 0, width: 200
            },
            childHeight: 215,
            showFilterAlways: true,
            enableCheckbox: false
        });
    }
}
$("#final").click(function () {
    var ubr1up = $('#r1-up option:selected').val();
    var ubr1upimg = $('#r1-up option:selected').data('image');
    var ubr1dn = $('#r1-dn option:selected').val();
    var ubr1dnimg = $('#r1-dn option:selected').data('image');
    var ubr2up = $('#r2-up option:selected').val();
    var ubr2upimg = $('#r2-up option:selected').data('image');
    var ubr2dn = $('#r2-dn option:selected').val();
    var ubr2dnimg = $('#r2-dn option:selected').data('image');
    var ubr3up = $('#r3-up option:selected').val();
    var ubr3upimg = $('#r3-up option:selected').data('image');
    var ubr3dn = $('#r3-dn option:selected').val();
    var ubr3dnimg = $('#r3-dn option:selected').data('image');
    var ubr4up = $('#r4-up option:selected').val();
    var ubr4upimg = $('#r4-up option:selected').data('image');
    var ubr4dn = $('#r4-dn option:selected').val();
    var ubr4dnimg = $('#r4-dn option:selected').data('image');
    var ubqf1up = $('#qf1-up option:selected').val();
    var ubqf1upimg = $('#qf1-up option:selected').data('image');
    var ubqf1dn = $('#qf1-dn option:selected').val();
    var ubqf1dnimg = $('#qf1-dn option:selected').data('image');
    var ubqf2up = $('#qf2-up option:selected').val();
    var ubqf2upimg = $('#qf2-up option:selected').data('image');
    var ubqf2dn = $('#qf2-dn option:selected').val();
    var ubqf2dnimg = $('#qf2-dn option:selected').data('image');
    var ubqf3up = $('#qf3-up option:selected').val();
    var ubqf3upimg = $('#qf3-up option:selected').data('image');
    var ubqf3dn = $('#qf3-dn option:selected').val();
    var ubqf3dnimg = $('#qf3-dn option:selected').data('image');
    var ubqf4up = $('#qf4-up option:selected').val();
    var ubqf4upimg = $('#qf4-up option:selected').data('image');
    var ubqf4dn = $('#qf4-dn option:selected').val();
    var ubqf4dnimg = $('#qf4-dn option:selected').data('image');
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
    final = `[{"type":"r1-up","name":"${ubr1up}","img":"${ubr1upimg}","score":"${r1upscore.value}"},{"type":"r1-dn","name":"${ubr1dn}","img":"${ubr1dnimg}","score":"${r1dnscore.value}"},{"type":"r2-up","name":"${ubr2up}","img":"${ubr2upimg}","score":"${r2upscore.value}"},{"type":"r2-dn","name":"${ubr2dn}","img":"${ubr2dnimg}","score":"${r2dnscore.value}"},{"type":"r3-up","name":"${ubr3up}","img":"${ubr3upimg}","score":"${r3upscore.value}"},{"type":"r3-dn","name":"${ubr3dn}","img":"${ubr3dnimg}","score":"${r3dnscore.value}"},{"type":"r4-up","name":"${ubr4up}","img":"${ubr4upimg}","score":"${r4upscore.value}"},{"type":"r4-dn","name":"${ubr4dn}","img":"${ubr4dnimg}","score":"${r4dnscore.value}"},{"type":"qf1-up","name":"${ubqf1up}","img":"${ubqf1upimg}","score":"${qf1upscore.value}"},{"type":"qf1-dn","name":"${ubqf1dn}","img":"${ubqf1dnimg}","score":"${qf1dnscore.value}"},{"type":"qf2-up","name":"${ubqf2up}","img":"${ubqf2upimg}","score":"${qf2upscore.value}"},{"type":"qf2-dn","name":"${ubqf2dn}","img":"${ubqf2dnimg}","score":"${qf2dnscore.value}"},{"type":"qf3-up","name":"${ubqf3up}","img":"${ubqf3upimg}","score":"${qf3upscore.value}"},{"type":"qf3-dn","name":"${ubqf3dn}","img":"${ubqf3dnimg}","score":"${qf3dnscore.value}"},{"type":"qf4-up","name":"${ubqf4up}","img":"${ubqf4upimg}","score":"${qf4upscore.value}"},{"type":"qf4-dn","name":"${ubqf4dn}","img":"${ubqf4dnimg}","score":"${qf4dnscore.value}"},{"type":"ubqf2-dn","name":"${semiup}","img":"${semiupimg}","score":"${semiupscore.value}"},{"type":"ubqf2-dn","name":"${semidn}","img":"${semidnimg}","score":"${semidnscore.value}"},{"type":"ubqf2-dn","name":"${semi2up}","img":"${semi2upimg}","score":"${semi2upscore.value}"},{"type":"ubqf1-dn","name":"${semi2dn}","img":"${semi2dnimg}","score":"${semi2dnscore.value}"},{"type":"ubqf2-dn","name":"${finalup}","img":"${finalupimg}","score":"${finalupscore.value}"},{"type":"ubqf2-dn","name":"${finaldn}","img":"${finaldnimg}","score":"${finaldnscore.value}"},{"type":"none","name":"","img":"none","score":""}]`
    document.getElementById("jsontext").innerText = final;
    console.log("In case of a fuck up\n" + final);

    frontflip = `${document.getElementById("r1-up").msDropdown.selectedIndex}|${document.getElementById("r1score-up").value}|${document.getElementById("r1-dn").msDropdown.selectedIndex}|${document.getElementById("r1score-dn").value}|${document.getElementById("r2-up").msDropdown.selectedIndex}|${document.getElementById("r2score-up").value}|${document.getElementById("r2-dn").msDropdown.selectedIndex}|${document.getElementById("r2score-dn").value}|${document.getElementById("r3-up").msDropdown.selectedIndex}|${document.getElementById("r3score-up").value}|${document.getElementById("r3-dn").msDropdown.selectedIndex}|${document.getElementById("r3score-dn").value}|${document.getElementById("r4-up").msDropdown.selectedIndex}|${document.getElementById("r4score-up").value}|${document.getElementById("r4-dn").msDropdown.selectedIndex}|${document.getElementById("r4score-dn").value}|${document.getElementById("qf1-up").msDropdown.selectedIndex}|${document.getElementById("qf1score-up").value}|${document.getElementById("qf1-dn").msDropdown.selectedIndex}|${document.getElementById("qf1score-dn").value}|${document.getElementById("qf2-up").msDropdown.selectedIndex}|${document.getElementById("qf2score-up").value}|${document.getElementById("qf2-dn").msDropdown.selectedIndex}|${document.getElementById("qf2score-dn").value}|${document.getElementById("qf3-up").msDropdown.selectedIndex}|${document.getElementById("qf3score-up").value}|${document.getElementById("qf3-dn").msDropdown.selectedIndex}|${document.getElementById("qf3score-dn").value}|${document.getElementById("qf4-up").msDropdown.selectedIndex}|${document.getElementById("qf4score-up").value}|${document.getElementById("qf4-dn").msDropdown.selectedIndex}|${document.getElementById("qf4score-dn").value}|${document.getElementById("semi-up").msDropdown.selectedIndex}|${document.getElementById("semiscore-up").value}|${document.getElementById("semi-dn").msDropdown.selectedIndex}|${document.getElementById("semiscore-dn").value}|${document.getElementById("semi2-up").msDropdown.selectedIndex}|${document.getElementById("semi2score-up").value}|${document.getElementById("semi2-dn").msDropdown.selectedIndex}|${document.getElementById("semi2score-dn").value}|${document.getElementById("final-up").msDropdown.selectedIndex}|${document.getElementById("finalscore-up").value}|${document.getElementById("final-dn").msDropdown.selectedIndex}|${document.getElementById("finalscore-dn").value}`;
    document.getElementById("importtext").innerText = btoa(frontflip);


});
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
        let gold = `http://${window.location.hostname}:${window.location.port}/rlcs/12tse.html?r=` + document.getElementById("urltext").value;
        document.getElementById("urltext").select();
        document.getElementById("urltext").setSelectionRange(0, 99999);
        navigator.clipboard.writeText(gold);
        alert("Text Copied! Make sure to submit it to the form when you can :)");
    }
}

function IGOTYOU() {
    let mold = `http://${window.location.hostname}:${window.location.port}/rlcs/12tse.html?r=` + encodeURIComponent(document.getElementById("fuckedup").value);
    document.getElementById("igotyoudawg").innerHTML = mold;
}

function FUCKFUCKPUSSYPUSSYSHITSHITSHIT() {
    let philminigan = atob(document.getElementById("importtext").value);
    const [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44] = philminigan.split('|');
    document.getElementById("r1-up").msDropdown.selectedIndex = a1;
    document.getElementById("r1score-up").value = a2;
    document.getElementById("r1-dn").msDropdown.selectedIndex = a3;
    document.getElementById("r1score-dn").value = a4;
    document.getElementById("r2-up").msDropdown.selectedIndex = a5;
    document.getElementById("r2score-up").value = a6;
    document.getElementById("r2-dn").msDropdown.selectedIndex = a7;
    document.getElementById("r2score-dn").value = a8;
    document.getElementById("r3-up").msDropdown.selectedIndex = a9;
    document.getElementById("r3score-up").value = a10;
    document.getElementById("r3-dn").msDropdown.selectedIndex = a11;
    document.getElementById("r3score-dn").value = a12;
    document.getElementById("r4-up").msDropdown.selectedIndex = a13;
    document.getElementById("r4score-up").value = a14;
    document.getElementById("r4-dn").msDropdown.selectedIndex = a15;
    document.getElementById("r4score-dn").value = a16;
    document.getElementById("qf1-up").msDropdown.selectedIndex = a17;
    document.getElementById("qf1score-up").value = a18;
    document.getElementById("qf1-dn").msDropdown.selectedIndex = a19;
    document.getElementById("qf1score-dn").value = a20;
    document.getElementById("qf2-up").msDropdown.selectedIndex = a21;
    document.getElementById("qf2score-up").value = a22;
    document.getElementById("qf2-dn").msDropdown.selectedIndex = a23;
    document.getElementById("qf2score-dn").value = a24;
    document.getElementById("qf3-up").msDropdown.selectedIndex = a25;
    document.getElementById("qf3score-up").value = a26;
    document.getElementById("qf3-dn").msDropdown.selectedIndex = a27;
    document.getElementById("qf3score-dn").value = a28;
    document.getElementById("qf4-up").msDropdown.selectedIndex = a29;
    document.getElementById("qf4score-up").value = a30;
    document.getElementById("qf4-dn").msDropdown.selectedIndex = a31;
    document.getElementById("qf4score-dn").value = a32;
    document.getElementById("semi-up").msDropdown.selectedIndex = a33;
    document.getElementById("semiscore-up").value = a34;
    document.getElementById("semi-dn").msDropdown.selectedIndex = a35;
    document.getElementById("semiscore-dn").value = a36;
    document.getElementById("semi2-up").msDropdown.selectedIndex = a37;
    document.getElementById("semi2score-up").value = a38;
    document.getElementById("semi2-dn").msDropdown.selectedIndex = a39;
    document.getElementById("semi2score-dn").value = a40;
    document.getElementById("final-up").msDropdown.selectedIndex = a41;
    document.getElementById("finalscore-up").value = a42;
    document.getElementById("final-dn").msDropdown.selectedIndex = a43;
    document.getElementById("finalscore-dn").value = a44;
}