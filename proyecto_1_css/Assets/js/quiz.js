document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q6"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q7"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q8"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q9"]:checked')?.value === "a")
    score++;
  if (document.querySelector('input[name="q10"]:checked')?.value === "a")
    score++;

  let result = "";
  if (score === 10) {
    result = "¡Excelente! Tienes un nivel sobresaliente. 🎉";
  } else if (score >= 7) {
    result = "¡Muy bien! Tienes una buena base, sigue aprendiendo. 👍";
  } else if (score >= 4) {
    result = "¡Bien! Pero puedes mejorar, explora nuestros cursos. 💡";
  } else {
    result = "¡Ánimo! Te invitamos a aprender con nosotros. 🚀";
  }
  document.getElementById(
    "quizResult"
  ).textContent = `Puntaje: ${score}/10\n${result}`;

  // Comentario y recomendación creativa y neutral
  const extra = document.getElementById("quiz-extra");
  const comment = document.getElementById("quiz-comment");
  const action = document.getElementById("quiz-action");

  comment.innerHTML = `
    <span style="font-size:1.5em;vertical-align:middle;">✨</span>
    ¡Gracias por jugar! Ya puedes explorar la plataforma y descubrir todos los cursos y recursos disponibles para vos.
  `;
  action.innerHTML = "Ir al inicio";
  action.href = "index.html";

  extra.style.display = "block";
  extra.scrollIntoView({ behavior: "smooth" });
});
