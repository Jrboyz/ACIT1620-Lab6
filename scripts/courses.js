let course1 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
};

let course2 = {
    code: "ACIT 1420",
    name: "Intro to Systems Admin"
};

let course3 = {
    code: "ACIT 1630",
    name: "Database Systems"
};

const courseList = [course1, course2, course3]

let exit = 0;
while (exit != 1){
    let courseInput = prompt("Please enter a 4-digit course number");
    if (!isNaN(courseInput) && courseInput.length == 4){
        for (let course of courseList){
            if (course.code.includes(courseInput)){
                console.log(`Yes I am taking the course: ${course.code} ${course.name}.`);
                exit = 1;
            }
        }
        if (exit == 0){
            let newCourse = {code: courseInput, name: null};
            courseList.push(newCourse);
            exit = 1;
            console.log(`Successfully added ${courseInput} to the list of courses.`);
        }
    }
}
