from deck import Deck, Euchre_Deck
from player import Player, Team


players = []
input_list = ['first', 'second']
for item_player in input_list:
    for item_team in input_list:
        player = input(f"Enter {item_team} team's {item_player} player's name: ")
        players.append(Player(player))

first = Team("first")
second = Team("second")
first.add_player(players[0])
first.add_player(players[2])
second.add_player(players[1])
second.add_player(players[3])

# for player in first.players:
#     print(player.player_name)

# for player in second.players:
#     print(player.player_name)

round = 0
while first.score < 10 and second.score < 10:
    dealer = 3
    trump = None
    players[dealer].set_dealer()
    print(round)
    # for player in players:
    #     print(player.player_name, player.dealer)



    # build the deck
    deck = Euchre_Deck()
    deck.build_deck()
    deck.shuffle()

    deck.deal_cards(players, 5)
    for player in players:
        print(player.player_name)
        player.print_hand()
    print("")
    for card in deck.cards:
        print(card)
    print()
    answer = "n"
    for i in range(4):
        answer = input(f"{players[i].player_name}, do you want to declare {deck.cards[0]} trump? (y/n): ")
        if answer == "y":
            trump = deck.cards[0].suit
            print(f"{deck.cards[0].suit} declared trump")
            break    
    if trump == None:
        trump_options = deck.suits
        trump_options.remove(deck.cards[0].suit)
        for i in range(4):
            print("Trump options:")
            for suit in trump_options:
                print(suit)
            trump = input(f"{players[i].player_name}, what do you want to declare trump?")




    print()
    print()
    print()
    print()
    players[dealer].set_dealer(False)
    first.update_score(1)

    players.insert(0, players[3])
    players.pop()
    round+=1


