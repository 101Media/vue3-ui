<template>
    <!-- Pagination (prev) -->
    <ul class="list-pagination-prev pagination pagination-tabs card-pagination" :style="{ visibility: links[0].url ? 'visible' : 'hidden' }">
        <li class="page-item">
            <Link class="page-link ps-0 pe-4 border-end" :href="links[0].url"><i class="fe fe-arrow-left me-1"></i> Vorige</Link>
        </li>
    </ul>

    <!-- Pagination -->
    <ul class="list-pagination pagination pagination-tabs card-pagination">
        <!-- <li class="active"><a class="page" href="#" data-i="1" data-page="10">1</a></li>
        <li><a class="page" href="#" data-i="2" data-page="10">2</a></li>
        <li><a class="page" href="#" data-i="3" data-page="10">3</a></li>
 -->

        <template v-for="(link, key) in shownLinks" v-bind:key="key">
            <li v-if="link.url === null" class="disabled">
                <span class="page-link" v-html="link.label"/>
            </li>
            <li :class="{ active: link.active }" v-else>
                <Link :key="key" class="page" :href="link.url" v-html="link.label"/>
            </li>
        </template>
    </ul>

    <!-- Pagination (next) -->
    <ul class="list-pagination-next pagination pagination-tabs card-pagination" :style="{ visibility: links[links.length - 1].url ? 'visible' : 'hidden' }">
        <li class="page-item">
            <Link class="page-link ps-4 pe-0 border-start" :href="links[links.length - 1].url">Volgende <i class="fe fe-arrow-right ms-1"></i></Link>
        </li>
    </ul>

    <!-- <nav>
        <ul class="pagination">
            <template v-for="(link, key) in links" v-bind:key="key">
                <li v-if="link.url === null" class="page-item disabled">
                    <span class="page-link" v-html="link.label" />
                </li>
                <li class="page-item" :class="{ active: link.active }" v-else>
                    <Link :key="key" class="page-link" :href="link.url" v-html="link.label" />
                </li>
            </template>
        </ul>
    </nav> -->
</template>

<style scoped>
/* .list-pagination li {
    display: none;
}

.list-pagination li:first-child,
.list-pagination li:nth-child(2),
.list-pagination li:nth-child(3),
.list-pagination li:nth-last-child(3),
.list-pagination li:nth-last-child(2),
.list-pagination li:last-child,
.list-pagination li.active,
.list-pagination li.disabled {
    display: list-item;
} */
</style>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    props: {
        links: Array,
    },
    computed: {
        shownLinks: function () {
            return this.links.slice(1, -1);
        },
    },
};
</script>
