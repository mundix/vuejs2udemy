const app = new Vue ({
    el:"#vm",
    data:{
    //    Ahora vamos a trabajr con computed properties
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
        // total: 0 //mismo nombre de la variable que va actualizar.
    },
    //para sumr usamos un metodo llamado computed
    computed: { //propiedades seran calculadad , si enaguno de etos valores cambia
        //automaticamente sera calculado 
        total:function() {
            console.log("Change");
            return this.first + this.second + this.third + this.fourth;
        }
    }
  
});