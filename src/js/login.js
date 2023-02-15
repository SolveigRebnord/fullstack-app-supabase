import '../styles.css'
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) 


const logInEmail = document.getElementById("email_login")
const logInpassword = document.getElementById("password_login")
const logInForm = document.getElementById("log-in-form")

const logOutBtn = document.getElementById("sign-out-btn")



logInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let email = logInEmail.value;
    let password = logInpassword.value;

    logInUser(email, password)

})

const logInUser = async (email,password) => {

    const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: `${email}`,
          password: `${password}`
        }
      )
      if (error) {
        console.log(error)
      }
      else {
        const { id, err } = await supabase.auth.mfa.enroll({
            factorType: 'totp'
          })
          console.log(err)
        console.log(data + "yey")

      }
    }
    
    

logOutBtn.addEventListener("click", async function(e) {
e.preventDefault();
const { error } = await supabase.auth.signOut()
console.log("sign out")
})
