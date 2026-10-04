const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.style.color = '#d9d9d9');
    link.style.color = 'white';
  });
});

function handleSignIn(response) {
  console.log("Signed in:", response.credential);
  alert("Signed in successfully!");
}
