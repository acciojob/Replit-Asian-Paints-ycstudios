 const gridItems = document.querySelectorAll(".grid-item");
    
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("Reset");
    
    changeButton.addEventListener("click", () => {
      gridItems.forEach(grid => {
        grid.style.backgroundColor = "transparent";
      });
      
      const blockId = blockInput.value;
      const color = colorInput.value;
      
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter a number between 1 and 9.");
      }
    });
    
    resetButton.addEventListener("click", () => {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    });//your JS code here. If required.
 const gridItems = document.querySelectorAll(".grid-item");
    
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("Reset");
    
    changeButton.addEventListener("click", () => {
      gridItems.forEach(grid => {
        grid.style.backgroundColor = "transparent";
      });
      
      const blockId = blockInput.value;
      const color = colorInput.value;
      
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter a number between 1 and 9.");
      }
    });
    
    resetButton.addEventListener("click", () => {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    });