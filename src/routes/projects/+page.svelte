<script>
    // gamedev, business, personal
    import ProjectCard from '../../components/Projects.svelte';
    let genres = {'BS': 'Business', 'PER': 'Personal', 'GD': 'GameDev', 'WR': 'Work'};
    let projects = [
        {
            title: 'WebForger Studio',
            description: 'Started a web development business',
            image: '/images/webforger.png',
            link: 'https://webforger.net',
            genre: genres['BS']
        },
        {
            title: 'Efficient Crypto Miner',
            description: 'Developed a method of mining crypto efficiently',
            image: '/images/stratminer.png',
            link: 'https://github.com/Najjad/StratMiner',
            genre: genres['PER']
        },
        {
            title: 'Jaspero Development Projects',
            description: 'Worked on various software development projects at Jaspero',
            image: '/images/JASPERO.png',
            link: 'https://jaspero.co',
            genre: genres['WR']
        },
        {
            title: 'Indie Game Development',
            description: 'Aspiring game developer working on indie game projects',
            image: '/images/godot.png',
            link: 'https://github.com/najjad-game-dev',
            genre: genres['GD']
        },
        {
            title: 'Password Manager',
            description: 'Created a full-stack password manager',
            image: '/images/YETIVAULTLOGO.png',
            link: 'https://yeti-vault.vercel.app',
            genre: genres['PER']
        }
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
        font-size: 2rem;
        font-weight: 700;
        color: white;
        padding: 16px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid with a minimum size */
        gap: 16px;
        justify-content: center; /* Center items within the container */
    }
</style>




