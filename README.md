# Zarviq

Zarviq is a unique ID generator utility for Node.js, providing easy-to-use methods to create unique identifiers. It combines the current timestamp with a random string to generate a unique ID each time.

## Installation

You can install Zarviq via npm:

```bash
npm install zarviq
```

## Usage

First, require the package in your project and then use the `generateUniqueID` function to create unique IDs.

### Example

```javascript
const zarviq = require('zarviq');

const uniqueID = zarviq.generateUniqueID();
console.log(uniqueID); // Outputs a unique ID
```

### TypeScript

If you are using TypeScript, you can import the function as follows:

```typescript
import { generateUniqueID } from 'zarviq';

const uniqueID: string = generateUniqueID();
console.log(uniqueID); // Outputs a unique ID
```

## API

### `generateUniqueID(): string`

Generates a unique ID by combining the current timestamp with a random string.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
