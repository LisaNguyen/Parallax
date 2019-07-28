let input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0
  }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

const handleMouseMove = ({ clientX, clientY }) => {
  input.mouseX.current = clientX;
  input.mouseY.current = clientY;

  let { current: mouseXCurrent, start: mouseXStart, range: mouseXRange} = input.mouseX;
  let { current: mouseYCurrent, start: mouseYStart, range: mouseYRange} = input.mouseY;
  input.mouseX.fraction = (mouseXCurrent - mouseXStart) / mouseXRange;
  input.mouseY.fraction = (mouseYCurrent - mouseYStart) / mouseYRange;

  console.log(input.mouseX.fraction, input.mouseY.fraction);
};


const handleWindowResize = () => {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);
