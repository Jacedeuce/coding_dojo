module.exports = {
    index : (req, res) => {
        if (typeof req.session.count === "undefined") {
            req.session.count = 1
        } else {
            req.session.count += 1
        }
        counter = req.session.count

        res.render('index', {count : counter})
    },
    two : (req, res) => {
        if (req.method == "POST"){
            console.log(req.body.value)
            if (req.body.value === '2') {
                req.session.count +=1
            } else if (req.body.value === '0') {
                req.session.destroy()
            }
        }
        res.redirect('/')
    }
}