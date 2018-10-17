const app = new Vue ({
    el:"#app",
    data:{
        message: 'Hola mundo',
        src: 'https://vuejs.org/images/logo.png',
        products:[],
        product: {
            id:'',
            name:'',
            description:'',
            price:'',
            status:''
        }
    },
    methods: {
        showMessage: function() {
            return this.message;
        }
    }
    // Metodos de instanacias  beforeCreated(), beforeMount()
    /**
     * Lista de metodos 
     * beforeCreate() -> 
     * created() -> 
     * //Antes de que salga el DOM
     * beforeMount() -> 
     * //Una montada la plantilal en el DOM
     * mounted() ->
     * //Antes de actuazliar algo 
     * beforeUpdate() -> 
     * // una ves se haya hecho la actualizacion ,
     * //un bucle durante la app 
     * update()
     * //cuando esta terminando la instancia, justo antes
     * beforeDestroy()
     * //Justo cuando se destruye 
     * destroyed() 
    */
});