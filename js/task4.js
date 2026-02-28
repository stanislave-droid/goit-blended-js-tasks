// Version 1

function TernarCount() {
  const num = Number.parseInt(
    prompt("Pls, write here minutes to convert into the time:"),
  );

  const hours = (num / 60).toFixed(0);
  const minutes = num % 60;

  console.log(
    `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes}`,
  );

  return `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes}`;
}

// Version 2
function PadStartCount() {
  const num = Number.parseInt(
    prompt("Pls, write here minutes to convert into the time:"),
  );

  const hours = (num / 60).toFixed(0);
  const minutes = num % 60;

  console.log(
    `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")}`,
  );
  return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")}`;
}

alert(TernarCount());
alert(PadStartCount());
