const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflow = 'hidden'


const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = 'black'
ctx.fillRect(0,0, canvas.width, canvas.height)


const hexa = [1, 2, 3, 4, 5, 6, 7, 8, 9,
'A', 'B', 'C', 'D', 'E', 'F']
let matrix = []
let fontSize = 16


for(let i = 0; i<canvas.width/fontSize; i++){
    matrix[i] = 1
}


const draw=()=>{
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    ctx.fillStyle = 'rgb(0, 256, 0)'
    ctx.font = fontSize +"px monospace"

    for(let i = 0; i<matrix.length; i++){
        let char = hexa[Math.floor(Math.random()*15)]
        ctx.fillText(char, i*fontSize,
            matrix[i]*fontSize)

        matrix[i]++
        if(matrix[i]*fontSize>canvas.height && 
            Math.random()>0.950){
                matrix[i] = 0
            }

    }
}


setInterval(draw, 30)