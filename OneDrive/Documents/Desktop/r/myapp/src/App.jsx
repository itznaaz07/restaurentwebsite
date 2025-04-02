
import "./App.css";
import { blog } from "./blog";
import But from "./button";
import Footer from "./footer";
import {Header} from "./header";

function App(){
  let headerinfo={
    email:'naz@gmail.com',
    phn:'872747536487387'
  }

  return(
    <div className="main">
     <Header headerinfo={headerinfo} cname="ganiya" c="hello"/><h1>welcome</h1>
    <div>
      <But/>
    </div>
      <Header/>
     <Footer/>
     <Card className="row"/>
     <Card/>
     <Card/>
     <Card/>
     {blog.map((v)=>{

     return(            
       <Product pitems={v}/>
     
  )  
   })}
    </div>
  
)}
  
 
export default App;

function Card(){
  return(
    <div className="carditem">card drive</div>
  )
}
function Product(){
  return(
    <div>
      j
    </div>
  )
}