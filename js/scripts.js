function menuToggle() {
    var myNavBar = document.getElementById('myNavtoggle');
    if (myNavBar.className === 'navtoggle') {
      myNavBar.className += ' responsive';
    } else {
      myNavBar.className = 'navtoggle';
    }
  }