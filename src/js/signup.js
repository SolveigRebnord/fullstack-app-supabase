import '../styles.css'
import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SERVICE_ROLE_KEY = import.meta.env.VITE_SERVICE_ROLE_KEY;


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



signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = username.value;
    let userEmail = email.value;
    let userPassword = password.value;
    signupUser(userName, userEmail, userPassword)

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






  
 
  




