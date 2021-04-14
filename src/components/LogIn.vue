<template>
    <div>
        <q-form>
            <q-input
                filled
                label="Nombre de usuario"
                color="black"
            >
                <template v-slot:prepend>
                    <q-icon color="black" name="person"/>
                </template>
            </q-input>
            
            <q-input
                filled
                label="Contraseña"
                type="password"
                color="black"
            >
                <template v-slot:prepend>
                    <q-icon color="black" name="vpn_key"/>
                </template>
            </q-input>

            <q-btn label="ENTRAR" type="submit" color="black" id="entrar"/>
        </q-form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #entrar {
        width: 100%;
        margin: 0 auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        font-weight: bold;
    }
</style>