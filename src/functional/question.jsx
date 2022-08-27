import React, {useState, useEffect} from 'react'
import '../presentational/present.css'
import getQuizById from './data'
import { getOptionsById } from './data'


const Questions =()=> {

    const [question1, setQuestion1] = useState('')

    const [option1, setOption1] = useState({})
    const [option2, setOption2] = useState({})
    const [option3, setOption3] = useState({})

    const [question2, setQuestion2] = useState('')
    const [question3, setQuestion3] = useState('')

    let totalQuestions = [];

    for(let i=1; i<4; i++){
        totalQuestions.push(eval(`question${i}`))
    }


    let quiz = [];
    for(let i=1; i<4; i++){
        quiz.push(getQuizById(i))
    }
    useEffect(()=>{
        for(let i=0; i<3; i++){
            eval(`setQuestion${i+1}(quiz[${i}][0].question)`)
        }
        setOption1(getOptionsById(1)[0])
        setOption2(getOptionsById(2)[0])
        setOption3(getOptionsById(3)[0])
        
    }, [])

            console.log(option1)

    return(
        <div>
            {totalQuestions.map((totalQuestion, i)=>{
                return(
                    <div key={i}>
                       <div className='SurveyBody' >
                         <h2>{`Question ${i+1}`}</h2><br />
                            </div>
                            <div className='question'>
                                <div>{totalQuestion}</div>
                            </div> 
                            <div className='options'>
                                <form action="">

                            <label htmlFor="optionA">
                            <input id='optionA' type="radio" name='answers' value={eval(`option${i+1}.optionA`)}/>
                            {eval(`option${i+1}.optionA`)}
                            </label><br />
                            <label htmlFor="optionB"><input id='optionB' type="radio" name='answers' value={eval(`option${i+1}.optionB`)}/>
                            {eval(`option${i+1}.optionB`)}</label><br />
                            <label htmlFor="optionC"><input id='optionC' type="radio" name='answers' value={eval(`option${i+1}.optionC`)}/>
                            {eval(`option${i+1}.optionC`)}</label>
                                </form></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Questions