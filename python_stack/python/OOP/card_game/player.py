class Player:

    def __init__(self, player_name):
        self.player_name = player_name
        self.hand = []
        self.dealer = False

    def set_dealer(self, true_false=True):
        self.dealer = true_false

    def print_hand(self):
        for card in self.hand:
            print(card)

class Team:
    
    def __init__(self, team_name):
        self.players = []
        self.team_name = team_name
        self.score = 0

    def add_player(self, player):
        self.players.append(player)

    def update_score(self, points):
        self.score += points
