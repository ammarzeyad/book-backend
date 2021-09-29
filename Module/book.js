const  mongoose  = require('mongoose');
mongoose.connect(`${process.env.REACT_APP_SERVER}`);
const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});
const BooksModel = mongoose.model('Book', BooksSchema);
async function addBookHandler(req,res){
    let { title, description, status, email } = req.body;
    await BooksModel.create({
        title,
        description,
        status,
        email
    })

    BooksModel.find({},(error,data) => {
        if(error) {
            console.log('error in getting data',error);
        } else {
            res.send(data);
        }
    })
}
// http://localhost:3006/books
function getBooksHandler(req,res){
    // let emailin = req.query.emailin
    BooksModel.find({},(error,Data)=> {
        if(error) {
            console.log('error in getting data',error)
        } else {
            res.send(Data)
        }
    })
}
function deleteBookHandler(req, res) {
    let {bookID} = req.query;

    BooksModel.deleteOne({ _id: bookID }).then(() => {
        BooksModel.find({}, function (error, data) {
            if (error) {
                console.log('error in getting data', error)
            } else {
                res.send(data)
            }
        })
    })
}
updateBookHandler = (req, res) => {
    let { title, description, status, email, _id } = req.body;
    BooksModel.findByIdAndUpdate(_id, { title, description, status }, (error, updatedData) => {
        if (error) { 
            console.log('error in updating') 
        } else {
            BooksModel.find({ email },(error, data) => {
                if (error) {
                    console.log('error in getting data', error)
                } else {
                    res.send(data)
                }
            })
        }
    })
}
module.exports = {getBooksHandler , addBookHandler , deleteBookHandler, updateBookHandler};