const cardList = [
  {
    title: "Monkey2",
    image: "321.jpg",
    link: " I AM Monkey2",
    desciption: "Demo desciption about Monkey2",
  },
  {
    title: "Monkey3",
    image: "321.jpg",
    link: " I AM Monkey3",
    desciption: "Demo desciption about Monkey3",
  },
];

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.link = $("#link").val();
  formData.description = $("#desrciption").val();

  console.log("Form Data Submitted: ", formData);
  // tell the server to save this to DB
  addMonkey(formData);
};

const addMonkey = (Monkey) => {
  $.ajax({
    url: "api/Monkeys",
    data: Monkey,
    type: "Post",
    success: (result) => {
      alert(result.message);
      location.reload();
    },
  });
};

const getMonkeys = () => {
  $.get("/api/Monkeys", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  getMonkeys();

  $("#formSubmit").click(() => {
    submitForm();
  });
});
