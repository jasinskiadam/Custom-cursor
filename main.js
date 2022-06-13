const body = document.querySelector('body');
const cursor = document.createElement('div');
const cursorFollower = document.createElement('div');

const cursorSize = 15;
const cursorFollowerSize = 10;

cursor.classList.add('cursor', 'cursorMain');
cursorFollower.classList.add('cursor', 'cursorFollower')

body.appendChild(cursor);
body.appendChild(cursorFollower);


const cursorMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
     
    cursor.style.transform = `translate(${mouseX-cursorSize/2}px, ${mouseY - cursorSize/2}px)`;
    cursorFollower.style.transform = `translate(${mouseX-cursorFollowerSize/2}px, ${mouseY-cursorFollowerSize/2}px)`;
};

body.addEventListener('mousemove', cursorMove);




