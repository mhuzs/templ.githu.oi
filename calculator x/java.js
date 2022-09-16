let screen = document.getElementById('output');
var buttons = document.querySelectorAll('button');
let screenOut = '';
scri="";
for (input of buttons) {
    input.addEventListener('click', (on) => {
        let buttonData = on.target.innerText;
        console.log(buttonData);
        if (buttonData == 'X') {
            buttonData = '*';
            screenOut += buttonData;
            screen.value = screenOut;
        }
        else if (buttonData == '^') {
            buttonData = '**';
            screenOut += buttonData;
            screen.value = screenOut;
        }
      
        else if (buttonData == '$') {
            buttonData = '*216';
            screenOut += buttonData;
            screen.value = screenOut;
        }
        else if (buttonData == 'EUR') {
            buttonData = '*196.51';
            screenOut += buttonData;
            screen.value = screenOut;
        }
        else if (buttonData == 'RIY') {
            buttonData = '*49.66';
            screenOut += buttonData;
            screen.value = screenOut;
        }
        
        else if (buttonData == 'DIR') {
            buttonData = '*50.7';
            screenOut += buttonData;
            screen.value = screenOut;
        }
        else if (buttonData == 'C') {
            screen.value = '';
        }
        else if (buttonData == '->') {
            screen.value = screen.value.slice(0,-1);

        }
        else if (buttonData == '=') {
            screen.value = eval(screenOut);
        }
        else {
            screenOut += buttonData;
            screen.value = screenOut;
        }
    })
}

