import requests
import xlsxwriter
import pandas as pd
import numpy as np
import openpyxl
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Border, Side, Font, Alignment, PatternFill, numbers

API_KEY = '5f9cc44e136f665467faac18bddb88d1'

def getNextBets():
    SPORT = 'upcoming' # use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

    REGIONS = 'us' # uk | us | eu | au. Multiple can be specified if comma delimited

    MARKETS = 'h2h' # h2h | spreads | totals. Multiple can be specified if comma delimited

    ODDS_FORMAT = 'decimal' # decimal | american

    DATE_FORMAT = 'iso' # iso | unix

    BET_SIZE = 10

    return requests.get(
        f'https://api.the-odds-api.com/v4/sports/{SPORT}/odds',
        params={
            'api_key': API_KEY,
            'regions': REGIONS,
            'markets': MARKETS,
            'oddsFormat': ODDS_FORMAT,
            'dateFormat': DATE_FORMAT,
        }
    ).json()
    
print(getNextBets()[0])