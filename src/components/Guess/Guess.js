import React from 'react';
import Display from '../Display/Display';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import EndBanner from '../EndBanner/EndBanner';

function Guess({ answer }) {
    const MINLENGTH = 5;
    const MAXLENGTH = 5;
    const [guess, setGuess] = React.useState("");
    const [guessList, setGuessList] = React.useState([]);
    const [banner, setBanner] = React.useState(null);

    function submitGuess(event) {
        event.preventDefault();
        if (guess === answer) {
            setBanner('win');
        }
        const newNumOfGuessesAllowed = NUM_OF_GUESSES_ALLOWED - 2;
        if (guessList.length > newNumOfGuessesAllowed) {
            setBanner('loss');
        }

        const newGuess = checkGuess(guess, answer);
        const nextGuessList = [...guessList, newGuess];
        setGuessList(nextGuessList);
        setGuess("");
    }

    return (
        <>
            <Display guessList={guessList} answer={answer} />
            <form
                className="guess-input-wrapper"
                onSubmit={submitGuess}
            >
                <label htmlFor="guess-input">Enter guess:</label>
                {banner === "win" &&
                    <EndBanner type="win" answer={answer} guesses={guessList.length} />
                }
                {banner === "loss" &&
                    <EndBanner type="loss" answer={answer} guesses={guessList.length} />
                }
                <input
                    required
                    id="guess-input"
                    type="text"
                    pattern={".{" + MINLENGTH.toString()
                        + "," + MAXLENGTH.toString() + "}"}
                    maxLength={MAXLENGTH}
                    value={guess}
                    onChange={(e) => setGuess(e.target.value.toUpperCase())}
                    disabled={banner === "win" || banner === "loss"}
                />
            </form >
        </>
    );
}

export default Guess;

