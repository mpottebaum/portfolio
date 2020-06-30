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
        app: 'https://fathomless-cove-56346.herokuapp.com/'
    }
]