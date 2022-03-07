questionNode = document.querySelectorAll(".faq-questions");
//even empty space is treated as sibling, so always use nextElementSibling

for (let childQuestion of questionNode) {
    // childQuestion.mouseover = (event) => {
    //     childQuestion.style.color = "var(--primary-highlight)";
    // };
    childQuestion.onclick = (event) => {
        console.log(childQuestion.nextElementSibling.style.opacity, "opacity");
        if (childQuestion.nextElementSibling.style.opacity == "1") {
            childQuestion.nextElementSibling.style.opacity = "0";
            childQuestion.nextElementSibling.style.height = "0px";
            childQuestion.nextElementSibling.style.margin = "0";
            childQuestion.style.fontWeight = "400";
            childQuestion.style.color = "var(--neutral-bold)";

            console.log("unclicked");
        } else {
            childQuestion.nextElementSibling.style.opacity = "1";
            childQuestion.nextElementSibling.style.height = "auto";
            childQuestion.nextElementSibling.style.margin = "1em auto 1em";
            childQuestion.style.fontWeight = "700";
            childQuestion.style.color = "var(--primary-normal)";

            console.log("clicked");
        }
    };
}
