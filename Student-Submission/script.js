const submissions = [
    { name: 'Jane', grade: 95, date: '2020-01-24' },
    { name: 'Joe', grade: 77, date: '2018-05-14' },
    { name: 'Jack', grade: 59, date: '2019-07-05'},
    { name: 'Jill', grade: 88, date: '2020-04-22'},
];

console.log(submissions);

let array = submissions;
function addSubmission (array, newName, newScore, newDate) {
        let didPassed = false;
            if (newScore < 60) {
                didPassed = false;
            } else {
                didPassed = true;
            }
        let newStudent = { 
            name: newName, 
            score: newScore, 
            date: newDate, 
            passed: didPassed,
        };
        submissions.push(newStudent);
}

addSubmission(submissions, 'Rachel', 70, "April 8");
console.log(submissions);

function deleteSubmissionByIndex (array, index) {
    submissions.splice(index, 1)
};
deleteSubmissionByIndex(submissions, 1);

//function deleteSubmissionByName (array, name) {};
//console.log();
//function editSubmission (array, index, score) {};

