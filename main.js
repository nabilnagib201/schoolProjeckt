







if (document.body.id === "home") {
    let icon = document.querySelector(".icon-links");
    let items = document.querySelectorAll("header nav ul li");

    let isOpen = false;

    icon.addEventListener("click", function () {


        if (window.innerWidth <= 767) {

            items.forEach(function (item) {
                item.style.display = isOpen ? "none" : "block";
            });

            isOpen = !isOpen;
        }
    });


    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            items.forEach(function (item) {
                item.style.display = "";
            });
            isOpen = false;
        }
    });

    let quizBtn = document.getElementById("quiz-btn");
    quizBtn.onclick = function () {
        window.location.href = "quizelist.html";
    };


    document.getElementById("events").onclick = function () {
        window.location.href = "events.html";
    }
    document.getElementById("profile").onclick = function () {
        window.location.href = "profile.html";
    }
    document.getElementById("about-us").onclick = function () {
        window.location.href = "we.html";
    }
}


if (document.body.id == "quiz-list") {

    let frenshBtn = document.getElementById("frensh")
    let arabicBtn = document.getElementById("arabic")
    let historyBtn = document.getElementById("history")
    let phiBtn = document.getElementById("phi")
    let mathBtn = document.getElementById("math")
    let scienceBtn = document.getElementById("science")
    let islamBtn = document.getElementById("islam")
    let christianityBtn = document.getElementById("christianity")
    let englishBtn = document.getElementById("english")
    let ictBtn = document.getElementById("ict")

    frenshBtn.onclick = function () {
        window.location.href = "subjects/quizFren.html";
    }
    historyBtn.onclick = function () {
        window.location.href = "subjects/quizHistory.html";
    }
    phiBtn.onclick = function () {
        window.location.href = "subjects/quizPh.html";
    }
    christianityBtn.onclick = function () {
        window.location.href = "subjects/quizcher.html";
    }
    englishBtn.onclick = function () {
        window.location.href = "subjects/quizEN.html";
    }
    ictBtn.onclick = function () {
        window.location.href = "subjects/quizICt.html";
    }
    islamBtn.onclick = function () {
        window.location.href = "subjects/quizislam.html";
    }
    mathBtn.onclick = function () {
        window.location.href = "subjects/quizMath.html";
    }
    scienceBtn.onclick = function () {
        window.location.href = "subjects/quizsic.html";
    }
    arabicBtn.onclick = function () {
        window.location.href = "subjects/quizArab.html";
    }

}


if (document.body.id === "quiz") {





    let nextBtn = document.getElementById("next");
    let backBtn = document.getElementById("back");
    let chekBtn = document.getElementById("check");

    let count = 1;
    nextBtn.onclick = function () {

        document.getElementById(`question${count + 1}`).setAttribute("class", "active");
        document.getElementById(`question${count}`).setAttribute("class", " ");
        count++;
    };
    let countLess = document.getElementsByTagName("img").length - 1;
    backBtn.onclick = function () {

        document.getElementById(`question${count}`).setAttribute("class", " ");
        document.getElementById(`question${count - 1}`).setAttribute("class", "active");
        count--;
    };

    let answer = document.getElementsByClassName("answer");
    let answers = document.getElementsByClassName("answer");
    let point = document.getElementsByTagName("span");

    for (let i = 0; i < answers.length; i++) {

        answers[i].onclick = function () {

            for (let j = 0; j < answers.length; j++) {
                answers[j].removeAttribute("id");
                point[j].removeAttribute("id");
            }
            this.setAttribute("id", "active-answer");
            point[i].setAttribute("id", "active-span");
        }

    }



}