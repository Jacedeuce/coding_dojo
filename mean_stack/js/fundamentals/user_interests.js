function user_languages(array_of_users){
    
    function concat_nested_list(nested_list){
        concat_list = nested_list[0]
        for (var i=1; i<nested_list.length-1;i++){
            concat_list += ", " + nested_list[i]
        }
        concat_list += " and " + nested_list[nested_list.length-1]
        return concat_list
    }


    function double_nested_helper(nested_list){
        concat_list = nested_list[0]
        for (var i=1; i<nested_list.length-1;i++){
            concat_list += ", " + nested_list[i]
        }
        return concat_list
    }

    function concat_double_nested_list(double_nested_list){
        object_with_nested = Object.values(double_nested_list)
        concat_list = double_nested_helper(object_with_nested[0])
        for (var i=1; i<object_with_nested.length-1; i++){
            concat_list += ", " + double_nested_helper(object_with_nested[i])
        }
        concat_list += ", " + concat_nested_list(object_with_nested[object_with_nested.length-1])
        return concat_list
    }

    array_of_users.forEach(function(user){
        console.log(user.fname + " " + user.lname + " knows " + concat_nested_list(user.languages) + ".")
        console.log(user.fname + " is also interested in " + concat_double_nested_list(user.interests) + ".")
    })
}

user_array = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
    }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
    }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
    }
    }
]

user_languages(user_array)