## Mongo Intro


Create a database called 'my_first_db'.
`use my_first_db`

Create students collection.
`db.createCollection("students")`

Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
Create 5 students with the appropriate info.
```
db.students.insert({name: "Jason", home_state: "Virginia", lucky_number: 32, birthday: {month: 4, day: 2, year: 1983}})
db.students.insert({name: "John", home_state: "Maryland", lucky_number: 3, birthday: {month: 7, day: 17, year: 1998}})
db.students.insert({name: "Justin", home_state: "District of Columbia", lucky_number: 8, birthday: {month: 1, day: 6, year: 1993}})
db.students.insert({name: "Jessica", home_state: "North Carolina", lucky_number: 4, birthday: {month: 9, day: 23, year: 1972}})
db.students.insert({name: "Jasmine", home_state: "Pennsylvania", lucky_number: 90, birthday: {month: 8, day: 9, year: 1989}})
```



Get all students.
`db.students.find()`

Retrieve all students who are from Maryland or North Carolina.
`db.students.find({ home_state: { $in: ["Maryland", "North Carolina"]}})`
or
`db.students.find({ $or: [ {home_state: "Maryland"}, {home_state: "North Carolina"}]})`

Get all students whose lucky number is:
    greater than 3
    `db.students.find({ lucky_number : {$gt: 3}})`
    less than or equal to 10
    `db.students.find({ lucky_number: {$lte: 10}})`
    between 1 and 9 (inclusive)
    `db.students.find({$and: [{lucky_number: {$gte: 1}}, {lucky_number: {$lte: 9}}]})`

Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
`db.students.update({},{$set: {"interests":["coding", "brunch", "MongoDB"]}}, {upsert:false, multi:true})`

Add some unique interests for each particular student into each of their interest arrays.
`db.students.update({name: "John"}, {$push: {"interests": "Python"}})`

Add the interest 'taxes' into someone's interest array.
`db.students.update({name: "Jasmine"}, {$push: {"interests": "taxes"}})`

Remove the 'taxes' interest you just added.
`db.students.update({name: "Jasmine"}, {$pull: {"interests": "taxes"}})`

Remove all students who are from Maryland.
`db.students.remove({"home_state" : "Maryland"})`

Remove a student by name.
`db.students.remove({"name" : "Jessica"})`

Remove a student whose lucky number is greater than 5 (JUST ONE)
`db.students.remove({lucky_number : {$gt : 5}}, 1)`

Add a field to each student collection called 'number_of_belts' and set it to 0.
`db.students.update({}, {$set: {"number_of_belts" : 0}}, {upsert:false, multi:true})`

Increment this field by 1 for all students in Pennsylvania.
`db.students.update({home_state : "Pennsylvania"}, { $inc: {"number_of_belts" : 1}})`

Rename the 'number_of_belts' field to 'belts_earned'
`db.students.update({}, {$rename: { "number_of_belts" : "belts_earned"}}, {upsert:false, multi:true})`

Remove the 'lucky_number' field.
`db.students.update({}, {$unset: { 'lucky_number': "" }}, {multi:true})`

Add a 'updated_on' field, and set the value as the current date.
`db.students.update({}, {$currentDate: { "updated_on" : {$type: "date"}}}, {upsert:false, multi:true})`
