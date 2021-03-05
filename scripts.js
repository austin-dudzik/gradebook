$(document).ready(function() {

  // Run on form submit
  $("form").submit(addStudent);

  // Run on sort clicks
  $("a#sortName").click(sortName);
  $("a#sortGrade").click(sortGrade);

  // Set an empty array
  let students = [];

  // Create the table
  function createTable() {

    // Define the table body
    let table = $("tbody");

    // Empty the table
    table.empty();

    // Set constants
    const start = 0;
    const stop = students.length;

    // Run loop
    for (let i = start; i < stop; i++) {

      let aStudent = students[i];

      // Create new <tr>
      let tableRow = $("<tr>");

      // Append row to table
      table.append(tableRow);

      // Set the name
      let nameCell = $("<td>");
      tableRow.append(nameCell);
      nameCell.text(aStudent.name);

      // Set the letter
      let letterCell = $("<td>");
      tableRow.append(letterCell);
      letterCell.text(aStudent.letter);

      // Set the points
      let pointsCell = $("<td>");
      tableRow.append(pointsCell);
      pointsCell.text(aStudent.points);

      // Set the grade
      let gradeCell = $("<td>");
      tableRow.append(gradeCell);
      gradeCell.text(aStudent.grade + "%");

    }

  }

  // Add student
  function addStudent(event) {

    // Prevent form refresh
    event.preventDefault();

    // Set the variables from form values
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let points = $("#points").val();
    let possiblePoints = $("#possiblePoints").val();
    let letter = Math.round(points / possiblePoints * 100);

    // Determine letter grade
    if (letter <= 100 && letter >= 93) {
      letterGrade = "A";
    } else if (letter < 93 && letter >= 90) {
      letterGrade = "A-";
    } else if (letter < 90 && letter >= 87) {
      letterGrade = "B+";
    } else if (letter < 87 && letter >= 83) {
      letterGrade = "B";
    } else if (letter < 83 && letter >= 80) {
      letterGrade = "B-";
    } else if (letter < 80 && letter >= 77) {
      letterGrade = "C+";
    } else if (letter < 77 && letter >= 73) {
      letterGrade = "C";
    } else if (letter < 73 && letter >= 70) {
      letterGrade = "C-";
    } else if (letter < 70 && letter >= 67) {
      letterGrade = "D+";
    } else if (letter < 67 && letter >= 63) {
      letterGrade = "D";
    } else if (letter < 63 && letter >= 60) {
      letterGrade = "D-";
    } else if (letter < 60) {
      letterGrade = "F";
    } else {
      letterGrade = "Unknown";
    }

    // Set empty object
    let student = {};

    // Assign values
    student.name = `${firstName} ${lastName}`;
    student.letter = letterGrade;
    student.points = `${points}/${possiblePoints}`;
    student.grade = Math.round(points / possiblePoints * 100);

    // Push onto array
    students.push(student);

    // Create table
    createTable();

    // Reset the form
    $("form").trigger("reset");


  }

  // Sort by name
  function sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  // Sort by grade
  function sortByGrade(a, b) {
    if (a.grade > b.grade) {
      return -1;
    } else if (a.grade < b.grade) {
      return 1;
    } else {
      return 0;
    }
  }

  // Sort the table by name
  function sortName() {
    students.sort(sortByName);
    createTable();
  }

  // Sort the table by grade
  function sortGrade() {
    students.sort(sortByGrade);
    createTable();
  }


  //function gradeCheck(event) {

  // Prevent form refresh
  //event.preventDefault();

  // Set the variables from form values
  //let firstName = $("#firstName").val();
  //let lastName = $("#lastName").val();
  //let points = $("#points").val();
  //let possiblePoints = $("#possiblePoints").val();

  // Create empty object
  //let gradebook = {};

  // Create object properties
  //gradebook.firstName = firstName;
  //gradebook.lastName = lastName;
  //gradebook.points = points;
  //gradebook.possiblePoints = possiblePoints;
  //letter = Math.round(points / possiblePoints * 100);
  //gradebook.letterGrade = possiblePoints;

  // Calculate letter grade
  //let letterGrade = "";

  //if (letter <= 100 && letter >= 93) {
  //letterGrade = "A";
  //} else if (letter < 93 && letter >= 90) {
  //letterGrade = "A-";
  //} else if (letter < 90 && letter >= 87) {
  //letterGrade = "B+";
  //} else if (letter < 87 && letter >= 83) {
  //letterGrade = "B";
  //} else if (letter < 83 && letter >= 80) {
  //letterGrade = "B-";
  //} else if (letter < 80 && letter >= 77) {
  //letterGrade = "C+";
  //} else if (letter < 77 && letter >= 73) {
  //letterGrade = "C";
  //} else if (letter < 73 && letter >= 70) {
  //letterGrade = "C-";
  //} else if (letter < 70 && letter >= 67) {
  //letterGrade = "D+";
  //} else if (letter < 67 && letter >= 63) {
  //letterGrade = "D";
  //} else if (letter < 63 && letter >= 60) {
  //letterGrade = "D-";
  //} else if (letter < 60) {
  //letterGrade = "F";
  //} else {
  //letterGrade = "Unknown";
  //}

  // Output data to page
  //$("p#output").text(`${gradebook.firstName} ${gradebook.lastName}, your percentage is ${letter}%`)
  //$("p#letterGrade").text(`Your letter grade is a(n) "${letterGrade}"`)

  //}


});