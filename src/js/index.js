import '../styles.css'
import { createClient } from '@supabase/supabase-js';

console.log(import.meta.env.VITE_SUPABASE_URL);

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SERVICE_ROLE_KEY = import.meta.env.VITE_SERVICE_ROLE_KEY;


//const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) 
 

const supabaseA = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
  
  const adminAuthClient = supabaseA.auth.admin

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const signUpForm = document.getElementById("sign-up-form")


const logInEmail = document.getElementById("email_login")
const logInpassword = document.getElementById("password_login")
const logInForm = document.getElementById("log-in-form")

const logOutBtn = document.getElementById("sign-out-btn")


signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = username.value;
    let userEmail = email.value;
    let userPassword = password.value;
    signupUser(userName, userEmail, userPassword)

})

logInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userEmail = email.value;
    let userPassword = password.value;

    logInUser(userEmail,userPassword)

})

const signupUser = async(name, email, password) => {

/*
    const { data, error } = await adminAuthClient.createUser({
        email: `${email}`,
        password: `${password}`,
        email_confirm: true
      })
  */   

const { data, error } = await supabase.auth.signUp (
    
    { email: `${email}`,
      password: `${password}`,
      options: {
        data: {
          username: `${name}`
        }
      }
    }
  )

  if (error) {
    console.log(error)
  }
  else {
    console.log(data)
  }
}


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


const getRec = async () => {
    let { data, error } = await supabase.from('').select('*')
    if (error) console.log('error', error)
    else console.log(data)
  }




const { data, error } = await supabase
.from('working')
.select('*')
console.log(data)







//const { data, error } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel('6467bb65-f82a-44c6-8b58-7d363bc58963')
//const { currentLevel, nextLevel, currentAuthenticationMethods } = data


//const { data: { users }, err } = await supabaseA.auth.admin.listUsers()





  
 
  




