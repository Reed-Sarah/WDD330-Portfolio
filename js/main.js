const links = [
    {
      label: "Week 1 - Notes",
      url: "Week01/week1.html"
    },
    {
        label: "Week 2 - Notes",
        url: "Week02/week2.html"
      },
      {
        label: "Week 3 - Notes",
        url: "Week03/week3.html"
      },
      {
        label: "Week 4 - Notes",
        url: "Week04/week4.html"
      },
      {
        label: "Week 5 - Notes",
        url: "Week05/week5.html"
      },
      {
        label: "Week 7 - Notes",
        url: "Week07/index.html"
      },
      {
        label: "Week 8 - Notes",
        url: "Week08/index.html"
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
