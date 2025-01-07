# Bungie API Types Generator

A TypeScript generator that creates strongly-typed interfaces and enums from the Bungie.net API OpenAPI specification.

## Features

- Automatically generates TypeScript types from Bungie API schemas
- Creates interfaces and enums with full type safety
- Generates API endpoint classes with proper request/response typing
- Preserves documentation comments from the API spec
- Handles complex nested types and dictionary types

## Installation

```sh
# Clone the repo with submodules
git clone --recursive https://github.com/[username]/bungie-types-generator.git

# Install dependencies
npm install
```

## Usage

```sh
# Generate all types
npm start

# Only generate interfaces/enums
npm run gen

# Only generate endpoint classes
npm run endpoints

```

Generated output:

- `output/enum.ts` - Generated enum types
- `output/interface.ts` - Generated interface types
- `output/class/[category]/index.ts` - Generated API endpoint classes

## Script

- `npm run gen` - Generate interfaces and enums
- `npm run endpoints` - Generate API endpoint classes
- `npm start` - Run full generation

## License

MIT © Francesco Lombardo