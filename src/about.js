export function loadAbout() {
  const content = document.querySelector("#content");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactInfo.innerHTML = `
    <h2>Contact Information</h2>
    <p><strong>Phone:</strong> +82-2-1234-5678</p>
    <p><strong>Email:</strong> info@seoultaste.com</p>
    <p><strong>Address:</strong> 123 Seoul Street, Gangnam-gu, Seoul, South Korea</p>
    `;

  const map = document.createElement("div");
  map.classList.add("map-container");
  map.innerHTML = `
    <h2>Our Location</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9131075897654!2d127.02561981584452!3d37.49795637981044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca157ce9a6b7f%3A0x1a7b7b29b2ef0e2!2sGangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1604230096204!5m2!1sen!2sus" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    aria-hidden="false" 
    tabindex="0">
    </iframe>
    `;
  
    const section = document.createElement("div");
    section.classList.add("about-section");

    content.appendChild(section);
    section.appendChild(map);
    section.appendChild(contactInfo);


}