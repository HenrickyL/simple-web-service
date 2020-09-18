
//não está funcionando

const express =require('express')
const nunjucks = require('nunjucks')


const app = express()
//rotas
const routes = express.Router()

// const loginController = require('/controllers/loginController')

//permite passar um html modificado pelo seu motor gráfico e fazer certas operações
nunjucks.configure("./src/views",{ 
    express: routes,
    noCache:true,
    autoescape: true
})
routes.use(express.static("public"))

routes.get('/',(req,res)=>{
    res.render('index.html')
})


// routes.post('/',(req,res)=>{
//     return res.render('index.html')
// })

// routes.get('/users',(req,res)=>{
//     let _users=loginController.getUser();
//     return res.render('users.html',{users:_users})
// })

// routes.get('/api/users',loginController.index)




module.exports = routes;
