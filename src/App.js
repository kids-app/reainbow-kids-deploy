import React, { Component } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen.js';
import Title from './components/Title/Title.js';
import Timer from './components/Timer/Timer.js';
// import Wheel from './components/Wheel/Wheel.js';
import TextBox from './components/TextBox/TextBox.js';
import Guess from './components/Guess/Guess.js';
import PlayAgain from './components/PlayAgain/PlayAgain.js';
import Wordbank from './components/Wordbank/Wordbank.js';
import Nav2 from './components/nav2';
import Nav4 from './components/nav4';

import bluebirdthroughmywindow from './assets/Audio/bluebirdthroughmywindow.mp3';
import BodyParts from './assets/Audio/BodyParts.mp3';
import ClapYourHands from './assets/Audio/ClapYourHands.mp3';
import dancingrainbowcolors from './assets/Audio/dancingrainbowcolors.mp3';
import Friends from './assets/Audio/Friends.mp3';
import FunnyLongSong from './assets/Audio/FunnyLongSong.mp3';
import GoodMorning from './assets/Audio/GoodMorning.mp3';
import InHisHands from './assets/Audio/InHisHands.mp3';
import ReadytoGetWashed from './assets/Audio/ReadytoGetWashed.mp3';





class App extends Component {
  constructor() {
    super()
    this.state = {
      categories: ['Play Now'],
    //   songs: [['On Sight', 'Black Skinhead', 'Blood On the Leaves'],['Ultralight Beam', 'Fade', 'Famous'],
    //   ['Nonstop', 'Nice for What', 'Gods Plan'],['Shot for Me', 'Headlines', 'Marvins Room'],
    //   ['Gimme the Loot', 'Juicy', 'Who Shot Ya'], ['Hypnotize', 'Mo Money Mo Problems', 'Ten Crack Commandments']],
    //   album: ['Yeezus','The Life of Pablo', 'Scorpion', 'Take Care', 'Ready to Die', 'Life After Death'],
      route: 'home',
      time: 60,
      encrypt: '',
      correctGuess: '',
      gameCategory: '',
      currentGuess: '',
      gameWon: '',
    //   currentAudio: Loot,
      wordBank: '',
      tracks: [
{songs: ['bluebird through my window', 'Body Parts', 'Clap Your Hands'], album: 'Yeezus', audio: [bluebirdthroughmywindow, BodyParts, ClapYourHands]},
{songs: ['dancing rainbow colors', 'friends', 'funny long song'], album: 'The Life Of Pablo', audio:[dancingrainbowcolors, Friends, FunnyLongSong]},
{songs: ['good morning', 'in his hands', 'ready to get washed'], album: 'Scorpion', audio: [GoodMorning, InHisHands, ReadytoGetWashed]},
// {songs: ['Shot for Me', 'Headlines', 'Marvins Room'], album: 'Take Care',audio: [Shot, Headlines, MarvinsRoom]},
// {songs: ['Gimme the Loot', 'Juicy', 'Who Shot Ya'], album: 'Ready to Die', audio:[Loot, Juicy, WhoShot]},
// {songs: ['Hypnotize', 'Mo Money Mo Problems', 'Ten Crack Commandments'], album: 'Life After Death',audio: [Hypnotize, MoMoney, TenCrack]}
]    
  }
}

  //In this method I want to be able to click on the category to start the game
  //with the clicked category being subject
  playGame = (event) => {
    //This will get the text Content of the LI clicked
    this.setState({route: 'start', gameCategory: event.target.textContent})
  }
  //End game if no victory before time period
  endGame = () => {

    this.setState({
      route: 'end',
      gameWon: 'You Lost :(',
      wordBank: ''
    })
  }

  //restart the game
  restartGame = () => {
    this.setState({
      route: 'home',
    })
  }

  //In this method I want to change decode the picked song by replacing all dashes with _
  setEncrypt = () => {
    // let track = this.getRandomInt(0,5) 
    //Depending on Chosen Category get one of the two arrays containing song names
    switch(this.state.gameCategory) {
      
      case 'Play Now':
        let track = this.getRandomInt(0,2)
        this.gameVersion(track)
        // this.setAlbumIndex(result)
        break;
       default:
    //   case 'Drake':
    //     track = this.getRandomInt(2,3)
    //     this.gameVersion(track)
    //     // this.setAlbumIndex(result)
    //     break;
    //   case 'The Notorious B.I.G.':
    //     track = this.getRandomInt(4,5)
    //     this.gameVersion(track)
    //     // this.setAlbumIndex(result)
    //     break;
    }  
  }

