$(document).ready(function() {

  $("form").submit(gradeCheck);

  function gradeCheck(event) {

    // Prevent form refresh
    event.preventDefault();

    // Set the variables from form values
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let points = $("#points").val();
    let possiblePoints = $("#possiblePoints").val();

    // Create empty object
    let gradebook = {};

    // Create object properties
    gradebook.firstName = firstName;
    gradebook.lastName = lastName;
    gradebook.points = points;
    gradebook.possiblePoints = possiblePoints;
    gradebook.percentage = Math.round(points / possiblePoints * 100);
    gradebook.letterGrade = possiblePoints;

    // Calculate letter grade
    let letterGrade = "";

    if (gradebook.percentage <= 100 && gradebook.percentage >= 93) {
      letterGrade = "A";
    } else if (gradebook.percentage < 93 && gradebook.percentage >= 90) {
      letterGrade = "A-";
    } else if (gradebook.percentage < 90 && gradebook.percentage >= 87) {
      letterGrade = "B+";
    } else if (gradebook.percentage < 87 && gradebook.percentage >= 83) {
      letterGrade = "B";
    } else if (gradebook.percentage < 83 && gradebook.percentage >= 80) {
      letterGrade = "B-";
    } else if (gradebook.percentage < 80 && gradebook.percentage >= 77) {
      letterGrade = "C+";
    } else if (gradebook.percentage < 77 && gradebook.percentage >= 73) {
      letterGrade = "C";
    } else if (gradebook.percentage < 73 && gradebook.percentage >= 70) {
      letterGrade = "C-";
    } else if (gradebook.percentage < 70 && gradebook.percentage >= 67) {
      letterGrade = "D+";
    } else if (gradebook.percentage < 67 && gradebook.percentage >= 63) {
      letterGrade = "D";
    } else if (gradebook.percentage < 63 && gradebook.percentage >= 60) {
      letterGrade = "D-";
    } else if (gradebook.percentage < 60) {
      letterGrade = "F";
    } else {
      letterGrade = "Unknown";
    }

    // Output data to page
    $("p#output").text(`${gradebook.firstName} ${gradebook.lastName}, your percentage is ${gradebook.percentage}%`)
    $("p#letterGrade").text(`Your letter grade is a(n) "${letterGrade}"`)

  }


});