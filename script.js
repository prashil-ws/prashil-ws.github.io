function openGame(url) {
      const dialog = document.getElementById("gameDialog");
      const frame = document.getElementById("gameFrame");
      frame.src = url;
      dialog.showModal();
    }

    function closeGame() {
      const dialog = document.getElementById("gameDialog");
      const frame = document.getElementById("gameFrame");
      frame.src = "";
      dialog.close();
    }