import express from "express";
import cors from "cors";
import gremlin from "gremlin"

const router = express.Router()
const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(router.all('/', (req, res) => {
    res.status(200).json({message:'API server for Kube App'})
}));

app.use(router.all('/callblogapp', (req, res) => {
  request('http://localhost:7000', function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  if(response && body){
  res.status(response.statusCode).json(body)
  }else{
    res.status(400).json("Error")
  }
});
}));

app.listen(PORT, '0.0.0.0', () =>
console.info(`Server Running on Port: http://localhost:${PORT}`))