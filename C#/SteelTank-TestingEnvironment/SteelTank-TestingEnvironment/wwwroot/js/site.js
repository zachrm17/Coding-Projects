function addQuestionChoice() {
    var listEntry = document.createElement("li");
    var inputs = document.getElementById("choice-entry");

    listEntry.innerHTML = inputs.value;

    document.getElementById("question-choices").appendChild(listEntry);
}