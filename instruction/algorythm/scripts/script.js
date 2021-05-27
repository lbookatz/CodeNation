let d = 28
let m = 1
let y = 1977

const myFunction = () =>{
    if (m<3){
        m += 12
        y -= 1
    }
    let f = parseInt(y / 100);
    console.log(f)
    let l = y - 100 * f
    console.log(l)

    let s = ((2.6*m)-5.39) + parseInt(l/4) + parseInt(f/4) + d + l - 2*f
    
    console.log(s)

    let x = s-(7*parseInt(s/7))

    console.log(x)
}

myFunction()