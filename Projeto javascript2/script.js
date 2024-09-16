
const students = [
    {
        name: "Pedro",
        n1: 6,
        n2: 8
    },
    {
        name: "Ana",
        n1: 4,
        n2: 9
    },
    {
        name: "Carlos",
        n1: 9,
        n2: 8
    },
    {
        name: "Margarida",
        n1: 7,
        n2: 10
    },
]

function average(n1, n2) {
    return ( (n1 + n2) / 2 ).toFixed(1)
}

function printStudentAverage(student) {
    const avg = average(student.n1, student.n2)
    const result = avg > 6;

    const text = `A média do(a) aluno(a) ${student.name} é: ${avg}`;
    let resultText;

    if (result) {
    resultText = `Parabéns, ${student.name}! você foi aprovado no concurso.`
} else {
    resultText = `Não foi dessa vez, ${student.name}! tente novamente.`
}

return text + '\n' + resultText;
 
  }
  
  for (let student of students) {
    let averagePrint = printStudentAverage(student)
    
    alert(averagePrint)
  }

