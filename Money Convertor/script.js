"use strict";

document.getElementById("convert").addEventListener("click", function () {
  const firstcurrency = document.getElementById("firstcurrency").value;
  const entry = Number(document.getElementById("entry").value);
  const secondcurrency = document.getElementById("secondcurrency").value;
  const summary = Number(document.getElementById("summary").value);
  if (firstcurrency === "USD" && secondcurrency === "USD") {
    document.getElementById("summary").value = entry;
  } else if (firstcurrency === "USD" && secondcurrency === "EURO") {
    document.getElementById("summary").value = (entry * 0.8434).toFixed(2);
  } else if (firstcurrency === "USD" && secondcurrency === "GBP") {
    document.getElementById("summary").value = (entry * 0.7205).toFixed(2);
  } else if (firstcurrency === "EURO" && secondcurrency === "EURO") {
    document.getElementById("summary").value = entry;
  } else if (firstcurrency === "EURO" && secondcurrency === "USD") {
    document.getElementById("summary").value = (entry * 1.1857).toFixed(2);
  } else if (firstcurrency === "EURO" && secondcurrency === "GBP") {
    document.getElementById("summary").value = (entry * 0.8557).toFixed(2);
  } else if (firstcurrency === "GBP" && secondcurrency === "GBP") {
    document.getElementById("summary").value = entry;
  } else if (firstcurrency === "GBP" && secondcurrency === "USD") {
    document.getElementById("summary").value = (entry * 1.3878).toFixed(2);
  } else if (firstcurrency === "GBP" && secondcurrency === "EURO") {
    document.getElementById("summary").value = (entry * 1.1686).toFixed(2);
  }
});
