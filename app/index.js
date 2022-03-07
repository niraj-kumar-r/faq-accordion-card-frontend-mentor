questionNode = document.querySelectorAll(".faq-questions");
//even empty space is treated as sibling, so always use nextElementSibling

for (let childQuestion of questionNode) {
    childQuestion.onmouseover = (event) => {
        childQuestion.style.color = "var(--primary-highlight)";
    };

    childQuestion.onmouseout = (event) => {
        childQuestion.style.color =
            childQuestion.nextElementSibling.style.opacity == "1"
                ? "var(--primary-normal)"
                : "var(--neutral-bold)";
    };
    childQuestion.onclick = (event) => {
        // console.log(childQuestion.nextElementSibling.style.opacity, "opacity");
        if (childQuestion.nextElementSibling.style.opacity == "1") {
            childQuestion.nextElementSibling.style.opacity = "0";
            childQuestion.nextElementSibling.style.height = "0px";
            childQuestion.nextElementSibling.style.margin = "0";
            childQuestion.style.fontWeight = "400";
            childQuestion.style.color = "var(--neutral-bold)";

            childQuestion.lastElementChild.style.transform = "rotateX(0deg)";

            // console.log("unclicked");
        } else {
            childQuestion.nextElementSibling.style.opacity = "1";
            childQuestion.nextElementSibling.style.height = "auto";
            childQuestion.nextElementSibling.style.margin = "1em auto 1em";
            childQuestion.style.fontWeight = "700";
            childQuestion.style.color = "var(--primary-normal)";

            childQuestion.lastElementChild.style.transform = "rotateX(180deg)";

            // console.log("clicked");
        }
    };
}

console.log(document.documentElement.clientWidth);

if (document.documentElement.clientWidth > 768) {
    document.querySelector(".bg-svg").src = "images/bg-pattern-desktop.svg";
    document.querySelector(".main-woman-svg").src =
        "images/illustration-woman-online-desktop.svg";

    // let cube = document.createElement("img");
    // cube.src = "images/illustration-box-desktop.svg";
    // cube.alt = "a cube";
    // cube.className = "cube-svg";

    // document.querySelector(".svg-div").appendChild(cube);

    console.log("changed");
}
