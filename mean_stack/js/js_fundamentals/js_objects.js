let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function print_students(students) {
    students.forEach(function(student) {
        console.log("Name: " + student.name + ", Cohort: " + student.cohort)
    })
}

print_students(students)


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (var category in users) {
    // console.log(users[category])
    console.log(category.toUpperCase())
    var counter = 1
    for (person of users[category]) {
        // console.log(person)
        
        console.log(counter + " - " + person.last_name.toUpperCase() + ", " + person.first_name.toUpperCase() + " - " + (person.first_name + person.last_name).length)
        counter ++
    }
}
