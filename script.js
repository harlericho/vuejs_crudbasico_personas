var app = new Vue({
    el: '#vuejs',
    data: {
        listados: [],
        datos: [],
    },

    mounted: function () {
        this.listado();
    },
    methods: {
        listado: function () {
            axios.get('sentences.php?opcion=listar') //TODO: pasa como ruta la opcion a llamar
                .then(function (response) {
                    //console.log(response);
                    app.listados = response.data;

                })
        },
        btnGuardar: function () {
            if (app.validaciones() === true) {
                const id = document.getElementById('id');
                if (id.value === '') {
                    app.guardar();
                } else {
                    app.actualizar();
                }
            }
        },
        guardar: function () {
            const form = new FormData();
            form.append('nombres', document.getElementById('nombres').value);
            form.append('direccion', document.getElementById('direccion').value);
            form.append('edad', document.getElementById('edad').value);
            axios.post('sentences.php?opcion=guardar', form) //TODO: pasa como ruta la opcion a llamar
                .then(function (response) {
                    //console.log(response);
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.success('Sistema: Registro guardado');
                    app.listado();
                    app.cerrarModal();
                })
        },
        actualizar: function () {
            const form = new FormData();
            form.append('id', document.getElementById('id').value);
            form.append('nombres', document.getElementById('nombres').value);
            form.append('direccion', document.getElementById('direccion').value);
            form.append('edad', document.getElementById('edad').value);
            axios.post('sentences.php?opcion=editar', form) //TODO: pasa como ruta la opcion a llamar
                .then(function (response) {
                    //console.log(response);
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.success('Sistema: Registro editado');
                    app.listado();
                    app.cerrarModal();
                })
        },
        eliminarDatos: function (listado) {
            //? obtenemos el id del registro
            app.datos = listado;
            const key = app.datos.id;
            //? agregamos a un FormData el id unico del registro
            const form = new FormData();
            form.append('id', key);//TODO: enviamos el id
            Swal.fire({
                title: 'Seguro?',
                text: "Desea eliminar el registro",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post('sentences.php?opcion=eliminar', form) //TODO: pasa como ruta la opcion a llamar
                        .then(function (response) {
                            console.log(response);
                            alertify.set('notifier', 'position', 'top-right');
                            alertify.success('Sistema: Registro eliminado');
                            app.listado();
                            Swal.fire(
                                'Eliminado!',
                                'Su registro cambio de estado.',
                                'success'
                            )
                        })

                }
            })
        },
        validaciones: function () {
            const nombres = document.getElementById('nombres');
            const direccion = document.getElementById('direccion');
            const edad = document.getElementById('edad');
            if (nombres.value === '') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('Sistema: Llene este campo');
                document.getElementById('nombres').focus();
            } else if (direccion.value === '') {
                alertify.warning('Sistema: Llene este campo');
                alertify.set('notifier', 'position', 'top-right');
                document.getElementById('direccion').focus();
            } else if (edad.value === '') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.warning('Sistema: Llene este campo');
                document.getElementById('edad').focus();
            } else {
                return true;
            }
        },
        elegirDatos: function (listado) {
            app.datos = listado;
        },
        cerrarModal: function () {
            document.getElementById('closeNuevo').click();
        },
        btnLimpiar: function () {
            app.limpiarInputs();
        },
        limpiarInputs: function () {
            document.getElementById('id').value = '';
            document.getElementById('nombres').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('edad').value = '';
            app.datos = '';
        }
    }

})