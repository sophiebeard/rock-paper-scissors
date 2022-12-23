<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/sophie-beard-9a9842222/)



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Digital Future's Rock, Paper, Scissors Challenge!</h3>

  <p align="center">

  This was my fifth challenge as part of the Digital Future's academy, and it was a back-end Node.JS challenge. The task is to provide a backend server that runs Rock, Paper, Scissors games that can be played on the web and fulfills the user stories.
    <br />
    <a href="link to repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="link to repo">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#project-plan">Project Plan</a>
    </li>
    <li><a href="#project-review">Project Review</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Project Plan

#### User Story 1
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```

#### User Story 2
```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

#### Tests
Player:
1. Test that a player is created with a name. 
2. Test that a player has a null weapon when made. 
3. Test that a weapon is assigned when chosen.

I decided to implement the two player option early, so that this would need less refactoring when I came to tackle the extended criteria. The aim was to set two players (always) and then have an option to play against a computer, or another player. 

#### Domain Model

| Objects      | Properties         | Messages                        | Output  |
| ------------ | ------------------ | ------------------------------- | ------- |
| Player       | name               | weaponChoice(choice)            |         |
|              | weapon             |                                 |         |
|              |                    |                                 |         |
| RPS          | weaponBank         |                                 |         |
|              | player1            |                                 |         |
|              | player2            |                                 |         |
|              | winner             | getWinner()                     | @string |
|              |                    | result()                        | @string |
| Computer     | computerWeaponBank | computerWeapon()                | @string |
|              |                    |                                 |         |
|              |                    |                                 |         |
| RPSOnePlayer | newPlayer          | playerConstructor(name, weapon) | @Player |
|              | computerChoice     | computerFight()                 | @String |
|              | outcome            | gameOutcome()                   | @string |

#### Tests
1. Should create a player with the correct name
2. getWinner() should return a string.
3. Should return the correct string, depending who wins the game. 

With the two main classes set up, I then began to do the routing for the application. I began with app.js to set up the server. I am going to test that the request has succeeded by looking for HTTP 200 (OK status). 

#### Tests
1. Test that app renders the server.
2. The app should render the title. 
3. It should have a /game route. 
4. The /game page should render "Choose your weapon"
5. It should have a /winner route. 
6. The /winner page should render "And the winner is..."

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )

To implement these rules into my game, I needed to refactor the code to add two more options into my weaponBank, and return the correct result when each is played. 

#### Multiplayer

I built my game to have a multiplayer option first. Now, I need to implement a one player option. The first thing that I did was create a landing page, with a link to either the one player or two player options. Now, I need to create the components for the one player game. I then created a separate index page for the one player game, which involved only one name submission box.

I struggled to implement the same code for the single-player version of the game. I decided to use a different method for the gameOutcome() method. With more time, I would like to refactor this so that it uses the same functionality and is shorter.  

#### Tests
1. A game should have a player with the correct name. 
2. The computer method should choose a valid weapon.
3. The computer method should generate an array of weapons. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Project Review

- [ ] The extended criteria have been met by the application as the multiplayer feature has been implemented with 5 options for weapon. The result of the game is displayed on the last page. 
- [ ] The logic of the game is not working properly, there are only two possible results: draw or player 2 wins. 
- [ ] There is good test coverage that checks the game logic, routes and rendered views. 
- [ ] As good practice, to keep the code clean, I should remove any commented code left behind before submitting the project. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are encouraged and greatly appreciated! If you have a suggestion for what could make this better, please fork the repo and create a pull request. Thanks!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sophie Beard - beardsophie@outlook.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* This README file was formatted from othneildrew's [template](https://github.com/sophiebeard/Best-README-Template).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew













