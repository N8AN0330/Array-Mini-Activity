//Step 1: Create the studentGrades Array 
let studentsGrade = [ 
    [`Nathan`, [60, 80, 70], `pass`],
    [`William`, [90, 70, 89], `pass`],
    [`Shara`, [86, 91, 87], `pass`],
    [`Angel`, [88, 87, 90], `pass`]];


//Step 2: Add Another Student's Data 
studentsGrade.push([`Naya`, [70, 70, 70], `pass`]) 


//Step 4: Use map() for Optimization 
const updatedStudentsGrades = studentsGrade.map(function(student) {    
    let name = student[0]
    let grades = student[1]
    let status = student[2]

//Step 3: Calculate Average Grades and Update Status
     // Calculate the average using reduce()
    let average = grades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;                          // Sum up the grades
    }, 0) / grades.length;                                          // Divide by the number of grades for average


//Stretch Goal
    //Scaling if pass/fail
    if (average >= 85){
        status = `honor passed`
    }
    else if (average < 85 && average > 70){
        status = `passed`
    }
    else if (average <= 70) {
        status = `failed`
    }


    console.log(`Name: ${name}`)
    console.log(`Grades: ${grades}`)
    console.log(`Average: ${average.toFixed(2)}`)
    console.log(`Status: ${status}`)
    console.log(`------------------`)
});

console.log(updatedStudentsGrades);        
