# NotesManagementAppFrontend

Welcome to **NotesManagementAppFrontend**, a frontend application built using **NextJS** to manage notes, archived notes, and categories. This frontend leverages the power of **ShadCN** for reusable components, **TailwindCSS** for enhanced styling, **axios** for efficient request management, and modern form handling techniques with **react-hook-form** and **zod** for validation. Developed by **Wilfredo Aaron Sosa Ramos**, this project is designed to provide a smooth and intuitive user experience for managing your notes.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Form Management and Validation](#form-management-and-validation)
- [Request Management](#request-management)
- [Styling and UI](#styling-and-ui)
- [Installation Guide](#installation-guide)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Introduction

**NotesManagementAppFrontend** provides a clean and structured interface for managing personal or collaborative notes. It supports a wide array of features, including note creation, archival, and category management. Built using **NextJS**, the app emphasizes performance and scalability, allowing it to run efficiently across devices. This frontend communicates with the **NotesManagementAppBackend**, handling API requests and providing users with a seamless experience.

---

## Key Features

- **Notes Management**: Create, update, and delete notes with a simple and intuitive UI.
- **Archived Notes**: Move notes to an archived state to keep them organized without losing data.
- **Category Management**: Organize notes into custom categories for better navigation and usability.
- **Form Validation**: All form inputs are validated using **zod** and **react-hook-form**, ensuring user data is correct and secure.
- **API Request Handling**: Uses **axios** for managing requests to the backend API, including error handling and loading states.
- **Responsive Design**: Styled with **TailwindCSS** for a responsive, mobile-friendly experience across all devices.
- **Notifications**: Displays user feedback with **react-toastify**, offering a clean and non-intrusive way to notify users of actions or errors.

---

## Use Cases

**NotesManagementAppFrontend** is designed to handle several use cases:

- **Personal Note-Taking**: Ideal for individuals who need to manage personal notes and organize them into categories for easy access.
- **Team Collaboration**: Can be used in a team-based environment where multiple users need to manage, categorize, and archive shared notes.
- **Educational Tools**: A useful tool for students and educators to create and manage lecture notes, assignments, and organize them into subjects or categories.
- **Project Management**: Perfect for tracking project-related notes, meeting minutes, and categorizing tasks or ideas within a project.

---

## Tech Stack

This frontend application is built using the following technologies:

- **NextJS**: The framework for building a scalable and performant frontend with server-side rendering (SSR) and static site generation (SSG).
- **ShadCN**: Provides reusable and customizable components, ensuring a consistent and maintainable UI.
- **TailwindCSS**: Utility-first CSS framework that allows for rapid and responsive UI development.
- **axios**: Manages HTTP requests, including error handling, token management, and response processing.
- **react-hook-form**: Simplifies form handling with React, enabling clean and efficient state management for forms.
- **zod**: Schema validation to ensure that data entered into forms meets the correct requirements.
- **@hookform/resolvers**: Bridges the gap between **zod** and **react-hook-form** for efficient validation.
- **react-toastify**: Displays customizable notifications, improving user interaction and providing feedback.

---

## Form Management and Validation

This application uses **react-hook-form** to handle all forms efficiently, keeping track of input states and ensuring smooth form submissions. Validation is powered by **zod**, a powerful schema validation library that helps ensure data integrity.

### Why Use react-hook-form?

- **Simple API**: react-hook-form has an easy-to-use API that minimizes boilerplate code when handling form inputs.
- **Performance**: Reduces re-renders, ensuring fast and efficient form handling.
- **Integration with zod**: By using **@hookform/resolvers**, the app integrates **zod** for schema-based validation with ease.

---

## Request Management

For managing requests, the app uses **axios**, which simplifies the process of sending and receiving data from the backend.

- **Interceptors**: axios interceptors are implemented to handle token management, ensuring secure communication with the API.
- **Error Handling**: When an error occurs, axios catches it, and user feedback is provided through **react-toastify** notifications.
- **Loading States**: When requests are being processed, the UI reflects this with loading states, giving users a clear indication that data is being retrieved or processed.

---

## Styling and UI

**NotesManagementAppFrontend** is styled using **TailwindCSS**, which provides a highly customizable and scalable styling solution. The app emphasizes responsive design, ensuring that it works seamlessly on all device types.

- **Utility-first Styling**: TailwindCSS enables rapid styling with minimal code and avoids writing custom CSS for most elements.
- **Responsive Layouts**: Ensures that the app is optimized for mobile, tablet, and desktop views.
- **ShadCN Components**: These reusable components are built for flexibility, ensuring that the UI remains clean, maintainable, and scalable.

---

## Installation Guide

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/NotesManagementAppFrontend.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd NotesManagementAppFrontend
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm run dev
    ```

---

## How to Use

Once you’ve set up and started the project, you can begin managing notes, archived notes, and categories.

### Notes

- **Create a Note**: Navigate to the **Create Note** form and fill in the required fields (Title, Content, Category). Submit to add the note to the list.
- **View All Notes**: Access the **Notes** page to view all your created notes, categorized accordingly.
- **Edit a Note**: Select a note from the list, make changes, and submit to update the note.
- **Delete a Note**: Delete any unwanted notes directly from the notes list.

### Archived Notes

- **Archive a Note**: Archive notes that you no longer need to see in the active list but want to keep.
- **View Archived Notes**: Access the **Archived Notes** page to manage or restore previously archived notes.

### Categories

- **Create Categories**: Add categories to help organize your notes better.
- **View and Manage Categories**: You can manage and update your categories at any time.

---

## Contributing

We welcome contributions to enhance **NotesManagementAppFrontend**! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

Please make sure your contributions follow the project’s guidelines and adhere to best practices.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments

Special thanks to the **NextJS**, **ShadCN**, **TailwindCSS**, **axios**, **zod**, and **react-hook-form** communities for providing the powerful tools that made this project possible. Your work has greatly contributed to the creation of this application.
