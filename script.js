document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const codeInput = document.getElementById('code');
  const roleOutput = document.getElementById('role_output');

const roles = {
  "A001": { name: "Iron Chancellor", secret: "Seeks total control over council decisions", reason: "Came to maintain the country's power" },
  "A002": { name: "Diplomat", secret: "Holds secret ties with opposing factions", reason: "Came to negotiate compromises secretly" },
  "A003": { name: "General", secret: "Harbors a personal vendetta", reason: "Came to ensure military interests are protected" },
  "A004": { name: "Visionary", secret: "Plans to rewrite history in their favor", reason: "Came to influence long-term policies" },
  "A005": { name: "Historian", secret: "Knows hidden truths about past conflicts", reason: "Came to provide context and uncover lies" },
  "A006": { name: "Priest", secret: "Manipulates moral authority for gain", reason: "Came to guide ethical decisions" },
  "A007": { name: "Industrialist", secret: "Profits from prolonged conflicts", reason: "Came to protect economic interests" },
  "A008": { name: "Spy", secret: "Collecting secrets for unknown allies", reason: "Came under the guise of advisor" },
  "A009": { name: "Revolutionary", secret: "Seeks to overthrow council authority", reason: "Came to rally support for change" },
  "A010": { name: "Poet", secret: "Knows sensitive intel hidden in allegories", reason: "Came to influence through culture" },
  "A011": { name: "Idealist", secret: "Refuses compromise at any cost", reason: "Came to push a perfect vision for the country" },
  "A012": { name: "Heir", secret: "Ambition to inherit full power", reason: "Came to learn the council's secrets" },
  "A013": { name: "Scientist", secret: "Has developed unknown weapons", reason: "Came to advise on technological strategy" },
  "A014": { name: "Envoy", secret: "Loyal to a hidden faction inside the country", reason: "Came to influence decisions subtly" },
  "A015": { name: "Journalist", secret: "Reports secretly to foreign powers", reason: "Came to document events for public narrative" },
  "B001": { name: "Guard", secret: "Protects council but hides a personal grudge", reason: "Came to maintain order and report anomalies" },
  "B002": { name: "Secretary", secret: "Keeps confidential minutes, may leak info", reason: "Came to document the council's discussions" },
  "B003": { name: "Assistant Envoy", secret: "Loyal to a hidden faction", reason: "Came to shadow the main Envoy and report back" },
  "B004": { name: "Archivist", secret: "Holds knowledge of the lost treaty", reason: "Came to advise using historical records" },
  "B005": { name: "Servant", secret: "Knows secrets from overhearing delegates", reason: "Came to serve but observes all interactions" }
};


  function revealRole() {
  const code = codeInput.value.trim().toUpperCase();
  if (roles[code]) {
    const role = roles[code];
    roleOutput.innerHTML = `
      <strong>Name:</strong> ${role.name} <br>
      <strong>Secret:</strong> ${role.secret} <br>
      <strong>Reason:</strong> ${role.reason}
    `;
    roleOutput.style.color = "#b30000"; 
    roleOutput.style.fontWeight = "bold";
  } else {
    roleOutput.textContent = "Invalid code. Please try again.";
    roleOutput.style.color = "#ff4d4d"; 
    roleOutput.style.fontWeight = "normal";
  }
}
  revealBtn.addEventListener('click', revealRole);
  codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      revealRole();
    }
  });
});