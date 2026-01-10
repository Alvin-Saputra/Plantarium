<script setup>
// 1. Definisikan Props
const props = defineProps({
    active: {
        type: String,
        required: false,
        default: 'home' // Nilai default jika parent tidak mengirim apa-apa
    },
});

// 2. Definisikan Emit (opsional, jika ingin memberi tahu Parent saat diklik)
const emit = defineEmits(['update-active']);

// 3. Data Menu untuk Loop
const menus = [
    { title: 'Home', id: 'home', href: '/' },
    { title: 'Explore', id: 'explore', href: '/explore' },
    { title: 'Identify', id: 'identify', href: '#projects' },
];
</script>

<template>
    <header>
        <div class="flex justify-center">

            <v-btn v-for="item in menus" :key="item.id" :href="item.href"
                :variant="props.active === item.id ? 'tonal' : 'text'"
                :color="props.active === item.id ? 'green-darken-1' : undefined" rounded="xl"
                @click="$emit('update-active', item.id)">
                {{ item.title }}
            </v-btn>

        </div>
    </header>
</template>

<style lang="scss" scoped>
:deep(.v-btn) {
    text-transform: none !important;
    padding: 0 20px;
    margin: 0 10px;
    font-weight: 500;
    transition: all 0.3s ease;
}
</style>