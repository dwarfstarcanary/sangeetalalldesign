var questions = 10;
var questionsLeft = ' [' + questions + ' questions left]';

var adjective1 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var noun1 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var verb1 = prompt('Please type a verb ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var verb2 = prompt('Please type a verb ending in ed ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var adjective3 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var adverb = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var noun3 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var adjective4 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';



alert('All done. Ready for the message?');

var sentence = "<p> On the top of the " + adjective1 + ' mountain there was a giant .' + noun1;
sentence += ' Celeste decided to ' + verb1 + ' up the mountain.'; 
sentence += ' She discovered a(n) ' +  noun2 + 'that was very' + adjective2 + ' causing her to trip and fall down the mountain.';
sentence += ' A giant monster by the name of Dwight ' + verb2 + ' Celeste.';
sentence += ' Celeste was intrigued by the ' + adjective3 +' monster.';
sentence += ' The monster notices this and starts to weep ' + adverb + ' and Celeste became empathetic.';
sentence += ' To console him, Celeste offered him a ' + noun3 + ' and smiled ';
sentence += ' From that day on they become known as the ' + adjective4 + ' duo. </p>';
document.write(sentence);