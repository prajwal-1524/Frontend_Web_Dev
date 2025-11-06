function compareDate() {
      let today = new Date();
      let givenDate = new Date(2015, 1, 15); // Month is 0-indexed: 0=Jan, 1=Feb
      if (today < givenDate) {
        alert("Today's date is before February 15, 2015.");
      } else if (today > givenDate) {
        alert("Today's date is after February 15, 2015.");
      } else {
        alert("Today's date is February 15, 2015.");
      }
    }