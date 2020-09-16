const links = [
    {
      label: "Week 1 - Notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 - Notes",
        url: "week1/index.html"
      }
  ]

 let ol = document.getElementsByTagName('ol')[0];
  
  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = links.length;

  for  (i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
     let li= document.createElement('li');
     let a = document.createElement('a');

      // Add the item text
    
    a.href = links[i].url;
    a.innerHTML = links[i].label;

    li.appendChild(a);
    ol.appendChild(li);
      
  }
