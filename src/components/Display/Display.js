import React from 'react';
import { range } from '../../utils';

function Display({ guessList }) {

    function getGuess(i) {
        const nextGuess = guessList[i];
        if (nextGuess) {
            return nextGuess;
        }
        return "";
    }

    function getChar(nextGuess, i) {
        const nextChar = { ...nextGuess[i] };
        if (nextChar) {
            return nextChar.letter;
        }
        return "";
    }

    function getStatus(nextGuess, i) {
        const nextStatus = { ...nextGuess[i] };
        if (nextStatus) {
            return nextStatus.status;
        }
        return "";
    }

    return (
        <div className='guess-results'>
            {range(6).map((row, index) => {
                return (<p key={row} className='guess'>
                    {range(5).map((col, letter) => {
                        return (
                            <span
                                key={col}
                                className={`cell ${getStatus(getGuess(index), letter)}`}
                            >
                                {getChar(getGuess(index), letter)}
                            </span>
                        );
                    })}
                </p>)
            })}
        </div>
    );
}

export default Display;

