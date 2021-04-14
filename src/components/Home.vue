<template>
    <q-page class="flex flex-center" id="page">
        <q-scroll-observer @scroll="get_images" />
        <div id="main" class="flex flex-center">
            <div class="post" v-for="image in activeImages">
                <div class="top">
                    <q-avatar size="30px" class="avatar" color="orange">J</q-avatar>
                    <h6 class="username">Usuario</h6>
                </div>
                <div class="mid">
                    <img :src="image.img" alt="">
                </div>
                <div class="bottom">
                    <div>
                        <p>23</p><q-icon class="col-md-3" name="favorite_border" /> 
                        <q-icon class="col-md-3" name="favorite" style="display:none;" />
                    </div>
                    <div>
                        <p>4</p><q-icon class="col-md-3" name="comment" />
                    </div>
                    <div>
                        <p><span>Usuario.</span> Pie de foto</p>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                }
            ],
            activeImages: [
                {
                    "img": "https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg"
                },
            ],
            index: 0
        }
    },
    methods: {
        async get_images(info) {
            if (info.direction == 'down') {
                console.log("entra")
                this.activeImages.push(this.images[this.index])
                this.index++;
                info.direction = "up"
            } else {
                console.log("entra aqui")
                this.index--;
                this.activeImages.pop()
            }
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #main {
        background: white;
        width: 45%;
        box-shadow: 0 0 10px rgb(214, 214, 214);
    }

    .post {
        overflow: hidden;
        padding: 5%;
        border-bottom: 2px solid black;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 5% 85% 10%;
        grid-template-areas: 
            "top"
            "mid"
            "bottom";
    }

    .post .top {
        display: grid;
        grid-area: top;
        grid-template-columns: 7% 93%;
        grid-template-rows: 100%;
        grid-template-areas: 
            "avatar username";
    }

    .post .top .avatar {
        grid-area: avatar;
    }

    .post .top .username {
        grid-area: username;
    }

    .post .mid {
        grid-area: mid;
        display: grid;
        overflow: hidden;
        border-radius: 1%;
    }

    .post .bottom {
        margin-top: 1%;
        grid-area: bottom;
        display: grid;
        padding-top: 1%;
        grid-template-columns: 20% 20% 80%;
        grid-template-rows: 50% 50%;
        grid-template-areas: 
            "like comment ."
            "title title title";
    }

    .post .bottom div:first-child {
        grid-area: like;
        display: grid;
        grid-template-columns: 30% 30%;
    }

    .post .bottom div:nth-child(2) {
        grid-area: comment;
        display: grid;
        grid-template-columns: 30% 30%;
    }

    .post .bottom div:last-child {
        grid-area: title;
    }

    .bottom p {
        font-size: 15px;
    }

    .bottom i {
        font-size: 25px;
    }

    span {
        font-weight: bold;
    }


</style>