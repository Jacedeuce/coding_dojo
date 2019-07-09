class Card {
    constructor(suit, val, num_val){
        this.suit = suit
        this.val = val
        this.num_val = num_val
    }

    show(){
        console.log(`Suit: ${this.suit}, Value: ${this.val}, Numerical: ${this.num_val}`)
    }
}

class Deck {
    constructor(){
        var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
        var vals = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
        this.deck = []
        var i = 0
        for (let suit of suits){
            for (var r=0; r<13; r++){
                this.deck[i] = new Card(suit, vals[r], r+2)
                i++
            }
        }
    }

    shuffle() {
        var m = this.deck.length, t, i;
        console.log('*'.repeat(60))
        console.log('Shuffling...')
        console.log('*'.repeat(60))
        while(m) {
            i = Math.floor(Math.random() * m--)

            t = this.deck[m]
            this.deck[m] = this.deck[i]
            this.deck[i] = t
        }
    }

    reset() {
        constructor()
    }

    deal() {
        return this.deck.pop()
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }

    show_hand() {
        for (let card of this.hand){
            console.log(card)
        }
    }
    take_cards(deck, num=1) {
        for (var i=0;i<num;i++){
            this.hand.push(deck.deal())
        }
        if (num === 1){
            console.log(`${this.name} took a card.`)
        } else {
            console.log(`${this.name} took ${num} cards.`)
        }
    }
    discard(num=1){
        if (num == 1){
            console.log(`${this.name} discarded ${num} card.`)
            return this.hand.pop()
        } else {
            discards = []
            for (var i=0; i<num; i++) {
                discards.push(this.hand.pop())
            }
            console.log(`${this.name} discarded ${num} cards.`)
            return discards
        }
    }
}

my_deck = new Deck()

my_deck.shuffle()

player1 = new Player("Player 1")

player1.take_cards(my_deck)

pile = player1.discard()

player1.take_cards(my_deck, 5)

player1.show_hand()


console.log(pile)