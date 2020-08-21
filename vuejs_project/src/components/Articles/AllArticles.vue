<template>
    <div class="ShowAllArticles">

        <div class="card border-light m-3">
            <div class="card-header">
                <h4>Latest News</h4>
            </div>
            <ul class="list-group list-group-flush" v-for="article in getAllArticles.data" :key="article.id">
                <li class="list-group-item">
                    <h6>{{article.title}}</h6>
                    <p v-html="article.description"></p>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {
        mapGetters,
        mapActions,
    } from 'vuex';

    export default {
        name: "ShowAllArticles",

        methods: {
            ...mapActions(['fetchAllArticles', 'fetchArticle']),

        },
        computed: {
            ...mapGetters(['getAllArticles', 'getArticle']),
        },
        created() {
            this.fetchAllArticles();
        }


    }
</script>

<style>

</style>