let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //starts at 20, goes down by 1 with every wrong guess
let highscore = 0; //starts at 0 on page refresh, initial game

const playAgainBtn = document.querySelector('.again');
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

//click the 'check' button to see if user input matches the secret number
document.querySelector('.check').addEventListener
    ('click', function () {
        //capture user's input as 'guess'
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // when there is no input 
        if (!guess) {
           
            displayMessage('🚫 No number!')

            // when guess matches secret number, player wins
        } else if (guess === secretNumber) {
           
            displayMessage('✨ Correct Number!');

            // the ? display box then reveals the secret number
            document.querySelector('.number').textContent =
                secretNumber;
            //background turns green
            document.querySelector('body').style.backgroundColor = '#60b347';
            //secret number's display box gets wider for some reason.
            document.querySelector('.number').style.width = '30rem';

            //if current score exceeds latest high score, the high score will be updated as the current score
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        // when guess is too high
        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent =
        //             '📈 Too high!';
        //         score--;
        //         document.querySelector('.score').textContent =
        //             score;
        //     } else {
        //         document.querySelector('.message').textContent =
        //             'You lost the game!';
        //         document.querySelector('.score').textContent =
        //             0;
        //     }

        // } //when guess is too low
        // else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent =
        //             '📉 Too low!';
        //         score--;
        //         document.querySelector('.score').textContent =
        //             score;
        //     } else {
        //         document.querySelector('.message').textContent =
        //             'You lost the game!';
        //         document.querySelector('.score').textContent =
        //             0;
        //     }
        // }

        //if guess is different than the secret number
        else if (guess !== secretNumber) {
            if (score > 1) {
               
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
               
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent =
                    0;
            }
        }
    })

playAgainBtn.addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayMessage('Start guessing...')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    });

    //if current score is greater than latest high score, update the high score to be the current score

