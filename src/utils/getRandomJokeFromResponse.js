export const getRandomJokeFromResponse = (response) => {
  const countOfJokes = response.data.total; // count of returned jokes
  const randomIndex = Math.floor(Math.random() * countOfJokes); // generating random index of joke

  return response.data.result[randomIndex].value; //  returning random joke from incoming array
};
