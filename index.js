const express= require('express')
const app= express()
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const Note = require('./models/note')

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json())


const generateId=()=>{

    const size= persons.length
    return Math.random(size, 100)

}


app.use(express.static('dist'))

app.get('/api/persons', (request, response)=>{

    phoneNum.find({}).then(result=>
    response.json(result)
    )

})

app.get('/info', (request, response)=>{
    const date=Date().toString()

    response.send(`Phonebook has info of ${persons.length} \n ${date}`)

})

app.get('/api/persons/:name', (request, response)=>{

    const name= request.params.id
    Phone.findById()


})

app.delete('/api/persons/:id', (request, response)=>{

    const id= request.params.id
    persons =persons.filter(p=>p.id!==id)

    response.status(204).end()

})


app.post('/api/persons' , ( request, response)=>{

if(!request.body){
return response.status(400).json({ error: 'content missing' })
}

//else we create a new object

const newPhone= new Phone({
    name:body.name,
    number: body.number
}
)

newPhone.save().then(savedPhone=>
    response.json(savedPhone)
)

})









const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})