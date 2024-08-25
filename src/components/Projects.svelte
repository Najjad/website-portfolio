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
        transition: transform 0.2s, box-shadow 0.2s;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        text-align: center;
        font-weight: 500;
    }

    .project-card:hover {
        transform: scale(1.05);
    }

    .project-image {
        width: 150px; /* Adjust size as needed */
        height: 150px; /* Adjust size as needed */
        object-fit: cover;
        border-radius: 50%; /* Make the image circular */
        border: 3px solid #ddd; /* Optional: Add a border to the circle */
        margin-bottom: 16px; /* Space between image and content */
        background-color: #ffffff;
    }

    .project-content {
        text-align: center; /* Center the text below the image */
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

