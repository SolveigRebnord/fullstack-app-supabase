import '../styles.css'
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) 


const logInEmail = document.getElementById("email_login")
const logInpassword = document.getElementById("password_login")
const logInForm = document.getElementById("log-in-form")

const logOutBtn = document.getElementById("sign-out-btn")

const logInGithub = document.getElementById("github-login")

logInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = logInEmail.value;
    let password = logInpassword.value;

    logInUser(email, password)

})

const logInUser = async (email,password) => {

    const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: email,
          password: password
        }
      )
      if (error) {
        console.log(error)
      }
      else {
        window.location = 'index.html'

      }
}


//0b8e056e7f19f392c518 client ID
//3a789a57ac21b6b0a7acccb47f969a5b57a1628f secret
    
logInGithub.addEventListener("click", async function (e) {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:5173/index.html'
    }
    })
})



logOutBtn.addEventListener("click", async function(e) {
e.preventDefault();
const { error } = await supabase.auth.signOut()
console.log("sign out")
})
