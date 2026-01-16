const express= require('express')
const app= express()
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json())


const generateId=()=>{

    const size= persons.length
    return Math.random(size, 100)

}

app.use(express.static('dist'))

let persons=[
    { 
      "id": "1",
      "name": "AmirReza", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response)=>{


    response.json(persons)
})

app.get('/info', (request, response)=>{
    const date=Date().toString()

    response.send(`Phonebook has info of ${persons.length} \n ${date}`)

})

app.get('/api/persons/:id', (request, response)=>{

    const id= request.params.id
    const numb= persons.find(p=>p.id===id)

    if( numb){
        response.json(numb)
    }
    response.status(404).end()


})

app.delete('/api/persons/:id', (request, response)=>{

    const id= request.params.id
    persons =persons.filter(p=>p.id!==id)

    response.status(204).end()

})


app.post('/api/persons' , ( request, response)=>{

    const body= request.body 

    if( !body.name || !body.number ){
        return response.status(400).json({ 
                    error: 'content missing'}


        )
    }

    const flag = persons.find(p=>p.name===body.name)

    if(flag){

        return response.status(400).json(

        { error: 'name must be unique' }


        )
    }

    const newper={

        "name":body.name,
        "number":body.number,
        "id": generateId()

    }
persons=persons.concat(newper)
response.json(newper)

})









const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})