async function getData() {
  let fetchData = await fetch("./data.json");
  let response = await fetchData.json();
  //   console.log(response);
  const result = response
    .map((res) => {
      return `<div class="detail" id="detail" style="background-color: ${res.background};">
            <div class="heading" >
            <img src="${res.icon}" alt="" style="color: ${res.color};"/>
            <h3 style="color: ${res.color};">${res.category}</h3>
            </div>
            <h3>${res.score}<span id="base">/100</span></h3>
            </div>`;
    })
    .join("");
  const container = document.getElementById("container");
  container.innerHTML = result;
}
getData();
