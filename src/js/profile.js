import '../styles.css'
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY) 

const newBtn = document.getElementById("new-item-btn");
const newForm = document.getElementById("new-item-form");


const mediaInput = document.getElementById("media_input");
const mediaBtn = document.getElementById("media_button");
const prew = document.getElementById("show_img");
const newListing = document.getElementById("preview-section");
const previewBtn = document.getElementById("preview_listing");
const prewImgUL = document.getElementById("img_prew_ul");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const sizes = document.getElementById("sizes");
const needles = document.getElementById("needles");
const yarn = document.getElementById("yarn");

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const add = document.getElementById("add");



const errorTitle = document.getElementById("title-message");
const errorDesc = document.getElementById("desc-message");
const errorTime = document.getElementById("time-message");
  
 
  newBtn.addEventListener("click", (e) => {
    newForm.classList.toggle("hidden")
  })

  /*let { data, error } = await supabase
  .rpc('create_recipe', {
    rec_desc: 'Cool recipe', 
    rec_intro: 'My recipe', 
    rec_needles: ['2', '3'], 
    rec_sizes: ['S', 'M'], 
    rec_tags: ['cosy', 'soft'], 
    title: "My pants", 
    rec_yarn: "200g blue"
  })

if (error) console.error(error)
else console.log(data)*/

const {data} = await supabase
.from('recipes')
.select()
.eq('id', 21)
console.log(data)