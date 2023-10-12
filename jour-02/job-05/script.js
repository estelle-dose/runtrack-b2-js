function mySearchStudent(form) {
    var email = document.getElementById("email-search-student").value;

    fetch("request.php?email=" + email, {
        method: "GET"
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur lors de la recherche de l'étudiant.");
        }
    })
    .then(function(studentData) {
        displayStudentInfo(studentData);
    })
    .catch(function(error) {
        console.error("Erreur : " + error);
    });
}

// Fonction pour afficher les informations de l'étudiant
function displayStudentInfo(studentData) {
    var studentInfoDiv = document.getElementById("student-info");
    studentInfoDiv.innerHTML = "";

    if (studentData.length > 0) {
        var student = studentData[0];
        var infoList = document.createElement("ul");

        var idItem = document.createElement("li");
        idItem.textContent = "ID : " + student.id;
        infoList.appendChild(idItem);

        var gradeItem = document.createElement("li");
        gradeItem.textContent = "Grade ID : " + student.grade_id;
        infoList.appendChild(gradeItem);

        var emailItem = document.createElement("li");
        emailItem.textContent = "Email : " + student.email;
        infoList.appendChild(emailItem);

        var fullnameItem = document.createElement("li");
        fullnameItem.textContent = "Nom complet : " + student.fullname;
        infoList.appendChild(fullnameItem);

        var birthdateItem = document.createElement("li");
        birthdateItem.textContent = "Date de naissance : " + student.birthdate;
        infoList.appendChild(birthdateItem);

        var genderItem = document.createElement("li");
        genderItem.textContent = "Genre : " + student.gender;
        infoList.appendChild(genderItem);

        studentInfoDiv.appendChild(infoList);
    } else {
        studentInfoDiv.textContent = "Aucun étudiant trouvé avec cet email.";
    }
}


// Écouter la soumission du formulaire
var formSearchStudent = document.getElementById("form-search-student");
formSearchStudent.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission normale du formulaire
    mySearchStudent(formSearchStudent); // Appeler la fonction de recherche
});
