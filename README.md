# Nextjs + Typescript + Sanity fullstack portfolio project

> Guides:

> Clone the repository

```git clone https://github.com/Balamathias/v1-matie.git```

> Install the Necessary packages

```npm install```

> Run sanity studio, be sure you have a sanity studio project initialized for yourself.

```cd backend```

```shell
    npm run dev
```

You can visit the running page at [Sanity Studio](http://localhost:3333)

> Next run the nextjs dev server

```shell
    cd frontend
    npm run dev
```

Visit the development server at [My Portfolio](http://localhost:3000)

```What next?```

* Write some code.

```tsx
    import Image from next/image

    import { useState, useEffect } from 'react'


    const page = ({children}: {children: ReactNode}) => {
        return <section>
            {children}
        </section>
    }
```
```That's it!```