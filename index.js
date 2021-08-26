const minMaxAnimation = () => {
  const minValue = 0;
  const maxValue = 325;
  let position = 0;
  let switchValue = true;

  function recursionAnimation() {
    if (position <= maxValue && switchValue) {
      if (position === maxValue) switchValue = false;
      position = position + 1;
    }

    if (switchValue === false) {
      if (position === minValue) switchValue = true;
      position = position - 1;
    }
    document.querySelector(".block-1").style.left = position + "px";
    timeoutAnimation();
  }

  function timeoutAnimation() {
    setTimeout(recursionAnimation, 5);
  }

  timeoutAnimation();
};
minMaxAnimation();

const circlAnimation = () => {
  const minValue = -25;
  const maxValue = 350;
  let position = 0;

  function recursionAnimation() {
    if (position > maxValue) position = minValue;
    position = position + 1;
    document.querySelector(".block-3").style.left = position + "px";
    timeoutAnimation();
  }

  function timeoutAnimation() {
    setTimeout(recursionAnimation, 10);
  }

  timeoutAnimation();
};
circlAnimation();
