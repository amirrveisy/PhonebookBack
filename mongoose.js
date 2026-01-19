const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Not enough input')
  process.exit(1)
}


const password = process.argv[2]


const url = `mongodb+srv://amirrveisy97_db_user:${password}@cluster0.nnrhf0t.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const phoneNum= mongoose.model('Note', phoneSchema)

if (process.argv.length === 3) {
  phoneNum.find({}).then(result => {
    result.forEach(r => console.log(r))
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  const note = new phoneNum({
    name: process.argv[3],
    number: process.argv[4],
  })

  note.save().then(() => {
    console.log('note saved!')
    mongoose.connection.close()
  })
}
