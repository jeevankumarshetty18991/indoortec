const questions = [
  "What's your name?",
  "Thanks! What's your phone number?",
  "What type of property is this? (Apartment, Villa, Office)",
  "How big is the space? (e.g., 2BHK, 1200 sq. ft.)",
  "Where is it located?",
  "When would you like to start the project?",
  "What's your budget range?",
  "What interior style do you prefer? (Modern, Minimalist, etc.)"
];

const labels = [
  "Full Name", "Phone", "Property Type", "Space Size", "Location",
  "Timeline", "Budget", "Interior Style"
];

let answers = [];
let current = 0;
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const form = document.getElementById('chatForm');

function addMessage(text, sender, isError = false) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.innerText = text;

  if (isError) {
    msg.style.color = 'red';
    msg.style.fontWeight = 'bold';
  }

  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function askNext() {
  if (current < questions.length) {
    if (current === 4) {
      setTimeout(() => {
        addMessage(questions[current], 'bot');

        const select = document.createElement('select');
        select.id = 'dropdownInput';
        select.innerHTML = `
          <option value="" disabled selected>Select location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mangalore">Mangalore</option>
          <option value="Udupi">Udupi</option>
          <option value="Chikmagalur">Chikmagalur</option>
          <option value="Mysore">Mysore</option>
          <option value="Mumbai">Mumbai</option>
        `;
        select.className = 'dropdown-input';

        const wrapper = document.createElement('div');
        wrapper.classList.add('message', 'user');
        wrapper.appendChild(select);
        chatBody.appendChild(wrapper);
        chatBody.scrollTop = chatBody.scrollHeight;

        select.addEventListener('change', () => {
          const selected = select.value;
          addMessage(selected, 'user');
          answers.push(selected);
          current++;
          wrapper.remove();
          askNext();
        });
      }, 500);
    } else {
      setTimeout(() => addMessage(questions[current], 'bot'), 500);
    }
  } else {
    addMessage("Thanks! Our team will reach out to you shortly. 😊", 'bot');
    setTimeout(() => submitForm(), 1500);
  }
}

function submitForm() {
  form.querySelectorAll('input[type="hidden"]:not([name="access_key"]):not([name="redirect"])')
    .forEach(el => el.remove());

  answers.forEach((answer, i) => {
    const hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = labels[i];
    hidden.value = answer;
    form.appendChild(hidden);
  });

  form.submit();
}

// ✅ Phone number validation
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && userInput.value.trim()) {
    e.preventDefault();
    const text = userInput.value.trim();

    addMessage(text, 'user'); // always show input first

    if (current === 1) {
      if (!/^\d{10}$/.test(text)) {
        addMessage("Please enter a valid 10-digit phone number.", "bot", true);
        userInput.value = '';
        return;
      }
    }

    answers.push(text);
    userInput.value = '';
    current++;
    askNext();
  }
});

// Start conversation
function startConversation() {
  addMessage("Hello! 👋 Welcome to Indoortec", "bot");
  setTimeout(() => {
    askNext();
  }, 1000);
}
startConversation();

// Mobile chatbot open/close handling
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatbotWidget = document.getElementById("chatbotWidget");
  const reopenBtn = document.getElementById("reopenChatbotBtn");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  let ignoreResize = false;

  
  userInput.addEventListener("focus", () => {
    ignoreResize = true;
  });
  userInput.addEventListener("blur", () => {
    setTimeout(() => ignoreResize = false, 500);
  });

  function updateChatbotState() {
    if (ignoreResize) return; 

    if (isMobile()) {
      chatbotWidget.style.display = "none";
      reopenBtn.style.display = "block";
    } else {
      chatbotWidget.style.display = "block";
      reopenBtn.style.display = "none";
    }
  }

  updateChatbotState();
  window.addEventListener("resize", updateChatbotState);

  if (closeBtn && chatbotWidget && reopenBtn) {
    closeBtn.addEventListener("click", function () {
      chatbotWidget.style.display = "none";
      reopenBtn.style.display = "block";
    });

    reopenBtn.addEventListener("click", function () {
      chatbotWidget.style.display = "block";
      reopenBtn.style.display = "none";
    });
  }
});
