<template>
    <div class='admin'>
        <h1> This is the Admin page</h1>

        <div class="row">
            <div class="col-sm-3">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li>
                            <div @click="user_toggle = true, article_toggle = false, feedback_toggle = false, customer_toggle = false"
                                class="btn btn-outline-dark button-card-info mr-3">User Info</div>
                        </li>
                         <li>
                            <div @click="customer_toggle = true, user_toggle = false, feedback_toggle = false, article_toggle = false"
                                class="btn btn-outline-dark button-card-info mr-3">Customer Info</div>
                        </li>
                        <li>
                            <div @click="article_toggle = true, user_toggle = false, feedback_toggle = false, customer_toggle = false"
                                class="btn btn-outline-dark button-card-info mr-3">Article Info</div>
                        </li>
                        <li>
                            <div @click="feedback_toggle = true, article_toggle = false, user_toggle = false, customer_toggle = false"
                                class="btn btn-outline-dark button-card-info mr-3">Feedback Info</div>
                        </li>
                        </ul>
                </div>
            </div>
        <div class="col-sm-6">
            <div class="card">
                <div v-show="user_toggle">
                    <ShowAllUsers />
                </div>
                <div v-show="customer_toggle">
                    <ShowAllCustomers />
                </div>
                <div v-show="article_toggle">
                    <ShowAllArticles />
                </div>
                <div v-show="feedback_toggle">
                    <ShowAllFeedbacks />
                </div>
            </div>

        </div>
                <div class="col-sm-3">
                    <AllArticles />
                </div>
    </div>
    <div class="row">
        <div class="col-sm-9">
            </div>

<div class="col-sm-3">
        <AllFeedbacks />
    </div>

    </div>

    </div>

</template>

<script>
    import ShowAllUsers from '@/components/Users/ShowAllUsers.vue'
    import ShowAllArticles from '@/components/Articles/ShowAllArticles.vue'
    import ShowAllFeedbacks from '@/components/Feedbacks/ShowAllFeedbacks.vue'
    import ShowAllCustomers from '@/components/Customers/ShowAllCustomers.vue'
    import AllArticles from '@/components/Articles/AllArticles.vue'
    import AllFeedbacks from '@/components/Feedbacks/AllFeedbacks.vue'


    export default {
        name: "Admin",
        data() {
            return {
                user_toggle: true,
                article_toggle: false,
                feedback_toggle: false,
                customer_toggle: false,
            }
        },
        components: {
            ShowAllUsers,
            ShowAllArticles,
            ShowAllFeedbacks,
            ShowAllCustomers,
            AllArticles,
            AllFeedbacks

        }


    }
</script>

<style>

</style>