const places = [
  
 {name : 'manali'},
 {name : 'shimla'},
 {name : 'Mount Abu'},
 {name : 'Gangtok'},
 {name : 'Nanital'}
 
];

const list = document.getElementById('list');

function setList(group)
{
   clearList();
   for(const place of group)
   {
     const item = document.createElement('li');
     item.classList.add('list-group-item');
     const text = document.createTextNode(place.name);
     item.appendChild(text);
     list.appendChild(item);
   }
   if(group.length ===0)
   {
       setNoResults();
   }
}

function clearList()
{
   while(list.firstChild)
   {
       list.removeChild(list.firstChild);
   }
}

function setNoResults()
{
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No Results Found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value  , searchTerm)
{
    if(value=== searchTerm)
    {return 2;}
    else if(value.startsWith(searchTerm))
    {
        return 1;
    }
    else if(value.includes(searchTerm))
    {
        return 0;
    }
    else
    {
        return -1;
    }
}

var searchInput = document.getElementById('searchfunc');

searchInput.addEventListener('input',(event) =>
{ 
    let value = event.target.value;
    value.trim().toLowerCase();

    if(value && value.trim().length > 0)
    {
        setList(places.filter(place => 
            {
                return place.name.includes(value);
            }).sort((placeA , placeB) => 
            {
                return getRelevancy(placeB.name,value) - getRelevancy(placeA.name,value);
            }));
    }
    else
    {
        clearList();
    }    
})

var jsdf = document.getElementById('list');
jsdf.addEventListener('click' , function()
{
    c
})
