let a = document.getElementsByClassName("box")[5]; // Select the first element with class 'box-1'

a.addEventListener("mouseover", () => {
  // Check if the new element already exists
  let existingElement = document.querySelector(".newbox");

  if (!existingElement) {
    // Create a new element only if it doesn't exist
    const newele = document.createElement('div');
    newele.className = 'newbox';
    newele.textContent = 'Under development';
    
    // Append the new element to the container
    a.appendChild(newele);

    // Give it a moment to be added to the DOM before applying the slide-down effect
    setTimeout(() => {
      newele.classList.add('show'); // Slide down
    }, 10); // A small delay to trigger animation
  } else {
    // If the element exists, toggle its visibility (slide up or down)
    if (existingElement.classList.contains('show')) {
      existingElement.classList.remove('show');
      existingElement.classList.add('hide');
    } else {
      existingElement.classList.remove('hide');
      existingElement.classList.add('show');
    }
  }
});
