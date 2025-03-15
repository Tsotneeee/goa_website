import { Courses } from "../../modules/classes.mjs"; // classes module

function checker() {
    const out = document.getElementById('out');
    out.innerHTML = ""; 

    let p1 = document.getElementById("inp1").checked;
    let p2 = document.getElementById("inp2").checked;
    let p3 = document.getElementById("inp3").checked;
    let p4 = document.getElementById("inp4").checked;

    if (p1) {
        new Courses(1).render;
    }
    if (p2) {
        new Courses(2).render;
    }
    if (p3) {
        new Courses(3).render;
    }
    if (p4) {
        new Courses(4).render;
    }
}

setInterval(checker, 200);