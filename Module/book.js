const  mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BooksBackend');

const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});

const BooksModel = mongoose.model('Book', BooksSchema);

function seedBookInformation() {
    const book1 = new BooksModel({
        title: 'doneld trump ',
        description: 'polotic ',
        status: '1',
        email: 'unkonwn@gmail.com'
    })
    const book2 = new BooksModel({
        title: 'obama',
        description: 'polotic ',
        status: ' 2',
        email: 'ammarramadan38@gmail.com'
    })
    const book3 = new BooksModel({
        title: 'banking 3',
        description: 'money',
        status: '3',
        email: 'ammarramadan38@gmail.com'
    })
    const book4 = new BooksModel({
        title: 'Rap 4',
        description: 'song',
        status: '4',
        email: 'ammarramadan38@gmail.com'
    })
    const book5 = new BooksModel({
        title: 'sport ',
        description: 'football',
        status: ' 5',
        email: 'noor@gmail.com'
    })

    book1.save();
    book2.save();
    book3.save();
    book4.save();
    book5.save();
}

// seedBookInformation();

// http://localhost:3001/books?emailin=
function getBooksHandler(req,res){
    let emailin = req.query.emailin
    BooksModel.find({email:emailin},function(error,Data) {
        if(error) {
            console.log('error in getting data',error)
        } else {
            res.send(Data)
        }
    })
}


module.exports = getBooksHandler;