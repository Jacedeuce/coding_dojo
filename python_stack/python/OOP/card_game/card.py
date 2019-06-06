class Card:
    def __init__(self, suit, face, value):
        self.suit = suit
        self.face = face
        self.value = value

    def __str__(self):
        return f"Suit: {self.suit}, Face: {self.face}, Value: {self.value}"
