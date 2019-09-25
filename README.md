# @kobataku/pdf-table-extractor
Fork from https://github.com/ronnywang/pdf-table-extractor

The purpose of this fork is to provide a valid npm module for Typescript development.

Specification of extract and check algorithm, please check https://github.com/ronnywang/pdf-table-extractor

install

```
npm install --save @kobataku/pdf-table-extractor
```

usage

```typescript
import * as pte from "pdf-table-extractor";

function async extract() {
    const data = await pte.pdf_table_extractor_from_path("your pdf path");
    console.log(data.pageTables); // get 2D array for table
}

extract();
```

License
-------
BSD License
