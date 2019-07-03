$( document ).ready(function() {

    $("button").click(function(){
        $.get("https://api.github.com/users/Jacedeuce", displayName)
        function displayName(data) {
            $(".name").text(data["name"]);
        }
    });
})