const express = require('express');
const app = express();

// app.use(express.static('./static'))

// app.set('view engine','ejs')

// app.get('/404',(req,res)=>{
// 	res.render('404.ejs',{
// 		name:'404'
// 	})
// })

// app.get('/',(req,res)=>{
// 	res.send('111')
// })

// app.get('/admin',(req,res)=>{
// 	res.send('222')
// })

// app.get('/index',(req,res)=>{
// 	res.send('333')
// })
// 
// 
// 
app.get('/',(req,res)=>{
	res.send('首页')
})
app.get('/admin/:name/:age',(req,res)=>{
	 console.log(req.params)

	 res.send(req.params)
})

app.listen(80)