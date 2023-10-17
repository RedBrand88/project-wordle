import React from 'react';

function EndBanner({ type, answer, guesses }) {
    if (type === "win") {
        return (
            <div className='happy banner'>
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong> {guesses} guesses</strong>.
                </p>
            </div>
        );
    }
    if (type === "loss") {
        return (
            <div className='sad banner'>
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        );
    }
}

export default EndBanner;

