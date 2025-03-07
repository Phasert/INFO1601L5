// //Create a constructor a functions which builds object for us
// function createPerson(name, height, weight) {
//     return { name: name, height: height, weight: weight };
//   }

//   function calcBMI(weight, height) {
//     return weight / (height * height);
//   }

//   function avgBMI(people) {
//     let sum = 0;
//     for (let person of people) {
//       //sum the bmi of each person
//       sum += calcBMI(person.weight, person.height);
//     }
//     //calculate average
//     return sum / people.length;
//   }

//   //create a collection of people
//   let people = [
//     createPerson("Sally", 60, 2.5),
//     createPerson("Ben", 81, 3),
//     createPerson("Shelly", 50, 1.7)
//   ];

//   console.log(avgBMI(people));

//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1603",
      grades: [89, 34, 67],
    },
    {
      course: "INFO 1601",
      grades: [89, 34, 67],
    },
  ],
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1601",
      grades: [100, 89, 79],
    },
  ],
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1600",
      grades: [89, 34, 67],
    },
  ],
};

const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  sum = 0;

  for (let transcript of student.transcript) {
    if (transcript.course === course) {
      for (let grade of transcript.grades) {
        sum += grade;
      }
      return sum / transcript.grades.length;
    }
  }

  return -1;
}

function getAssignmentMark(student, course, num) {
  num = num - 1;

  for (let transcript of student.transcript) {
    if (transcript.course === course) {
      return transcript.grades[num];
    }
  }
  return -1;
}
function averageAssessment(students, courseName, assignment) {
  sum = 0;
  count = 0;
  for (let student of students) {
    for (let transcript of student.transcript) {
      if (transcript.course === courseName) {
        let mark = getAssignmentMark(student, courseName, assignment);
        if (mark != -1) {
          count++;
          sum += mark;
        }
      }
    }
  }
  return count > 0 ? sum / count : -1;
}

console.log(getAverageGrade(bob, "INFO 1603"));
console.log(getAssignmentMark(paul, "INFO 1600", 2));
console.log(averageAssessment(students, "INFO 1601", 1));
