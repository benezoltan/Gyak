let grid = {

    termekek : [],

    getData : function (){
        fetch("https://dummyjson.com/products")
          .then( response => response.json() )
          .then( adat => { 
              grid.termekek = adat.products;
              console.log(grid.termekek);
              this.show();
              return;
          })
          .catch( error => {return "Hiba! "+error} );
    },

    show : function(){
        console.log("show");
     let s="";   
     this.termekek.forEach( elem => {
       s+=`<tr>
       <td>${elem.id}</td>
       <td>${elem.title}</td>
         <td>${elem.price}</td>
         </tr>`;
     } )
     document.getElementById("root").innerHTML = s
    },
    
    sort : function(x){
        console.log(x);
        switch(x){
            case "0": this.termekek.sort( (a,b) => a.id - b.id); break;
            case "1": this.termekek.sort( (a,b) => a.price - b.price); break;
            case "2": this.termekek.sort( (a,b) => {return b.price - a.price} ); 
                                                // {} esetén return IS KELL!!!
        }
        this.show();
    },
}

grid.getData();
document.getElementById("sorrend").addEventListener("change", function() {grid.sort(this.value)} );
// vagy
//document.getElementById("sorrend").addEventListener("change", (e) => grid.sort(e.target.value) ); 

//<select id="sorrend" onchange="grid.sort(this.value)">
