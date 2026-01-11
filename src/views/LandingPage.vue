<script setup>

</script>

<template>
    <div class="landing-wrapper">
        <div class="flex justify-space-evenly items-center mr-16 ml-16">
            <div>
                <h1 class="text-6xl">Start <br> Plant Care <br> at Heart</h1>
                <p class="text-sm pt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto
                    sed soluta consequuntur
                    placeat reprehenderit, expedita officia repellendus cum laudantium delectus velit debitis ipsum
                    culpa alias, id iure voluptates earum.</p>
                <v-btn class="mt-8 bg-green-300" rounded="xl" color="secondary">Go</v-btn>

            </div>

            <img src="/images/Plant-img.png" alt="plant">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.landing-wrapper {
    font-family: 'Google Sans', sans-serif;
    font-weight: 500;
}


.landing-wrapper h1 {
    font-weight: 400;
}

.landing-wrapper p {
    max-width: 450px;
    /* Atur lebar maksimal sesuai selera (misal 500px - 700px) */
    line-height: 1.6;
    /* Opsional: Menambah jarak antar baris agar lebih enak dibaca */
    color: #666;
    /* Opsional: Memberi warna abu-abu agar tidak terlalu kontras */
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    /* Naik sedikit */
    100% {
        transform: translateY(0px);
    }
}

img {
    /* infinite = berulang terus menerus */
    animation: float 3s ease-in-out infinite;
}

.v-btn {
    /* 1. Tentukan properti transisi di state awal */
    /* transition: properti durasi fungsi-waktu; */
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.v-btn:hover {
    /* 2. Tentukan perubahannya di state :hover */
    transform: scale(1.1);
    /* Membesar 10% */
    background-color: #4ade80;
    /* Ganti warna (opsional) */
}
</style>