// wait till document is ready
$(document).ready(function () {
  // click event to change burger to devoured
  $(document).on("click", ".devoured", function (event) {
    console.log($(this));
    let id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        devoured: true,
      },
    }).then(() => {
      console.log("changed to devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // click event for new burger submit button
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log($(this).data());
    let newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: false,
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // click event for the delete button
  $(".delete-burger").on("click", function (event) {
    console.log($(this).data());
    let id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
