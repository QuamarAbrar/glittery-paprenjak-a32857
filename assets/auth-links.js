const loginLabels = new Set(["log in", "sign in"]);
const signupLabels = new Set([
  "join for free",
  "join academy",
  "start learning",
  "get started",
  "create account",
]);

document.addEventListener(
  "click",
  (event) => {
    const control = event.target.closest("button, a");
    if (!control) return;

    const label = control.textContent.replace(/\s+/g, " ").trim().toLowerCase();
    if (loginLabels.has(label)) {
      event.preventDefault();
      event.stopPropagation();
      window.location.assign("/login.html");
    } else if (signupLabels.has(label)) {
      event.preventDefault();
      event.stopPropagation();
      window.location.assign("/signup.html");
    }
  },
  true,
);
