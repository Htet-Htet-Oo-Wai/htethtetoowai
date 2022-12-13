export function hoverChangeSkills(
  nameCard,
  changeDescription,
  titleSkills,
) {
  const varChangeDescription = document.querySelector(".changeSkills");
  const varTitleSkills = document.querySelector(".titleSkills");

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varTitleSkills.innerHTML = titleSkills;
  });
}

const header = document.getElementById("skills");
const btns = header.getElementsByClassName("skills");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeSkills");
    current[0].className = current[0].className.replace(
      " activeSkills",
      ""
    );
    this.className += " activeSkills";
  });
}
