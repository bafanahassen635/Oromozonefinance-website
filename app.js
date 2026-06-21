/*for(let i=1;i<=5;i++){
  console.log("count:",i);
}
let score=90;
if(score>=95){
  console.log("Grade:A");
}else if(score>=80){
  console.log("Grade:B");
}
else{
  console.log("Grade:C or lower");
}
let x=11;
console.log(x>10);
console.log(4<=4);
function sayHello(name){
  console.log("Hello "+name);
}
sayHello("Bafana");
function addNumbers(num1,num2){
  console.log(num1+num2);
}
addNumbers(4,9);
console.dir(document.body);
console.log(document.body.style);
document.body.style.color="blue";
document.body.style.backgroundColor="green";
*//*
const hoverArea = document.getElementById('home');

// Store the initial background image URL
const initialBackground = 'url("pexels-jamie.jpg")'; 
const hoverBackground = 'url("nice.jpg")'; // Image to display on hover

hoverArea.addEventListener('mouseover', function() {
    hoverArea.style.backgroundImage = hoverBackground;
});

hoverArea.addEventListener('mouseout', function() {
    hoverArea.style.backgroundImage = initialBackground;
});*/


let currentIndex = 0;

function moveSlide(direction) {
  const slidesContainer = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Update the index
  currentIndex += direction;

  // Loop back to start or end if boundaries are hit
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Move the "packet" strip
  const offset = -currentIndex * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}
function toggleLang(lang) {
  const moreText = document.querySelector('.more-text-' + lang);
  const btn = event.target;
  
  if (moreText.style.display === 'none') {
    moreText.style.display = 'inline';
    btn.textContent = (lang === 'en') ? 'Read Less' : 'በትንሹ ያሳይ';
  } else {
    moreText.style.display = 'none';
    btn.textContent = (lang === 'en') ? 'Read More' : 'ተጨማሪ ያንብቡ';
  }
}


// 3. THE LOGIC (JavaScript) 
const btn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');

btn.addEventListener('click', () => {
  // Check if the text is currently hidden
  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline'; // Show the text inline with the paragraph
    btn.textContent = 'Read Less';     // Change button text
  } else {
    moreText.style.display = 'none';   // Hide the text again
    btn.textContent = 'Read More';     // Reset button text
  }
});


const btn1 = document.querySelector('.read-more-btn1');
const moreText1 = document.querySelector('.more-text1');

btn1.addEventListener('click', () => {
  // Check if the text is currently hidden
  if (moreText1.style.display === 'none' || moreText1.style.display === '') {
    moreText1.style.display = 'inline'; // Show the text inline with the paragraph
    btn1.textContent = 'Read Less';     // Change button text
  } else {
    moreText1.style.display = 'none';   // Hide the text again
    btn1.textContent = 'Read More';     // Reset button text
  }
});

const btn2 = document.querySelector('.read-more-btn2');
const moreText2 = document.querySelector('.more-text2');

btn2.addEventListener('click', () => {
  // Check if the text is currently hidden
  if (moreText2.style.display === 'none' || moreText2.style.display === '') {
    moreText2.style.display = 'inline'; // Show the text inline with the paragraph
    btn2.textContent = 'Read Less';     // Change button text
  } else {
    moreText2.style.display = 'none';   // Hide the text again
    btn2.textContent = 'Read More';     // Reset button text
  }
});


function calculateSalary(){
  const inputSalary=document.querySelector('.js_input_salary');
  const grossSalary=inputSalary.value;
  let tax=0;
  let netSalary=0;
  let govPension=0;
  let empPension=0;
  let totalDeduct=0;
  if(grossSalary<=2000){
   tax=0;
   govPension=grossSalary*11/100;
   empPension=grossSalary*7/100;
   netSalary=grossSalary-(empPension);
  }
  else if(grossSalary<=4000){
    tax=((grossSalary)*15/100)-300;
    govPension=grossSalary*11/100;
    empPension=grossSalary*7/100;
    totalDeduct=tax+empPension;
    netSalary=grossSalary-(totalDeduct);
  } else if(grossSalary<=7000){
    tax=((grossSalary)*20/100)-500;
    govPension=grossSalary*11/100;
    empPension=grossSalary*7/100;
    totalDeduct=tax+empPension;
    netSalary=grossSalary-(totalDeduct);
  } else if(grossSalary<=10000){
    tax=((grossSalary)*25/100)-850;
    govPension=grossSalary*11/100;
    empPension=grossSalary*7/100;
    totalDeduct=tax+empPension;
    netSalary=grossSalary-(totalDeduct);
  } else if(grossSalary<=14000){
    tax=((grossSalary)*30/100)-1350;
    govPension=grossSalary*11/100;
    empPension=grossSalary*7/100;
    totalDeduct=tax+empPension;
    netSalary=grossSalary-(totalDeduct);
  } else{
    tax=((grossSalary)*35/100)-2050;
    govPension=grossSalary*11/100;
    empPension=grossSalary*7/100;
    totalDeduct=tax+empPension;
    netSalary=grossSalary-(totalDeduct);
    
  }
  console.log(grossSalary);
  console.log(empPension);
  console.log(tax);
  console.log(totalDeduct);
 document.querySelector('.js_net_salary').innerHTML=`The net Salary is:${netSalary}birr`; 
 const documentInput = document.getElementById('documentInput');
 const uploadButton = document.getElementById('uploadButton');
 
 uploadButton.addEventListener('click', async () => {
     const file = documentInput.files[0]; // Get the selected file
 
     if (!file) {
         alert('Please select a document to upload.');
         return;
     }
 
     const formData = new FormData();
     formData.append('documentUpload', file); // 'documentUpload' should match the name expected by your server
 
     try {
         const response = await fetch('/upload-document', { // Replace with your server's upload endpoint
             method: 'POST',
             body: formData
         });
 
         if (response.ok) {
             const result = await response.json(); // Assuming your server returns JSON
             console.log('Upload successful:', result);
             alert('Document uploaded successfully!');
         } else {
             console.error('Upload failed:', response.statusText);
             alert('Document upload failed. Please try again.');
         }
     } catch (error) {
         console.error('Error during upload:', error);
         alert('An error occurred during upload.');
     }
 });




}
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/*
const form = document.getElementById("contact");
    const status = document.getElementById("status");

    form.onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const button = document.getElementById("submit-btn");
        
        button.disabled = true;
        button.innerText = "Sending...";

        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            document.getElementById("form-container").innerHTML = "<h3>✓ Sent! I'll get back to you soon.</h3>";
        } else {
            status.innerHTML = "Oops! There was a problem. Please try again.";
            button.disabled = false;
            button.innerText = "Send Message";
        }
    };
*/

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop page from reloading
    
    // UI updates during submission
    submitBtn.disabled = true;
    status.textContent = "Sending...";
    status.className = "";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success!
            status.textContent = "Thanks for your submission! We'll be in touch soon.";
            status.className = "success";
            form.reset(); // Clear the form inputs
        } else {
            // Formspree returned an error status
            const responseData = await response.json();
            if (responseData.errors) {
                status.textContent = responseData.errors.map(error => error.message).join(", ");
            } else {
                status.textContent = "Oops! There was a problem submitting your form.";
            }
            status.className = "error";
        }
    } catch (error) {
        // Network error occurred
        status.textContent = "Oops! Communication error. Please check your internet connection.";
        status.className = "error";
    } finally {
        // Re-enable the submit button
        submitBtn.disabled = false;
    }
});