import Nav from "./Nav";

import "./Home.css";
export default function Home() {
  /*const cursor = document.querySelector(".cursor");
  var timeout;

  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
      cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
  });

  document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
  });*/
  return (
    <div className="HeroSection">
      <Nav />
      <div className="cursor"></div>;
      <div className="homebody">
        <h5>
          <p>hello</p>
        </h5>
      </div>
    </div>
  );
}
