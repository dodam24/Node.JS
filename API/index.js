const express = require('express')
var cors = require('cors')  // CORS 설정 (1)
const app = express()
const port = 3000

app.use(cors()) // CORS 설정 (2)

app.get('/', (req, res) => {    // HTTP 메소드(라우팅, 콜백 함수)
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.json({'sound': '멍멍'})   // JSON : JavaScript Object Notation
})

app.get('/cat', (req, res) => {
  res.send({'sound': '야옹'})
})


// GET : params, query
app.get('/user/:id', (req, res) => {
    // const q = req.params     // :(변수명) 형태
    // console.log(q.id)
    const q = req.query         // ?key=value 형태
    console.log(q)

    res.json({'userid': q.id})
  })


// POST : params, body
app.use(express.json());
app.post('/user/:id', (req, res) => {
    // const p = req.params;
    // console.log(p);
    const p = req.body;
    console.log(p);

    res.send({'message': 'Hello World!'});
})


// API 서버 만들기
app.get('/sound/:name', (req, res) => {
    const { name } = req.params     // {} 안에 key 값을 입력하는 형태로 많이 사용

    if(name == "dog") {
        res.json({'sound': '멍멍'})   
    } else if(name == "cat") {
        res.json({'sound': '야옹'})
    } else if(name == "pig") {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})


// CORS : HTML 파일로 서버에 요청했을 때, HTML의 요청에 대한 응답이 잘 되도록 해주는 것 
// const cors = require('cors');
// app.use(cors({
//     origin: '*'
// }));


app.listen(port, () => {    
  console.log(`Example app listening on port ${port}`)
})