let Oblast = [
    {city:'Луганська_область', coordinate:[ 48.799,39.089]},
];







var ProxyUrl ='https://cors-anywhere.herokuapp.com/';
var TargetUrl = 'https://alarmmap.online/assets/alerts.json';
    MapTile = 'https://github.com/wmgeolab/geoBoundaries/raw/6b002b1eee2fd9599f1a3af8fe076d694e6decee/releaseData/gbOpen/UKR/ADM1/geoBoundaries-UKR-ADM1_simplified.geojson'
/*fetch(ProxyUrl + TargetUrl)
    .then(Blob => Blob.json())
    .then(data=>{
        
        console.table(data);
        
        for(var i;i< 155;i++){
            arr == data.push;
        }
       //    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        return data;
    //    console.log(JSON.stringify(data))
    })   
    .catch(e => {
        console.log(e);
     
        return e;
      }); 
*/
var key = 255;
let clone = {};
var arr = new Array(50);
function getAlarm(ProxyUrl,TargetUrl,arr){
    fetch(ProxyUrl + TargetUrl)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        arr = data;

        for (let key in arr) {
            clone[key] = arr[key];
          }
          console.log(clone);

         
      

      });
    /*.then(Blob => Blob.json())
    .then(data=>{
        console.log(data);
        
        
       //    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        //return data;
    
    })   
    */
}

getAlarm(ProxyUrl,TargetUrl)


setInterval(console.log(clone), 100)
console.log(clone)

















      fetch(ProxyUrl + MapTile)
      .then(Blob => Blob.json())
      .then(data =>{
          L.geoJson(data).addTo(map)
      });
