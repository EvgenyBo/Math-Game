

react navigation:
https://reactnavigation.org/docs/en/getting-started.html


GameScreen useeffect

    } else if (expectedTime.current === finalTime.current) {
      dispatch(setShowGameOverModal(true));
      dispatch(setIsActiveTimer(false));
      // firebase
      //   .getDocs('users', user.uid)
      //   .then(userData => {
      //     if (isDataNotExist(userData._data)) {
      //       saveUserScore();
      //       saveScore();
      //     } else if (score > getBestScore(userData._data)) {
      //       saveUserScore();
      //       saveScore();
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error adding document: ', error);
      //   });

  GameScreen functions

  // function isDataNotExist(userData) {
  //   return !userData || !userData[gameName] || !userData[gameName][gameType];
  // }

  // function saveScore() {
  //   firebase
  //     .saveData(gameName, gameType, {
  //       [user.uid]: { username: user.userName, score },
  //     })
  //     .then(doc => {})
  //     .catch(error => {
  //       console.error('Error adding document: ', error);
  //     });
  // }

  // function saveUserScore() {
  //   setIsNewRecord(true);
  //   firebase
  //     .saveData('users', user.uid, {
  //       [gameName]: {
  //         [gameType]: score,
  //       },
  //     })
  //     .then(doc => {
  //       console.log('saveUserScore', doc);
  //     })
  //     .catch(error => {
  //       console.error('Error adding document: ', error);
  //     });
  // }

  // function getBestScore(userScore) {
  //   let bestScore = 0;
  //   bestScore = userScore[gameName] && userScore[gameName][gameType];
  //   return bestScore;
  // }

  // LeaderBoardScreen getLeaderBoard func

      // firebase
    //   .getDocs(gName, gType)
    //   .then(gameScores => {
    //     let usersData = [];
    //     if (gameScores._data) {
    //       usersData = Object.keys(gameScores._data).map(key => {
    //         if (key === user.uid) {
    //           setMyScore(gameScores._data[key].username);
    //         }
    //         return {
    //           name: gameScores._data[key].username,
    //           score: gameScores._data[key].score,
    //         };
    //       });
    //     }
    //     setIsLoading(false);
    //     setData(usersData);
    //   })
    //   .catch(error => {
    //     setIsLoading(false);
    //     setErrorMsg('Could not connect to database');
    //   });