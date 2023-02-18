

document.querySelector("button").addEventListener('click', energy)


function energy(){

let pepe;
fetch("https://pepe.ismaelb.dev/api/random")
.then(res => res.json())
.then(data =>{
     console.log(data)
        document.querySelector(".mauj").src = data.image
})
.catch(err =>{
    console.log("error")
})
}

