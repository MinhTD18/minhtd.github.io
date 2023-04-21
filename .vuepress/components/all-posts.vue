<template>
    <div class="post-container">
        <router-link v-for="page in $site.pages.filter(p => p.path.includes('/posts'))" :to="page.path">
            <div class="post-card">
                <img class="article-image" src="avatar.png" />
                <div class="page-detail">
                    <div class="page-title">{{ page.title }}</div>
                    <div class="page-description">{{ page.frontmatter.description }}</div>
                    <div class="page-author">Author: {{ page.frontmatter.author }}</div>
                    <div class="page-published-date">Publised date: {{ page.frontmatter.published_date }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pages: []
        }
    },
    mounted() {
        this.$site.pages.forEach(page => {
            if (page.frontmatter.type === 'article') {
                this.pages.push(page)
            }
        })
    }
}
</script>
<style scoped>
.post-card {
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    align-items: center;
}

.article-image {
    max-height: 200px;
    height: 100%;
    margin-right: 10px;
}

.page-title {
    font-weight: 600;
    font-size: large;
    color: #1a3f85;
    margin-bottom: 5px;
}

.page-description {
    font-size: small;
    color: black;
    margin-bottom: 5px;
}

.page-author,
.page-published-date {
    font-size: 10px;
    color: black;
    margin-bottom: 5px;
}
.description {
    max-width: 55rem;
}
</style>