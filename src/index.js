// const http = require("http");

// const server = http.createServer((req,res)=>{
//     user = {
//         user:"Byron",
//         email:"byron@hotmail.com"
//     }
//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify(user));
//     res.end()
// })

// server.listen(3000)

// console.log("Servidor ejecutandose en el puerto 3000");

// const express = require("express")
// const app = express()

// app.get('/',(req,res)=>{
//     res.status(202).send("Hello world")
// })

// app.get("/dashboard",(req,res)=>{
//     res.send("Dashboard principal")
// })

// app.get("/contact",(req,res)=>{
//     res.send("Contactos de la pagina web")
// })

// app.get("/productos",(req,res)=>{
//     res.send("Productos del e-common")
// })
// //siempre va al final|
// app.use((req,res)=>{
//     res.status(404).send("Pagina no encontrada")
// })


// app.get("/",(req,res)=>{
//     res.send("Obtener los datos del servidor")
// })

// app.post("/",(req,res)=>{
//     res.send("Eviar datos al servidor")
// })


// app.put("/",(req,res)=>{
//     res.send("Actualizar toda la información")
// })

// app.patch("/",(req,res)=>{
//     res.send("Actualizar sola una porción del recurso")
// })

// app.delete("/",(req,res)=>{
//     res.send("Eliminar algún recurso del servidor")
// })

// app.get('/',(req,res)=>{
//     res.sendFile('./descarga.jpg',{
//         root:__dirname
//     })
//     res.sendFile('./download.',{
//         root:__dirname
//     })
// })
// console.log(__dirname);


// app.get("/user",(req,res)=>{
//     res.json({
//         "nombre":"Marlon",
//         "apellido":"Lalangui",
//         "email":"Marlon♠4gmail.com",
//         "nombre":{
//             "calle principal":"xd",
//             "calle secundaria" :"dx"
//         }

//     })
// })

const express = require("express")
const app = express()
const {engine} = require("express-handlebars")


app.engine('.hbs', engine({
    extname:'.hbs'
}))

app.set('view engine',".hbs")
app.set('views','./src/views')

app.get('/',(req,res)=>{
    res.render("Home")
})

app.listen(3000)
console.log("SERVIDOR OK")