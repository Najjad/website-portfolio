<script>
    export let title;
    export let description;
    export let image;
    export let link;
    export let genre;
</script>

<div class="project-card">
    <img src={image} alt={title} class="project-image" />
    <div class="project-content">
        <h2>{genre}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" class="project-link">View Project</a>
    </div>
</div>

<div class="genre">

</div>

<style>
    .project-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
    }
    .project-card:hover {
        transform: scale(1.05);
    }
    .project-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .project-content {
        padding: 16px;
    }
    .project-link {
        display: inline-block;
        margin-top: 8px;
        color: #6200ea;
        text-decoration: none;
    }
    .project-link:hover {
        text-decoration: underline;
    }
</style>
