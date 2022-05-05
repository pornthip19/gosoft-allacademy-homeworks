const http = require('http')

const server = http.createServer((req, res)=>{
    res.write('Thirasak Namsuphan ' + new Date().toISOString());
    res.end();
})

server.listen(2337, ()=>{
    console.log('server started')
})
