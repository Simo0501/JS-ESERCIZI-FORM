// Crea 4 input:
// 1. Nome utente: deve contenere almeno 4 caratteri e non più di 10.
// 2. Password: deve essere lunga almeno 8 caratteri e non più di 10.
// 3. Ripeti Password: deve essere identica alla password inserita precedentemente.
// 4. Checkbox Privacy: deve essere selezionata per procedere.
// E un bottone
// Implementa i seguenti controlli:
// Verifica che il nome utente rispetti la lunghezza richiesta.
// Assicurati che la password soddisfi i criteri di lunghezza.
// Conferma che la seconda password corrisponda esattamente alla prima.
// Controlla che la checkbox della privacy sia selezionata.
// Per ogni errore inserisci un messaggio sul rispettivo input
// Se tutti i controlli sono superati, mostra il messaggio: “Registrazione avvenuta con successo”. (modificato) 


const inputuserName = document.getElementById("username");
console.log(inputuserName);
const inputPassword = document.getElementById("password");
const inputRipetiPassword = document.getElementById("ripetiPassword");
const btnCheck5 = document.getElementById("btn-check-5");
console.log(btnCheck5);
const btnInvia = document.getElementById("invia");
console.log(btnInvia);
const alertUser = document.getElementById("alertuser");

btnInvia.addEventListener("click",
 function() {
  const userName = inputuserName.value;
  console.log(userName);

  if (inputuserName.value = (inputuserName.value > 4 && inputuserName.value < 10) );
  
 } 
)

