async function getData() {
    const response = await fetch("https://api.nationalize.io/?name=" + input_.value); 

    data = await response.json();
    return data;
}

async function getCountry() {
    try {
        let res = await getData();
       let table_ = document.createElement("TABLE");
       table_.style.border = "thick solid #0000FF";
       table_.width = "50%";
       table_.style.columnGap = "50px";
       table_.style.textAlign = "center";
       table_.style.fontWeight = "900";
       table_.style.fontSize = "x-large";
       table_.align = "center";

       div.appendChild(table_);

       row1 = table_.insertRow();
       cell1 = row1.insertCell();
       cell1.style.border = "thick solid black";
       cell1.style.color = "thick black";
       cell1.innerHTML = "Name";

       cell2 = row1.insertCell();
       cell2.style.border = "thick solid black";
       cell2.innerHTML = "Countries";

       cell3 = row1.insertCell();
       cell3.style.border = "thick solid black";
       cell3.innerHTML = "Probabilities";

       row2 = table_.insertRow();
       cell4 = row2.insertCell();
       cell4.style.border = "thick solid green";
       cell4.style.color = "white";
       cell4.innerHTML = res.name;

       cell5 = row2.insertCell();
       cell5.style.border = "thick solid green";
       cell5.style.color = "Yellow";
       cell5.innerHTML = res.country[0].country_id;

       cell6 = row2.insertCell();
       cell6.style.border = "thick solid green";
       cell6.style.color = "SpringGreen";
       cell6.innerHTML = res.country[0].probability;
       
       row3 = table_.insertRow();
       cell7 = row3.insertCell();
       
       

       cell8 = row3.insertCell();
       cell8.style.border = "thick solid green";
       cell8.style.color = "Yellow";
       cell8.innerHTML = res.country[1].country_id;

       cell9 = row3.insertCell();
       cell9.style.border = "thick solid green";
       cell9.style.color = "SpringGreen";
       cell9.innerHTML = res.country[1].probability;

    } catch (err) {
        console.error(err);
    }
}

document.body.style.backgroundColor = "#DB7093";


let div = document.createElement("div");
document.body.appendChild(div);

let input_ = document.createElement("INPUT");
input_.style.margin = "0px 0px 0px 80px";
input_.style.fontSize = "large";
div.appendChild(input_);

let btn = document.createElement("BUTTON");
div.appendChild(btn);

btn.setAttribute("onclick","getCountry()");
btn.style.fontSize = "large";
btn.innerHTML = "click me";















