<script>
    //gamedev, business, personal
    import ProjectCard from '../../components/Projects.svelte';
    let genres = {'BS':'Business', 'PER':'Personal', 'GD':'GameDev'}
    let projects = [
        {
            title: 'WebForger Studio',
            description: 'Started a web development business',
            image: '/images/project-one.jpg',
            link: 'https://webforger.net',
            genre: genres['BS']
        },
        {
            title: 'Efficient Crypto Miner',
            description: 'Developed a method of mining crypto efficiently',
            image: '/images/project-two.jpg',
            link: 'https://github.com/project-two',
            genre: genres['PER']
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
                genre={project.genre}
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
