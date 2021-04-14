<template>
    <q-page class="flex flex-center">
        <div id="main">
            <div id="top">
                <div id="avatar">
                </div>
                <div id="usuario">
                    <p>USUARIO</p>
                </div>
                <div>
                    <q-list id="info-top">
                        <router-link to="/inside/social/followers">
                            <q-item clickable v-ripple id="seguidores">
                                <q-item-section>SEGUIDORES</q-item-section>
                            </q-item>
                        </router-link>
                        <router-link to="/inside/social/following">
                            <q-item clickable v-ripple id="seguidos">
                                <q-item-section>SEGUIDOS</q-item-section>
                            </q-item>
                        </router-link>
                        <q-item>
                            <router-link to="/inside/settings">
                                <q-btn flat round color="black" icon="settings" />
                            </router-link>
                        </q-item>
                    </q-list>
                </div>
            </div>
            <div id="publicaciones">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
        }
    },
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
        height: 90vh;
        width: 60%;
        box-shadow: 0 0 10px rgb(214, 214, 214);
        display: grid;
        grid-template-rows: 30% 70%;
        border-radius: 5px;
    }
    
    a {
        text-decoration: none;
        color: black;
    }

    #top {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 100%;
        grid-template-rows: 50% 25% 25%;
        border-bottom: 2px solid rgb(136, 136, 136);
    }

    #avatar {
        height: 100%;
        width: 12%;
        border-radius: 50%;
        margin: 2% auto;
        border: 2px solid rgb(0, 0, 0);
        background-image: url("https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;        
    }

    #info-top {
        height: 100%;
        width: 100%;
        text-align: center;
        font-weight: bold;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 47.5% 47.5% 5%;
        justify-content: space-between;
    }

    #usuario {
        height: 100%;
        margin: 0 auto;
        margin-top: 3%;
        font-weight: bold;
    }

    #publicaciones::-webkit-scrollbar {
        display: none;
    }

    #publicaciones {
        padding: 1px;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
    }

    #publicaciones > div {
        border: 2px solid white;
        height: 250px;
        background-image: url("https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
    }

    #publicaciones > div:hover {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
        ), url("https://www.hola.com/imagenes/viajes/20180530124901/naturaleza-destinos-mundo-a-todo-color/0-571-947/colores-m.jpg");
        cursor: pointer;
    }
</style>
