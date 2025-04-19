const greating = function (greatParametr) {
    return function (name) {
        console.log(`${greatParametr} ${name}`);
    }
}
const greatingHey = greating('Hey');
greatingHey('Jonas')

greating('Hello')('Stiven');
//  const createNotification = function(type) {
//       return function(message) {
//         const icons = {
//           success: '✅',
//           error: '❌',
//           info: 'ℹ️',
//           warning: '⚠️'
//         };
//         const msgBox = document.getElementById('message');
//         msgBox.textContent = `${icons[type] || ''} ${message}`;
//         msgBox.style.color = type === 'success' ? 'green' :
//                              type === 'error' ? 'red' :
//                              type === 'warning' ? 'orange' : 'blue';
//       }
//     };


  const checkBtn = document.getElementById('submit');
  checkBtn.addEventListener('click', () => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
console.log(login, password);
    validateForm(login, password);
  });
  
function validateForm(login, password) {
    const loginRegex = /^[A-Z][a-zA-Z0-9]*$/;
    const passwordRegex = /^[a-z0-9]{8,16}$/;

    if (!loginRegex.test(login)) {
      errorNotify('Login must start with a capital letter and contain only letters/numbers.');
      return;
    }

    if (!passwordRegex.test(password)) {
      errorNotify('Password must be 8–16 characters, only lowercase letters and numbers.');
      return;
    }

    successNotify('Your data has been saved!');
  }

  const createNotification = function (type) {
    return function (message) {
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        const msgBox = document.getElementById('message-box');
        msgBox.textContent = ` ${icons[type]} ${message}`;
        msgBox.style.color = type === 'success' ? 'green' :
                             type === 'error' ? 'red' :
                             type === 'warning' ? 'orange' : 'blue';
    };
};
const successNotify = createNotification('success');
const errorNotify = createNotification('error');

