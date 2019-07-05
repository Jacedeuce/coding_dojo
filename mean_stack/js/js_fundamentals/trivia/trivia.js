$( document ).ready(function() {



    q_divs = document.getElementsByClassName("container")
    
    for (var i = 0; i < q_divs.length; i++){
        q_divs[i].addEventListener('click',addQuestion)
    }
    
    var triv_data
    $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=hard&type=multiple", set_data) 
    function set_data(data){
        // console.log(data)
        // triv_data = "this"
        // console.log(data)
        triv_data = data
    }


    function addQuestion(){

        question_array = ["<li>${triv_data['results'][0]['incorrect_answers'][0]}</li>",
                          "<li>${triv_data['results'][0]['incorrect_answers'][1]}</li>",
                          "<li>${triv_data['results'][0]['incorrect_answers'][2]}</li>",
                          "<li>${triv_data['results'][0]['correct_answer']}</li>"]
    console.log(triv_data['results'])
    this.innerHTML = `<p>${triv_data['results'][0]['question']}</p>
                        <ul>

                        </ul>
                            `
    this.setAttribute("class", "question");

    }
    // $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=hard&type=multiple", log_data)
    // function log_data(data) {
        // console.log(data['results'])
    // }
})