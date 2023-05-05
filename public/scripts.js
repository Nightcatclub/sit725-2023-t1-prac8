const cardList = [
  {
    title: "monkey2",
    image: "321.jpg",
    link: " I AM monkey2",
    desciption: "Demo desciption about monkey2",
  },
  {
    title: "monkey3",
    image: "321.jpg",
    link: " I AM monkey3",
    desciption: "Demo desciption about monkey3",
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
  addmonkey(formData);
};

const addmonkey = (monkey) => {
  $.ajax({
    url: "api/monkeys",
    data: monkey,
    type: "Post",
    success: (result) => {
      alert(result.message);
      location.reload();
    },
  });
};

const getmonkeys = () => {
  $.get("/api/monkeys", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

let socket = io();
socket.on("number", (msg) => {
  console.log("Random number is:", msg);
});

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  getmonkeys();

  $("#formSubmit").click(() => {
    submitForm();
  });
});
