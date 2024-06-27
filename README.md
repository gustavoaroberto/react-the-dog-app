# The Dog App - React/NextJS Version

The Dog App is a Next.js application that fetches data from a free API to display various dog breeds. This app is part of a larger initiative to compare development experiences across different front-end frameworks. The goal is to explore how each framework handles API integration, data fetching, and creating modern, responsive web applications. This project is an integral part of my journey to learn and understand various front-end technologies' strengths and learning curves.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Features

- Fetch and display a list of dog breeds
- Detailed view of each breed with additional information
- Responsive design for mobile and desktop views
- Modern UI/UX with a focus on simplicity and usability

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/gustavoaroberto/react-the-dog-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd the-dog-app
    ```

3. Install dependencies with Yarn:

    ```bash
    yarn install
    ```

4. Create a `.env.local` file in the root of the project and add your API key:

    ```plaintext
    NEXT_PUBLIC_API_URL=https://api.thedogapi.com/v1
    NEXT_PUBLIC_API_KEY=your_api_key_here
    ```

5. Start the development server:

    ```bash
    yarn dev
    ```

6. Open your browser and go to `http://localhost:3000`.

## Usage

- On the home page, you will see a list of dog breeds.
- Use the search functionality to quickly find specific breeds.

## Technologies

- **Next.js**: React framework for server-rendered applications.
- **Yarn**: Dependency management.
- **CSS Modules**: Scoped and modular CSS.

## License

This project is licensed under the MIT License.
