const Quizs = [
    {
        id: 1,
        question: 'What is My name?'
    },
    {
        id: 2,
        question: 'Have You Eaten?'
    },
    {
        id:3,
        question: "What is today?"
    }
]

const Options = [
    {
        id: 1,
        optionA: 'Divine',
        optionB: 'Odunayo',
        optionC: 'Fatai'
    },
    {
        id: 2,
        optionA: 'Yes',
        optionB: 'No',
        optionC: 'Maybe'
    },
    {
        id:3,
        optionA: 'Monday',
        optionB: 'Friday',
        optionC: 'Monday'
    }
]

export const getOptionsById =(id)=>{
    return Options.filter(option=>{
        return option.id === id
    })
}

const getQuizById =(id)=> {
    return Quizs.filter(quiz=>{
        return quiz.id === id
    })
}
export default getQuizById
