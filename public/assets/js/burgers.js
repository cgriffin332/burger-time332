$(() => {
    $(".change-devoured").on("click", (event) => {
      let id = $(this).data("id");
      let newDevoured = $(this).data("newdevoured");
  
      let newDevourState = {
        devoured: newdevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        () => {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });