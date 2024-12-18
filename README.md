# Post Management Application

This project is a simple application that fetches, displays, and manages posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). It includes functionality for viewing, adding, updating, and deleting posts using the API, with a user-friendly interface built using **Ant Design**.

## Instructions on How to Run the Application

### 1. Clone the repository
    git clone https://github.com/NadaAly56/dinamo-assignment.git
    cd dinamo-assignment

### 2. Install dependencies
    npm install
    
### 3. Run the application
    npm run dev

## Assumptions Made or Challenges Faced

- **Error Handling**: Ensuring that all API calls handle errors gracefully and provide feedback to the user.
- **State Management**: Managing form state, particularly when pre-filling data for editing posts.
- **API Limitations**: Since the JSONPlaceholder API is a mock API, it does not reflect real-time updates, so changes are not persistent.
- **UI Responsiveness**: Ensuring that the Ant Design components behave well across different screen sizes and that form handling is clear to users.

## Approximate Time Spent on the Assignment

- **Total Time**: Approximately 2-3 hours.
  - Fetching and displaying data.
  - Form creation for adding and updating posts.
  - Implementing error handling.
  - Implementing delete functionality
  - SSR setup.
