import '../styles.css'
import { createClient } from '@supabase/supabase-js';

console.log(import.meta.env.VITE_SUPABASE_URL);

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SERVICE_ROLE_KEY = import.meta.env.VITE_SERVICE_ROLE_KEY;

const newBtn = document.getElementById("new-item-btn");
const newForm = document.getElementById("new-item-form");
const title = document.getElementById("title");
const postBody = document.getElementById("desc");
const tags = document.getElementById("tags")
const logOutBtn = document.getElementById("sign-out-btn")




//const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) 
 

const supabaseA = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
  
  const adminAuthClient = supabaseA.auth.admin

  const { data: { user } } = await supabase.auth.getUser()
  console.log(user.id);

/*
    const { data, error } = await adminAuthClient.createUser({
        email: `${email}`,
        password: `${password}`,
        email_confirm: true
      })
  */   


/*
const getRec = async () => {
    let { data, error } = await supabase.from('posts').select('*')
    if (error) console.log('error', error)
    else console.log(data)
  }

getRec();




const { data, error } = await supabase
  .from('users')
  .select('*')


const usersFeed = document.getElementById("users-feed")
for (let {username, email, id} of data) {
  usersFeed.innerHTML += 
  `<div>
    <h3>${username}</h3>
    <p>${email}</p>
    <button class="bg-pink-500 subscribe-btn" id="${id}">Follow</button>
    </div>
    `
}

let followBtns = document.getElementsByClassName("subscribe-btn");
//console.log(followBtns);
for (let btn of followBtns) {
  btn.addEventListener("click", async function (e) {
    let followId = btn.id;
    console.log(followId)
  })
}*/


const { data, err } = await supabase
.from('users')
.select('followers')
.eq('id', user.id)
console.log(data)


 
  newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newForm.classList.toggle("hidden")
  })


  newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let recTitle = title.value;
    let post_body = desc.value;
    let recTags = tags.value;
    let creator = user.id
   newRecipe(recTitle, post_body, recTags, creator)
  })

  async function newRecipe(title, post_body, tags, creator) {
    let { data, error } = await supabase
    .rpc('new_post', {
      creator,
      post_body, 
      tags, 
      title
    })
  
  if (error) console.error(error)
  else console.log(data)
  }


logOutBtn.addEventListener("click", async function(e) {
  e.preventDefault();
  const { error } = await supabase.auth.signOut()
  console.log("sign out")
  window.location = "login.html"
  })
  









//const { data, error } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel('6467bb65-f82a-44c6-8b58-7d363bc58963')
//const { currentLevel, nextLevel, currentAuthenticationMethods } = data


//const { data: { users }, err } = await supabaseA.auth.admin.listUsers()





  
 
  




