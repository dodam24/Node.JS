// Node.JS에서 서버를 띄우기 위한 기본 셋팅 (express 라이브러리)
const express = require('express');
const app = express();

app.listen(8080, function(){    // listen(서버를 띄울 포트 번호, 띄운 후 실행할 코드)
    console.log('listening on 8080')
});


// pet 경로로의 GET 요청을 처리하는 코드
app.get('/pet', function(요청, 응답){
    응답.send('펫 용품을 쇼핑할 수 있는 페이지입니다.');
});

// beauty 경로로의 GET 요청을 처리하는 코드
app.get('/beauty', function(req, res){
    res.send('뷰티 용품을 쇼핑할 수 있는 페이지입니다.');
});

// 해당 경로로 접속 시, HTML 파일 보내기
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html') // .sendFile(보낼 파일 경로)
});