  //Initialize Game with the Version depending on the category
  gameVersion (num) {
    //Get random int between 0 and 2 since each category has 3 songs
    const random = this.getRandomInt(0, 2)
    // console.log(`index is ${num} and song is index ${random}`)
    //Fetch a random value of the 2 random sub indexes
    let currentString = this.state.tracks[num].songs[random]
    // console.log(this.state.tracks[num].audio[random])

    let currentAudio = this.state.tracks[num].audio[random]


    console.log(random)
    console.log(currentAudio)
    console.log(currentString)

    // console.log(currentString)
    //Encrypt this value to be made with - instead of letters
    let replacedString = currentString.replace(/[a-zA-Z]/g , '-')
    //Update State with new values
    this.setState({
      encrypt: replacedString,
      correctGuess: currentString,
      currentAudio: currentAudio
    })
  }

  //Update the state of currentGuess with the input fields value
  myGuess = (event) => {
    this.setState({currentGuess: event.target.value})
  }

  //Check to see if guessed value is equal to the string
  checkGuess = () => {
    let correctAnswer = this.state.correctGuess.toLowerCase()
    let currentAnswer = this.state.currentGuess.toLowerCase()

    //Add letter to word bank
    this.setWordBank(currentAnswer)

    console.log(this.state.currentGuess)
    if(this.state.currentGuess.length > 1 && currentAnswer !== correctAnswer ) {
      alert('Please Enter One letter at a time')
      return;
    }

    //Convert both correct answer and current answer to lowercase
    // let correctAnswer = this.state.correctGuess.toLowerCase()
    // let currentAnswer = this.state.currentGuess.toLowerCase()

    let finalEncryption = ''
    //Get the current state of encypt
    let arrEncryption = this.state.encrypt
    //Split this into an array of chars
    arrEncryption = arrEncryption.split('')
    console.log(`${this.state.encrypt} and ${correctAnswer}`)

    //Check if the correct answer includes the current answer given by user
    let result = correctAnswer.includes(currentAnswer)

    //If the full word matches the correct answer then you win the game
    if(currentAnswer === correctAnswer || this.state.encrypt === correctAnswer) {
      this.setState({
        gameWon: 'You won!!!',
        route: 'end',
        wordBank: ''
      })//If the letter is included but the full word hasnt been found
    } else if (currentAnswer !== correctAnswer && result === true) {
      //Grab the length of the correct Guess
      let length = this.state.correctGuess.length

      //Create a new encrypted string with the index of the found letter replacing the corresponding index of encrypted state
      for(var i = 0; i < length; i++) {
        if(correctAnswer[i] === currentAnswer) {
          arrEncryption[i] = currentAnswer
          finalEncryption = arrEncryption.join('').toLowerCase()
          this.setState({encrypt: finalEncryption})
        }
      }

    }

    //If the final word is found after you include the last letter win the game
    if(finalEncryption === correctAnswer) {
      this.setState({
        gameWon: 'You won!!!',
        route: 'end',
        wordBank: ''
      })
    }
  }

  //Generate a random number
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //Add guessed letter to word bank
  setWordBank = (currentAnswer) => {
      if( this.state.wordBank.includes(currentAnswer) === false ) {
        //Add current answer to word bank pointer
        // eslint-disable-next-line react/no-direct-mutation-state
        let sortedBank = this.state.wordBank += currentAnswer
        //sort word bank pointer
        sortedBank = sortedBank.split('').sort().join('')
        this.setState({wordBank: sortedBank})
      }
  }

  render() {
      // console.log(`${this.state.correctGuess} encrytped to ${this.state.encrypt} and correct guess will be ${this.state.correctGuess}`)
      if(this.state.route === 'home') {
        return (
        <div className='App'> 
        <HomeScreen
            className='Test' 
            playGame = {this.playGame}
            categories={this.state.categories}/>
        </div>
      )
      } else if(this.state.route === 'start') {
        return (
            <>
            <div className='inputBox'>
             
          <div>
             
              <Title />

            
            <div>
               <audio className='gusa' ref='audio_tag' style={{color:'red'}} src={this.state.currentAudio} controls autoPlay/>
            </div>
            
    
            <div className='info'>
              <Timer
              setEncrypt={this.setEncrypt}
              endGame={this.endGame}
              decrement={this.decrement}
              time={this.state.time}/>
              <Wordbank words={this.state.wordBank}/>
            </div>
            {/* <Wheel /> */}
            <TextBox 
            setEncrypt={this.setEncrypt}
            encrypt={this.state.encrypt}/>
            <Guess
            myGuess={this.myGuess}
            checkGuess={this.checkGuess} 
            />
               
          </div>
     
          </div>
            <Nav2/> 
            </>
        ) 
      } else if(this.state.route === 'end') {
        return (
          <>
          <PlayAgain 
          gameWon={this.state.gameWon}
          restartGame={this.restartGame}/>
          <Nav4/> 
          </>
        )
      }
  }
}
export default App;
