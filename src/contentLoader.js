const content = document.querySelector("#content")

const welcome = document.createElement("div");
welcome.classList.add("welcome");
welcome.innerHTML = `
      <h1>Welcome to Seoul Taste</h1>
      <p>Experience the Authentic Flavors of Korea</p>
`;
content.appendChild(welcome)

const story = document.createElement("div");
story.classList.add("welcome");
story.innerHTML = `
      <h2>Our Story</h2>
      <p>
        At Seoul Taste, we bring the vibrant and diverse flavors of Korea to your table. Enjoy a culinary journey that blends the warmth of home-cooked meals with modern dining sophistication.
      </p>
`;
content.appendChild(story)





