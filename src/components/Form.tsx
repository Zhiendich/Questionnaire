import React, { useState } from 'react'
import Answer from './Answer'


const Form = () => {
    const [currentQuestinNumber, setCurrentQuestinNumber] = useState(0)
    const [changeRadioValue, setChangeRadioValue] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const answersList = [
        {
            question: 'Какие типы данных есть в Javascript?',
            answersOptions: [
                { answerText: 'string, number, boolean, float, array, undefined', isCorrect: false, value: 1 },
                { answerText: 'object, array, number, string, boolean, bigInt, null', isCorrect: false, value: 2 },
                { answerText: 'null, error, object, array, number, string, boolean', isCorrect: false, value: 3 },
                { answerText: 'string, number, boolean, bigInt, null, undefined, object, char', isCorrect: true, value: 4 }
            ]
        },
        {
            question: 'В чем разница между обычной и стрелочной функцией?',
            answersOptions: [
                { answerText: 'У стрелочной функции нет this,стрелочние функции не могут быть использованны как конструктор, \n в стрелочных отсутствует специальный массив arguments', isCorrect: true, value: 1 },
                { answerText: 'У стрелочной функции нет this, стрелочние функции не могут быть использованны как конструктор ', isCorrect: false, value: 2 },
                { answerText: 'Стрелочная функция не могут быть многострочными, в стрелочных отсутствует специальный массив arguments', isCorrect: false, value: 3 },
                { answerText: 'У стрелочной функции нет this,стрелочние функции не могут быть использованны как конструктор, \n в стрелочных отсутствует специальный массив arguments, стрелочная функция не могут быть многострочными', isCorrect: false, value: 4 }
            ]
        },
        {
            question: 'Выберите вариант где присутствуют все доступные элементы массива',
            answersOptions: [
                { answerText: 'map, filter, turn', isCorrect: false, value: 1 },
                { answerText: 'turn, map, reduce, sort, filter', isCorrect: false, value: 2 },
                { answerText: 'map, filter, sort, reduce', isCorrect: true, value: 3 },
                { answerText: 'find, sort, reduce, turn', isCorrect: false, value: 4 }
            ]
        },
        {
            question: 'Что такое рекурсия?',
            answersOptions: [
                { answerText: 'Функция вызывает другую функцию', isCorrect: false, value: 1 },
                { answerText: 'Функция вызывает сама себя', isCorrect: true, value: 2 },
                { answerText: 'Функция возвращает другую функцию', isCorrect: false, value: 3 },
            ]
        },
    ]
    const changeQuestinNumber = () => {
        if (changeRadioValue !== 0) {
            const currentCorrectAnswer = answersList[currentQuestinNumber].answersOptions.find(item => item.isCorrect)
            if (currentCorrectAnswer?.value == changeRadioValue) {
                setCorrectAnswers(correctAnswers + 1)
            }
            setCurrentQuestinNumber(currentQuestinNumber + 1)
            setChangeRadioValue(0)
            return
        }
        alert('Выберите ответ !')
        return
    }
    const repeat = () => {
        setCurrentQuestinNumber(0)
        setCorrectAnswers(0)
    }
    return (
        <div>
            {currentQuestinNumber <= answersList.length - 1 ?
                <div className='bg-white p-4 w-[500px] min-h-[400px]  rounded-[20px] flex flex-col justify-between'>
                    <h1 className='text-[25px] mt-6 text-center'>{answersList[currentQuestinNumber].question}</h1>
                    {answersList[currentQuestinNumber].answersOptions.map(item => <Answer setChangeRadioValue={setChangeRadioValue} changeRadioValue={changeRadioValue} key={item.value} radioValue={item.value} answerText={item.answerText} />)}
                    <button onClick={changeQuestinNumber} className='text-white w-full bg-black h-[50px] mt-4 mb-3'>Ответить</button>
                </div>
                :
                <div className='bg-white p-4 w-[500px] h-[400px] rounded-[20px] flex flex-col justify-between'>
                    <h1 className='text-center text-[24px]'>Количество правильных ответов {correctAnswers} из {answersList.length}</h1>
                    <button onClick={repeat} className='text-white w-full bg-black h-[50px] mb-3'>Начать заново</button>
                </div>}
        </div>

    )
}

export default Form