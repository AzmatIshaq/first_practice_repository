$(`#main-heading`).on(`click`, function(event) {
  $(`#paragraphs`).remove();
});


$(`#main-heading`).on(`click`, function(event) {
  // This removes anything that is clicked within the selected class or id
  $(this).remove();
});

$(`section`).on(`click`, function(event) {
  $(this).append(`<p>Yes </p>`);
});


$(`section`).one(`click`, function(event) {
  $(this).append(`<p>test </p>`);
});


$(`aside`).click(function(event) {
  $(this).remove();
});

$(`#top_divider`).click(function(event) {
  $(this).css(`color`, `red`);
});

// Button Jquery

$(`#button_one`).on(`click`, function(event) {
  $(this).remove();
});

//  User input

$(`#button_one`).on(`click`, function(event) {
  let user_input = $(`#input_text`).val();
  alert(user_input);
});

// Ranger Slider

$(`#range_slider`).on(`change`, function(event) {
  let input = $(this).val();
  alert(input);
  $(`#top_divider`).append(`<p> Test ${input} </p>`);

})

//Prisoner

// Drag and affect prisoner
//
// $(`#prisoner`).draggable({
//   // To limit to an axis:
//   // axis: `x`,
//   containment: `#prison`,
//   start: function() {
//     $(this).css(`text-decoration`, `underline`);
//     $(this).animate({
//       "color": `#ff5722`
//     }, 750);
//   },
//   stop: function() {
//     $(this).css(`text-decoration`, `none`);
//     $(this).animate({
//       "color": `#2196f3`
//     }, 750);
//   }
// });


$(`#dialogue_1`).dialog();

// Effects

$(`#prisoner`).effect({
    effect: `shake`,
    duration: 2000,
    times: 15,
    distance: 7,
    complete: makePrisonerDragable
})


$(`#escape-tunnel`).droppable({
  drop:function (event, ui) {
    // Makes it so anything dropped onto the escape tunnel
    // is dropped
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
})



function makePrisonerDragable(){
  $(`#prisoner`).draggable({
    // To limit to an axis:
    // axis: `x`,
    containment: `#prison`,
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 750);
    },
    stop: function(event, ui) {
      $(this).removeClass(`prisoner-dragging`, 750);
    }
  });
}


// // Limit the amount of time the draggability is active starting from when
// // the page loads
// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`);
//
// }, 5000);





//  Prisoner 2

// Drag and affect prisoner 2
