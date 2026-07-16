# Playwright API Automation Testing

A Playwright API Automation Framework developed using JavaScript for testing REST APIs.

## Project Overview

This project automates API testing using Playwright. It covers positive and negative test scenarios such as authentication, authorization, validation, and CRUD operations.

## Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- REST API
- JSON
- Git & GitHub

---

## Project Structure

```
Playwright_API_Testing
│
├── tests
│   ├── Login.spec.js
│   ├── Register.spec.js
│   ├── CreateEvent.spec.js
│   └── API_Test.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move to the project directory

```bash
cd Playwright_API_Testing
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Execute Tests

Run all tests

```bash
npx playwright test
```

Run a specific test file

```bash
npx playwright test tests/Login.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run tests in debug mode

```bash
npx playwright test --debug
```

Run a specific test by name

```bash
npx playwright test -g "TC_001 Login with valid credentials"
```

---

## Generate HTML Report

Execute

```bash
npx playwright test
```

Open Report

```bash
npx playwright show-report
```

---

## APIs Covered

### Authentication

- User Registration
- User Login
- Get Logged-in User

### Events

- Create Event
- View Events
- Update Event
- Delete Event

---

## Test Scenarios

### Login API

- Login with valid credentials
- Login with invalid password
- Login with invalid email
- Login with empty email
- Login with empty password
- Login with empty request body

### Register API

- Register with valid data
- Register with duplicate email
- Register with invalid email
- Register with empty password
- Register with missing mandatory fields

### Create Event API

#### Positive Test Cases

- Create event with valid data
- Verify status code
- Verify success message
- Verify event details

#### Negative Test Cases

- Unauthorized request (401)
- Missing Authorization token
- Invalid Bearer token
- Missing mandatory fields
- Invalid event date
- Empty title
- Invalid price
- Validation errors

---

## Assertions Used

- Status Code Validation
- Response Body Validation
- Response Header Validation
- JSON Field Validation
- Token Validation
- Authorization Validation

---

## HTTP Status Codes Covered

| Status Code | Description |
|-------------|-------------|
|200|OK|
|201|Created|
|400|Validation Error|
|401|Unauthorized|
|404|Not Found|
|500|Internal Server Error|

---

## Features

- API Automation using Playwright
- Bearer Token Authentication
- Request & Response Validation
- JSON Parsing
- Assertions
- HTML Reports
- Reusable Code Structure
- Easy to Maintain

---

## Sample Login API

### Request

```http
POST /api/auth/login
```

Body

```json
{
  "email": "test297@gmail.com",
  "password": "test25081997"
}
```

Response

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "email": "test297@gmail.com"
  }
}
```

---

## Sample Authorization Header

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Best Practices Followed

- Reusable test code
- Proper assertions
- Clear test case naming
- Independent test execution
- API response validation
- Meaningful comments
- Organized folder structure

---

## Future Enhancements

- Page Object Model (POM)
- Data-Driven Testing
- Environment Variables (.env)
- Fixtures
- CI/CD Integration (GitHub Actions / Jenkins)
- Allure Reporting
- BDD using Cucumber

---

## Author

**Avinash Chaugule**

Manual Testing | API Testing | Playwright Automation

---

## License

This project is created for learning and automation practice purposes.