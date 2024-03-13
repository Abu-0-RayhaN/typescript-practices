let url = "something";

fetch(url)
  .then((Response) => {
    if (!Response.ok) {
      throw new Error("Network Response was not ok");
    }
    return Response.json();
  })
  .then((data) => console.log("Data from API: ", data))
  .catch((error) => console.log("Error fetching data: ", error));
