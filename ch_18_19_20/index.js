var courses = [];

for(var i=0; i<5; i++){
    var course = prompt(`Enter course ${i+1} name`);
    courses.push(course);
}

alert(courses);

for(var i=0; i<5; i++){
    var courseEdit = prompt(`course ${i+1} name`, courses[i]);
    if(courses[i] !== courseEdit){
        courses.splice(i,1,courseEdit);
    }
}

alert(courses);

