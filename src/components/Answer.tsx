import React, { useState } from 'react'

interface AnswerProps {
    answerText: string,
    radioValue: number,
    changeRadioValue: number,
    setChangeRadioValue: (radioValue: number) => void
}
const Answer = ({ answerText, radioValue, changeRadioValue, setChangeRadioValue }: AnswerProps) => {
    const [radio, setRadio] = useState(radioValue)
    const changeRadio = () => {
        setChangeRadioValue(radio)
    }
    return (
        <div className=' flex items-start m-[10px]'>
            <input className='mr-[10px] mt-[8px]' value={radio} checked={radio == changeRadioValue ? true : false} onChange={changeRadio} type="radio" name="answer" />
            <span >{answerText}</span>
        </div>
    )
}

export default Answer