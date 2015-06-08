from CAO_Game import CAO_Game
from CAO_Cards import CAO_Cards

import os

class CAO_GameManager():
    def __init__(self):
        self.langs = {}

        for filename in next(os.walk('lang'))[1]:
            self.langs[filename] = {}

        for lang in self.langs:
            self.langs[lang]['black_cards'] = CAO_Cards.get_black_cards(lang)
            self.langs[lang]['white_cards'] = CAO_Cards.get_white_cards(lang)

            self.langs[lang]['games'] = {}

    def join_game(self, game_name, lang):
        if self.langs.get(lang) is None:
            return None

        games = self.langs[lang]['games']
        black_cards = self.langs[lang]['black_cards']
        white_cards = self.langs[lang]['white_cards']

        game = games.get(game_name)

        if game is None:
            print('Starting new game')

            game = games[game_name] = CAO_Game(white_cards, black_cards)

        return game
