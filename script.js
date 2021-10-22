"use strict"

const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },   
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    }
];

const cardContainer = document.getElementsByClassName("team-container");
const btn = document.getElementById("addMemberButton");
// console.log(btn);

DisplayTeamMembers()
btn.addEventListener("click", AddTeamMember);



function DisplayTeamMembers(){
    for(let i=0; i < teamMembers.length; i++){
        CardElementGenerator(i);       
    }

}

function CardElementGenerator(j){
    cardContainer[0].innerHTML += ` <div class="team-card">
                                            <div class="card-image">
                                                <img src="${FormatImgPath(teamMembers[j].image)}" alt="${teamMembers[j].name}"/>
                                            </div>
                                            <div class="card-text">
                                                <h3>${teamMembers[j].name}</h3>
                                                <p>${teamMembers[j].role}</p>
                                            </div>
                                        </div>`;
}

function AddTeamMember(){

    // console.log("Function AddTeamMemeber called");

    const inputName = document.getElementById("name").value;
    const inputRole = document.getElementById("role").value;
    const inputImg = document.getElementById("image").value;

    if(inputName == "" || inputRole == "" || inputImg == ""){
        alert("Insert Correct Values");
    } else{
        const newTeamMemeber = {
            name: inputName,
            role: inputRole,
            image: inputImg,
        }
        // console.log("Console log di newTeamMemeber", newTeamMemeber);
        teamMembers.push(newTeamMemeber);
        // console.log("Console log di teamMemebers after the push", teamMembers);
    }
    // cardContainer[0].innerHTML = "";
    CardElementGenerator(teamMembers.length - 1);
    ResetInputFields(inputName, inputRole, inputImg)
}

function FormatImgPath(image){
    if(image.startsWith("http")){
        return image;
    }
    return "img/" + image;
}

function ResetInputFields(nameField, roleField, imgField){
    console.log("called ResetInputFields function")
    nameField = "";
    roleField = "";
    imgField = "";
};