// Select Element, listening for events, Mulnipulating

//  when we click on list item
const list = document.querySelector("li");

listItem.addEventListener("click", function(event) {
  console.log(event.taget, id);
  fetch("/delete/" + event.tage.id, { methood: "delete" })
    .then(res => {
      res.json();
    })
    .then(() => {
      window.location.href = "/home";
      event.taget.parentNode.removeChild(event.taget);
    });
});

//fire an event
//the event hits our sever
