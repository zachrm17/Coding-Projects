#!/usr/bin/env python
# coding: utf-8

# In[1]:
#Developed using Jupyter notebook

from IPython.display import clear_output

def display_board(board):
    clear_output()
    print(board[7]+ '|' +board[8]+ '|' +board[9])
    print(board[4]+ '|' +board[5]+ '|' +board[6])
    print(board[1]+ '|' +board[2]+ '|' +board[3])


# In[2]:


def player_input():
    marker = ' '
    while marker != 'X' and marker != 'O':
        marker = input('Player 1, choose X or O ')
        
    player1 = marker
    
    if player1 == 'X':
        player2 = 'O'
    else:
        player2 = 'X'
        
    return(player1,player2)


# In[3]:


def place_marker(board, marker, position):
    board[position] = marker


# In[4]:


def win_check(board, mark):
    return ((board[7] == mark and board[8] == mark and board[9] == mark)
    or (board[4] == mark and board[5] == mark and board[6] == mark)
    or (board[1] == mark and board[2] == mark and board[3] == mark)
    or (board[1] == mark and board[4] == mark and board[7] == mark)
    or (board[2] == mark and board[5] == mark and board[8] == mark)
    or (board[3] == mark and board[6] == mark and board[9] == mark)
    or (board[1] == mark and board[5] == mark and board[9] == mark)
    or (board[3] == mark and board[5] == mark and board[7] == mark))


# In[5]:


import random
def choose_first():
    if random.randint(0,1) == 0:
        return "Player 2"
    else:
        return "Player 1"


# In[6]:


def space_check(board, position):
    return board[position] == ' '


# In[7]:


def full_board_check(board):
    for x in range(1,10):
        if space_check(board, x):
            return False
    return True


# In[8]:


def player_choice(board):
    position = 0
    
    while position not in [1,2,3,4,5,6,7,8,9] or not space_check(board, position):
        position = int(input("Choose next position: (1-9) "))
        
    return position


# In[9]:


def replay():
    choice = input("Would you like to play again? 'y' or 'n': ")
    return choice == 'y'


# In[10]:


print('Welcome to Tic Tac Toe!')

while True:
    # Game setup
    
    game_board = [' '] * 10
    player1_marker, player2_marker = player_input()
    
    turn = choose_first()
    print(turn + " will go first!")
    
    play_game = input('Ready to play? y or n ')
    if play_game == 'y':
        game_on = True
    else:
        game_on = False
    
    pass

    while game_on:
        
        # Player 1 Turn
        if turn == 'Player 1':
            
            #Displays board
            display_board(game_board)
            
            #Player choose position
            position = player_choice(game_board)
            place_marker(game_board, player1_marker, position)
            
            #Check if player has won
            if win_check(game_board, player1_marker):
                display_board(game_board)
                print("Player 1 has won the game! Congratulations!")
                game_on = False
            
            #Check if there is a tie
            else:
                if full_board_check(game_board):
                    display_board(game_board)
                    print("The game is a DRAW!")
                    game_on = False
                else:
                    turn = "Player 2"
            
            #If no tie or win, next player's turn
            
        
        # Player 2 turn.
        elif turn == 'Player 2':
            
             #Displays board
            display_board(game_board)
            
            #Player choose position
            position = player_choice(game_board)
            place_marker(game_board, player2_marker, position)
            
            #Check if player has won
            if win_check(game_board, player2_marker):
                display_board(game_board)
                print("Player 2 has won the game! Congratulations!")
                game_on = False
            
            #Check if there is a tie
            else:
                if full_board_check(game_board):
                    display_board(game_board)
                    print("The game is a DRAW!")
                    game_on = False
                else:
                    turn = "Player 1"
            

    if not replay():
        break


# In[ ]:




