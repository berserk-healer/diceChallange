const dice = [
    {
        id: 1,
        name: 'dice1',
        url: './images/dice1.png'
        
    },
    {
        id: 2,
        name: 'dice2',
        url: './images/dice2.png'
    },
    {
        id: 3,
        name: 'dice3',
        url: './images/dice3.png'
    },
    {
        id: 4,
        name: 'dice4',
        url: './images/dice4.png'
    },
    {
        id: 5,
        name: 'dice5',
        url: './images/dice5.png'
    },
    {
        id: 6,
        name: 'dice6',
        url: './images/dice6.png'
    }
]

const result = document.querySelector('.result')
const btn = document.querySelector('.btn')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

function getDice() {
        const dice1 = dice[Math.floor(Math.random() * 5)]
        const dice2 = dice[Math.floor(Math.random() * 5)]
        
        img1.src = `${dice1.url}`
        img2.src = `${dice2.url}`

        if (dice1.id > dice2.id) {
           return result.innerHTML = 'Player 1 win'
        } else if (dice1.id < dice2.id) {
           return result.innerHTML = 'Player 2 win'            
        } else if (dice1.id == dice2.id){
           return result.innerHTML = 'Tie'
        }
}
