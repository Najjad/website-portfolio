<script>
    import ProjectCard from '../../components/Projects.svelte';

    let projects = [
        {
            title: 'Project One',
            description: 'Description of Project One',
            image: '/images/project-one.jpg',
            link: 'https://example.com/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two',
            image: '/images/project-two.jpg',
            link: 'https://example.com/project-two'
        },
        // Add more projects as needed
    ];
</script>

<main class="projects-container">
    <h1 class="projects-title">My Projects</h1>
    <div class="projects-grid">
        {#each projects as project}
            <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
            />
        {/each}
    </div>
</main>

<style>
    .projects-container {
        padding: 16px;
    }
    .projects-title {
        text-align: center;
        margin-bottom: 24px;
    }
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
    }
</style>
