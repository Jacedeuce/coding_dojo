from card import Card
from random import randint

class Deck:

    def __init__(self, size = 52):
        self.cards = []
        self.size = size
        self.suits = ["spades","hearts","diamonds","clubs"]
        self.faces = ["Ace","King","Queen","Jack","Ten","Nine","Eight","Seven","Six","Five","Four","Three","Two"]
        self.values = [value for value in range(14, 1, -1)]

    def build_deck(self):
        for suit in self.suits:
            for i in range(len(self.values)):
                self.cards.append(Card(suit, self.faces[i], self.values[i]))
    
    def print_deck(self):
        for card in self.cards:
            print(card)

    def shuffle(self):
        for i in range(0, self.size-1):
            index_to_swap = randint(0, self.size-1)
            self.cards[i], self.cards[index_to_swap] = self.cards[index_to_swap], self.cards[i]

    def deal_cards(self, players, number):
        for player in players:
            player.hand = self.cards[0:5]
            del self.cards[0:5]


class Euchre_Deck(Deck):

    def __init__(self, size = 24):
        Deck.__init__(self, size)
        self.faces = ["Ace","King","Queen","Jack","Ten","Nine"]
        self.values = [value for value in range(14, 8, -1)]