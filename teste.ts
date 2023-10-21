function fibonacci(maxNum:number) {
    console.log(1)
    console.log(1)
    let fibonacci = [1, 1]
    for(let i = 2; i < maxNum; i++) {
        let atual = fibonacci[i - 1] + fibonacci[i - 2] 
        fibonacci.push(atual)
        console.log(atual)
    }
}

fibonacci(30)
