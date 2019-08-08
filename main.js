function setDate() {
  /** @type{HTMLElement} */
  const secondsNeedleElement = document.querySelector(`.seconds`);
  const minutesNeedleElement = document.querySelector(".minute");
  const hoursNeedleElement = document.querySelector(".hour");

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = hours12(now);

  const secondsNeedleAngle = (seconds / 60) * 360 + 90;
  const minutesNeedleAngle = (minutes / 60) * 360 + 90;
  const hoursNeedleAngle = (hours / 12) * 360 + 90;

  secondsNeedleElement.style.transform = `rotate(${secondsNeedleAngle}deg)`;
  minutesNeedleElement.style.transform = `rotate(${minutesNeedleAngle}deg)`;
  hoursNeedleElement.style.transform = `rotate(${hoursNeedleAngle}deg)`;
}

function hours12(date) {
  return (date.getHours() + 24) % 12 || 12;
}

setInterval(setDate, 1000);
