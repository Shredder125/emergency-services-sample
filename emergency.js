               // HEART SECTION
const heartCounter = document.getElementById('heartCount');
const everyHearts = document.querySelectorAll('.fa-heart');
const cardHearts = Array.from(everyHearts).slice(1);

cardHearts.forEach(function(heart) {
   heart.addEventListener('click', function() {
   heartCounter.textContent = parseInt(heartCounter.textContent, 10) + 1;
   });
});
                        //  CALL FUNCTION
const coinNumber = document.getElementById('coinCount');
const historyContainer = document.querySelector('aside').children[1];
const buttons = document.querySelectorAll('button');
const clearBtn = document.querySelector('aside button');

for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].innerText.toLowerCase().includes('call')) {
            buttons[i].onclick = function() {
                     const coins = parseInt(coinNumber.innerText) || 0;
                        if (coins < 20) { alert('Not enough coins'); return;
                     }
      
      const card = this.closest('.bg-base-100');
      const name = card.querySelector('h2').innerText;
      const number = card.querySelector('h1').innerText;
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      alert('Calling' + ' ' + name + ' ' + number);
      coinNumber.innerText = coins - 20;
      
      
      
      const div = document.createElement('div');
      div.className = 'bg-green-50 rounded-md shadow-sm my-1 flex flex-col sm:flex-row justify-between items-start sm:items-center overflow-hidden';
      div.innerHTML =
        '<span class="font-semibold mb-1 sm:mb-0">' + name + '</span>' +
        '<span class="text-gray-600">' + number + '</span>' +
        '<span class="text-gray-400 text-sm ml-2">(' + now + ')</span>';

      historyContainer.prepend(div);
    }
  }
}

clearBtn.onclick = function() {
  historyContainer.innerHTML = '';
}


// COPY CASE -----------------------
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCounterBox = document.querySelector('.copy-copy h1'); 
let copyCount = 2;

copyButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const card = this.closest('.bg-base-100');
    const number = card.querySelector('.copy-number')?.innerText || card.querySelector('h1').innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
    }).catch(() => {
      alert(`Failed to copy ${number}`);
    });
    copyCount++;
    copyCounterBox.textContent = copyCount + " Copy";
  });
});
