import { fstat } from 'fs';
import './App.css';

function App() {
  return (
    <>

    </>
  );
}


export default App;

console.log(name.helper("peter"))
console.log(`example 4`)
const http = require("http")

const server = http.createServer((request, response)=>{
  response.writeHead(200, {'content-type': 'text/html'})
  const readStream = fs.createReadStream(__dirname + '/index.html')

  readStream.pipe(response)
})

server.listen((3000), function(){
  console.log("Server is running!")
})