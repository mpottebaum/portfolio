export const projects = [
    {
        title: 'Battle For Chicago',
        description: `Battle For Chicago is a two-player board game based on Risk that uses a map of Chicago's neighborhoods as its game board. I built this app to provide another way for socially distanced families and friends to spend time together remotely.`,
        tech: [
            'I used ActionCable and Redis in Rails and ActionCable Provider for React to establish WebSocket connections between each client and the API. I wrote about deploying an app with ActionCable to Heroku here.',
            'I built the front end using React with Redux, Redux Thunk, and React Router. The map is an SVG image. I wrote about creating the map here. I used React Bootstrap to style the UI.',
            'I built the API using Rails with PostgreSQL and ActiveRecord.'
        ],
        demo: 'https://www.youtube.com/embed/2QhTyIyUOZg',
        github: 'https://github.com/mpottebaum/battle-chi',
        app: 'https://fathomless-cove-56346.herokuapp.com/',
        blogs: [
            {
                title: 'Deploying a Rails/React App with ActionCable to Heroku',
                url: 'https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a'
            },
            {
                title: 'How To Make Clickable/Dynamic Graphics In React Using SVG',
                url: 'https://medium.com/weekly-webtips/how-to-make-clickable-dynamic-graphics-in-react-using-svg-22071f96623d'
            },
        ]
    },
    {
        title: 'Flatnote',
        description: `Flatnote is a note-taking app that allows users to easily filter notes by multiple tags.`,
        tech: [
            'I implemented user authentication and authorization by integrating JSON Web Tokens and BCrypt with localStorage.',
            'I built the front end using React with Redux, React Router, and React Bootstrap.',
            'I built the API using Rails with PostgreSQL and ActiveRecord.'
        ],
        demo: 'https://www.youtube.com/embed/reKIlvSAIFo',
        github: 'https://github.com/mpottebaum/flatnote',
    },
    {
        title: 'Trivia App',
        description: `Trivia App provides a platform for trivia connoisseurs to create and share trivia games that any registered user can play.`,
        tech: [
            'I built this app entirely in Rails using the MVC design pattern and ActiveRecord with SQLite.',
            'I implemented BCrypt to encrypt user passwords.',
            'I organized the UI with custom CSS grids and Semantic UI to increase the amount of content a user sees in the browser window.'

        ],
        demo: 'https://www.youtube.com/embed/WdueasHRmAs',
        github: 'https://github.com/mpottebaum/trivia_app',
    },
]